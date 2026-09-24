import { FieldError } from "./FieldError";
import { fieldClasses } from "./field-styles";

type TextFieldProps = {
  name: string;
  label: string;
  type?: "text" | "email";
  autoComplete?: string;
  defaultValue?: string;
  error?: string;
};

export function TextField({
  name,
  label,
  type = "text",
  autoComplete,
  defaultValue,
  error,
}: TextFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[0.95rem] font-semibold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClasses(Boolean(error))}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}