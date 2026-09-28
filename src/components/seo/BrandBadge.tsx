import { brandColors } from "@/lib/brand";

type BrandBadgeProps = {
  size: number;
  rounded?: boolean;
};

export function BrandBadge({ size, rounded = true }: BrandBadgeProps) {
  const gap = size * 0.16;
  const arm = size * 0.22;
  const stroke = Math.max(2, size * 0.055);
  const line = `${stroke}px solid ${brandColors.brand}`;
  const bracket = { position: "absolute", width: arm, height: arm } as const;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: rounded ? size * 0.22 : 0,
        background: brandColors.dark,
        color: brandColors.white,
        fontSize: size * 0.55,
        fontWeight: 600,
      }}
    >
      S
      <div style={{ ...bracket, top: gap, right: gap, borderTop: line, borderRight: line }} />
      <div style={{ ...bracket, bottom: gap, left: gap, borderBottom: line, borderLeft: line }} />
    </div>
  );
}