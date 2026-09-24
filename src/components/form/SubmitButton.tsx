import { LuLoaderCircle } from "react-icons/lu";
import { buttonClasses } from "@/lib/button-styles";

type SubmitButtonProps = {
  isPending: boolean;
};

export function SubmitButton({ isPending }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isPending}
      className={buttonClasses({ className: "w-full disabled:opacity-70 sm:w-auto" })}
    >
      {isPending && <LuLoaderCircle className="size-4 animate-spin" aria-hidden="true" />}
      {isPending ? "Sending…" : "Send message"}
    </button>
  );
}