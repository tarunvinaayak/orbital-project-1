import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, StoryCard } from "@/components/bits";
import { Shell } from "@/components/shell";
import { industries, storyById } from "@/data/intel";

export const Route = createFileRoute("/industry/$slug")({ component: IndustryPage });

function IndustryPage() {
  const { slug } = Route.useParams();
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) {
    return (
      <Shell>
        <PageIntro kicker="Industry" title="No desk by that name." lede="Pick a sector from the list on any story’s related industry link." />
      </Shell>
    );
  }
  const notes = industry.stories.map((id) => storyById(id)).filter((story) => story !== undefined);
  return (
    <Shell>
      <PageIntro kicker="Industry intelligence" title={industry.name} lede={industry.line} />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-4">
        {[
          ["Signal", industry.signal],
          ["Emerging", industry.tech],
          ["Upcoming", industry.event],
          ["Companies", industry.companies.join(", ") || "None named in this sample"],
        ].map(([label, value]) => (
          <div key={label} className="panel p-4">
            <p className="text-xs tracking-widest text-faint">{label.toUpperCase()}</p>
            <p className="mt-2 text-sm">{value}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-2">
        {notes.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-16">
        {industries.map((item) => (
          <Link key={item.slug} to="/industry/$slug" params={{ slug: item.slug }} className="rounded-full border border-line px-3 py-2 text-sm text-muted hover:text-fg">
            {item.name}
          </Link>
        ))}
      </div>
    </Shell>
  );
}
