import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Compass, i as Target, o as Sparkles, p as Printer, z as Award } from "../_libs/lucide-react.mjs";
import { a as PageShell, i as PageHeader, m as trustPoints, s as coreValues } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { t as CTASection } from "./CTASection-DMy7fKF3.mjs";
import { i as SectionHeading, n as FeatureCard, t as CheckItem } from "./ui-blocks-C57BSIkz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DjxbZycw.js
var import_jsx_runtime = require_jsx_runtime();
function StoryCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 inset-x-0 h-1.5 bg-gradient-brand opacity-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "surface-grid pointer-events-none absolute inset-0 opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-accent-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Our Story"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground font-medium",
							children: "Established in 2013 · Craft & Quality"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-3.5 w-3.5" }), "10+ Years of Craft"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 font-sans text-base leading-relaxed text-muted-foreground sm:text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-foreground font-medium",
							children: [
								"Januk Print was established in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent font-semibold",
									children: "2013"
								}),
								" with a simple belief: every business — no matter its size — deserves design and print work it can be genuinely proud of."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What began as a small design desk grew, project by project, into a full creative studio and printing partner. Over more than a decade we've produced logos, brand identities, packaging, signage, apparel and everything in between for hundreds of clients across retail, hospitality, education, real estate and beyond." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Along the way we invested in better equipment, better materials and — most importantly — better people. Today Januk Print serves clients locally and online worldwide, combining boutique studio attention with dependable production capacity." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-2 flex items-center gap-2 font-display font-semibold text-accent text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Your brand deserves both craft and quality." })]
						})
					]
				})]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About",
			title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["About ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gradient-brand",
				children: "Januk Print"
			})] }),
			sub: "Creative Design. Quality Printing. Trusted Since 2013."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-14 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-4xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryCard, {})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-14 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-6 md:grid-cols-2",
				children: [{
					icon: Target,
					heading: "Our Mission",
					body: "To help every business communicate confidently through thoughtful design and dependable, high-quality print — delivered on time, at a fair price."
				}, {
					icon: Compass,
					heading: "Our Vision",
					body: "To be the creative print partner brands recommend first, known for craft, honesty and a genuinely enjoyable experience from brief to delivery."
				}].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lift h-full rounded-3xl border border-border bg-card p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-accent-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-2xl font-bold",
								children: c.heading
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: c.body
							})
						]
					})
				}, c.heading))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface/40 px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Core values",
					title: "What we stand for"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: coreValues.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							icon: v.icon,
							title: v.title,
							description: v.description
						})
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					eyebrow: "Trust",
					title: "Why Businesses Trust Us",
					sub: "Ten reasons clients keep coming back — and keep referring us."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-3.5 rounded-3xl border border-border bg-card p-7 sm:grid-cols-2",
						children: trustPoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckItem, { children: p }, p))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pb-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mx-auto max-w-3xl text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-xl leading-relaxed sm:text-2xl",
					children: [
						"Whether you need a single logo or a full brand rollout in print, we treat your project with the same care we'd give our own.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-brand",
							children: "Let's make something worth showing off."
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { About as component };
