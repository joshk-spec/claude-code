import { Hero } from "@/components/sections/Hero";
import { Navigation } from "@/components/sections/Navigation";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
      </main>
    </>
  );
}
