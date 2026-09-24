// Form-এর "What's this about?" ঘরের বিকল্পগুলো
export const contactTopics = [
  { value: "job", label: "Job opportunity" },
  { value: "freelance", label: "Freelance project" },
  { value: "other", label: "Something else" },
] as const;

export type ContactTopic = (typeof contactTopics)[number]["value"];

export function getTopicLabel(value: string) {
  return contactTopics.find((topic) => topic.value === value)?.label ?? "Message";
}