import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as storyById, l as industries } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro, u as Route$4, w as StoryCard } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industry._slug-DTVI1F5e.js
var import_jsx_runtime = require_jsx_runtime();
function IndustryPage() {
	const { slug } = Route$4.useParams();
	const industry = industries.find((item) => item.slug === slug);
	if (!industry) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Industry",
		title: "No desk by that name.",
		lede: "Pick a sector from the list on any story’s related industry link."
	}) });
	const notes = industry.stories.map((id) => storyById(id)).filter((story) => story !== void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "Industry intelligence",
			title: industry.name,
			lede: industry.line
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 md:grid-cols-4",
			children: [
				["Signal", industry.signal],
				["Emerging", industry.tech],
				["Upcoming", industry.event],
				["Companies", industry.companies.join(", ") || "None named in this sample"]
			].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-faint",
					children: label.toUpperCase()
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm",
					children: value
				})]
			}, label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-4 px-4 py-8 md:grid-cols-2",
			children: notes.map((story) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, { story }, story.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-16",
			children: industries.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/industry/$slug",
				params: { slug: item.slug },
				className: "rounded-full border border-line px-3 py-2 text-sm text-muted hover:text-fg",
				children: item.name
			}, item.slug))
		})
	] });
}
//#endregion
export { IndustryPage as component };
