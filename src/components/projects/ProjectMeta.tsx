type ProjectMetaProps = {
  kind: string;
  role: string;
};

export function ProjectMeta({ kind, role }: ProjectMetaProps) {
  return (
    <p className="text-[0.9rem] text-muted">
      {kind}, <span className="text-ink">{role}</span>
    </p>
  );
}