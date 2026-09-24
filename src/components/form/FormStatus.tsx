import { LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import type { ContactFormState } from "@/lib/validations/contact";
import { cn } from "@/lib/cn";

type FormStatusProps = {
  status: ContactFormState["status"];
  message: string;
};

export function FormStatus({ status, message }: FormStatusProps) {
  return (
    <div aria-live="polite">
      {status !== "idle" && message && (
        <p
          className={cn(
            "flex items-start gap-2.5 rounded-lg px-4 py-3 text-[0.95rem]",
            status === "success"
              ? "bg-brand/15 text-ink"
              : "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300"
          )}
        >
          {status === "success" ? (
            <LuCircleCheck className="mt-0.5 size-5 shrink-0 text-brand-ink" aria-hidden="true" />
          ) : (
            <LuCircleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          )}
          {message}
        </p>
      )}
    </div>
  );
}