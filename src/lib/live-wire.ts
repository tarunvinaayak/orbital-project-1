import { createServerFn } from "@tanstack/react-start";
import type { Category, MarkerTone } from "@/data/intel";

export type WireItem = {
  id: string;
  title: string;
  summary: string;
  url: string;
  source: string;
  category: Category;
  publishedAt: string;
  image: string;
  place: string;
  lat: number | null;
  lon: number | null;
};

export type WirePayload = {
  updatedAt: string;
  items: WireItem[];
  ok: boolean;
  error?: string;
};

type Feed = { url: string; source: string; category: Category; split?: boolean };

const FEEDS: Feed[] = [
  { url: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en", source: "Google News", category: "geopolitics", split: true },
  { url: "https://feeds.bbci.co.uk/news/world/rss.xml", source: "BBC", category: "geopolitics" },
  { url: "https://feeds.bbci.co.uk/news/technology/rss.xml", source: "BBC", category: "technology" },
  { url: "https://feeds.bbci.co.uk/news/business/rss.xml", source: "BBC", category: "business" },
  { url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml", source: "BBC", category: "science" },
  { url: "https://www.theguardian.com/world/rss", source: "The Guardian", category: "geopolitics" },
  { url: "https://www.theguardian.com/technology/rss", source: "The Guardian", category: "technology" },
  { url: "https://www.theguardian.com/business/rss", source: "The Guardian", category: "business" },
  { url: "https://www.theguardian.com/environment/rss", source: "The Guardian", category: "climate" },
  { url: "https://www.theguardian.com/science/rss", source: "The Guardian", category: "science" },
  { url: "https://www.theguardian.com/culture/rss", source: "The Guardian", category: "culture" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", source: "The New York Times", category: "geopolitics" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml", source: "The New York Times", category: "technology" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml", source: "The New York Times", category: "business" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml", source: "The New York Times", category: "climate" },
  { url: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml", source: "The New York Times", category: "science" },
  { url: "https://www.aljazeera.com/xml/rss/all.xml", source: "Al Jazeera", category: "geopolitics" },
  { url: "https://feeds.npr.org/1004/rss.xml", source: "NPR", category: "geopolitics" },
  { url: "https://www.france24.com/en/rss", source: "France 24", category: "geopolitics" },
];

const PLACES: { name: string; lat: number; lon: number; keys: string[] }[] = [
  { name: "Gaza", lat: 31.5, lon: 34.47, keys: ["gaza", "rafah"] },
  { name: "Jerusalem", lat: 31.78, lon: 35.22, keys: ["jerusalem", "west bank", "netanyahu"] },
  { name: "Tel Aviv", lat: 32.08, lon: 34.78, keys: ["tel aviv", "israel"] },
  { name: "Tehran", lat: 35.69, lon: 51.39, keys: ["tehran", "iran"] },
  { name: "Kyiv", lat: 50.45, lon: 30.52, keys: ["kyiv", "kiev", "zelensky", "ukraine"] },
  { name: "Moscow", lat: 55.75, lon: 37.62, keys: ["moscow", "kremlin", "putin", "russia"] },
  { name: "Beijing", lat: 39.9, lon: 116.41, keys: ["beijing", "china"] },
  { name: "Taipei", lat: 25.03, lon: 121.57, keys: ["taipei", "taiwan"] },
  { name: "Pyongyang", lat: 39.03, lon: 125.75, keys: ["pyongyang", "north korea"] },
  { name: "Seoul", lat: 37.57, lon: 126.98, keys: ["seoul", "south korea"] },
  { name: "Tokyo", lat: 35.68, lon: 139.69, keys: ["tokyo", "japan"] },
  { name: "New Delhi", lat: 28.61, lon: 77.21, keys: ["new delhi", "delhi", "india", "modi"] },
  { name: "Islamabad", lat: 33.69, lon: 73.04, keys: ["islamabad", "pakistan"] },
  { name: "Kabul", lat: 34.53, lon: 69.17, keys: ["kabul", "afghanistan"] },
  { name: "Damascus", lat: 33.51, lon: 36.29, keys: ["damascus", "syria"] },
  { name: "Beirut", lat: 33.89, lon: 35.5, keys: ["beirut", "lebanon", "hezbollah"] },
  { name: "Washington", lat: 38.91, lon: -77.04, keys: ["washington", "white house", "capitol hill"] },
  { name: "New York", lat: 40.71, lon: -74.01, keys: ["new york", "wall street", "manhattan"] },
  { name: "London", lat: 51.51, lon: -0.13, keys: ["london", "britain", "united kingdom"] },
  { name: "Paris", lat: 48.86, lon: 2.35, keys: ["paris", "france"] },
  { name: "Berlin", lat: 52.52, lon: 13.41, keys: ["berlin", "germany"] },
  { name: "Brussels", lat: 50.85, lon: 4.35, keys: ["brussels", "european union"] },
  { name: "Rome", lat: 41.9, lon: 12.5, keys: ["rome", "italy"] },
  { name: "Warsaw", lat: 52.23, lon: 21.01, keys: ["warsaw", "poland"] },
  { name: "Geneva", lat: 46.2, lon: 6.14, keys: ["geneva", "switzerland"] },
  { name: "Ankara", lat: 39.93, lon: 32.86, keys: ["ankara", "turkey"] },
  { name: "Cairo", lat: 30.04, lon: 31.24, keys: ["cairo", "egypt"] },
  { name: "Nairobi", lat: -1.29, lon: 36.82, keys: ["nairobi", "kenya"] },
  { name: "Lagos", lat: 6.52, lon: 3.38, keys: ["lagos", "nigeria"] },
  { name: "Johannesburg", lat: -26.2, lon: 28.05, keys: ["johannesburg", "south africa"] },
  { name: "Riyadh", lat: 24.71, lon: 46.68, keys: ["riyadh", "saudi"] },
  { name: "Dubai", lat: 25.2, lon: 55.27, keys: ["dubai", "abu dhabi"] },
  { name: "Singapore", lat: 1.35, lon: 103.82, keys: ["singapore"] },
  { name: "Hong Kong", lat: 22.32, lon: 114.17, keys: ["hong kong"] },
  { name: "Sydney", lat: -33.87, lon: 151.21, keys: ["sydney", "australia"] },
  { name: "São Paulo", lat: -23.55, lon: -46.63, keys: ["são paulo", "sao paulo", "brazil"] },
  { name: "Mexico City", lat: 19.43, lon: -99.13, keys: ["mexico city", "mexico"] },
  { name: "Ottawa", lat: 45.42, lon: -75.7, keys: ["ottawa", "canada"] },
  { name: "United States", lat: 38.91, lon: -77.04, keys: ["united states"] },
];

const TTL_MS = 20_000;
const PER_FEED = 6;
const MAX_ITEMS = 60;

let cache: { at: number; payload: WirePayload } | null = null;
let pending: Promise<WirePayload> | null = null;

export function toneOf(category: Category): MarkerTone {
  if (category === "technology") return "technology";
  if (category === "science" || category === "ideas") return "science";
  if (category === "business" || category === "markets") return "business";
  if (category === "climate") return "climate";
  if (category === "culture") return "culture";
  return "breaking";
}

export const getLiveWire = createServerFn({ method: "GET" })
  .validator((input: unknown) => {
    const force =
      typeof input === "object" && input !== null && "force" in input && (input as { force?: unknown }).force === true;
    return { force };
  })
  .handler(async ({ data }): Promise<WirePayload> => fetchLiveWire(data.force));

export async function fetchLiveWire(force = false): Promise<WirePayload> {
  const now = Date.now();
  if (!force && cache && now - cache.at < TTL_MS) return cache.payload;
  if (pending) return pending;
  pending = loadWire()
    .catch(() => cache?.payload ?? emptyPayload("The wire did not answer."))
    .finally(() => {
      pending = null;
    });
  return pending;
}

function emptyPayload(error: string): WirePayload {
  return { updatedAt: new Date().toISOString(), items: [], ok: false, error };
}

async function loadWire(): Promise<WirePayload> {
  const settled = await Promise.all(FEEDS.map((feed) => fetchFeed(feed)));
  const merged = settled.flat().sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  const items = dedupe(merged).slice(0, MAX_ITEMS);
  if (!items.length) {
    if (cache) return cache.payload;
    return emptyPayload("No outlets responded.");
  }
  const payload: WirePayload = { updatedAt: new Date().toISOString(), items, ok: true };
  cache = { at: Date.now(), payload };
  return payload;
}

async function fetchFeed(feed: Feed): Promise<WireItem[]> {
  try {
    const res = await fetch(feed.url, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml, */*",
        "User-Agent": "Mozilla/5.0 (compatible; ORBITAL/1.0; +https://orbital.news)",
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseItems(xml, feed).slice(0, PER_FEED);
  } catch {
    return [];
  }
}

function parseItems(xml: string, feed: Feed): WireItem[] {
  const chunks = xml.split(/<item\b[^>]*>/i).slice(1);
  const items: WireItem[] = [];
  for (const chunk of chunks) {
    const body = chunk.split(/<\/item>/i)[0] ?? "";
    const categories = [...body.matchAll(/<category\b[^>]*>([\s\S]*?)<\/category>/gi)].map((match) =>
      textOf(match[1]).toLowerCase(),
    );
    if (categories.some((category) => category === "sport" || category === "sports")) continue;
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
      lon: located?.lon ?? null,
    });
  }
  return items;
}

function tag(body: string, name: string) {
  const match = body.match(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)</${name}>`, "i"));
  return match?.[1] ?? "";
}

function attr(body: string, name: string, attribute: string) {
  const match = body.match(new RegExp(`<${name}\\b[^>]*\\b${attribute}="([^"]+)"`, "i"));
  return match?.[1] ?? "";
}

function rawTag(body: string, name: string) {
  return textOf(tag(body, name)).replace(/\s+/g, "");
}

function textOf(raw: string) {
  let value = raw.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
  for (let pass = 0; pass < 3; pass++) {
    const next = value
      .replace(/&/gi, "&")
      .replace(/</gi, "<")
      .replace(/>/gi, ">")
      .replace(/"/gi, '"')
      .replace(/'|&#0?39;/gi, "'")
      .replace(/&nbsp;/gi, " ")
      .replace(/&#(\d+);/g, (_, digits: string) => fromCode(Number(digits)))
      .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => fromCode(parseInt(hex, 16)));
    if (next === value) break;
    value = next;
  }
  value = value.replace(/<[^>]+>/g, " ");
  return value
    .replace(/\s+/g, " ")
    .replace(/\s*Continue reading\.\.\.\s*$/i, "")
    .trim();
}

function fromCode(code: number) {
  if (!Number.isFinite(code) || code <= 0 || code > 0x10ffff) return "";
  try {
    return String.fromCodePoint(code);
  } catch {
    return "";
  }
}

function imageOf(body: string) {
  const patterns = [
    /<media:thumbnail\b[^>]*\burl="([^"]+)"/i,
    /<media:content\b[^>]*\burl="([^"]+)"/i,
    /<enclosure\b[^>]*\burl="([^"]+)"/i,
  ];
  for (const pattern of patterns) {
    const match = body.match(pattern);
    const url = match?.[1]?.replace(/&/g, "&") ?? "";
    if (url.startsWith("https://")) return url;
  }
  return "";
}

function canonical(link: string) {
  try {
    const url = new URL(link);
    if (!url.hostname.includes("news.google.com")) {
      url.search = "";
    }
    url.hash = "";
    return url.toString();
  } catch {
    return link.split("#")[0] ?? link;
  }
}

function clip(summary: string) {
  if (summary.length <= 280) return summary;
  const cut = summary.slice(0, 280);
  const space = cut.lastIndexOf(" ");
  return `${(space > 160 ? cut.slice(0, space) : cut).trim()}…`;
}

function refine(text: string, category: Category): Category {
  const blob = text.toLowerCase();
  if (/climate|emission|wildfire|flood|drought|glacier|heatwave|hurricane|rainfall|methane|fossil|global warming/.test(blob)) {
    return "climate";
  }
  if (/nasdaq|s&p|stock market|shares|bond yield|federal reserve|interest rate|wall street|ftse|dow jones|oil price|bitcoin|crypto/.test(blob)) {
    return "markets";
  }
  if (/\bartificial intelligence\b|\bchatgpt\b|semiconductor|openai|cyberattack|software|startup/.test(blob)) return "technology";
  if (/\bnasa\b|satellite|telescope|vaccine|genome|quantum|species|physicist/.test(blob)) return "science";
  if (/\bfilm\b|\balbum\b|museum|fashion week|oscar|novelist/.test(blob)) return "culture";
  if (/\bceo\b|earnings|profit|inflation|jobs report|\bgdp\b|trade deal/.test(blob) && category === "geopolitics") return "business";
  return category;
}

function locate(text: string) {
  const blob = ` ${text.toLowerCase()} `;
  let best: { name: string; lat: number; lon: number; len: number } | null = null;
  for (const place of PLACES) {
    for (const key of place.keys) {
      if (!blob.includes(key)) continue;
      if (!best || key.length > best.len) best = { name: place.name, lat: place.lat, lon: place.lon, len: key.length };
    }
  }
  return best;
}

function norm(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function dedupe(items: WireItem[]) {
  const kept: WireItem[] = [];
  for (const item of items) {
    const key = norm(item.title);
    const duplicate = kept.find((current) => {
      const other = norm(current.title);
      if (other === key) return true;
      return key.length > 42 && other.length > 42 && (other.includes(key) || key.includes(other));
    });
    if (!duplicate) kept.push(item);
  }
  return kept;
}

function hashId(value: string) {
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
