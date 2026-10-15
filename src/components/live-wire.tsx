import { Link } from "@tanstack/react-router";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { categoryMeta, type Category } from "@/data/intel";
import { getLiveWire, type WireItem, type WirePayload } from "@/lib/live-wire";
import { toneFor } from "@/components/bits";

type LiveState = {
  items: WireItem[];
  updatedAt: string;
  status: "loading" | "live" | "error";
  error: string;
  refresh: () => void;
};

const LiveContext = createContext<LiveState | null>(null);

export function LiveProvider({ children }: { children: React.ReactNode }) {
  const [payload, setPayload] = useState<WirePayload | null>(null);
  const [status, setStatus] = useState<LiveState["status"]>("loading");
  const [error, setError] = useState("");
  const load = useCallback(async (force = false) => {
    try {
      const next = await getLiveWire({ data: { force } });
      setPayload(next);
      setStatus(next.ok && next.items.length ? "live" : "error");
      setError(next.error ?? "");
    } catch {
      setStatus((current) => (current === "live" ? "live" : "error"));
      setError("The wire did not answer.");
    }
  }, []);

  useEffect(() => {
    let stop = false;
    const run = () => {
      if (!stop) void load(false);
    };
    run();
    const poll = window.setInterval(run, 30_000);
    return () => {
      stop = true;
      window.clearInterval(poll);
    };
  }, [load]);

  const refresh = useCallback(() => {
    void load(true);
  }, [load]);

  const value = useMemo<LiveState>(
    () => ({
      items: payload?.items ?? [],
      updatedAt: payload?.updatedAt ?? "",
      status,
      error,
      refresh,
    }),
    [payload, status, error, refresh],
  );

  return <LiveContext.Provider value={value}>{children}</LiveContext.Provider>;
}

export function useLiveWire() {
  const value = useContext(LiveContext);
  if (!value) {
    return {
      items: [] as WireItem[],
      updatedAt: "",
      status: "loading" as const,
      error: "",
      refresh: () => {},
    };
  }
  return value;
}

export function matchesTopic(item: WireItem, topic: string) {
  const blob = `${item.title} ${item.summary} ${item.place}`.toLowerCase();
  switch (topic.toLowerCase()) {
    case "ai":
      return /\bai\b|artificial intelligence|openai|chatgpt/.test(blob);
    case "india":
      return /india|delhi|mumbai|modi/.test(blob);
    case "markets":
      return item.category === "markets" || /market|stock|shares|nasdaq|federal reserve/.test(blob);
    case "startups":
      return /startup|venture|founder/.test(blob);
    case "space":
      return /space|nasa|satellite|rocket|astronaut/.test(blob);
    case "technology":
      return item.category === "technology";
    case "business":
      return item.category === "business";
    case "climate":
      return item.category === "climate" || /climate|emission|flood|wildfire|drought/.test(blob);
    default:
      return blob.includes(topic.toLowerCase());
  }
}

export function useNow(ms = 15_000) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), ms);
    return () => window.clearInterval(timer);
  }, [ms]);
  return now;
}

export function formatAgo(iso: string, now = Date.now()) {
  const then = Date.parse(iso);
  if (!Number.isFinite(then)) return "just now";
  const mins = Math.max(0, Math.round((now - then) / 60_000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.round(mins / 60);
  if (hours < 36) return `${hours} hr ago`;
  return `${Math.round(hours / 24)} day ago`;
}

export function WireCard({ item }: { item: WireItem }) {
  const now = useNow();
  const [imageOk, setImageOk] = useState(Boolean(item.image));
  return (
    <Link to="/wire/$id" params={{ id: item.id }} className="panel panel-hover flex h-full flex-col overflow-hidden">
      {item.image && imageOk ? (
        <img src={item.image} alt="" className="h-40 w-full object-cover" onError={() => setImageOk(false)} />
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <span className={`text-xs font-semibold tracking-widest ${toneFor(item.category)}`}>
            {categoryMeta[item.category].label.toUpperCase()}
          </span>
          <span className="text-xs text-faint">{item.source}</span>
        </div>
        <h3 className="font-display mt-3 text-xl font-semibold leading-snug">{item.title}</h3>
        {item.summary ? <p className="mt-3 line-clamp-3 text-sm text-muted">{item.summary}</p> : null}
        <p className="mt-4 text-xs tracking-widest text-faint">{formatAgo(item.publishedAt, now)} · LIVE WIRE</p>
      </div>
    </Link>
  );
}

const FILTERS: Array<Category | "all"> = ["all", "geopolitics", "business", "markets", "technology", "science", "climate", "culture"];

export function WireBoard({
  kicker,
  title,
  lede,
  category = "all",
}: {
  kicker: string;
  title: string;
  lede: string;
  category?: Category | "all";
}) {
  const { items, status, updatedAt, error, refresh } = useLiveWire();
  const now = useNow();
  const [desk, setDesk] = useState<Category | "all">(category);
  const [source, setSource] = useState("all");
  const sources = ["all", ...new Set(items.map((item) => item.source))];
  const list = items.filter((item) => (desk === "all" || item.category === desk) && (source === "all" || item.source === source));

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16">
      <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-live">
        <span className="live-ping size-2 rounded-full bg-live" />
        {kicker}
      </p>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-muted">{lede}</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-faint">
            {status === "loading" ? "Pulling the wire…" : updatedAt ? `Updated ${formatAgo(updatedAt, now)}` : "Waiting"}
          </p>
          <button type="button" onClick={refresh} className="h-10 rounded-full border border-line px-4 text-sm">
            Refresh
          </button>
        </div>
      </div>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setDesk(item)}
            className={item === desk ? "h-10 shrink-0 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-10 shrink-0 rounded-full border border-line px-4 text-sm text-muted"}
          >
            {item === "all" ? "All" : categoryMeta[item].label}
          </button>
        ))}
      </div>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-4">
        {sources.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setSource(item)}
            className={item === source ? "h-9 shrink-0 rounded-full bg-fg px-3 text-sm text-ink" : "h-9 shrink-0 rounded-full border border-line px-3 text-sm text-muted"}
          >
            {item === "all" ? "All sources" : item}
          </button>
        ))}
      </div>
      {status === "error" && !list.length ? <p className="text-muted">{error || "The wire is quiet. Try refresh."}</p> : null}
      {status === "loading" && !list.length ? <p className="text-muted">Loading live headlines…</p> : null}
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((item) => (
          <WireCard key={item.id} item={item} />
        ))}
      </div>
      {status === "live" && !list.length ? <p className="text-muted">Nothing in this slice of the wire.</p> : null}
    </div>
  );
}
