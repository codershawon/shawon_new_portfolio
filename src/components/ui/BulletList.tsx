type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc space-y-2.5 pl-5 marker:text-brand">
      {items.map((item) => (
        <li key={item} className="pl-1 text-ink/90">
          {item}
        </li>
      ))}
    </ul>
  );
}