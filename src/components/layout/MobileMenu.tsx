"use client";

import { useEffect, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { LuMenu, LuX } from "react-icons/lu";
import { MobileNav } from "./MobileNav";

const MENU_ID = "mobile-menu";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((current) => !current);
  const close = () => setIsOpen(false);

  // Menu খোলা থাকলে Escape চাপলে বন্ধ হবে
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <IconButton
        label={isOpen ? "Close menu" : "Open menu"}
        onClick={toggle}
        expanded={isOpen}
        controls={MENU_ID}
      >
        {isOpen ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
      </IconButton>

      {isOpen && <MobileNav id={MENU_ID} onNavigate={close} />}
    </div>
  );
}