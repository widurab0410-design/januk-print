import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as ArrowRight, _ as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as COMPANY, t as Button } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTASection-DMy7fKF3.js
var import_jsx_runtime = require_jsx_runtime();
function CTASection({ headline = "Ready to Grow Your Brand?", sub = "Tell us what you need — design, print or both. You'll get a clear quote and a friendly reply within hours." }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-20 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-center text-accent-foreground sm:px-12 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
					children: headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-90",
					children: sub
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-9 flex flex-col justify-center gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "bg-background text-foreground hover:bg-background/90",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/graphic-designing",
							children: ["Design With Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						variant: "outline",
						className: "border-accent-foreground/40 bg-transparent text-accent-foreground hover:bg-accent-foreground/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi Januk Print! I'd like a quote.")}`,
							target: "_blank",
							rel: "noopener noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "mr-2 h-4 w-4" }), "WhatsApp / Contact Us"]
						})
					})]
				})
			]
		})
	});
}
//#endregion
export { CTASection as t };
