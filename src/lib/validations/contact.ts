import { z } from "zod";
import { contactTopics, type ContactTopic } from "@/data/contact";

// Topic-এর তালিকা এক জায়গায় থাকে (data/contact.ts), এখানে শুধু সেখান থেকে নেওয়া
const topicValues = contactTopics.map((topic) => topic.value) as [ContactTopic, ...ContactTopic[]];

// ১. Form-এর তথ্য কেমন হতে হবে, তার নিয়ম
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Please enter your name." })
    .max(80, { error: "Name is too long." }),
  email: z.email({ error: "Please enter a valid email address." }),
  topic: z.enum(topicValues, { error: "Please choose a topic." }),
  message: z
    .string()
    .trim()
    .min(10, { error: "Please write at least 10 characters." })
    .max(3000, { error: "Please keep your message under 3000 characters." }),
});

export type ContactInput = z.infer<typeof contactSchema>;

// ২. Form-এর অবস্থা: server থেকে form-এ কী ফেরত আসবে
export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<keyof ContactInput, string>>;
  values: Partial<Record<keyof ContactInput, string>>;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
  values: {},
};