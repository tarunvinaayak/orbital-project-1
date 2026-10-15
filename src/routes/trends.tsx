import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, Spark } from "@/components/bits";
import { Shell } from "@/components/shell";
import { trends } from "@/data/intel";

export const Route = createFileRoute("/trends")({ component: TrendsPage });

function TrendsPage() {
  return (
    <Shell>
      <PageIntro kicker="Trend radar" title="See what’s next." lede="Momentum inside this sample desk. The series are constructed so you can read direction — they are not a live market tape." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-2">
        {trends.map((trend) => (
          <article key={trend.id} className="panel p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs tracking-widest text-faint">{trend.group.toUpperCase()}</p>
              <p className={trend.direction === "down" ? "text-down" : "text-cyan"}>{trend.direction === "flat" ? "Flat" : `+${trend.momentum}%`}</p>
            </div>
            <h2 className="font-display mt-2 text-2xl">{trend.name}</h2>
            <Spark series={trend.series} />
            <p className="text-sm">{trend.line}</p>
            <p className="mt-3 text-sm text-muted">Why it matters. {trend.why}</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}
