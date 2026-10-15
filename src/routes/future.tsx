import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/bits";
import { Shell } from "@/components/shell";
import { watch, type Horizon } from "@/data/intel";

export const Route = createFileRoute("/future")({ component: FuturePage });

const horizons: Horizon[] = ["24h", "7d", "30d", "12m"];

function FuturePage() {
  const [horizon, setHorizon] = useState<Horizon | "all">("all");
  const list = watch.filter((item) => horizon === "all" || item.horizon === horizon);
  return (
    <Shell>
      <PageIntro kicker="Future watch" title="The clock after the headline." lede="Developments that could become the story in the next day, week, month, or year. Each one has a tell." />
      <div className="mx-auto max-w-3xl px-4 pb-16">
        <div className="flex gap-2">
          <HorizonChip on={horizon === "all"} onClick={() => setHorizon("all")}>All</HorizonChip>
          {horizons.map((item) => (
            <HorizonChip key={item} on={horizon === item} onClick={() => setHorizon(item)}>{item}</HorizonChip>
          ))}
        </div>
        <ol className="mt-6 border-l border-line">
          {list.map((item) => (
            <li key={item.id} className="relative py-4 pl-6">
              <span className="absolute top-6 -left-1 size-2 rounded-full bg-cyan" />
              <p className="text-xs tracking-widest text-violet">{item.horizon.toUpperCase()} · {item.kind.toUpperCase()}</p>
              <h2 className="font-display mt-1 text-2xl">{item.title}</h2>
              <p className="mt-1 text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </Shell>
  );
}

function HorizonChip({ on, onClick, children }: { on: boolean; onClick: () => void; children: string }) {
  return (
    <button type="button" onClick={onClick} className={on ? "h-10 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-10 rounded-full border border-line px-4 text-sm text-muted"}>
      {children}
    </button>
  );
}
