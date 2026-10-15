import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/bits";
import { Shell } from "@/components/shell";
import { ideas } from "@/data/intel";

export const Route = createFileRoute("/ideas")({ component: IdeasPage });

function IdeasPage() {
  return (
    <Shell>
      <PageIntro kicker="Idea engine" title="Where a problem becomes a brief." lede="For founders, investors, students, and anyone who reads the news looking for the opening beside it." />
      <div className="mx-auto grid max-w-6xl gap-4 px-4 pb-16">
        {ideas.map((idea) => (
          <article key={idea.id} className="panel grid gap-4 p-6 md:grid-cols-3">
            <div>
              <p className="text-xs tracking-widest text-down">PROBLEM</p>
              <p className="mt-2">{idea.problem}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-cyan">EMERGING IDEA</p>
              <p className="mt-2 text-muted">{idea.idea}</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-violet">POTENTIAL OPPORTUNITY</p>
              <p className="mt-2 text-muted">{idea.opportunity}</p>
              <p className="mt-3 text-xs text-faint">For {idea.who}</p>
            </div>
          </article>
        ))}
      </div>
    </Shell>
  );
}
