import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/bits";
import { useLiveWire, WireCard } from "@/components/live-wire";
import { Newsletter, Shell } from "@/components/shell";
import { DESK_DATE, dailyFive, storyById, trends, weekAhead } from "@/data/intel";

export const Route = createFileRoute("/briefing")({ component: BriefingPage });

function BriefingPage() {
  const { items, status } = useLiveWire();
  const live = items.slice(0, 5);
  return (
    <Shell>
      <PageIntro kicker="Daily briefing" title="The daily 5, live." lede="Five reports on the wire right now, then the desk’s standing notes. The wire is the news. The notes below are a labeled sample." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2">
        {live.map((item) => (
          <WireCard key={item.id} item={item} />
        ))}
        {status === "loading" && !live.length ? <p className="text-muted">Pulling today’s wire…</p> : null}
      </div>
      <div className="mx-auto grid max-w-3xl gap-4 px-4 pt-12">
        <p className="kicker">Desk notes · {DESK_DATE}</p>
        {dailyFive.map((item, index) => {
          const story = "id" in item && item.id ? storyById(item.id) : undefined;
          const trend = "trendId" in item ? trends.find((entry) => entry.id === item.trendId) : undefined;
          return (
            <article key={item.kicker} className="panel p-5">
              <p className="text-xs tracking-widest text-cyan">0{index + 1} — {item.kicker.toUpperCase()}</p>
              <h2 className="font-display mt-2 text-2xl">{story?.headline ?? trend?.name}</h2>
              <p className="mt-2 text-muted">{story?.why ?? trend?.why}</p>
              {story ? <Link to="/story/$id" params={{ id: story.id }} className="mt-3 inline-flex text-sm text-cyan">Read the note</Link> : <Link to="/trends" className="mt-3 inline-flex text-sm text-cyan">Open the radar</Link>}
            </article>
          );
        })}
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <p className="kicker">The week ahead</p>
        <div className="mt-4 grid gap-3">
          {weekAhead.map((item) => (
            <div key={item.title} className="flex gap-4 border-b border-line py-3">
              <span className="w-14 text-sm text-violet">{item.day}</span>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/week" className="mt-4 inline-flex text-sm text-cyan">Full week</Link>
      </div>
      <Newsletter />
    </Shell>
  );
}
