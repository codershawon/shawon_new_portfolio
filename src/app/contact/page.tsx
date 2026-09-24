import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { ContactForm } from "@/sections/contact/ContactForm";
import { ContactDetails } from "@/sections/contact/ContactDetails";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Shawon Barua about a full-time role or a freelance project.",
};

export default function ContactPage() {
  return (
    <Container className="pb-24">
      <PageHeader
        title="Contact"
        description="Hiring, or need something built? Send me a message and I'll get back to you."
      />

      <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <aside aria-label="Other ways to reach me" className="space-y-6 lg:col-span-5">
          <AvailabilityBadge text={profile.availability} />
          <ContactDetails />
        </aside>
      </div>
    </Container>
  );
}