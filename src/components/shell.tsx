import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Radio, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@/lib/auth/gates";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { formatAgo, useLiveWire, useNow } from "@/components/live-wire";
import { usePrefs } from "@/lib/prefs";

export function Shell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    usePrefs.persist.rehydrate();
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [path]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "/" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-svh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Link to="/" className="font-display text-lg font-bold tracking-wide">
            ORBITAL
          </Link>
          <nav className="ml-4 hidden items-center gap-4 lg:flex">
            <Link to="/news" className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>World</Link>
            <Link to="/desk/$slug" params={{ slug: "business" }} className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Business</Link>
            <Link to="/desk/$slug" params={{ slug: "technology" }} className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Technology</Link>
            <Link to="/desk/$slug" params={{ slug: "science" }} className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Science</Link>
            <Link to="/desk/$slug" params={{ slug: "markets" }} className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Markets</Link>
            <Link to="/desk/$slug" params={{ slug: "climate" }} className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Climate</Link>
            <Link to="/desk/$slug" params={{ slug: "culture" }} className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Culture</Link>
            <Link to="/ideas" className="text-sm text-muted hover:text-fg" activeProps={{ className: "text-sm text-cyan" }}>Ideas</Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm text-muted hover:text-fg"
              aria-label="Search"
            >
              <Search className="size-4" />
              <span className="hidden sm:inline">Search</span>
            </button>
            <Link
              to="/live"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm text-fg"
            >
              <span className="live-ping size-2 rounded-full bg-live" />
              Live
            </Link>
            <AuthSlot />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </div>
        <Ticker />
      </header>
      <div>{children}</div>
      <Footer />
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 backdrop-blur-xl lg:hidden">
        <div className="grid grid-cols-5 px-2 py-2 text-center text-xs text-muted">
          <Tab to="/" label="Home" />
          <Tab to="/live" label="Live" />
          <Tab to="/news" label="Explore" />
          <Tab to="/trends" label="Trends" />
          <Tab to="/profile" label="Profile" />
        </div>
      </nav>
      {open ? <MenuSheet onClose={() => setOpen(false)} /> : null}
      {searchOpen ? <SearchSheet onClose={() => setSearchOpen(false)} /> : null}
    </div>
  );
}

function AuthSlot() {
  const { isPending } = useCurrentUserState();
  if (isPending) return <span className="hidden size-8 animate-pulse rounded-full bg-navy-2 sm:inline-block" />;
  return (
    <div className="hidden max-w-52 overflow-hidden sm:block">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <Link to="/login" className="text-sm text-fg">
          Sign in
        </Link>
      </SignedOut>
    </div>
  );
}

function Tab({ to, label }: { to: "/" | "/live" | "/news" | "/trends" | "/profile"; label: string }) {
  return (
    <Link to={to} className="flex min-h-11 items-center justify-center" activeOptions={{ exact: to === "/" }} activeProps={{ className: "flex min-h-11 items-center justify-center text-cyan" }}>
      {label}
    </Link>
  );
}

