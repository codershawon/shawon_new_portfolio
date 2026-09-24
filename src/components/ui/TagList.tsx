type TagListProps = {
  tags: string[];
  label?: string;
};

export function TagList({ tags, label = "Technologies" }: TagListProps) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-line px-2.5 py-1 text-[0.85rem] text-muted"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}