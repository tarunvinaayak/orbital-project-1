import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as watch } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/future-BcjFGYAq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var horizons = [
	"24h",
	"7d",
	"30d",
	"12m"
];
function FuturePage() {
	const [horizon, setHorizon] = (0, import_react.useState)("all");
	const list = watch.filter((item) => horizon === "all" || item.horizon === horizon);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Future watch",
		title: "The clock after the headline.",
		lede: "Developments that could become the story in the next day, week, month, or year. Each one has a tell."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizonChip, {
				on: horizon === "all",
				onClick: () => setHorizon("all"),
				children: "All"
			}), horizons.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizonChip, {
				on: horizon === item,
				onClick: () => setHorizon(item),
				children: item
			}, item))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-6 border-l border-line",
			children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "relative py-4 pl-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-6 -left-1 size-2 rounded-full bg-cyan" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs tracking-widest text-violet",
						children: [
							item.horizon.toUpperCase(),
							" · ",
							item.kind.toUpperCase()
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-1 text-2xl",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: item.detail
					})
				]
			}, item.id))
		})]
	})] });
}
function HorizonChip({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: on ? "h-10 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-10 rounded-full border border-line px-4 text-sm text-muted",
		children
	});
}
//#endregion
export { FuturePage as component };
