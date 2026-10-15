import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ideas } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ideas-BAgiT2t1.js
var import_jsx_runtime = require_jsx_runtime();
function IdeasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Idea engine",
		title: "Where a problem becomes a brief.",
		lede: "For founders, investors, students, and anyone who reads the news looking for the opening beside it."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto grid max-w-6xl gap-4 px-4 pb-16",
		children: ideas.map((idea) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "panel grid gap-4 p-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-down",
					children: "PROBLEM"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2",
					children: idea.problem
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-cyan",
					children: "EMERGING IDEA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted",
					children: idea.idea
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-violet",
						children: "POTENTIAL OPPORTUNITY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted",
						children: idea.opportunity
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-faint",
						children: ["For ", idea.who]
					})
				] })
			]
		}, idea.id))
	})] });
}
//#endregion
export { IdeasPage as component };
