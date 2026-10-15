import { n as createServerFn } from "./ssr.mjs";
import { d as storyById, o as fetchLiveWire, p as trends } from "./live-wire-CNd0IxE-.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/analyst-DF0zINTs.js
var STOP = /* @__PURE__ */ new Set([
	"what",
	"when",
	"where",
	"which",
	"this",
	"that",
	"with",
	"from",
	"have",
	"does",
	"about",
	"today",
	"could",
	"would",
	"should",
	"happening",
	"developments",
	"biggest",
	"explain",
	"story",
	"like",
	"compare",
	"month",
	"important",
	"show"
]);
function wireAnswer(question, items) {
	const words = question.toLowerCase().split(/[^a-z0-9]+/).filter((word) => word.length > 3 && !STOP.has(word));
	const scored = items.map((item) => {
		const blob = `${item.title} ${item.summary} ${item.place}`.toLowerCase();
		return {
			item,
			score: words.reduce((total, word) => total + (blob.includes(word) ? 1 : 0), 0)
		};
	}).filter((entry) => entry.score > 0).sort((a, b) => b.score - a.score);
	const top = (scored.length ? scored.map((entry) => entry.item) : items).slice(0, 4);
	if (!top.length) return {
		mode: "desk",
		headline: "The wire is quiet",
		sections: [
			{
				label: "FACT",
				text: "No live reports are in yet."
			},
			{
				label: "ANALYSIS",
				text: "The desk will not invent a story while the outlets are silent."
			},
			{
				label: "FORECAST",
				text: "Refresh the wire and ask again."
			}
		]
	};
	return {
		mode: "desk",
		headline: top[0].title,
		sections: [
			{
				label: "FACT",
				text: top.map((item) => `${item.title} (${item.source}).`).join(" ")
			},
			{
				label: "ANALYSIS",
				text: "These are the headlines currently on the live wire. ORBITAL is not adding facts beyond what those outlets published."
			},
			{
				label: "FORECAST",
				text: "Open each original for anything that has changed. The wire refreshes about every half minute."
			}
		]
	};
}
function deskAnswer(question) {
	const q = question.toLowerCase();
	const top = storyById("sg-compute");
	const geo = storyById("geneva-framework");
	const mk = storyById("ny-prints");
	const india = storyById("in-fabs");
	if (q.includes("12") || q.includes("simple") || q.includes("child")) return {
		mode: "desk",
		headline: "The day, in plain language",
		sections: [
			{
				label: "FACT",
				text: "People in Singapore set aside power and land for big computers. A softer economic number in New York changed how traders think about interest rates. In Geneva, countries wrote a plan, but they have not signed it."
			},
			{
				label: "ANALYSIS",
				text: "The pattern is practical things: electricity, shipping, and whether a promise gets a team. Those matter more today than a new slogan."
			},
			{
				label: "FORECAST",
				text: "Over the next week, watch three tells: a launch window, whether Geneva staffs a checking team, and what officials say about the New York number."
			}
		]
	};
	if (q.includes("india")) return {
		mode: "desk",
		headline: "What touches India on this desk",
		sections: [
			{
				label: "FACT",
				text: india?.what ?? ""
			},
			{
				label: "ANALYSIS",
				text: india?.why ?? ""
			},
			{
				label: "FORECAST",
				text: india?.next ?? ""
			}
		]
	};
	if (q.includes("technolog") || q.includes("trend") || q.includes("ai")) {
		const lead = trends[0];
		return {
			mode: "desk",
			headline: "Technology, as the desk sees it",
			sections: [
				{
					label: "FACT",
					text: `${top?.what} Packaging incentives in India are aimed at assembly and design, not only wafer headlines.`
				},
				{
					label: "ANALYSIS",
					text: `${lead.name} momentum is marked +${lead.momentum}%. ${lead.line} ${lead.why}`
				},
				{
					label: "FORECAST",
					text: top?.next ?? ""
				}
			]
		};
	}
	if (q.includes("next") || q.includes("ahead") || q.includes("week")) return {
		mode: "desk",
		headline: "What could move next",
		sections: [
			{
				label: "FACT",
				text: "On the clock: a Kourou launch window, rates speakers, a Geneva annex, and an energy-council reading."
			},
			{
				label: "ANALYSIS",
				text: "Each item has a tell. Weather, a staffing decision, an adjective from an official, a percentage in a draft."
			},
			{
				label: "FORECAST",
				text: `${geo?.next} ${mk?.next}`
			}
		]
	};
	if (q.includes("compare") || q.includes("month")) return {
		mode: "desk",
		headline: "Against the last stretch of this sample",
		sections: [
			{
				label: "FACT",
				text: "The series on this desk are constructed samples, not a live month-over-month tape. They show AI agents, storage, and packaging climbing faster than curb-pricing pilots."
			},
			{
				label: "ANALYSIS",
				text: "The comparison that holds inside the sample: infrastructure and flexibility are accelerating; city curb experiments are flat."
			},
			{
				label: "FORECAST",
				text: "A real comparison to last month needs a live feed this sample does not have. The desk will not invent one."
			}
		]
	};
	return {
		mode: "desk",
		headline: "What matters on this desk",
		sections: [
			{
				label: "FACT",
				text: `${top?.headline}. ${mk?.headline}. ${geo?.headline}.`
			},
			{
				label: "ANALYSIS",
				text: `${top?.why} ${mk?.why}`
			},
			{
				label: "FORECAST",
				text: "Next tells: interconnection dates, speaker language, and whether Geneva staffs a verification cell."
			}
		]
	};
}
var askAnalyst_createServerFn_handler = createServerRpc({
	id: "aa3c1d06df3b1855dfdcf1fcd51ca5b25c313b1ffcc37907b305cedb0e36b497",
	name: "askAnalyst",
	filename: "src/lib/analyst.ts"
}, (opts) => askAnalyst.__executeServer(opts));
var askAnalyst = createServerFn({ method: "POST" }).validator((input) => {
	const clean = (typeof input === "object" && input && "question" in input ? String(input.question) : "").trim().slice(0, 400);
	if (clean.length < 2) throw new Error("Ask a fuller question.");
	return { question: clean };
}).handler(askAnalyst_createServerFn_handler, async ({ data }) => {
	const wire = await fetchLiveWire(false);
	const fallback = wire.items.length ? wireAnswer(data.question, wire.items) : deskAnswer(data.question);
	const briefing = wire.items.slice(0, 24).map((item) => ({
		title: item.title,
		summary: item.summary,
		source: item.source,
		category: item.category,
		place: item.place,
		publishedAt: item.publishedAt
	}));
	const apiKey = process.env.XAI_API_KEY;
	if (!apiKey) return fallback;
	try {
		const res = await fetch("https://api.x.ai/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				model: "grok-4.5",
				temperature: .2,
				max_tokens: 420,
				messages: [{
					role: "system",
					content: "You are ORBITAL's live desk analyst. Use ONLY the live wire JSON. These are real headlines just fetched from news outlets. Never invent events, numbers, quotes, or sources that are not in the wire. If the wire does not cover the question, say so. Separate FACT, ANALYSIS, and FORECAST. FACT must paraphrase the headlines and name the outlet. ANALYSIS may connect headlines but must not add new facts. FORECAST must be labeled as a possibility, not a report. Return JSON only: {\"headline\":string,\"sections\":[{\"label\":\"FACT\"|\"ANALYSIS\"|\"FORECAST\",\"text\":string}]}. Under 170 words."
				}, {
					role: "user",
					content: `Live wire:\n${JSON.stringify(briefing)}\n\nQuestion: ${data.question}`
				}]
			})
		});
		if (!res.ok) return fallback;
		const text = (await res.json()).choices?.[0]?.message?.content ?? "";
		const start = text.indexOf("{");
		const end = text.lastIndexOf("}");
		if (start < 0 || end < start) return {
			...fallback,
			mode: "model",
			headline: fallback.headline
		};
		const parsed = JSON.parse(text.slice(start, end + 1));
		const sections = (parsed.sections ?? []).filter((section) => section && (section.label === "FACT" || section.label === "ANALYSIS" || section.label === "FORECAST") && section.text);
		if (!sections.length) return fallback;
		return {
			mode: "model",
			headline: parsed.headline || "Desk answer",
			sections: sections.slice(0, 4)
		};
	} catch {
		return fallback;
	}
});
//#endregion
export { askAnalyst_createServerFn_handler };
