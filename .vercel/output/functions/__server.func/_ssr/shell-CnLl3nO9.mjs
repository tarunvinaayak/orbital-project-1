import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link, p as useRouterState, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Radio, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { _ as useLiveWire, h as formatAgo, r as hasGateSessionMarker, v as useNow } from "./router-ZocDxqX9.mjs";
import { r as signOut, t as authClient } from "./client-TItMYXnu.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CnLl3nO9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Current user + loading state. Same behavior in live preview and when deployed:
*   - Auth enabled -> the real signed-in user; `user` is `null` while
*                            the session resolves (`isPending: true`) and when
*                            signed out (`isPending: false`). Session comes from
*                            Better Auth `useSession()` → `/api/auth/get-session`
*                            (cookie when deployed; bearer in live preview).
*   - Auth disabled (`VITE_AUTH_ENABLED=false`) -> `DEV_USER`, never pending.
*
* Protect a route by waiting out `isPending` before acting on `user` —
* redirecting on `user: null` alone bounces signed-in visitors to sign-in on
* every hard reload:
*
*   import { RedirectToSignIn } from "@/lib/auth/gates";
*   const { user, isPending } = useCurrentUserState();
*   if (isPending) return null;              // still resolving — don't redirect yet
*   if (!user) return <RedirectToSignIn />;  // definitely signed out
*
* `authEnabled` is a module-level constant fixed at load, so the guarded hook
* call keeps a stable hook order across every render of a given component.
*/
function useCurrentUserState() {
	return useSessionUserState();
}
function useSessionUserState() {
	const { data, isPending } = authClient.useSession();
	const id = data?.user.id;
	const displayName = data?.user.name ?? null;
	const primaryEmail = data?.user.email ?? null;
	const profileImageUrl = data?.user.image ?? null;
	const user = (0, import_react.useMemo)(() => id ? {
		id,
		displayName,
		primaryEmail,
		profileImageUrl,
		isDevFallback: false
	} : null, [
		id,
		displayName,
		primaryEmail,
		profileImageUrl
	]);
	return (0, import_react.useMemo)(() => ({
		user,
		isPending
	}), [user, isPending]);
}
/**
* Convenience view of `useCurrentUserState().user` for display (e.g.
* `user?.displayName ?? "Guest"`). NOTE: `null` means *loading OR signed out* —
* for redirects/guards use `useCurrentUserState()` and check `isPending`.
*/
function useCurrentUser() {
	return useCurrentUserState().user;
}
var subscribeToNothing = () => () => {};
var noGateSessionOnServer = () => false;
/** Render children only when a user is present (real session, or the disabled-auth dev user). */
function SignedIn({ children }) {
	const { user } = useCurrentUserState();
	return user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children }) : null;
}
/**
* Render children only once we KNOW the visitor is signed out (`isPending` has
* cleared and there is no user). Hidden while the session is still loading.
*/
function SignedOut({ children }) {
	const { user, isPending } = useCurrentUserState();
	if (isPending || user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
/**
* Minimal signed-in identity chip + sign-out. Restyle freely (see the
* `design-ui` skill). Sign-out is only shown when auth is enabled (the
* disabled-auth dev user has nothing to sign out of) and the session is not
* gate-materialized — behind the gate the next request signs the viewer
* straight back in, so a sign-out control there is a broken loop.
*/
function UserButton() {
	const user = useCurrentUser();
	const [signingOut, setSigningOut] = (0, import_react.useState)(false);
	const gateSession = (0, import_react.useSyncExternalStore)(subscribeToNothing, hasGateSessionMarker, noGateSessionOnServer);
	if (!user) return null;
	const label = user.displayName ?? user.primaryEmail ?? "Account";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [
			user.profileImageUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: user.profileImageUrl,
				alt: "",
				className: "h-8 w-8 rounded-full object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-black/10 text-sm font-medium dark:bg-white/20",
				children: label.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm font-medium",
				children: label
			}),
			!gateSession && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				disabled: signingOut,
				onClick: () => {
					setSigningOut(true);
					signOut().catch(() => setSigningOut(false));
				},
				className: "cursor-pointer text-sm underline-offset-4 opacity-70 hover:underline disabled:cursor-wait disabled:no-underline",
				children: signingOut ? "Signing out…" : "Sign out"
			})
		]
	});
}
var TOPICS = [
	"AI",
	"India",
	"Markets",
	"Startups",
	"Space",
	"Technology",
	"Business",
	"Climate"
];
var usePrefs = create()(persist((set, get) => ({
	topics: [],
	toggleTopic: (topic) => {
		set({ topics: get().topics.includes(topic) ? get().topics.filter((item) => item !== topic) : [...get().topics, topic] });
	},
	briefingEmail: null,
	saveBriefing: (email) => set({ briefingEmail: email })
}), {
	name: "orbital-prefs",
	skipHydration: true
}));
function Shell({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const path = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		usePrefs.persist.rehydrate();
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setSearchOpen(false);
	}, [path]);
	(0, import_react.useEffect)(() => {
		const onKey = (event) => {
			if (event.key === "/" && !(event.target instanceof HTMLInputElement) && !(event.target instanceof HTMLTextAreaElement)) {
				event.preventDefault();
				setSearchOpen(true);
			}
			if (event.key === "Escape") setSearchOpen(false);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line/80 bg-ink/80 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-6xl items-center gap-3 px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "font-display text-lg font-bold tracking-wide",
							children: "ORBITAL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "ml-4 hidden items-center gap-4 lg:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/news",
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "World"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk/$slug",
									params: { slug: "business" },
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Business"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk/$slug",
									params: { slug: "technology" },
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Technology"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk/$slug",
									params: { slug: "science" },
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Science"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk/$slug",
									params: { slug: "markets" },
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Markets"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk/$slug",
									params: { slug: "climate" },
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Climate"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/desk/$slug",
									params: { slug: "culture" },
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Culture"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/ideas",
									className: "text-sm text-muted hover:text-fg",
									activeProps: { className: "text-sm text-cyan" },
									children: "Ideas"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setSearchOpen(true),
									className: "inline-flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm text-muted hover:text-fg",
									"aria-label": "Search",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Search"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/live",
									className: "inline-flex h-10 items-center gap-2 rounded-full border border-line px-3 text-sm text-fg",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-ping size-2 rounded-full bg-live" }), "Live"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthSlot, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex size-10 items-center justify-center rounded-full border border-line lg:hidden",
									onClick: () => setOpen(true),
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ticker, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ink/90 backdrop-blur-xl lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-5 px-2 py-2 text-center text-xs text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
							to: "/",
							label: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
							to: "/live",
							label: "Live"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
							to: "/news",
							label: "Explore"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
							to: "/trends",
							label: "Trends"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
							to: "/profile",
							label: "Profile"
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSheet, { onClose: () => setOpen(false) }) : null,
			searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchSheet, { onClose: () => setSearchOpen(false) }) : null
		]
	});
}
function AuthSlot() {
	const { isPending } = useCurrentUserState();
	if (isPending) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden size-8 animate-pulse rounded-full bg-navy-2 sm:inline-block" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "hidden max-w-52 overflow-hidden sm:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedIn, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignedOut, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/login",
			className: "text-sm text-fg",
			children: "Sign in"
		}) })]
	});
}
function Tab({ to, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className: "flex min-h-11 items-center justify-center",
		activeOptions: { exact: to === "/" },
		activeProps: { className: "flex min-h-11 items-center justify-center text-cyan" },
		children: label
	});
}
function Ticker() {
	const { items, status } = useLiveWire();
	const now = useNow();
	const lead = items.slice(0, 12);
	const row = [...lead, ...lead];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "marquee flex items-center gap-3 border-t border-line/70 bg-navy/60",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex shrink-0 items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest text-live",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-3" }), "LIVE"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			children: row.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track",
				children: row.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wire/$id",
					params: { id: item.id },
					className: "mr-10 inline-flex items-center gap-3 py-2 text-sm text-muted hover:text-fg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.source }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatAgo(item.publishedAt, now) })
					]
				}, `${item.id}-${index}`))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "py-2 text-sm text-muted",
				children: status === "error" ? "Wire quiet — retry from Live" : "Connecting to the wire…"
			})
		})]
	});
}
function MenuSheet({ onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-ink/95 p-5 lg:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl",
				children: "ORBITAL"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Close menu",
				className: "inline-flex size-11 items-center justify-center rounded-full border border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-1",
			children: [
				{
					href: "/live",
					label: "Live World"
				},
				{
					href: "/news",
					label: "Global News"
				},
				{
					href: "/desk/geopolitics",
					label: "Geopolitics"
				},
				{
					href: "/future",
					label: "Future Watch"
				},
				{
					href: "/trends",
					label: "Trend Radar"
				},
				{
					href: "/ideas",
					label: "Idea Engine"
				},
				{
					href: "/briefing",
					label: "Daily Briefing"
				},
				{
					href: "/week",
					label: "The Week Ahead"
				},
				{
					href: "/analyst",
					label: "World AI"
				},
				{
					href: "/profile",
					label: "Your World"
				},
				{
					href: "/search",
					label: "Search"
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				className: "rounded-2xl px-3 py-3 text-lg hover:bg-navy",
				children: item.label
			}, item.href))
		})]
	});
}
function SearchSheet({ onClose }) {
	const navigate = useNavigate();
	const { items } = useLiveWire();
	const [q, setQ] = (0, import_react.useState)("");
	const hits = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		return (query ? items.filter((item) => `${item.title} ${item.summary} ${item.source}`.toLowerCase().includes(query)) : items).slice(0, 6);
	}, [q, items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-start justify-center bg-ink/70 p-4 pt-20 backdrop-blur-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel w-full max-w-xl p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-cyan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						autoFocus: true,
						value: q,
						onChange: (event) => setQ(event.target.value),
						onKeyDown: (event) => {
							if (event.key === "Enter") navigate({
								to: "/search",
								search: {
									q,
									category: "all",
									horizon: "all",
									importance: "all",
									country: "all"
								}
							});
						},
						placeholder: "People, countries, companies, events",
						className: "h-11 w-full bg-transparent text-fg outline-none placeholder:text-faint"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						"aria-label": "Close search",
						className: "inline-flex size-10 items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-1",
				children: [hits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wire/$id",
					params: { id: item.id },
					className: "rounded-xl px-3 py-3 hover:bg-navy-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-widest text-cyan",
						children: [
							item.source.toUpperCase(),
							" · ",
							item.category.toUpperCase()
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.title })]
				}, item.id)), !hits.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 py-3 text-sm text-muted",
					children: "No live matches yet."
				}) : null]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line pb-24 lg:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-2xl",
							children: "ORBITAL"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-sm text-muted",
							children: "The world moves. We make sense of it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm text-faint",
							children: "The live wire republishes current headlines from BBC, The Guardian, The New York Times, Al Jazeera, NPR, France 24, and other outlets on the wire, with a link to each original."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "about" },
							className: "hover:text-fg",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "standards" },
							className: "hover:text-fg",
							children: "Editorial standards"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "sources" },
							className: "hover:text-fg",
							children: "Sources"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "privacy" },
							className: "hover:text-fg",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "terms" },
							className: "hover:text-fg",
							children: "Terms"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid content-start gap-2 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "contact" },
							className: "hover:text-fg",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/page/$slug",
							params: { slug: "careers" },
							className: "hover:text-fg",
							children: "Careers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/briefing",
							className: "hover:text-fg",
							children: "Newsletter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pt-3 text-faint",
							children: "X · LinkedIn · YouTube"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "border-t border-line px-4 py-4 text-center text-xs tracking-widest text-faint",
			children: "THE WORLD MOVES. WE MAKE SENSE OF IT."
		})]
	});
}
function Newsletter() {
	const email = usePrefs((state) => state.briefingEmail);
	const save = usePrefs((state) => state.saveBriefing);
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel relative overflow-hidden p-8 md:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient pointer-events-none absolute inset-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "The morning five"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-3 text-3xl font-bold md:text-4xl",
						children: "Know the world before the world catches up."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted",
						children: "Five minutes. The developments that matter. Every morning. Saved on this device until a list is connected."
					}),
					email ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-cyan",
						children: [
							"You’re on the desk list as ",
							email,
							"."
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						onSubmit: (event) => {
							event.preventDefault();
							if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
								setError("Enter a valid email.");
								return;
							}
							save(value.trim());
							setError("");
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							value,
							onChange: (event) => setValue(event.target.value),
							placeholder: "Enter your email",
							className: "h-12 flex-1 rounded-full border border-line bg-ink px-4 outline-none focus:border-cyan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "h-12 rounded-full bg-cyan px-5 font-semibold text-ink",
							children: "Get the briefing"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-live",
						children: error
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { TOPICS as a, usePrefs as c, SignedOut as i, Shell as n, UserButton as o, SignedIn as r, useCurrentUserState as s, Newsletter as t };
