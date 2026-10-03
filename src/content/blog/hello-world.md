---
title: "Shipping a portfolio with Next.js 16"
description: "What I learned building this site — the App Router bits that surprised me, and the mistakes that cost me a weekend."
date: "2026-10-03"
tags: ["nextjs", "typescript"]
draft: false
---

Building this portfolio taught me more about the App Router than any tutorial did. Here are the parts worth writing down.

## An empty file can break your build

The most expensive bug I hit was a zero-byte `icon.svg`. Next.js reads that file to generate the favicon, and an empty one fails the whole build:

```bash
Error: Processing image failed
Caused by: Source code does not contain a <svg> root element
```

Both `next dev` and `next build` refused to run. Every page returned 500.

## Server actions load lazily

I had this at the top of my contact action:

```ts
const resend = new Resend(process.env.RESEND_API_KEY);
```

Module-level code runs the first time the action is invoked — before a single line of my function. Without the key, the constructor throws there, so my friendly error message never ran.

> Lesson: anything at the top level of a `"use server"` file runs where you can't catch it.