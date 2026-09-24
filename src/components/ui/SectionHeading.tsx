type SectionHeadingProps = {
  id: string; 
  title: string;
  description?: string;
};

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div>
      <h2 id={id} className="text-3xl sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-prose text-muted">{description}</p>
      )}
    </div>
  );
}