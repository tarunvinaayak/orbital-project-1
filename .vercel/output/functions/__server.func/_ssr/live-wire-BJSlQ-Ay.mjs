import { n as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-CN-evIEF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-wire-BJSlQ-Ay.js
var FEEDS = [
	{
		url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
		source: "Google News",
		category: "geopolitics",
		split: true
	},
	{
		url: "https://feeds.bbci.co.uk/news/world/rss.xml",
		source: "BBC",
		category: "geopolitics"
	},
	{
		url: "https://feeds.bbci.co.uk/news/technology/rss.xml",
		source: "BBC",
		category: "technology"
	},
	{
		url: "https://feeds.bbci.co.uk/news/business/rss.xml",
		source: "BBC",
		category: "business"
	},
	{
		url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml",
		source: "BBC",
		category: "science"
	},
	{
		url: "https://www.theguardian.com/world/rss",
		source: "The Guardian",
		category: "geopolitics"
	},
	{
		url: "https://www.theguardian.com/technology/rss",
		source: "The Guardian",
		category: "technology"
	},
	{
		url: "https://www.theguardian.com/business/rss",
		source: "The Guardian",
		category: "business"
	},
	{
		url: "https://www.theguardian.com/environment/rss",
		source: "The Guardian",
		category: "climate"
	},
	{
		url: "https://www.theguardian.com/science/rss",
		source: "The Guardian",
		category: "science"
	},
	{
		url: "https://www.theguardian.com/culture/rss",
		source: "The Guardian",
		category: "culture"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
		source: "The New York Times",
		category: "geopolitics"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
		source: "The New York Times",
		category: "technology"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
		source: "The New York Times",
		category: "business"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
		source: "The New York Times",
		category: "climate"
	},
	{
		url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
		source: "The New York Times",
		category: "science"
	},
	{
		url: "https://www.aljazeera.com/xml/rss/all.xml",
		source: "Al Jazeera",
		category: "geopolitics"
	},
	{
		url: "https://feeds.npr.org/1004/rss.xml",
		source: "NPR",
		category: "geopolitics"
	},
	{
		url: "https://www.france24.com/en/rss",
		source: "France 24",
		category: "geopolitics"
	}
];
var PLACES = [
	{
		name: "Gaza",
		lat: 31.5,
		lon: 34.47,
		keys: ["gaza", "rafah"]
	},
	{
		name: "Jerusalem",
		lat: 31.78,
		lon: 35.22,
		keys: [
			"jerusalem",
			"west bank",
			"netanyahu"
		]
	},
	{
		name: "Tel Aviv",
		lat: 32.08,
		lon: 34.78,
		keys: ["tel aviv", "israel"]
	},
	{
		name: "Tehran",
		lat: 35.69,
		lon: 51.39,
		keys: ["tehran", "iran"]
	},
	{
		name: "Kyiv",
		lat: 50.45,
		lon: 30.52,
		keys: [
			"kyiv",
			"kiev",
			"zelensky",
			"ukraine"
		]
	},
	{
		name: "Moscow",
		lat: 55.75,
		lon: 37.62,
		keys: [
			"moscow",
			"kremlin",
			"putin",
			"russia"
		]
	},
	{
		name: "Beijing",
		lat: 39.9,
		lon: 116.41,
		keys: ["beijing", "china"]
	},
	{
		name: "Taipei",
		lat: 25.03,
		lon: 121.57,
		keys: ["taipei", "taiwan"]
	},
	{
		name: "Pyongyang",
		lat: 39.03,
		lon: 125.75,
		keys: ["pyongyang", "north korea"]
	},
	{
		name: "Seoul",
		lat: 37.57,
		lon: 126.98,
		keys: ["seoul", "south korea"]
	},
	{
		name: "Tokyo",
		lat: 35.68,
		lon: 139.69,
		keys: ["tokyo", "japan"]
	},
	{
		name: "New Delhi",
		lat: 28.61,
		lon: 77.21,
		keys: [
			"new delhi",
			"delhi",
			"india",
			"modi"
		]
	},
	{
		name: "Islamabad",
		lat: 33.69,
		lon: 73.04,
		keys: ["islamabad", "pakistan"]
	},
	{
		name: "Kabul",
		lat: 34.53,
		lon: 69.17,
		keys: ["kabul", "afghanistan"]
	},
	{
		name: "Damascus",
		lat: 33.51,
		lon: 36.29,
		keys: ["damascus", "syria"]
	},
	{
		name: "Beirut",
		lat: 33.89,
		lon: 35.5,
		keys: [
			"beirut",
			"lebanon",
			"hezbollah"
		]
	},
	{
		name: "Washington",
		lat: 38.91,
		lon: -77.04,
		keys: [
			"washington",
			"white house",
			"capitol hill"
		]
	},
	{
		name: "New York",
		lat: 40.71,
		lon: -74.01,
		keys: [
			"new york",
			"wall street",
			"manhattan"
		]
	},
	{
		name: "London",
		lat: 51.51,
		lon: -.13,
		keys: [
			"london",
			"britain",
			"united kingdom"
		]
	},
	{
		name: "Paris",
		lat: 48.86,
		lon: 2.35,
		keys: ["paris", "france"]
	},
	{
		name: "Berlin",
		lat: 52.52,
		lon: 13.41,
		keys: ["berlin", "germany"]
	},
	{
		name: "Brussels",
		lat: 50.85,
		lon: 4.35,
		keys: ["brussels", "european union"]
	},
	{
		name: "Rome",
		lat: 41.9,
		lon: 12.5,
		keys: ["rome", "italy"]
	},
	{
		name: "Warsaw",
		lat: 52.23,
		lon: 21.01,
		keys: ["warsaw", "poland"]
	},
	{
		name: "Geneva",
		lat: 46.2,
		lon: 6.14,
		keys: ["geneva", "switzerland"]
	},
	{
		name: "Ankara",
		lat: 39.93,
		lon: 32.86,
		keys: ["ankara", "turkey"]
	},
	{
		name: "Cairo",
		lat: 30.04,
		lon: 31.24,
		keys: ["cairo", "egypt"]
	},
	{
		name: "Nairobi",
		lat: -1.29,
		lon: 36.82,
		keys: ["nairobi", "kenya"]
	},
	{
		name: "Lagos",
		lat: 6.52,
		lon: 3.38,
		keys: ["lagos", "nigeria"]
	},
	{
		name: "Johannesburg",
		lat: -26.2,
		lon: 28.05,
		keys: ["johannesburg", "south africa"]
	},
	{
		name: "Riyadh",
		lat: 24.71,
		lon: 46.68,
		keys: ["riyadh", "saudi"]
	},
	{
		name: "Dubai",
		lat: 25.2,
		lon: 55.27,
		keys: ["dubai", "abu dhabi"]
	},
	{
		name: "Singapore",
		lat: 1.35,
		lon: 103.82,
		keys: ["singapore"]
	},
	{
		name: "Hong Kong",
		lat: 22.32,
		lon: 114.17,
		keys: ["hong kong"]
	},
	{
		name: "Sydney",
		lat: -33.87,
		lon: 151.21,
		keys: ["sydney", "australia"]
	},
	{
		name: "São Paulo",
		lat: -23.55,
		lon: -46.63,
		keys: [
			"são paulo",
			"sao paulo",
			"brazil"
		]
	},
	{
		name: "Mexico City",
		lat: 19.43,
		lon: -99.13,
		keys: ["mexico city", "mexico"]
	},
	{
		name: "Ottawa",
		lat: 45.42,
		lon: -75.7,
		keys: ["ottawa", "canada"]
	},
	{
		name: "United States",
		lat: 38.91,
		lon: -77.04,
		keys: ["united states"]
	}
];
var TTL_MS = 2e4;
var PER_FEED = 6;
var MAX_ITEMS = 60;
var cache = null;
var pending = null;
var getLiveWire_createServerFn_handler = createServerRpc({
	id: "9874f66f811027acb780b121ec942b8e7b3d7416ba984d800646ce44429a4c78",
	name: "getLiveWire",
	filename: "src/lib/live-wire.ts"
}, (opts) => getLiveWire.__executeServer(opts));
var getLiveWire = createServerFn({ method: "GET" }).validator((input) => {
	return { force: typeof input === "object" && input !== null && "force" in input && input.force === true };
}).handler(getLiveWire_createServerFn_handler, async ({ data }) => fetchLiveWire(data.force));
async function fetchLiveWire(force = false) {
	if (!force && cache && Date.now() - cache.at < TTL_MS) return cache.payload;
	if (pending) return pending;
	pending = loadWire().catch(() => cache?.payload ?? emptyPayload("The wire did not answer.")).finally(() => {
		pending = null;
	});
	return pending;
}
function emptyPayload(error) {
	return {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items: [],
		ok: false,
		error
	};
}
async function loadWire() {
	const items = dedupe((await Promise.all(FEEDS.map((feed) => fetchFeed(feed)))).flat().sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))).slice(0, MAX_ITEMS);
	if (!items.length) {
		if (cache) return cache.payload;
		return emptyPayload("No outlets responded.");
	}
	const payload = {
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		items,
		ok: true
	};
	cache = {
		at: Date.now(),
		payload
	};
	return payload;
}
async function fetchFeed(feed) {
	try {
		const res = await fetch(feed.url, {
			headers: {
				Accept: "application/rss+xml, application/xml, text/xml, */*",
				"User-Agent": "Mozilla/5.0 (compatible; ORBITAL/1.0; +https://orbital.news)"
			},
			signal: AbortSignal.timeout(8e3)
		});
		if (!res.ok) return [];
		return parseItems(await res.text(), feed).slice(0, PER_FEED);
	} catch {
		return [];
	}
}
function parseItems(xml, feed) {
	const chunks = xml.split(/<item\b[^>]*>/i).slice(1);
	const items = [];
	for (const chunk of chunks) {
		const body = chunk.split(/<\/item>/i)[0] ?? "";
		if ([...body.matchAll(/<category\b[^>]*>([\s\S]*?)<\/category>/gi)].map((match) => textOf(match[1]).toLowerCase()).some((category) => category === "sport" || category === "sports")) continue;
		let title = textOf(tag(body, "title"));
		let source = feed.source;
		if (feed.split) {
			const cut = title.lastIndexOf(" - ");
			if (cut > 12) {
				source = title.slice(cut + 3).trim() || source;
				title = title.slice(0, cut).trim();
			}
		}
		const link = rawTag(body, "link") || attr(body, "link", "href");
		if (!title || !link.startsWith("http")) continue;
		const summary = clip(textOf(tag(body, "description")));
		const publishedRaw = textOf(tag(body, "pubDate")) || textOf(tag(body, "dc:date"));
		const publishedMs = Date.parse(publishedRaw);
		if (!Number.isFinite(publishedMs)) continue;
		const url = canonical(link);
		const located = locate(`${title} ${summary}`);
		items.push({
			id: hashId(url),
			title,
			summary,
			url,
			source,
			category: refine(`${title} ${summary}`, feed.category),
			publishedAt: new Date(publishedMs).toISOString(),
			image: imageOf(body),
			place: located?.name ?? "",
			lat: located?.lat ?? null,
			lon: located?.lon ?? null
		});
	}
	return items;
}
function tag(body, name) {
	return body.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`, "i"))?.[1] ?? "";
}
function attr(body, name, attribute) {
	return body.match(new RegExp(`<${name}\\b[^>]*\\b${attribute}="([^"]+)"`, "i"))?.[1] ?? "";
}
function rawTag(body, name) {
	return textOf(tag(body, name)).replace(/\s+/g, "");
}
function textOf(raw) {
	let value = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
	value = value.replace(/</gi, "<").replace(/>/gi, ">").replace(/"/gi, "\"").replace(/'|&#0?39;/gi, "'").replace(/&nbsp;/gi, " ").replace(/&#(\d+);/g, (_, digits) => fromCode(Number(digits))).replace(/&#x([0-9a-f]+);/gi, (_, hex) => fromCode(parseInt(hex, 16)));
	value = value.replace(/<[^>]+>/g, " ");
	value = value.replace(/&/gi, "&");
	return value.replace(/\s+/g, " ").replace(/\s*Continue reading\.\.\.\s*$/i, "").trim();
}
function fromCode(code) {
	if (!Number.isFinite(code) || code <= 0 || code > 1114111) return "";
	try {
		return String.fromCodePoint(code);
	} catch {
		return "";
	}
}
function imageOf(body) {
	for (const pattern of [
		/<media:thumbnail\b[^>]*\burl="([^"]+)"/i,
		/<media:content\b[^>]*\burl="([^"]+)"/i,
		/<enclosure\b[^>]*\burl="([^"]+)"/i
	]) {
		const url = body.match(pattern)?.[1]?.replace(/&/g, "&") ?? "";
		if (url.startsWith("https://")) return url;
	}
	return "";
}
function canonical(link) {
	try {
		const url = new URL(link);
		if (!url.hostname.includes("news.google.com")) url.search = "";
		url.hash = "";
		return url.toString();
	} catch {
		return link.split("#")[0] ?? link;
	}
}
function clip(summary) {
	if (summary.length <= 280) return summary;
	const cut = summary.slice(0, 280);
	const space = cut.lastIndexOf(" ");
	return `${(space > 160 ? cut.slice(0, space) : cut).trim()}…`;
}
function refine(text, category) {
	const blob = text.toLowerCase();
	if (/climate|emission|wildfire|flood|drought|glacier|heatwave|hurricane|rainfall|methane|fossil|global warming/.test(blob)) return "climate";
	if (/nasdaq|s&p|stock market|shares|bond yield|federal reserve|interest rate|wall street|ftse|dow jones|oil price|bitcoin|crypto/.test(blob)) return "markets";
	if (/\bartificial intelligence\b|\bchatgpt\b|semiconductor|openai|cyberattack|software|startup/.test(blob)) return "technology";
	if (/\bnasa\b|satellite|telescope|vaccine|genome|quantum|species|physicist/.test(blob)) return "science";
	if (/\bfilm\b|\balbum\b|museum|fashion week|oscar|novelist/.test(blob)) return "culture";
	if (/\bceo\b|earnings|profit|inflation|jobs report|\bgdp\b|trade deal/.test(blob) && category === "geopolitics") return "business";
	return category;
}
function locate(text) {
	const blob = ` ${text.toLowerCase()} `;
	let best = null;
	for (const place of PLACES) for (const key of place.keys) {
		if (!blob.includes(key)) continue;
		if (!best || key.length > best.len) best = {
			name: place.name,
			lat: place.lat,
			lon: place.lon,
			len: key.length
		};
	}
	return best;
}
function norm(title) {
	return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}
function dedupe(items) {
	const kept = [];
	for (const item of items) {
		const key = norm(item.title);
		if (!kept.find((current) => {
			const other = norm(current.title);
			if (other === key) return true;
			return key.length > 42 && other.length > 42 && (other.includes(key) || key.includes(other));
		})) kept.push(item);
	}
	return kept;
}
function hashId(value) {
	let a = 2166136261;
	let b = 2166136261;
	for (let i = 0; i < value.length; i++) {
		const code = value.charCodeAt(i);
		a ^= code;
		a = Math.imul(a, 16777619);
		b ^= code + i;
		b = Math.imul(b, 2246822519);
	}
	return `${(a >>> 0).toString(16).padStart(8, "0")}${(b >>> 0).toString(16).padStart(8, "0")}`;
}
//#endregion
export { getLiveWire_createServerFn_handler };
