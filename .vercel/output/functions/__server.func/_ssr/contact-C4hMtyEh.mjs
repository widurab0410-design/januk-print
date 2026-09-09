import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as MessageCircle, b as Mail, m as Phone, u as Send, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as PageShell, i as PageHeader, n as COMPANY, o as cn, r as Input, t as Button } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-D98TVWrd.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C4hMtyEh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var serviceOptions = [
	"Logo & Brand Identity",
	"Business Cards & Stationery",
	"Flyers, Brochures & Catalogues",
	"Packaging & Labels",
	"Banners & Large Format",
	"Apparel & Merchandise",
	"Something else"
];
function Contact() {
	const [service, setService] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's talk about your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient-brand",
			children: "next project"
		})] }),
		sub: "Tell us what you need and you'll get a clear, itemised quote — usually the same working day."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "quote-form",
		className: "px-5 py-14 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "rounded-3xl border border-border bg-card p-7",
				onSubmit: (e) => {
					e.preventDefault();
					toast.success("Thanks! We've received your request and will reply shortly.");
					e.target.reset();
					setService("");
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Request a quote"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "name",
									children: "Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									name: "name",
									required: true,
									autoComplete: "name",
									placeholder: "Your full name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "email",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email",
									placeholder: "you@company.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "phone",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									name: "phone",
									type: "tel",
									autoComplete: "tel",
									placeholder: "+94 ..."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "service",
									children: "Service interested in"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: service,
									onValueChange: setService,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										id: "service",
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Choose a service" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: serviceOptions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: s,
										children: s
									}, s)) })]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						size: "lg",
						className: "mt-6 bg-gradient-brand text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }), "Send request"]
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 90,
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-bold",
						children: "Contact details"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-4 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "hover:text-accent",
									children: COMPANY.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
									className: "hover:text-accent",
									children: COMPANY.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `https://wa.me/${COMPANY.whatsapp}`,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "hover:text-accent",
									children: "Chat on WhatsApp"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), COMPANY.location]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Januk Print location map",
						src: "https://www.openstreetmap.org/export/embed.html?bbox=79.82%2C6.86%2C79.90%2C6.94&layer=mapnik",
						loading: "lazy",
						className: "h-64 w-full border-0 grayscale"
					})
				})]
			})]
		})
	})] });
}
//#endregion
export { Contact as component };
