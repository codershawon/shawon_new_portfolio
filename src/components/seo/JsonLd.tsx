type JsonLdProps = {
  data: Record<string, unknown>;
};

// Google-এর জন্য যন্ত্রের ভাষায় তথ্য।
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}