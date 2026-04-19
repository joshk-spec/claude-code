import { Coverage } from "@/components/sections/Coverage";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Navigation } from "@/components/sections/Navigation";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChaverHub } from "@/components/sections/WhyChaverHub";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <WhyChaverHub />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Coverage />
      </main>
    </>
  );
}
