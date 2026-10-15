import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/bits";
import { Shell } from "@/components/shell";
import { watch, weekAhead } from "@/data/intel";

export const Route = createFileRoute("/week")({ component: WeekPage });

function WeekPage() {
  return (
    <Shell>
      <PageIntro kicker="Weekly intelligence" title="The week ahead." lede="What to watch: announcements, windows, markups, and the decisions that would make a note into a story." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-2">
        {weekAhead.map((item) => (
          <article key={item.title} className="panel p-5">
            <p className="text-xs tracking-widest text-cyan">{item.day.toUpperCase()}</p>
            <h2 className="font-display mt-2 text-2xl">{item.title}</h2>
            <p className="mt-2 text-muted">{item.note}</p>
          </article>
        ))}
        {watch.filter((item) => item.horizon === "7d" || item.horizon === "24h").map((item) => (
          <article key={item.id} className="panel p-5">
            <p className="text-xs tracking-widest text-violet">{item.kind.toUpperCase()} · {item.horizon.toUpperCase()}</p>
            <h2 className="font-display mt-2 text-2xl">{item.title}</h2>
            <p className="mt-2 text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
    </Shell>
  );
}
