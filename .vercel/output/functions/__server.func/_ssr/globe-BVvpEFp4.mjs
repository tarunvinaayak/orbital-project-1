import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, X as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/globe-BVvpEFp4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TONE = {
	breaking: "--color-live",
	technology: "--color-cyan",
	science: "--color-violet",
	business: "--color-blue",
	climate: "--color-up",
	culture: "--color-fg"
};
function cssColor(name, fallback) {
	return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}
function Globe({ points, activeId, onHover, onSelect }) {
	const ref = (0, import_react.useRef)(null);
	const hover = (0, import_react.useRef)(onHover);
	const select = (0, import_react.useRef)(onSelect);
	const active = (0, import_react.useRef)(activeId);
	hover.current = onHover;
	select.current = onSelect;
	active.current = activeId;
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let frame = 0;
		let rot = .4;
		let raf = 0;
		const colors = {
			cyan: cssColor("--color-cyan", "#3ee0ff"),
			line: cssColor("--color-line", "#1c2942"),
			navy: cssColor("--color-navy", "#0b1220"),
			fg: cssColor("--color-fg", "#eef3fb")
		};
		const toneColor = Object.fromEntries(Object.keys(TONE).map((key) => [key, cssColor(TONE[key], colors.cyan)]));
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.max(1, Math.floor(rect.width * dpr));
			canvas.height = Math.max(1, Math.floor(rect.height * dpr));
		};
		resize();
		const observer = new ResizeObserver(resize);
		observer.observe(canvas);
		const project = (lat, lon, radius) => {
			const phi = lon * Math.PI / 180 + rot;
			const theta = lat * Math.PI / 180;
			return {
				x: radius * Math.cos(theta) * Math.sin(phi),
				y: -radius * Math.sin(theta),
				z: radius * Math.cos(theta) * Math.cos(phi)
			};
		};
		const draw = () => {
			const w = canvas.width;
			const h = canvas.height;
			ctx.clearRect(0, 0, w, h);
			const cx = w * .5;
			const cy = h * .52;
			const radius = Math.min(w, h) * .36;
			const glow = ctx.createRadialGradient(cx, cy, radius * .2, cx, cy, radius * 1.35);
			glow.addColorStop(0, "rgba(62,224,255,0.16)");
			glow.addColorStop(.55, "rgba(91,124,255,0.05)");
			glow.addColorStop(1, "rgba(0,0,0,0)");
			ctx.fillStyle = glow;
			ctx.beginPath();
			ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
			ctx.fill();
			const body = ctx.createRadialGradient(cx - radius * .35, cy - radius * .4, radius * .2, cx, cy, radius);
			body.addColorStop(0, "#16304d");
			body.addColorStop(.7, colors.navy);
			body.addColorStop(1, "#070b14");
			ctx.beginPath();
			ctx.arc(cx, cy, radius, 0, Math.PI * 2);
			ctx.fillStyle = body;
			ctx.fill();
			ctx.lineWidth = Math.max(1.5, w / 500);
			ctx.strokeStyle = "rgba(62,224,255,0.45)";
			ctx.stroke();
			ctx.save();
			ctx.beginPath();
			ctx.arc(cx, cy, radius, 0, Math.PI * 2);
			ctx.clip();
			ctx.strokeStyle = "rgba(62,224,255,0.16)";
			ctx.lineWidth = Math.max(1, w / 900);
			for (let lat = -60; lat <= 60; lat += 30) {
				ctx.beginPath();
				for (let lon = -180; lon <= 180; lon += 6) {
					const p = project(lat, lon, radius);
					const x = cx + p.x;
					const y = cy + p.y;
					if (lon === -180) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}
			for (let lon = -150; lon <= 180; lon += 30) {
				ctx.beginPath();
				for (let lat = -80; lat <= 80; lat += 4) {
					const p = project(lat, lon, radius);
					if (p.z < 0) continue;
					const x = cx + p.x;
					const y = cy + p.y;
					if (lat === -80) ctx.moveTo(x, y);
					else ctx.lineTo(x, y);
				}
				ctx.stroke();
			}
			ctx.restore();
			const stars = 28;
			for (let i = 0; i < stars; i++) {
				const a = i / stars * Math.PI * 2 + rot * .2;
				const rr = radius * (1.15 + i % 5 * .06);
				ctx.fillStyle = i % 3 === 0 ? "rgba(155,140,255,0.7)" : "rgba(238,243,251,0.45)";
				ctx.fillRect(cx + Math.cos(a) * rr, cy + Math.sin(a * 1.3) * rr * .72, i % 4 === 0 ? 3 : 1.5, i % 4 === 0 ? 3 : 1.5);
			}
			const hits = [];
			for (const point of points) {
				const p = project(point.lat, point.lon, radius);
				if (p.z < -radius * .05) continue;
				const x = cx + p.x;
				const y = cy + p.y;
				const hot = point.id === active.current;
				const color = toneColor[point.tone];
				ctx.beginPath();
				ctx.fillStyle = color;
				ctx.globalAlpha = .9;
				ctx.arc(x, y, hot ? 5.5 : 3.2, 0, Math.PI * 2);
				ctx.fill();
				ctx.globalAlpha = hot ? .35 : .18;
				ctx.beginPath();
				ctx.arc(x, y, hot ? 14 : 8 + frame % 40 / 8, 0, Math.PI * 2);
				ctx.fill();
				ctx.globalAlpha = 1;
				hits.push({
					id: point.id,
					x,
					y,
					z: p.z
				});
			}
			canvas.dataset.hits = JSON.stringify(hits.map((hit) => ({
				id: hit.id,
				x: hit.x / (canvas.width / canvas.getBoundingClientRect().width),
				y: hit.y / (canvas.height / canvas.getBoundingClientRect().height)
			})));
			if (!reduce) rot += .004;
			frame += 1;
			raf = requestAnimationFrame(draw);
		};
		raf = requestAnimationFrame(draw);
		const pick = (event) => {
			const rect = canvas.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;
			const raw = canvas.dataset.hits;
			if (!raw) return null;
			const hits = JSON.parse(raw);
			let best = null;
			for (const hit of hits) {
				const d = Math.hypot(hit.x - x, hit.y - y);
				if (d < 18 && (!best || d < best.d)) best = {
					id: hit.id,
					d
				};
			}
			return best?.id ?? null;
		};
		const move = (event) => hover.current?.(pick(event));
		const leave = () => hover.current?.(null);
		const click = (event) => {
			const id = pick(event);
			if (id) select.current?.(id);
		};
		canvas.addEventListener("pointermove", move);
		canvas.addEventListener("pointerleave", leave);
		canvas.addEventListener("pointerdown", click);
		return () => {
			cancelAnimationFrame(raf);
			observer.disconnect();
			canvas.removeEventListener("pointermove", move);
			canvas.removeEventListener("pointerleave", leave);
			canvas.removeEventListener("pointerdown", click);
		};
	}, [points]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "h-full w-full touch-none",
		"aria-label": "Digital globe of desk events"
	});
}
//#endregion
export { Globe as t };
