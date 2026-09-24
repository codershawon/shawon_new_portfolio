type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-16 pb-10 sm:pt-24">
      <h1 className="text-4xl sm:text-5xl">{title}</h1>
      {description && (
        <p className="mt-4 max-w-prose text-muted">{description}</p>
      )}
    </div>
  );
}