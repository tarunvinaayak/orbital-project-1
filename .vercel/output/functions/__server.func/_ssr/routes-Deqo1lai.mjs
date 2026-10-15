import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as toneOf, r as categoryMeta } from "./live-wire-CNd0IxE-.mjs";
import { T as toneFor, _ as useLiveWire, h as formatAgo, m as WireCard, v as useNow } from "./router-ZocDxqX9.mjs";
import { n as Shell, t as Newsletter } from "./shell-CnLl3nO9.mjs";
import { t as Globe } from "./globe-BVvpEFp4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Deqo1lai.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DESKS = [
	"geopolitics",
	"business",
	"technology",
	"science",
	"markets",
	"climate",
	"culture"
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pulse, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Matters, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sixty, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskRail, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
	] });
}
function Hero() {
	const { items, status, updatedAt, refresh } = useLiveWire();
	const now = useNow(1e3);
	const clock = new Date(now).toISOString().slice(11, 19);
	const lead = items[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ambient pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid-fade pointer-events-none absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-6xl items-start gap-8 px-4 pb-6 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-live",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-ping size-2 rounded-full bg-live" }), status === "live" ? "LIVE WIRE" : status === "error" ? "WIRE DELAYED" : "CONNECTING"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display mt-4 text-4xl font-bold leading-[1.05] md:text-6xl",
						children: [
							"The world moves.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"We make sense of it."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg text-muted",
						children: "Live intelligence on the events, ideas and breakthroughs shaping tomorrow."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm text-faint",
						children: [
							clock,
							" UTC",
							status === "live" ? ` · ${items.length} live reports · updated ${formatAgo(updatedAt, now)}` : " · pulling headlines from the wire"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/live",
							className: "inline-flex h-12 items-center rounded-full bg-cyan px-5 font-semibold text-ink",
							children: "Open the live wire"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: refresh,
							className: "inline-flex h-12 items-center rounded-full border border-line px-5 text-sm",
							children: "Refresh"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lead, {
					item: lead,
					status
				})]
			})
		]
	});
}
function Lead({ item, status }) {
	const now = useNow();
	const [imageOk, setImageOk] = (0, import_react.useState)(Boolean(item?.image));
	(0, import_react.useEffect)(() => setImageOk(Boolean(item?.image)), [item?.image]);
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "panel p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "kicker",
			children: "Just in"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted",
			children: status === "error" ? "The outlets did not answer. Try refresh." : "Connecting to BBC, The Guardian, The New York Times, Al Jazeera, NPR, and France 24."
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/wire/$id",
		params: { id: item.id },
		className: "panel panel-hover overflow-hidden",
		children: [item.image && imageOk ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: item.image,
			alt: "",
			className: "h-48 w-full object-cover",
			onError: () => setImageOk(false)
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `text-xs font-semibold tracking-widest ${toneFor(item.category)}`,
						children: categoryMeta[item.category].label.toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-live",
						children: "LIVE"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-2xl font-semibold leading-snug",
					children: item.title
				}),
				item.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 line-clamp-3 text-sm text-muted",
					children: item.summary
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs tracking-widest text-faint",
					children: [
						item.source,
						" · ",
						formatAgo(item.publishedAt, now),
						item.place ? ` · ${item.place}` : ""
					]
				})
			]
		})]
	});
}
function Pulse() {
	const { items } = useLiveWire();
	const placed = items.filter((item) => item.lat != null && item.lon != null);
	const [active, setActive] = (0, import_react.useState)(null);
	const current = placed.find((item) => item.id === active) ?? placed[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Global pulse"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-3xl font-bold",
				children: "Where the wire is lighting up"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/live",
				className: "text-sm text-cyan",
				children: "Full map"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "panel h-80 md:h-[28rem]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
					points: placed.slice(0, 24).map((item) => ({
						id: item.id,
						lat: item.lat ?? 0,
						lon: item.lon ?? 0,
						tone: toneOf(item.category)
					})),
					activeId: current?.id,
					onHover: (id) => id && setActive(id),
					onSelect: setActive
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid content-start gap-3",
				children: [current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wire/$id",
					params: { id: current.id },
					className: "panel p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-cyan",
							children: current.place.toUpperCase()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-2 text-2xl",
							children: current.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 line-clamp-3 text-sm text-muted",
							children: current.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-faint",
							children: current.source
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel p-5 text-sm text-muted",
					children: "Places appear as soon as a live headline names a city or country."
				}), placed.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(item.id),
					className: "panel px-4 py-3 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-widest text-faint",
						children: [
							item.place.toUpperCase(),
							" · ",
							item.source
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 line-clamp-2 text-sm",
						children: item.title
					})]
				}, item.id))]
			})]
		})]
	});
}
function Matters() {
	const { items, status } = useLiveWire();
	const list = items.slice(1, 7);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "What matters now"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-3xl font-bold",
				children: "The reports moving right now"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: "Each card is a live headline from the outlet that published it. Open it for the original."
			}),
			status === "loading" && !list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-muted",
				children: "Loading the wire…"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireCard, { item }, item.id))
			})
		]
	});
}
function Sixty() {
	const { items } = useLiveWire();
	const leads = items.slice(0, 5);
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (leads.length < 2) return;
		const timer = window.setInterval(() => setIndex((value) => (value + 1) % leads.length), 5e3);
		return () => window.clearInterval(timer);
	}, [leads.length]);
	const item = leads[index];
	if (!item) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "panel p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "The world in 60 seconds"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs tracking-widest text-faint",
					children: [
						"0",
						index + 1,
						" / 0",
						leads.length,
						" · ",
						item.source
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-3xl font-bold leading-tight",
					children: item.title
				}),
				item.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-3xl text-muted",
					children: item.summary
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/wire/$id",
						params: { id: item.id },
						className: "text-sm text-cyan",
						children: "Open this report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: leads.map((entry, dot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Story ${dot + 1}`,
							onClick: () => setIndex(dot),
							className: dot === index ? "h-1.5 w-8 rounded-full bg-cyan" : "h-1.5 w-4 rounded-full bg-line"
						}, entry.id))
					})]
				})
			]
		})
	});
}
function DeskRail() {
	const { items } = useLiveWire();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Desks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-2 text-3xl font-bold",
				children: "Follow one slice of the world"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [DESKS.map((desk) => {
					const count = items.filter((item) => item.category === desk).length;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/desk/$slug",
						params: { slug: desk },
						className: "panel panel-hover p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-xs font-semibold tracking-widest ${toneFor(desk)}`,
								children: categoryMeta[desk].label.toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-3 text-3xl",
								children: count
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "live reports"
							})
						]
					}, desk);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/analyst",
					className: "panel panel-hover p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-widest text-violet",
						children: "WORLD AI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Ask what the live wire means, without leaving the headlines."
					})]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
