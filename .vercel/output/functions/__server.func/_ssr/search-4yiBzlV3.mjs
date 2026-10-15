import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link, x as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as categoryMeta } from "./live-wire-CNd0IxE-.mjs";
import { _ as useLiveWire, f as Route$8, h as formatAgo, v as useNow } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-4yiBzlV3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const params = Route$8.useSearch();
	const navigate = useNavigate();
	const { items, status } = useLiveWire();
	const now = useNow();
	const [q, setQ] = (0, import_react.useState)(params.q);
	const sources = ["all", ...new Set(items.map((item) => item.source))];
	const query = params.q.trim().toLowerCase();
	const list = items.filter((item) => {
		if (query && !`${item.title} ${item.summary} ${item.source} ${item.place}`.toLowerCase().includes(query)) return false;
		if (params.category !== "all" && item.category !== params.category) return false;
		if (params.country !== "all" && item.source !== params.country) return false;
		const age = now - Date.parse(item.publishedAt);
		if (params.horizon === "day" && age > 864e5) return false;
		if (params.horizon === "week" && age > 6048e5) return false;
		if (params.importance === "high" && age > 216e5) return false;
		return true;
	});
	const push = (patch) => {
		navigate({
			to: "/search",
			search: {
				...params,
				q,
				...patch
			}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Search the wire"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl font-bold",
				children: "Find what’s live."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					push({ q });
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (event) => setQ(event.target.value),
					placeholder: "People, countries, companies, technologies",
					className: "h-12 flex-1 rounded-full border border-line bg-navy px-4 outline-none focus:border-cyan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "h-12 rounded-full bg-cyan px-5 font-semibold text-ink",
					children: "Search"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Time",
						value: params.horizon,
						onChange: (horizon) => push({ horizon }),
						options: [
							["all", "Any time"],
							["day", "24 hours"],
							["week", "7 days"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Desk",
						value: params.category,
						onChange: (category) => push({ category }),
						options: [["all", "All desks"], ...Object.keys(categoryMeta).map((key) => [key, categoryMeta[key].label])]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Freshness",
						value: params.importance,
						onChange: (importance) => push({ importance }),
						options: [["all", "Any"], ["high", "Last 6 hours"]]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
						label: "Source",
						value: sources.includes(params.country) ? params.country : "all",
						onChange: (country) => push({ country }),
						options: sources.map((source) => [source, source === "all" ? "All sources" : source])
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm text-faint",
				children: status === "loading" && !items.length ? "Pulling the wire…" : `${list.length} live reports`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3",
				children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wire/$id",
					params: { id: item.id },
					className: "panel px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-widest text-cyan",
							children: [
								item.source.toUpperCase(),
								" · ",
								categoryMeta[item.category].label.toUpperCase()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-1 text-xl",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted",
							children: [formatAgo(item.publishedAt, now), item.place ? ` · ${item.place}` : ""]
						})
					]
				}, item.id))
			})
		]
	}) });
}
function Select({ label, value, onChange, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-xs text-faint",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
			value,
			onChange: (event) => onChange(event.target.value),
			className: "mt-1 block h-10 rounded-full border border-line bg-navy px-3 text-sm text-fg",
			children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: option[0],
				children: option[1]
			}, option[0]))
		})]
	});
}
//#endregion
export { SearchPage as component };
