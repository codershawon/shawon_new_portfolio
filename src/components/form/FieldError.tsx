type FieldErrorProps = {
  id: string;
  message?: string;
};

export function FieldError({ id, message }: FieldErrorProps) {
  if (!message) return null;

  return (
    <p id={id} className="mt-1.5 text-[0.9rem] text-red-700 dark:text-red-400">
      {message}
    </p>
  );
}