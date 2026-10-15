import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toneFor } from "@/components/bits";
import { Globe } from "@/components/globe";
import { formatAgo, useLiveWire, useNow, WireCard } from "@/components/live-wire";
import { Newsletter, Shell } from "@/components/shell";
import { categoryMeta, type Category } from "@/data/intel";
import { toneOf, type WireItem } from "@/lib/live-wire";

export const Route = createFileRoute("/")({ component: Home });

const DESKS: Category[] = ["geopolitics", "business", "technology", "science", "markets", "climate", "culture"];

function Home() {
  return (
    <Shell>
      <Hero />
      <Pulse />
      <Matters />
      <Sixty />
      <DeskRail />
      <Newsletter />
    </Shell>
  );
}

function Hero() {
  const { items, status, updatedAt, refresh } = useLiveWire();
  const now = useNow(1000);
  const [clockOn, setClockOn] = useState(false);
  useEffect(() => setClockOn(true), []);
  const clock = new Date(now).toISOString().slice(11, 19);
  const lead = items[0];
  return (
    <section className="relative overflow-hidden">
      <div className="ambient pointer-events-none absolute inset-0" />
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-start gap-8 px-4 pb-6 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-live">
            <span className="live-ping size-2 rounded-full bg-live" />
            {status === "live" ? "LIVE WIRE" : status === "error" ? "WIRE DELAYED" : "CONNECTING"}
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.05] md:text-6xl">
            The world moves.
            <br />
            We make sense of it.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">Live intelligence on the events, ideas and breakthroughs shaping tomorrow.</p>
          <p className="mt-4 text-sm text-faint">
            {clockOn ? `${clock} UTC` : "UTC"}
            {status === "live" ? ` · ${items.length} live reports · updated ${formatAgo(updatedAt, now)}` : " · pulling headlines from the wire"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/live" className="inline-flex h-12 items-center rounded-full bg-cyan px-5 font-semibold text-ink">
              Open the live wire
            </Link>
            <button type="button" onClick={refresh} className="inline-flex h-12 items-center rounded-full border border-line px-5 text-sm">
              Refresh
            </button>
          </div>
        </div>
        <Lead item={lead} status={status} />
      </div>
    </section>
  );
}

function Lead({ item, status }: { item?: WireItem; status: string }) {
  const now = useNow();
  const [imageOk, setImageOk] = useState(Boolean(item?.image));
  useEffect(() => setImageOk(Boolean(item?.image)), [item?.image]);
  if (!item) {
    return (
      <div className="panel p-6">
        <p className="kicker">Just in</p>
        <p className="mt-3 text-muted">{status === "error" ? "The outlets did not answer. Try refresh." : "Connecting to BBC, The Guardian, The New York Times, Al Jazeera, NPR, and France 24."}</p>
      </div>
    );
  }
  return (
    <Link to="/wire/$id" params={{ id: item.id }} className="panel panel-hover overflow-hidden">
      {item.image && imageOk ? <img src={item.image} alt="" className="h-48 w-full object-cover" onError={() => setImageOk(false)} /> : null}
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className={`text-xs font-semibold tracking-widest ${toneFor(item.category)}`}>{categoryMeta[item.category].label.toUpperCase()}</span>
          <span className="text-xs text-live">LIVE</span>
        </div>
        <h2 className="font-display mt-3 text-2xl font-semibold leading-snug">{item.title}</h2>
        {item.summary ? <p className="mt-3 line-clamp-3 text-sm text-muted">{item.summary}</p> : null}
        <p className="mt-4 text-xs tracking-widest text-faint">
          {item.source} · {formatAgo(item.publishedAt, now)}
          {item.place ? ` · ${item.place}` : ""}
        </p>
      </div>
    </Link>
  );
}

