import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { matchesTopic, useLiveWire, WireCard } from "@/components/live-wire";
import { Shell } from "@/components/shell";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { TOPICS, usePrefs, type Topic } from "@/lib/prefs";

export const Route = createFileRoute("/profile")({ component: ProfilePage });

function ProfilePage() {
  const topics = usePrefs((state) => state.topics);
  const toggle = usePrefs((state) => state.toggleTopic);
  const [ready, setReady] = useState(false);
  const { user, isPending } = useCurrentUserState();
  const { items, status } = useLiveWire();
  useEffect(() => setReady(true), []);
  const chosen = ready ? topics : [];
  const feed = chosen.length ? items.filter((item) => chosen.some((topic) => matchesTopic(item, topic))) : items.slice(0, 6);

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="kicker">Your world</p>
        <h1 className="font-display mt-3 text-4xl font-bold">The live slice you asked for.</h1>
        <div className="panel mt-6 p-5">
          {isPending ? <div className="h-8 w-40 animate-pulse rounded-full bg-navy-2" /> : null}
          <SignedIn>
            <p className="text-sm text-muted">Signed in as {user?.displayName ?? user?.primaryEmail ?? "your account"}.</p>
            <div className="mt-3"><UserButton /></div>
          </SignedIn>
          <SignedOut>
            <p className="text-sm text-muted">Topics stay on this device. Sign in if you want the account on this desk.</p>
            <Link to="/login" className="mt-3 inline-flex h-10 items-center rounded-full bg-cyan px-4 text-sm font-semibold text-ink">Sign in</Link>
          </SignedOut>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {TOPICS.map((topic) => {
            const on = chosen.includes(topic);
            return (
              <button key={topic} type="button" onClick={() => toggle(topic as Topic)} className={on ? "h-11 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-11 rounded-full border border-line px-4 text-sm text-muted"}>
                {topic}
              </button>
            );
          })}
        </div>
        <p className="mt-8 text-sm text-faint">
          {status === "loading" && !items.length ? "Pulling the wire…" : chosen.length ? "Live reports matching your topics." : "Pick topics to shape the live feed. Until then, the newest reports."}
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {feed.map((item) => (
            <WireCard key={item.id} item={item} />
          ))}
          {status !== "loading" && !feed.length ? <p className="text-muted">No live reports match those topics yet.</p> : null}
        </div>
      </div>
    </Shell>
  );
}
