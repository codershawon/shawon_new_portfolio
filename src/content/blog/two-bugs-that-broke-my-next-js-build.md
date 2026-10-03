---
title: "Two bugs that silently broke my Next.js build"
description: "An empty SVG file and one line of module-level code cost me five days of broken deployments. Both were invisible until I read the right log."
date: "2026-10-04"
tags: ["nextjs", "debugging", "vercel"]
draft: false
---

I spent five days pushing commits to a project that had not deployed successfully once. Vercel told me every time. I just was not looking.

Both bugs share a shape worth writing down: the failure happened somewhere I was not watching, and the symptom pointed away from the cause.

## A zero-byte file is not an empty file

At some point `src/app/icon.svg` ended up on disk with nothing in it. Not a placeholder, not a comment — zero bytes.

Next.js treats that path as a convention. It reads the file, measures it, and generates the `<link rel="icon">` tag for you. Hand it nothing and it does not shrug:

```bash
Error: Processing image failed
Failed to parse svg source code for image dimensions

Caused by:
- Source code does not contain a <svg> root element
```

This fails the whole build. Not the favicon — the build. And it fails `next dev` too, so every page in local development returned a 500. The file had been empty in git the entire time.

The lesson I took: a convention-based framework will happily let you create a file it treats as sacred and then never check whether you filled it in. `git status` shows nothing wrong. Your editor shows nothing wrong. Only the build knows.

Now, after any task that touches `src/app/`, I run the build before I push.

## Code at the top of a server action runs where you cannot catch it

My contact form looked fine. Zod validated the input, Resend sent the email, and failures returned a readable message instead of a stack trace. Except the file started like this:

```ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactMessage(previousState, formData) {
  // validation, honeypot, all the careful stuff
}
```

Spot it? `new Resend(...)` sits at module scope. It runs the first time the module loads — which is the first time anyone submits the form, *before* a single line of my function executes.

Without the API key, Resend's constructor throws immediately:

```
Missing API key. Pass it to the constructor `new Resend("re_123")`
```

My careful error handling never ran. It could not. The throw happened above it.

The fix is three lines:

```ts
export async function sendContactMessage(previousState, formData) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Email is not configured.");
    return { status: "error", message: "The form isn't working right now." };
  }

  const resend = new Resend(apiKey);
  // ...
}
```

Moving the client inside the function means I can check for the key first and return a real message. Reading `process.env` inside the function costs nothing — it is already in memory — and it means a changed environment variable takes effect without a code change.

> Anything at the top level of a `"use server"` file runs outside your error handling. Treat module scope as code you cannot protect.

## What actually found both bugs

Not reading the code more carefully. Running it in a clean environment.

The first bug surfaced when I ran `npm run build` from scratch instead of trusting a dev server that had been open for hours. The second surfaced when I ran the production server with no `.env.local` at all and watched what happened.

Both are things I could have done on day one. I did them on day five.

## Three habits I kept

- **Read the deployment list, not just the latest status.** Mine showed a red *Error* sitting between two green ones. It had been there for days.
- **Log the reason, not just the outcome.** `console.error("Email is not configured.")` turned a mystery into a one-line answer in the Vercel logs.
- **Test the failure path on purpose.** Comment out the API key and submit the form. If the page breaks instead of showing your message, your error handling is decoration.

None of this is clever. It is just the difference between code that looks careful and code that has been shown to be careful.
