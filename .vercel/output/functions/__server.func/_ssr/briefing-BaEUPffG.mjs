import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as dailyFive, d as storyById, h as weekAhead, p as trends, t as DESK_DATE } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro, _ as useLiveWire, m as WireCard } from "./router-ZocDxqX9.mjs";
import { n as Shell, t as Newsletter } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/briefing-BaEUPffG.js
var import_jsx_runtime = require_jsx_runtime();
function BriefingPage() {
	const { items, status } = useLiveWire();
	const live = items.slice(0, 5);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Daily briefing",
			title: "The daily 5, live.",
			lede: "Five reports on the wire right now, then the desk’s standing notes. The wire is the news. The notes below are a labeled sample."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-2",
			children: [live.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireCard, { item }, item.id)), status === "loading" && !live.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Pulling today’s wire…"
			}) : null]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-3xl gap-4 px-4 pt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "kicker",
				children: ["Desk notes · ", DESK_DATE]
			}), dailyFive.map((item, index) => {
				const story = "id" in item && item.id ? storyById(item.id) : void 0;
				const trend = "trendId" in item ? trends.find((entry) => entry.id === item.trendId) : void 0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "panel p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs tracking-widest text-cyan",
							children: [
								"0",
								index + 1,
								" — ",
								item.kicker.toUpperCase()
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-2 text-2xl",
							children: story?.headline ?? trend?.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: story?.why ?? trend?.why
						}),
						story ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/story/$id",
							params: { id: story.id },
							className: "mt-3 inline-flex text-sm text-cyan",
							children: "Read the note"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trends",
							className: "mt-3 inline-flex text-sm text-cyan",
							children: "Open the radar"
						})
					]
				}, item.kicker);
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "The week ahead"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-3",
					children: weekAhead.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 border-b border-line py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-14 text-sm text-violet",
							children: item.day
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: item.note
						})] })]
					}, item.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/week",
					className: "mt-4 inline-flex text-sm text-cyan",
					children: "Full week"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
	] });
}
//#endregion
export { BriefingPage as component };
