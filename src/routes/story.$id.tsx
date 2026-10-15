import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ImpactBar, Importance, LabelPill, toneFor } from "@/components/bits";
import { Shell } from "@/components/shell";
import { ago, categoryMeta, stories, storyById } from "@/data/intel";

export const Route = createFileRoute("/story/$id")({ component: StoryPage });

function StoryPage() {
  const { id } = Route.useParams();
  const story = storyById(id);
  const [open, setOpen] = useState(false);
  if (!story) {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-20">
          <h1 className="font-display text-4xl">That note is not on the desk.</h1>
          <Link to="/news" className="mt-4 inline-flex text-cyan">Back to the world</Link>
        </div>
      </Shell>
    );
  }
  const related = stories.filter((item) => item.id !== story.id && (item.category === story.category || item.tags.some((tag) => story.tags.includes(tag)))).slice(0, 3);
  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-4 py-12">
        <p className={`text-xs font-semibold tracking-widest ${toneFor(story.category)}`}>{categoryMeta[story.category].label.toUpperCase()}</p>
        <h1 className="font-display mt-3 text-4xl font-bold leading-tight md:text-5xl">{story.headline}</h1>
        <p className="mt-4 text-lg text-muted">{story.summary}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-faint">
          <span>{story.location}, {story.country}</span>
          <span>{ago(story.minutesAgo)}</span>
          <span>Updated with the {story.confidence} confidence sample</span>
          <Importance n={story.importance} />
        </div>
        <div className="mt-6"><ImpactBar value={story.impact} /></div>
        <div className="mt-8 grid gap-4">
          <Block label="FACT" title="What happened" body={story.what} />
          <Block label="ANALYSIS" title="Why it matters" body={story.why} />
          <Block label="FACT" title="Who is affected" body={story.who} />
          <Block label="FORECAST" title="What happens next" body={story.next} />
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <p className="text-sm tracking-widest text-cyan">COMPILED FROM {story.sources.length} DESK INPUTS</p>
          <button type="button" onClick={() => setOpen((value) => !value)} className="h-10 rounded-full border border-line px-4 text-sm">
            {open ? "Hide sources" : "Sources"}
          </button>
        </div>
        {open ? (
          <ul className="panel mt-3 grid gap-2 p-4 text-sm text-muted">
            {story.sources.map((source) => (
              <li key={source}>{source} · sample input, not an outside citation</li>
            ))}
            <li>Confidence: {story.confidence}. Forecasts are labeled and are not presented as fact.</li>
          </ul>
        ) : null}
        <div className="mt-10">
          <p className="kicker">Related</p>
          <div className="mt-3 grid gap-3">
            {related.map((item) => (
              <Link key={item.id} to="/story/$id" params={{ id: item.id }} className="panel px-4 py-3">
                {item.headline}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </Shell>
  );
}

function Block({ label, title, body }: { label: "FACT" | "ANALYSIS" | "FORECAST"; title: string; body: string }) {
  return (
    <section className="panel p-5">
      <LabelPill label={label} />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-muted">{body}</p>
    </section>
  );
}
