import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as toneOf, r as categoryMeta } from "./live-wire-CNd0IxE-.mjs";
import { _ as useLiveWire, h as formatAgo, m as WireCard, v as useNow } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
import { t as Globe } from "./globe-BVvpEFp4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-eEwlINCj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var desks = [
	"all",
	"geopolitics",
	"business",
	"markets",
	"technology",
	"science",
	"climate",
	"culture"
];
function LivePage() {
	const { items, status, updatedAt, error, refresh } = useLiveWire();
	const now = useNow();
	const [desk, setDesk] = (0, import_react.useState)("all");
	const filtered = items.filter((item) => desk === "all" || item.category === desk);
	const placed = filtered.filter((item) => item.lat != null && item.lon != null);
	const [active, setActive] = (0, import_react.useState)(null);
	const current = placed.find((item) => item.id === active) ?? placed[0] ?? filtered[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pb-6 pt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-live",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-ping size-2 rounded-full bg-live" }), "LIVE WORLD"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl font-bold md:text-5xl",
						children: "The map is the wire."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-muted",
						children: "Headlines arriving now. A light marks a story that names a place. Open any report for the outlet’s original."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-faint",
							children: status === "loading" ? "Pulling the wire…" : updatedAt ? `Updated ${formatAgo(updatedAt, now)}` : "Waiting"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: refresh,
							className: "h-10 rounded-full border border-line px-4 text-sm",
							children: "Refresh"
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-4",
				children: desks.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDesk(item),
					className: item === desk ? "h-10 shrink-0 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-10 shrink-0 rounded-full border border-line px-4 text-sm text-muted",
					children: item === "all" ? "All signals" : categoryMeta[item].label
				}, item))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "panel h-80 md:h-[32rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
						points: placed.slice(0, 28).map((item) => ({
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
					children: [
						status === "error" && !filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: error || "The wire is quiet. Try refresh."
						}) : null,
						current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wire/$id",
							params: { id: current.id },
							className: "panel p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs tracking-widest text-cyan",
									children: (current.place || current.source).toUpperCase()
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display mt-2 text-2xl",
									children: current.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 line-clamp-4 text-sm text-muted",
									children: current.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-xs text-faint",
									children: [
										formatAgo(current.publishedAt, now),
										" · ",
										current.source
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-cyan",
									children: "Open the report"
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: status === "loading" ? "Loading live headlines…" : "No reports in this slice."
						}),
						filtered.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(item.id),
							className: "rounded-2xl border border-line px-4 py-3 text-left hover:border-cyan",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs tracking-widest text-faint",
								children: [item.place ? `${item.place} · ` : "", item.source]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-2 text-sm",
								children: item.title
							})]
						}, item.id))
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: filtered.slice(0, 8).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireCard, { item }, item.id))
			})
		]
	}) });
}
//#endregion
export { LivePage as component };
