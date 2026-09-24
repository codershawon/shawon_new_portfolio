import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { DesktopNav } from "./DesktopNav";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />
        <DesktopNav />
        <div className="flex items-center gap-1">
        <ThemeToggle />
        <div className="ml-2 hidden sm:block">
            <ResumeButton />
        </div>
        <MobileMenu />
        </div>
      </Container>
    </header>
  );
}