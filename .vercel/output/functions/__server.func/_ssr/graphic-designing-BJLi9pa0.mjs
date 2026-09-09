import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageShell, c as designServices, i as PageHeader } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { t as CTASection } from "./CTASection-DMy7fKF3.mjs";
import { a as ServiceCard, i as SectionHeading } from "./ui-blocks-C57BSIkz.mjs";
import { t as FAQSection } from "./FAQSection-CAbvbI0y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/graphic-designing-BJLi9pa0.js
var import_jsx_runtime = require_jsx_runtime();
function GraphicDesigning() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Graphic Designing",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Creative design that",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-brand",
					children: "builds brands"
				})
			] }),
			sub: "Concepts, artwork and brand systems prepared to press-ready standards by our in-house creative team."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-14 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Our design services",
					title: "What We Design",
					sub: "From a single logo to a full brand rollout — every design is crafted to look stunning in print and on screen."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: designServices.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							title: s.title,
							description: s.description,
							icon: "PenTool"
						})
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface/40 px-5 py-16 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "How it works",
					title: "Our Design Process",
					sub: "A simple, transparent workflow from brief to finished artwork."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							step: "01",
							title: "Brief & Discovery",
							description: "We listen to your goals, audience and preferences to build a clear creative brief."
						},
						{
							step: "02",
							title: "Concept Design",
							description: "Initial concepts that translate your brief into visual direction and mood."
						},
						{
							step: "03",
							title: "Revisions",
							description: "Focused rounds of refinement until the design feels exactly right."
						},
						{
							step: "04",
							title: "Final Delivery",
							description: "Print-ready files, web-optimised assets and brand guidelines delivered to you."
						}
					].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 4 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lift h-full rounded-3xl border border-border bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-bold text-accent-foreground",
									children: p.step
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-lg font-bold",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: p.description
								})
							]
						})
					}, p.step))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			headline: "Need a design that stands out?",
			sub: "Send us your idea — we'll craft a concept, refine it together, and deliver print-ready artwork."
		})
	] });
}
//#endregion
export { GraphicDesigning as component };
