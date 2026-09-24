"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";
import { IconButton } from "@/components/ui/IconButton";
import { LuMoon, LuSun } from "react-icons/lu";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  if (!mounted) {
    return <span className="size-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <IconButton
      label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <LuSun className="size-5" /> : <LuMoon className="size-5" />}
    </IconButton>
  );
}