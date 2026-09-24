import { navItems } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { NavLink } from "./NavLink";
import { ResumeButton } from "../ui/ResumeButton";

type MobileNavProps = {
  id: string;
  onNavigate: () => void; // link চাপলে menu বন্ধ করার জন্য
};

export function MobileNav({ id, onNavigate }: MobileNavProps) {
  return (
    <nav
      id={id}
      aria-label="Main"
      className="absolute inset-x-0 top-full border-b border-line bg-bg md:hidden"
    >
      <Container>
        <ul className="flex flex-col py-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} variant="mobile" onClick={onNavigate}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-3 pb-2">
            <ResumeButton text="Download résumé" className="w-full" />
          </li>
        </ul>
      </Container>
    </nav>
  );
}