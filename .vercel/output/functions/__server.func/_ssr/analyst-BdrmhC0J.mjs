import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerFn } from "./ssr.mjs";
import { i as createSsrRpc } from "./live-wire-CNd0IxE-.mjs";
import { S as PageIntro, x as LabelPill } from "./router-ZocDxqX9.mjs";
import { n as Shell } from "./shell-CnLl3nO9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analyst-BdrmhC0J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var askAnalyst = createServerFn({ method: "POST" }).validator((input) => {
	const clean = (typeof input === "object" && input && "question" in input ? String(input.question) : "").trim().slice(0, 400);
	if (clean.length < 2) throw new Error("Ask a fuller question.");
	return { question: clean };
}).handler(createSsrRpc("aa3c1d06df3b1855dfdcf1fcd51ca5b25c313b1ffcc37907b305cedb0e36b497"));
var prompts = [
	"What are the biggest developments today?",
	"Why is this important?",
	"What could happen next?",
	"How does this affect India?",
	"Show me the biggest technology trends.",
	"Explain this story like I'm 12.",
	"Compare today's developments with last month."
];
function AnalystPage() {
	const [question, setQuestion] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [turns, setTurns] = (0, import_react.useState)([]);
	const ask = async (text) => {
		const clean = text.trim();
		if (clean.length < 2 || pending) return;
		setPending(true);
		setError("");
		try {
			const answer = await askAnalyst({ data: { question: clean } });
			setTurns((current) => [...current, {
				question: clean,
				answer
			}]);
			setQuestion("");
		} catch {
			setError("The desk could not answer that. Try a shorter question.");
		} finally {
			setPending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "World AI",
		title: "Ask the desk.",
		lede: "Answers are grounded in the live wire. Fact, analysis, and forecast stay apart. If the headlines do not cover it, the desk says so."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2 overflow-x-auto pb-4",
				children: prompts.map((prompt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => ask(prompt),
					className: "h-10 shrink-0 rounded-full border border-line px-3 text-sm text-muted hover:text-fg",
					children: prompt
				}, prompt))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4",
				children: turns.map((turn) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-faint",
						children: ["You · ", turn.question]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "panel p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-widest text-cyan",
								children: turn.answer.mode === "model" ? "WORLD AI" : "DESK BRIEF"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display mt-2 text-2xl",
								children: turn.answer.headline
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 grid gap-3",
								children: turn.answer.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelPill, { label: section.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: section.text
								})] }, section.label))
							})
						]
					})]
				}, turn.question))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				onSubmit: (event) => {
					event.preventDefault();
					ask(question);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: question,
					onChange: (event) => setQuestion(event.target.value),
					placeholder: "Ask what matters, and why",
					className: "h-12 flex-1 rounded-full border border-line bg-navy px-4 outline-none focus:border-cyan"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: pending,
					className: "h-12 rounded-full bg-cyan px-5 font-semibold text-ink disabled:opacity-60",
					children: pending ? "Reading…" : "Ask"
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-live",
				children: error
			}) : null
		]
	})] });
}
//#endregion
export { AnalystPage as component };
