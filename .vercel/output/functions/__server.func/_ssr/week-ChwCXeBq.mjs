import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as weekAhead, m as watch } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/week-ChwCXeBq.js
var import_jsx_runtime = require_jsx_runtime();
function WeekPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Weekly intelligence",
		title: "The week ahead.",
		lede: "What to watch: announcements, windows, markups, and the decisions that would make a note into a story."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 pb-16 md:grid-cols-2",
		children: [weekAhead.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan",
					children: item.day.toUpperCase()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-2xl",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: item.note
				})
			]
		}, item.title)), watch.filter((item) => item.horizon === "7d" || item.horizon === "24h").map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tracking-widest text-violet",
					children: [
						item.kind.toUpperCase(),
						" · ",
						item.horizon.toUpperCase()
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-2 text-2xl",
					children: item.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: item.detail
				})
			]
		}, item.id))]
	})] });
}
//#endregion
export { WeekPage as component };
