import { FieldError } from "./FieldError";
import { fieldClasses } from "./field-styles";

type TextAreaFieldProps = {
  name: string;
  label: string;
  rows?: number;
  defaultValue?: string;
  error?: string;
};

export function TextAreaField({ name, label, rows = 6, defaultValue, error }: TextAreaFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[0.95rem] font-semibold">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldClasses(Boolean(error))} resize-y`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}