function Ticker() {
  const { items, status } = useLiveWire();
  const now = useNow();
  const lead = items.slice(0, 12);
  const row = [...lead, ...lead];
  return (
    <div className="marquee flex items-center gap-3 border-t border-line/70 bg-navy/60">
      <span className="inline-flex shrink-0 items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest text-live">
        <Radio className="size-3" />
        LIVE
      </span>
      <div className="overflow-hidden">
        {row.length ? (
          <div className="marquee-track">
            {row.map((item, index) => (
              <Link key={`${item.id}-${index}`} to="/wire/$id" params={{ id: item.id }} className="mr-10 inline-flex items-center gap-3 py-2 text-sm text-muted hover:text-fg">
                <span className="text-fg">{item.title}</span>
                <span>{item.source}</span>
                <span>{formatAgo(item.publishedAt, now)}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-2 text-sm text-muted">{status === "error" ? "Wire quiet — retry from Live" : "Connecting to the wire…"}</p>
        )}
      </div>
    </div>
  );
}

function MenuSheet({ onClose }: { onClose: () => void }) {
const extra: { href: string; label: string }[] = [
  { href: "/live", label: "Live World" },
  { href: "/news", label: "Global News" },
  { href: "/desk/geopolitics", label: "Geopolitics" },
  { href: "/future", label: "Future Watch" },
  { href: "/trends", label: "Trend Radar" },
  { href: "/ideas", label: "Idea Engine" },
  { href: "/briefing", label: "Daily Briefing" },
  { href: "/week", label: "The Week Ahead" },
  { href: "/analyst", label: "World AI" },
  { href: "/profile", label: "Your World" },
  { href: "/search", label: "Search" },
];
  return (
    <div className="fixed inset-0 z-50 bg-ink/95 p-5 lg:hidden">
      <div className="mb-6 flex items-center justify-between">
        <span className="font-display text-xl">ORBITAL</span>
        <button type="button" onClick={onClose} aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-full border border-line">
          <X className="size-4" />
        </button>
      </div>
      <div className="grid gap-1">
        {extra.map((item) => (
          <a key={item.href} href={item.href} className="rounded-2xl px-3 py-3 text-lg hover:bg-navy">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function SearchSheet({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const { items } = useLiveWire();
  const [q, setQ] = useState("");
  const hits = useMemo(() => {
    const query = q.trim().toLowerCase();
    const pool = query
      ? items.filter((item) => `${item.title} ${item.summary} ${item.source}`.toLowerCase().includes(query))
      : items;
    return pool.slice(0, 6);
  }, [q, items]);
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/70 p-4 pt-20 backdrop-blur-sm">
      <div className="panel w-full max-w-xl p-4">
        <div className="mb-3 flex items-center gap-2">
          <Search className="size-4 text-cyan" />
          <input
            autoFocus
            value={q}
            onChange={(event) => setQ(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                navigate({ to: "/search", search: { q, category: "all", horizon: "all", importance: "all", country: "all" } });
              }
            }}
            placeholder="People, countries, companies, events"
            className="h-11 w-full bg-transparent text-fg outline-none placeholder:text-faint"
          />
          <button type="button" onClick={onClose} aria-label="Close search" className="inline-flex size-10 items-center justify-center">
            <X className="size-4" />
          </button>
        </div>
        <div className="grid gap-1">
          {hits.map((item) => (
            <Link key={item.id} to="/wire/$id" params={{ id: item.id }} className="rounded-xl px-3 py-3 hover:bg-navy-2">
              <p className="text-xs tracking-widest text-cyan">{item.source.toUpperCase()} · {item.category.toUpperCase()}</p>
              <p>{item.title}</p>
            </Link>
          ))}
          {!hits.length ? <p className="px-3 py-3 text-sm text-muted">No live matches yet.</p> : null}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line pb-24 lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">ORBITAL</p>
          <p className="mt-3 max-w-sm text-muted">The world moves. We make sense of it.</p>
          <p className="mt-4 max-w-md text-sm text-faint">
            The live wire republishes current headlines from BBC, The Guardian, The New York Times, Al Jazeera, NPR, France 24, and other outlets on the wire, with a link to each original.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-muted">
          <Link to="/page/$slug" params={{ slug: "about" }} className="hover:text-fg">About</Link>
          <Link to="/page/$slug" params={{ slug: "standards" }} className="hover:text-fg">Editorial standards</Link>
          <Link to="/page/$slug" params={{ slug: "sources" }} className="hover:text-fg">Sources</Link>
          <Link to="/page/$slug" params={{ slug: "privacy" }} className="hover:text-fg">Privacy</Link>
          <Link to="/page/$slug" params={{ slug: "terms" }} className="hover:text-fg">Terms</Link>
        </div>
        <div className="grid content-start gap-2 text-sm text-muted">
          <Link to="/page/$slug" params={{ slug: "contact" }} className="hover:text-fg">Contact</Link>
          <Link to="/page/$slug" params={{ slug: "careers" }} className="hover:text-fg">Careers</Link>
          <Link to="/briefing" className="hover:text-fg">Newsletter</Link>
          <p className="pt-3 text-faint">X · LinkedIn · YouTube</p>
        </div>
      </div>
      <p className="border-t border-line px-4 py-4 text-center text-xs tracking-widest text-faint">
        THE WORLD MOVES. WE MAKE SENSE OF IT.
      </p>
    </footer>
  );
}

export function Newsletter() {
  const email = usePrefs((state) => state.briefingEmail);
  const save = usePrefs((state) => state.saveBriefing);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="panel relative overflow-hidden p-8 md:p-12">
        <div className="ambient pointer-events-none absolute inset-0" />
        <div className="relative max-w-xl">
          <p className="kicker">The morning five</p>
          <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">Know the world before the world catches up.</h2>
          <p className="mt-3 text-muted">Five minutes. The developments that matter. Every morning. Saved on this device until a list is connected.</p>
          {email ? (
            <p className="mt-6 text-cyan">You’re on the desk list as {email}.</p>
          ) : (
            <form
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                  setError("Enter a valid email.");
                  return;
                }
                save(value.trim());
                setError("");
              }}
            >
              <input
                type="email"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border border-line bg-ink px-4 outline-none focus:border-cyan"
              />
              <button type="submit" className="h-12 rounded-full bg-cyan px-5 font-semibold text-ink">
                Get the briefing
              </button>
            </form>
          )}
          {error ? <p className="mt-2 text-sm text-live">{error}</p> : null}
        </div>
      </div>
    </section>
  );
}
