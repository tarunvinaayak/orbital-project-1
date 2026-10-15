import { C as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as Route$3 } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page._slug-CJKrrsOL.js
var import_jsx_runtime = require_jsx_runtime();
var pages = {
	about: {
		title: "About ORBITAL",
		body: ["ORBITAL is a global intelligence desk. It is built to answer one question: what is happening, and why does it matter?", "The interface you are reading is a sample briefing dated 14 Oct 2026. It shows the product — map, impact, forecast, signals — without pretending to be a live wire service."]
	},
	standards: {
		title: "Editorial standards",
		body: ["Fact, analysis, and forecast are labeled and kept apart. A forecast is never written as if it has already happened.", "Confidence is stated. When the desk does not know, it says so. Sample notes on this build are composed briefings, not reported dispatches."]
	},
	sources: {
		title: "Sources",
		body: ["Each note lists the kinds of inputs it was composed from: communiqués, filings, lab notes, tapes. They are desk inputs for the sample, not links to outside articles.", "Open Sources on any story to see the list and the confidence call."]
	},
	privacy: {
		title: "Privacy",
		body: ["Topic choices and the morning-briefing email are stored in this browser only. They are not sent to a server by this sample.", "If you sign in, the account is handled by the app’s sign-in provider. ORBITAL does not sell a profile."]
	},
	terms: {
		title: "Terms",
		body: ["This sample is an interface demonstration. It is not investment, policy, or safety advice.", "Do not treat a forecast label as a promise. The world moves; a desk can be wrong."]
	},
	contact: {
		title: "Contact",
		body: ["The desk reads through the World AI page and the story notes. For this sample there is no separate newsroom inbox."]
	},
	careers: {
		title: "Careers",
		body: ["ORBITAL hires people who can separate a fact from a wish, and who can say why a development matters in one clean paragraph."]
	}
};
function StaticPage() {
	const { slug } = Route$3.useParams();
	const page = pages[slug];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "ORBITAL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl font-bold",
				children: page?.title ?? "Not on this desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-4 text-muted",
				children: (page?.body ?? ["That page is not part of the desk."]).map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-flex text-sm text-cyan",
				children: "Back home"
			})
		]
	}) });
}
//#endregion
export { StaticPage as component };
