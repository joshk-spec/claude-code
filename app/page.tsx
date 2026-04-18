import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-8 px-6 py-24 text-center">
      <Badge variant="brass">Coming soon</Badge>
      <h1 className="text-balance text-5xl font-semibold tracking-tight md:text-6xl">
        ChaverHub
      </h1>
      <p className="max-w-xl text-balance text-lg text-ink-muted">
        Home services for the frum community — vetted neighbors you can trust for
        HVAC, plumbing, electrical, appliance repair, and roofing.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary">Find a contractor</Button>
        <Button variant="brass">List your business</Button>
        <Button variant="ghost">Learn more</Button>
      </div>
      <Card className="mt-10 w-full max-w-md text-left">
        <h2 className="font-serif text-xl text-navy">Foundation ready</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Design tokens, typography, and UI primitives are wired up. Landing
          sections and onboarding flows come next.
        </p>
      </Card>
    </main>
  );
}
