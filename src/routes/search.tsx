import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { formatAgo, useLiveWire, useNow } from "@/components/live-wire";
import { Shell } from "@/components/shell";
import { categoryMeta, type Category } from "@/data/intel";

type Search = {
  q: string;
  category: string;
  horizon: string;
  importance: string;
  country: string;
};

export const Route = createFileRoute("/search")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    q: typeof search.q === "string" ? search.q : "",
    category: typeof search.category === "string" ? search.category : "all",
    horizon: typeof search.horizon === "string" ? search.horizon : "all",
    importance: typeof search.importance === "string" ? search.importance : "all",
    country: typeof search.country === "string" ? search.country : "all",
  }),
  component: SearchPage,
});

function SearchPage() {
  const params = Route.useSearch();
  const navigate = useNavigate();
  const { items, status } = useLiveWire();
  const now = useNow();
  const [q, setQ] = useState(params.q);
  const sources = ["all", ...new Set(items.map((item) => item.source))];
  const query = params.q.trim().toLowerCase();
  const list = items.filter((item) => {
    if (query && !`${item.title} ${item.summary} ${item.source} ${item.place}`.toLowerCase().includes(query)) return false;
    if (params.category !== "all" && item.category !== params.category) return false;
    if (params.country !== "all" && item.source !== params.country) return false;
    const age = now - Date.parse(item.publishedAt);
    if (params.horizon === "day" && age > 86_400_000) return false;
    if (params.horizon === "week" && age > 7 * 86_400_000) return false;
    if (params.importance === "high" && age > 6 * 3_600_000) return false;
    return true;
  });

  const push = (patch: Partial<Search>) => {
    navigate({ to: "/search", search: { ...params, q, ...patch } });
  };

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="kicker">Search the wire</p>
        <h1 className="font-display mt-3 text-4xl font-bold">Find what’s live.</h1>
        <form
          className="mt-6 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            push({ q });
          }}
        >
          <input value={q} onChange={(event) => setQ(event.target.value)} placeholder="People, countries, companies, technologies" className="h-12 flex-1 rounded-full border border-line bg-navy px-4 outline-none focus:border-cyan" />
          <button type="submit" className="h-12 rounded-full bg-cyan px-5 font-semibold text-ink">Search</button>
        </form>
        <div className="mt-4 flex flex-wrap gap-2">
          <Select label="Time" value={params.horizon} onChange={(horizon) => push({ horizon })} options={[["all", "Any time"], ["day", "24 hours"], ["week", "7 days"]]} />
          <Select label="Desk" value={params.category} onChange={(category) => push({ category })} options={[["all", "All desks"], ...(Object.keys(categoryMeta) as Category[]).map((key) => [key, categoryMeta[key].label] as [string, string])]} />
          <Select label="Freshness" value={params.importance} onChange={(importance) => push({ importance })} options={[["all", "Any"], ["high", "Last 6 hours"]]} />
          <Select label="Source" value={sources.includes(params.country) ? params.country : "all"} onChange={(country) => push({ country })} options={sources.map((source) => [source, source === "all" ? "All sources" : source])} />
        </div>
        <p className="mt-6 text-sm text-faint">{status === "loading" && !items.length ? "Pulling the wire…" : `${list.length} live reports`}</p>
        <div className="mt-3 grid gap-3">
          {list.map((item) => (
            <Link key={item.id} to="/wire/$id" params={{ id: item.id }} className="panel px-5 py-4">
              <p className="text-xs tracking-widest text-cyan">{item.source.toUpperCase()} · {categoryMeta[item.category].label.toUpperCase()}</p>
              <p className="font-display mt-1 text-xl">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{formatAgo(item.publishedAt, now)}{item.place ? ` · ${item.place}` : ""}</p>
            </Link>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: Array<[string, string] | string[]> }) {
  return (
    <label className="text-xs text-faint">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-1 block h-10 rounded-full border border-line bg-navy px-3 text-sm text-fg">
        {options.map((option) => (
          <option key={option[0]} value={option[0]}>{option[1]}</option>
        ))}
      </select>
    </label>
  );
}
