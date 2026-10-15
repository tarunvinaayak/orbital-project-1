import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/bits";
import { useLiveWire, WireCard } from "@/components/live-wire";
import { Shell } from "@/components/shell";
import { categoryMeta, type Category } from "@/data/intel";

export const Route = createFileRoute("/desk/$slug")({ component: DeskPage });

const slugs = Object.keys(categoryMeta) as Category[];

function DeskPage() {
  const { slug } = Route.useParams();
  const { items, status } = useLiveWire();
  if (!slugs.includes(slug as Category)) {
    return (
      <Shell>
        <PageIntro kicker="Desk" title="That desk is not on the floor." lede="Try World, or one of the desks in the menu." />
      </Shell>
    );
  }
  const category = slug as Category;
  const list = items.filter((item) => item.category === category);
  const group = categoryMeta[category].label;
  const sources = [...new Set(list.map((item) => item.source))];
  return (
    <Shell>
      <PageIntro kicker={`${group} · live`} title={group} lede="Live reports on this desk, refreshed from the wire. Each one opens at the outlet that published it." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-16 lg:grid-cols-3">
        <div className="grid gap-4 lg:col-span-2 md:grid-cols-2">
          {list.map((item) => (
            <WireCard key={item.id} item={item} />
          ))}
          {!list.length ? <p className="text-muted">{status === "loading" ? "Pulling this desk…" : "Nothing on this desk in the current wire. It will fill as outlets publish."}</p> : null}
        </div>
        <aside className="grid content-start gap-4">
          <div className="panel p-5">
            <p className="kicker">On the wire</p>
            <p className="font-display mt-3 text-4xl">{list.length}</p>
            <p className="text-sm text-muted">live reports</p>
            {sources.length ? <p className="mt-4 text-sm text-faint">{sources.slice(0, 6).join(" · ")}</p> : null}
          </div>
        </aside>
      </div>
    </Shell>
  );
}
