"use server";

import { Resend } from "resend";
import { getTopicLabel } from "@/data/contact";
import { contactSchema, type ContactFormState } from "@/lib/validations/contact";

// ৩ সেকেন্ডের কম সময়ে পূরণ হলে ধরে নিই robot
const MIN_FILL_TIME_MS = 3000;

export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // ১. Form থেকে তথ্য বের করা
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // ২. Robot পরীক্ষা: লুকানো ঘর ভরা, অথবা খুব দ্রুত পূরণ
  const honeypot = String(formData.get("company") ?? "");
  const startedAt = Number(formData.get("startedAt") ?? 0);
  const tooFast = Date.now() - startedAt < MIN_FILL_TIME_MS;

  if (honeypot || tooFast) {
    // Robot-কে বুঝতে দিই না যে ধরা পড়েছে
    return { status: "success", message: "Thanks! Your message has been sent.", fieldErrors: {}, values: {} };
  }

  // ৩. নিয়ম মেনে পূরণ হয়েছে কিনা (Zod)
  const result = contactSchema.safeParse(values);

  if (!result.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof ContactFormState["fieldErrors"];
      if (!fieldErrors[field]) fieldErrors[field] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
      values,
    };
  }

  // ৪. Email পাঠানোর ব্যবস্থা আছে কিনা
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Email is not configured: RESEND_API_KEY or CONTACT_TO_EMAIL is missing.");
    return {
      status: "error",
      message: "The contact form isn't working right now. Please email me directly instead.",
      fieldErrors: {},
      values,
    };
  }

  // ৫. Email পাঠানো
  const resend = new Resend(apiKey);
  const { name, email, topic, message } = result.data;
  const topicLabel = getTopicLabel(topic);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: toEmail,
    replyTo: email,
    subject: `[Portfolio] ${topicLabel} from ${name}`,
    text: [`Name: ${name}`, `Email: ${email}`, `Topic: ${topicLabel}`, "", message].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Something went wrong and your message wasn't sent. Please email me directly instead.",
      fieldErrors: {},
      values,
    };
  }

  // ৬. সফল
  return {
    status: "success",
    message: "Thanks! Your message has been sent. I'll reply within 24 hours.",
    fieldErrors: {},
    values: {},
  };
}