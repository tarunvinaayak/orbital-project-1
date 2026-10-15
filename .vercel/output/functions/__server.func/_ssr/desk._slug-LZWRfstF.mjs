import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as categoryMeta } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro, _ as useLiveWire, d as Route$5, m as WireCard } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk._slug-LZWRfstF.js
var import_jsx_runtime = require_jsx_runtime();
var slugs = Object.keys(categoryMeta);
function DeskPage() {
	const { slug } = Route$5.useParams();
	const { items, status } = useLiveWire();
	if (!slugs.includes(slug)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Desk",
		title: "That desk is not on the floor.",
		lede: "Try World, or one of the desks in the menu."
	}) });
	const category = slug;
	const list = items.filter((item) => item.category === category);
	const group = categoryMeta[category].label;
	const sources = [...new Set(list.map((item) => item.source))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: `${group} · live`,
		title: group,
		lede: "Live reports on this desk, refreshed from the wire. Each one opens at the outlet that published it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 pb-16 lg:grid-cols-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:col-span-2 md:grid-cols-2",
			children: [list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireCard, { item }, item.id)), !list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: status === "loading" ? "Pulling this desk…" : "Nothing on this desk in the current wire. It will fill as outlets publish."
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
			className: "grid content-start gap-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "On the wire"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-3 text-4xl",
						children: list.length
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "live reports"
					}),
					sources.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-faint",
						children: sources.slice(0, 6).join(" · ")
					}) : null
				]
			})
		})]
	})] });
}
//#endregion
export { DeskPage as component };
