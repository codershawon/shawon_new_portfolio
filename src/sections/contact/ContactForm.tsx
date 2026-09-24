"use client";

import { useActionState, useState } from "react";
import { sendContactMessage } from "@/app/contact/actions";
import { contactTopics } from "@/data/contact";
import { initialContactState } from "@/lib/validations/contact";
import { TextField } from "@/components/form/TextField";
import { SelectField } from "@/components/form/SelectField";
import { TextAreaField } from "@/components/form/TextAreaField";
import { HoneypotField } from "@/components/form/HoneypotField";
import { FormStatus } from "@/components/form/FormStatus";
import { SubmitButton } from "@/components/form/SubmitButton";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialContactState);

  // Form কখন খোলা হয়েছে (robot পরীক্ষার জন্য)
  const [startedAt] = useState(() => Date.now());

  const { fieldErrors, values } = state;

  return (
    <form action={formAction} noValidate className="relative space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField
          name="name"
          label="Name"
          autoComplete="name"
          defaultValue={values.name}
          error={fieldErrors.name}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          defaultValue={values.email}
          error={fieldErrors.email}
        />
      </div>

      <SelectField
        name="topic"
        label="What's this about?"
        options={contactTopics}
        defaultValue={values.topic}
        error={fieldErrors.topic}
      />

      <TextAreaField
        name="message"
        label="Message"
        defaultValue={values.message}
        error={fieldErrors.message}
      />

      <HoneypotField />
      <input type="hidden" name="startedAt" value={startedAt} />

      <FormStatus status={state.status} message={state.message} />
      <SubmitButton isPending={isPending} />
    </form>
  );
}