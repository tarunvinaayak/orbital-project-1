import { createFileRoute } from "@tanstack/react-router";
import { WireBoard } from "@/components/live-wire";
import { Shell } from "@/components/shell";

export const Route = createFileRoute("/news")({ component: NewsPage });

function NewsPage() {
  return (
    <Shell>
      <WireBoard
        kicker="Global news · live"
        title="Beyond headlines. Into what’s next."
        lede="Live reports from BBC, The Guardian, The New York Times, Al Jazeera, NPR, France 24, and the wider wire. Every card links to the original."
      />
    </Shell>
  );
}
