import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as trends } from "./live-wire-CNd0IxE-.mjs";
import { C as Spark, S as PageIntro } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trends-CMnAYlel.js
var import_jsx_runtime = require_jsx_runtime();
function TrendsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Trend radar",
		title: "See what’s next.",
		lede: "Momentum inside this sample desk. The series are constructed so you can read direction — they are not a live market tape."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-2",
		children: trends.map((trend) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-faint",
						children: trend.group.toUpperCase()
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: trend.direction === "down" ? "text-down" : "text-cyan",
						children: trend.direction === "flat" ? "Flat" : `+${trend.momentum}%`
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-2xl",
					children: trend.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spark, { series: trend.series }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					children: trend.line
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted",
					children: ["Why it matters. ", trend.why]
				})
			]
		}, trend.id))
	})] });
}
//#endregion
export { TrendsPage as component };
