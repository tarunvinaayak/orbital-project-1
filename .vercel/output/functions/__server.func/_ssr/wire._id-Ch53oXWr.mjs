import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as categoryMeta } from "./live-wire-CNd0IxE-.mjs";
import { T as toneFor, _ as useLiveWire, h as formatAgo, m as WireCard, s as Route$1, v as useNow } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wire._id-Ch53oXWr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WirePage() {
	const { id } = Route$1.useParams();
	const { items, status } = useLiveWire();
	const now = useNow();
	const item = items.find((entry) => entry.id === id);
	const related = item ? items.filter((entry) => entry.id !== item.id && entry.category === item.category).slice(0, 3) : [];
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Live wire"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl",
				children: status === "loading" ? "Pulling this report…" : "This report has left the live wire."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "The wire keeps the latest dispatches. Open the full feed for what is current."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/live",
				className: "mt-6 inline-flex text-cyan",
				children: "Open the live wire"
			})
		]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-xs font-semibold tracking-widest ${toneFor(item.category)}`,
				children: categoryMeta[item.category].label.toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl font-bold leading-tight md:text-5xl",
				children: item.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap items-center gap-3 text-sm text-faint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-live",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-ping size-2 rounded-full bg-live" }), "LIVE"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.source }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatAgo(item.publishedAt, now) })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, { image: item.image }),
			item.summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-lg text-muted",
				children: item.summary
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-8 p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-cyan",
						children: "SOURCE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-muted",
						children: [
							"This is a live report filed by ",
							item.source,
							". The summary above is the outlet’s own text, not an ORBITAL forecast. Open the original for the full piece and anything that has changed since it was published."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.url,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-4 inline-flex h-11 items-center rounded-full bg-cyan px-5 text-sm font-semibold text-ink",
						children: ["Read at ", item.source]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/live",
				className: "mt-6 inline-flex text-sm text-cyan",
				children: "Back to the live wire"
			})
		]
	}), related.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "kicker",
			children: "Also on the wire"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 grid gap-4 md:grid-cols-3",
			children: related.map((entry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireCard, { item: entry }, entry.id))
		})]
	}) : null] });
}
function Figure({ image }) {
	const [ok, setOk] = (0, import_react.useState)(Boolean(image));
	if (!image || !ok) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: image,
		alt: "",
		className: "mt-6 max-h-96 w-full rounded-3xl object-cover",
		onError: () => setOk(false)
	});
}
//#endregion
export { WirePage as component };
