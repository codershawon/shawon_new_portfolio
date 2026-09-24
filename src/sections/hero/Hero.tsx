import { Container } from "@/components/ui/Container";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { HeroIntro } from "./HeroIntro";
import { HeroActions } from "./HeroActions";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-12 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-10">
          <div className="order-first md:order-last md:col-span-5 md:justify-self-end">
            <ProfilePhoto />
          </div>
          <div className="md:col-span-7">
            <HeroIntro />
            <HeroActions />
          </div>
        </div>
      </Container>
    </section>
  );
}