function Pulse() {
  const { items } = useLiveWire();
  const placed = items.filter((item) => item.lat != null && item.lon != null);
  const [active, setActive] = useState<string | null>(null);
  const current = placed.find((item) => item.id === active) ?? placed[0];
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="kicker">Global pulse</p>
          <h2 className="font-display mt-2 text-3xl font-bold">Where the wire is lighting up</h2>
        </div>
        <Link to="/live" className="text-sm text-cyan">Full map</Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="panel h-80 md:h-[28rem]">
          <Globe
            points={placed.slice(0, 24).map((item) => ({ id: item.id, lat: item.lat ?? 0, lon: item.lon ?? 0, tone: toneOf(item.category) }))}
            activeId={current?.id}
            onHover={(id) => id && setActive(id)}
            onSelect={setActive}
          />
        </div>
        <div className="grid content-start gap-3">
          {current ? (
            <Link to="/wire/$id" params={{ id: current.id }} className="panel p-5">
              <p className="text-xs tracking-widest text-cyan">{current.place.toUpperCase()}</p>
              <h3 className="font-display mt-2 text-2xl">{current.title}</h3>
              <p className="mt-2 line-clamp-3 text-sm text-muted">{current.summary}</p>
              <p className="mt-3 text-xs text-faint">{current.source}</p>
            </Link>
          ) : (
            <div className="panel p-5 text-sm text-muted">Places appear as soon as a live headline names a city or country.</div>
          )}
          {placed.slice(0, 4).map((item) => (
            <button key={item.id} type="button" onClick={() => setActive(item.id)} className="panel px-4 py-3 text-left">
              <p className="text-xs tracking-widest text-faint">{item.place.toUpperCase()} · {item.source}</p>
              <p className="mt-1 line-clamp-2 text-sm">{item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Matters() {
  const { items, status } = useLiveWire();
  const list = items.slice(1, 7);
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <p className="kicker">What matters now</p>
      <h2 className="font-display mt-2 text-3xl font-bold">The reports moving right now</h2>
      <p className="mt-2 max-w-2xl text-sm text-muted">Each card is a live headline from the outlet that published it. Open it for the original.</p>
      {status === "loading" && !list.length ? <p className="mt-6 text-muted">Loading the wire…</p> : null}
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((item) => (
          <WireCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function Sixty() {
  const { items } = useLiveWire();
  const leads = items.slice(0, 5);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (leads.length < 2) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % leads.length), 5000);
    return () => window.clearInterval(timer);
  }, [leads.length]);
  const item = leads[index];
  if (!item) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="panel p-6 md:p-8">
        <p className="kicker">The world in 60 seconds</p>
        <p className="mt-3 text-xs tracking-widest text-faint">0{index + 1} / 0{leads.length} · {item.source}</p>
        <h2 className="font-display mt-2 text-3xl font-bold leading-tight">{item.title}</h2>
        {item.summary ? <p className="mt-3 max-w-3xl text-muted">{item.summary}</p> : null}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Link to="/wire/$id" params={{ id: item.id }} className="text-sm text-cyan">Open this report</Link>
          <div className="flex gap-2">
            {leads.map((entry, dot) => (
              <button key={entry.id} type="button" aria-label={`Story ${dot + 1}`} onClick={() => setIndex(dot)} className={dot === index ? "h-1.5 w-8 rounded-full bg-cyan" : "h-1.5 w-4 rounded-full bg-line"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DeskRail() {
  const { items } = useLiveWire();
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <p className="kicker">Desks</p>
      <h2 className="font-display mt-2 text-3xl font-bold">Follow one slice of the world</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DESKS.map((desk) => {
          const count = items.filter((item) => item.category === desk).length;
          return (
            <Link key={desk} to="/desk/$slug" params={{ slug: desk }} className="panel panel-hover p-5">
              <p className={`text-xs font-semibold tracking-widest ${toneFor(desk)}`}>{categoryMeta[desk].label.toUpperCase()}</p>
              <p className="font-display mt-3 text-3xl">{count}</p>
              <p className="text-sm text-muted">live reports</p>
            </Link>
          );
        })}
        <Link to="/analyst" className="panel panel-hover p-5">
          <p className="text-xs font-semibold tracking-widest text-violet">WORLD AI</p>
          <p className="mt-3 text-sm text-muted">Ask what the live wire means, without leaving the headlines.</p>
        </Link>
      </div>
    </section>
  );
}
