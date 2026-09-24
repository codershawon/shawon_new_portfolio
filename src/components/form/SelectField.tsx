import { FieldError } from "./FieldError";
import { fieldClasses } from "./field-styles";

type Option = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  name: string;
  label: string;
  options: readonly Option[];
  defaultValue?: string;
  error?: string;
};

export function SelectField({ name, label, options, defaultValue = "", error }: SelectFieldProps) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[0.95rem] font-semibold">
        {label}
      </label>
      <select
        id={name}
        name={name}
        required
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={fieldClasses(Boolean(error))}
      >
        <option value="" disabled>
          Choose one
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldError id={errorId} message={error} />
    </div>
  );
}