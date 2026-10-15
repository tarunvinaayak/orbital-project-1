import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { formatAgo, useLiveWire, useNow, WireCard } from "@/components/live-wire";
import { Globe } from "@/components/globe";
import { Shell } from "@/components/shell";
import { categoryMeta, type Category } from "@/data/intel";
import { toneOf } from "@/lib/live-wire";

export const Route = createFileRoute("/live")({ component: LivePage });

const desks: Array<Category | "all"> = ["all", "geopolitics", "business", "markets", "technology", "science", "climate", "culture"];

function LivePage() {
  const { items, status, updatedAt, error, refresh } = useLiveWire();
  const now = useNow();
  const [desk, setDesk] = useState<Category | "all">("all");
  const filtered = items.filter((item) => desk === "all" || item.category === desk);
  const placed = filtered.filter((item) => item.lat != null && item.lon != null);
  const [active, setActive] = useState<string | null>(null);
  const current = placed.find((item) => item.id === active) ?? placed[0] ?? filtered[0];

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <header className="pb-6 pt-10">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-live">
            <span className="live-ping size-2 rounded-full bg-live" />
            LIVE WORLD
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">The map is the wire.</h1>
              <p className="mt-3 max-w-2xl text-muted">Headlines arriving now. A light marks a story that names a place. Open any report for the outlet’s original.</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-sm text-faint">{status === "loading" ? "Pulling the wire…" : updatedAt ? `Updated ${formatAgo(updatedAt, now)}` : "Waiting"}</p>
              <button type="button" onClick={refresh} className="h-10 rounded-full border border-line px-4 text-sm">Refresh</button>
            </div>
          </div>
        </header>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {desks.map((item) => (
            <button key={item} type="button" onClick={() => setDesk(item)} className={item === desk ? "h-10 shrink-0 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-10 shrink-0 rounded-full border border-line px-4 text-sm text-muted"}>
              {item === "all" ? "All signals" : categoryMeta[item].label}
            </button>
          ))}
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="panel h-80 md:h-[32rem]">
            <Globe
              points={placed.slice(0, 28).map((item) => ({ id: item.id, lat: item.lat ?? 0, lon: item.lon ?? 0, tone: toneOf(item.category) }))}
              activeId={current?.id}
              onHover={(id) => id && setActive(id)}
              onSelect={setActive}
            />
          </div>
          <div className="grid content-start gap-3">
            {status === "error" && !filtered.length ? <p className="text-muted">{error || "The wire is quiet. Try refresh."}</p> : null}
            {current ? (
              <Link to="/wire/$id" params={{ id: current.id }} className="panel p-5">
                <p className="text-xs tracking-widest text-cyan">{(current.place || current.source).toUpperCase()}</p>
                <h2 className="font-display mt-2 text-2xl">{current.title}</h2>
                <p className="mt-2 line-clamp-4 text-sm text-muted">{current.summary}</p>
                <p className="mt-3 text-xs text-faint">{formatAgo(current.publishedAt, now)} · {current.source}</p>
                <p className="mt-4 text-sm text-cyan">Open the report</p>
              </Link>
            ) : (
              <p className="text-muted">{status === "loading" ? "Loading live headlines…" : "No reports in this slice."}</p>
            )}
            {filtered.slice(0, 5).map((item) => (
              <button key={item.id} type="button" onClick={() => setActive(item.id)} className="rounded-2xl border border-line px-4 py-3 text-left hover:border-cyan">
                <p className="text-xs tracking-widest text-faint">{item.place ? `${item.place} · ` : ""}{item.source}</p>
                <p className="mt-1 line-clamp-2 text-sm">{item.title}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {filtered.slice(0, 8).map((item) => (
            <WireCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Shell>
  );
}
