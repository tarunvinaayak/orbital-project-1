import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import type { Category, Story } from "@/data/intel";
import { ago, categoryMeta } from "@/data/intel";

const toneClass: Record<string, string> = {
  cyan: "text-cyan",
  blue: "text-blue",
  violet: "text-violet",
  up: "text-up",
  down: "text-down",
  fg: "text-fg",
};

export function toneFor(category: Category) {
  return toneClass[categoryMeta[category].tone];
}

export function Kicker({ children }: { children: string }) {
  return <p className="kicker">{children}</p>;
}

export function Importance({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center gap-1" aria-label={`Importance ${n} of 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < n ? "size-1.5 rounded-full bg-cyan" : "size-1.5 rounded-full bg-line"} />
      ))}
    </span>
  );
}

export function ImpactBar({ value }: { value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs text-muted">
        <span className="tracking-widest">GLOBAL IMPACT</span>
        <span className="text-fg">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-navy-2">
        <div className="h-full rounded-full bg-cyan" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function Spark({ series }: { series: number[] }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const data = series.map((value, index) => ({ index, value }));
  if (!ready) return <div className="h-16" />;
  return (
    <div className="h-16">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <Area type="monotone" dataKey="value" stroke="var(--color-cyan)" fill="var(--color-cyan)" fillOpacity={0.16} strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function LabelPill({ label }: { label: "FACT" | "ANALYSIS" | "FORECAST" | "OPINION" }) {
  const cls =
    label === "FACT" ? "text-cyan" : label === "ANALYSIS" ? "text-blue" : label === "FORECAST" ? "text-violet" : "text-muted";
  return <span className={`text-xs font-semibold tracking-widest ${cls}`}>{label}</span>;
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link to="/story/$id" params={{ id: story.id }} className="panel panel-hover flex h-full flex-col p-5">
      <div className="flex items-center justify-between gap-3">
        <span className={`text-xs font-semibold tracking-widest ${toneFor(story.category)}`}>{categoryMeta[story.category].label.toUpperCase()}</span>
        <Importance n={story.importance} />
      </div>
      <h3 className="font-display mt-3 text-xl font-semibold leading-snug">{story.headline}</h3>
      <p className="mt-3 text-sm text-muted">{story.summary}</p>
      <div className="mt-4">
        <p className="text-xs tracking-widest text-faint">WHY IT MATTERS</p>
        <p className="mt-1 text-sm text-fg">{story.why}</p>
      </div>
      <div className="mt-4">
        <ImpactBar value={story.impact} />
      </div>
      <p className="mt-4 text-xs text-faint">
        {story.location} · {ago(story.minutesAgo)} · {story.sources.length} desk inputs
      </p>
    </Link>
  );
}

export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="mx-auto max-w-6xl px-4 pb-6 pt-10">
      <p className="kicker">{kicker}</p>
      <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{lede}</p>
    </header>
  );
}
