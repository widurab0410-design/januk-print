import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as ArrowRight, M as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as PageShell, d as process, t as Button } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { t as CTASection } from "./CTASection-DMy7fKF3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-HRlOLPM4.js
var import_jsx_runtime = require_jsx_runtime();
var stepDetails = {
	"01": {
		icon: "💬",
		detail: "Tell us about your project — your goals, target audience, print quantities, timeline and any brand guidelines. We'll ask the right questions to understand exactly what you need."
	},
	"02": {
		icon: "📋",
		detail: "We prepare a clear, itemised quote with all material, finishing and delivery options. No hidden charges — you'll know the full cost before we begin."
	},
	"03": {
		icon: "✏️",
		detail: "Our designers translate your brief into initial visual concepts. We present multiple directions so you can see the possibilities and choose the right path."
	},
	"04": {
		icon: "🔄",
		detail: "We refine the chosen concept through focused revision rounds. Your feedback shapes every iteration until the design feels exactly right."
	},
	"05": {
		icon: "✅",
		detail: "You review and approve the final design and a press-ready proof. Nothing goes to print without your sign-off — guaranteed."
	},
	"06": {
		icon: "🖨️",
		detail: "Your job goes to press on the agreed materials. Every item goes through quality control before it leaves production."
	},
	"07": {
		icon: "📦",
		detail: "Finished products are carefully packed and delivered to your door — locally or dispatched worldwide via tracked courier."
	}
};
function ProcessPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "surface-grid pointer-events-none absolute inset-0 opacity-40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-brand opacity-15 blur-[130px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto max-w-7xl px-5 lg:px-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent",
							children: "How We Work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl",
							children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "Process"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground",
							children: "Seven clear steps from first conversation to delivered product — designed to keep you informed, in control, and confident at every stage."
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pb-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-6",
						children: process.map((step, i) => {
							const detail = stepDetails[step.step];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 80,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative flex gap-6 sm:gap-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative z-10 shrink-0 flex flex-col items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-16 w-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-2xl",
												children: detail?.icon ?? "⚙️"
											})
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 rounded-2xl border border-border bg-card p-6 sm:p-8 card-lift",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-start justify-between gap-4 flex-wrap",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-3xl font-bold text-accent/30 leading-none",
													children: step.step
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "mt-1 font-display text-xl sm:text-2xl font-bold text-foreground",
													children: step.title
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-muted-foreground",
													children: ["Step ", step.step]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-muted-foreground",
												children: step.description
											}),
											detail?.detail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm leading-relaxed text-foreground/80",
												children: detail.detail
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 flex items-center gap-2 text-xs font-medium text-accent",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Included in every project — no exceptions" })]
											})
										]
									})]
								})
							}, step.step);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 rounded-3xl border border-accent/20 bg-gradient-soft p-8 sm:p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl sm:text-3xl font-bold",
								children: "Ready to start your project?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base text-muted-foreground max-w-lg mx-auto",
								children: "Get in touch and we'll walk you through the process for your specific job — with a free quote included."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-7 flex flex-wrap gap-3 justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "bg-gradient-brand text-accent-foreground shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/contact",
										children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									variant: "outline",
									className: "border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/printing-products",
										children: "View Our Services"
									})
								})]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {
			headline: "Questions about the process?",
			sub: "We're happy to explain any step in detail before you commit to anything."
		})
	] });
}
//#endregion
export { ProcessPage as component };
