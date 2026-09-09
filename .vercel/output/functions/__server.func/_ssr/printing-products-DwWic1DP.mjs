import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as PageShell, i as PageHeader, u as printServices } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { t as CTASection } from "./CTASection-DMy7fKF3.mjs";
import { a as ServiceCard, i as SectionHeading } from "./ui-blocks-C57BSIkz.mjs";
import { t as FAQSection } from "./FAQSection-CAbvbI0y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/printing-products-DwWic1DP.js
var import_jsx_runtime = require_jsx_runtime();
function PrintingProducts() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Printing Products",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				"Premium printing,",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-brand",
					children: "delivered right"
				})
			] }),
			sub: "Premium stocks, accurate colour and finishing options for every budget — from short-run digital to high-volume offset."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-14 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Our printing services",
					title: "What We Print",
					sub: "Every product printed on carefully selected materials with rigorous quality checks before dispatch."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: printServices.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
							title: s.title,
							description: s.description,
							icon: "Printer"
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
					title: "Our Printing Process",
					sub: "From quotation to dispatch — a smooth, transparent production workflow."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							step: "01",
							title: "Requirements",
							description: "Tell us your quantities, materials, sizes and finishing preferences."
						},
						{
							step: "02",
							title: "Quotation",
							description: "A clear, itemised quote with material and finishing options — no surprises."
						},
						{
							step: "03",
							title: "Production",
							description: "Printing, finishing and quality control on every single piece."
						},
						{
							step: "04",
							title: "Delivery",
							description: "Packed carefully and delivered locally or dispatched worldwide."
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
			headline: "Ready to print?",
			sub: "Send us your artwork or requirements — we'll quote, print and deliver with care."
		})
	] });
}
//#endregion
export { PrintingProducts as component };
