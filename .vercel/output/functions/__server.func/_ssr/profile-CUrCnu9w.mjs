import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as useLiveWire, g as matchesTopic, m as WireCard } from "./router-ZocDxqX9.mjs";
import { a as TOPICS, c as usePrefs, i as SignedOut, n as Shell, o as UserButton, r as SignedIn, s as useCurrentUserState } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-CUrCnu9w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const topics = usePrefs((state) => state.topics);
	const toggle = usePrefs((state) => state.toggleTopic);
	const [ready, setReady] = (0, import_react.useState)(false);
	const { user, isPending } = useCurrentUserState();
	const { items, status } = useLiveWire();
	(0, import_react.useEffect)(() => setReady(true), []);
	const chosen = ready ? topics : [];
	const feed = chosen.length ? items.filter((item) => chosen.some((topic) => matchesTopic(item, topic))) : items.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "kicker",
				children: "Your world"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-4xl font-bold",
				children: "The live slice you asked for."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel mt-6 p-5",
				children: [
					isPending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-40 animate-pulse rounded-full bg-navy-2" }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SignedIn, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							"Signed in as ",
							user?.displayName ?? user?.primaryEmail ?? "your account",
							"."
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserButton, {})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SignedOut, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Topics stay on this device. Sign in if you want the account on this desk."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "mt-3 inline-flex h-10 items-center rounded-full bg-cyan px-4 text-sm font-semibold text-ink",
						children: "Sign in"
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: TOPICS.map((topic) => {
					const on = chosen.includes(topic);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => toggle(topic),
						className: on ? "h-11 rounded-full bg-cyan px-4 text-sm font-semibold text-ink" : "h-11 rounded-full border border-line px-4 text-sm text-muted",
						children: topic
					}, topic);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-faint",
				children: status === "loading" && !items.length ? "Pulling the wire…" : chosen.length ? "Live reports matching your topics." : "Pick topics to shape the live feed. Until then, the newest reports."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-2",
				children: [feed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WireCard, { item }, item.id)), status !== "loading" && !feed.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "No live reports match those topics yet."
				}) : null]
			})
		]
	}) });
}
//#endregion
export { ProfilePage as component };
