import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as storyById, n as ago, r as categoryMeta, u as stories } from "./live-wire-CNd0IxE-.mjs";
import { T as toneFor, b as Importance, c as Route$2, x as LabelPill, y as ImpactBar } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/story._id-BYD3a13K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StoryPage() {
	const { id } = Route$2.useParams();
	const story = storyById(id);
	const [open, setOpen] = (0, import_react.useState)(false);
	if (!story) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "That note is not on the desk."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/news",
			className: "mt-4 inline-flex text-cyan",
			children: "Back to the world"
		})]
	}) });
	const related = stories.filter((item) => item.id !== story.id && (item.category === story.category || item.tags.some((tag) => story.tags.includes(tag)))).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `text-xs font-semibold tracking-widest ${toneFor(story.category)}`,
				children: categoryMeta[story.category].label.toUpperCase()
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl font-bold leading-tight md:text-5xl",
				children: story.headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: story.summary
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap items-center gap-4 text-sm text-faint",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						story.location,
						", ",
						story.country
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ago(story.minutesAgo) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Updated with the ",
						story.confidence,
						" confidence sample"
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Importance, { n: story.importance })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactBar, { value: story.impact })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "FACT",
						title: "What happened",
						body: story.what
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "ANALYSIS",
						title: "Why it matters",
						body: story.why
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "FACT",
						title: "Who is affected",
						body: story.who
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "FORECAST",
						title: "What happens next",
						body: story.next
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm tracking-widest text-cyan",
					children: [
						"COMPILED FROM ",
						story.sources.length,
						" DESK INPUTS"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((value) => !value),
					className: "h-10 rounded-full border border-line px-4 text-sm",
					children: open ? "Hide sources" : "Sources"
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "panel mt-3 grid gap-2 p-4 text-sm text-muted",
				children: [story.sources.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [source, " · sample input, not an outside citation"] }, source)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Confidence: ",
					story.confidence,
					". Forecasts are labeled and are not presented as fact."
				] })]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Related"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid gap-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/story/$id",
						params: { id: item.id },
						className: "panel px-4 py-3",
						children: item.headline
					}, item.id))
				})]
			})
		]
	}) });
}
function Block({ label, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "panel p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelPill, { label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-lg font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: body
			})
		]
	});
}
//#endregion
export { StoryPage as component };
