import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Navigation } from "@/components/sections/Navigation";
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
      </main>
    </>
  );
}
