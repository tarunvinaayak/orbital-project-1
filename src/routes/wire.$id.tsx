import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toneFor } from "@/components/bits";
import { formatAgo, useLiveWire, useNow, WireCard } from "@/components/live-wire";
import { Shell } from "@/components/shell";
import { categoryMeta } from "@/data/intel";

export const Route = createFileRoute("/wire/$id")({ component: WirePage });

function WirePage() {
  const { id } = Route.useParams();
  const { items, status } = useLiveWire();
  const now = useNow();
  const item = items.find((entry) => entry.id === id);
  const related = item ? items.filter((entry) => entry.id !== item.id && entry.category === item.category).slice(0, 3) : [];

  if (!item) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <p className="kicker">Live wire</p>
          <h1 className="font-display mt-3 text-4xl">{status === "loading" ? "Pulling this report…" : "This report has left the live wire."}</h1>
          <p className="mt-3 text-muted">The wire keeps the latest dispatches. Open the full feed for what is current.</p>
          <Link to="/live" className="mt-6 inline-flex text-cyan">Open the live wire</Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className={`text-xs font-semibold tracking-widest ${toneFor(item.category)}`}>{categoryMeta[item.category].label.toUpperCase()}</p>
        <h1 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">{item.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-faint">
          <span className="inline-flex items-center gap-2 text-live">
            <span className="live-ping size-2 rounded-full bg-live" />
            LIVE
          </span>
          <span>{item.source}</span>
          <span>{formatAgo(item.publishedAt, now)}</span>
        </div>
        <Figure image={item.image} />
        {item.summary ? <p className="mt-6 text-lg text-muted">{item.summary}</p> : null}
        <div className="panel mt-8 p-5">
          <p className="text-xs tracking-widest text-cyan">SOURCE</p>
          <p className="mt-2 text-sm text-muted">
            This is a live report filed by {item.source}. The summary above is the outlet’s own text, not an ORBITAL forecast. Open the original for the full piece and anything that has changed since it was published.
          </p>
          <a href={item.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex h-11 items-center rounded-full bg-cyan px-5 text-sm font-semibold text-ink">
            Read at {item.source}
          </a>
        </div>
        <Link to="/live" className="mt-6 inline-flex text-sm text-cyan">Back to the live wire</Link>
      </article>
      {related.length ? (
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <p className="kicker">Also on the wire</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {related.map((entry) => (
              <WireCard key={entry.id} item={entry} />
            ))}
          </div>
        </section>
      ) : null}
    </Shell>
  );
}

function Figure({ image }: { image: string }) {
  const [ok, setOk] = useState(Boolean(image));
  if (!image || !ok) return null;
  return <img src={image} alt="" className="mt-6 max-h-96 w-full rounded-3xl object-cover" onError={() => setOk(false)} />;
}
