import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { C as Hotel, D as HardHat, I as Calendar, M as CircleCheck, O as GraduationCap, R as Building2, T as HeartPulse, c as ShoppingBag, d as Rocket, l as Shirt, r as Utensils, s as ShoppingCart, w as Heart } from "../_libs/lucide-react.mjs";
import { a as PageShell, t as Button } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { t as CTASection } from "./CTASection-DMy7fKF3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/industries-C0LRzH7N.js
var import_jsx_runtime = require_jsx_runtime();
var industryDetails = [
	{
		name: "Retail & Shops",
		description: "Custom carrier bags, product labels, product packaging, and point-of-sale display materials that capture attention.",
		icon: ShoppingBag
	},
	{
		name: "Restaurants & Cafés",
		description: "Elegant menus, table talkers, custom food packaging, takeaway boxes, and branded staff aprons.",
		icon: Utensils
	},
	{
		name: "Hotels & Hospitality",
		description: "Guest directories, keycard holders, door hangers, branded stationery, brochures, and wayfinding signage.",
		icon: Hotel
	},
	{
		name: "Education & Institutes",
		description: "School magazines, custom certificates, prospectus booklets, student handbooks, notebooks, and event banners.",
		icon: GraduationCap
	},
	{
		name: "Healthcare & Pharmacy",
		description: "Medicine cartons, instruction leaflets, barcode labels, clinic forms, prescription pads, and informational posters.",
		icon: HeartPulse
	},
	{
		name: "Real Estate",
		description: "High-end property brochures, listing flyers, site banners, folders, and premium business cards for agents.",
		icon: Building2
	},
	{
		name: "Construction & Engineering",
		description: "Site signs, site blueprints, safety booklets, vehicle decals, and durable high-visibility apparel.",
		icon: HardHat
	},
	{
		name: "Events & Weddings",
		description: "Wedding cards, save-the-date invites, event tickets, roll-up banners, large backdrops, and photobooks.",
		icon: Calendar
	},
	{
		name: "Fashion & Apparel",
		description: "Premium hang tags, woven clothing labels, custom tissue paper, packaging boxes, and lookbook catalogs.",
		icon: Shirt
	},
	{
		name: "Startups & SMEs",
		description: "Kickstart packs containing business cards, letterheads, invoice books, and marketing flyers to launch your brand.",
		icon: Rocket
	},
	{
		name: "NGOs & Charities",
		description: "Annual reports, fundraising brochures, donation cards, event booklets, and promotional banners.",
		icon: Heart
	},
	{
		name: "E-commerce Brands",
		description: "Branded shipping boxes, mailer bags, customized packaging tape, thank-you notes, and label rolls.",
		icon: ShoppingCart
	}
];
function IndustriesPage() {
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
							children: "Who We Help"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-bold sm:text-5xl lg:text-6xl",
							children: ["Industries We ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "Serve"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground",
							children: "Every sector has unique needs. We combine premium materials and custom finishing to craft tailored solutions for businesses of all shapes and sizes."
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 pb-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: industryDetails.map((ind, i) => {
						const IconComponent = ind.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 50,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group relative rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-gradient-brand group-hover:text-accent-foreground",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-display text-lg font-semibold text-foreground group-hover:text-accent",
										children: ind.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: ind.description
									})
								]
							})
						}, ind.name);
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-border/60 bg-surface/30 px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-12 lg:grid-cols-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs font-semibold uppercase tracking-wider text-accent",
								children: "Why Work With Januk Print"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-3xl font-bold leading-tight sm:text-4xl",
								children: "Bespoke printing and design, tailored for your brand"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base text-muted-foreground",
								children: "We don't offer cookie-cutter templates. We work closely with you to choose the exact papers, boards, coatings, and custom shapes that make sense for your specific industry."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 pt-4 sm:grid-cols-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Custom material sourcing" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Expert design consultation" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Color consistency guarantee" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tracked global shipping" })]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6 flex flex-col justify-center items-center rounded-3xl border border-border bg-surface/50 p-8 sm:p-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-bold",
								children: "Ready to get started?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground max-w-sm",
								children: "Request a custom estimate or contact our design desk to chat about your next project's specs."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "bg-gradient-brand text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/graphic-designing",
										children: "Design With Us"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									size: "lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/contact",
										children: "Contact Our Team"
									})
								})]
							})
						]
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] });
}
//#endregion
export { IndustriesPage as component };
