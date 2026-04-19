import { Coverage } from "@/components/sections/Coverage";
import { DualCTA } from "@/components/sections/DualCTA";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
        <DualCTA />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
