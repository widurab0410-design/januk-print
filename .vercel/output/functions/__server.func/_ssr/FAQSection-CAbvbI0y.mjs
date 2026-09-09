import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { P as ChevronDown } from "../_libs/lucide-react.mjs";
import { l as faqs, o as cn } from "./PageShell-abhac41t.mjs";
import { t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { i as SectionHeading } from "./ui-blocks-C57BSIkz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FAQSection-CAbvbI0y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FAQSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "px-5 py-20 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "FAQ",
				title: "Questions, answered",
				sub: "Everything clients usually ask before starting a project with us."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 80,
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					defaultValue: "faq-0",
					className: "space-y-3",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `faq-${i}`,
						className: "rounded-2xl border border-border bg-card px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left font-display text-base font-semibold hover:no-underline",
							children: f.question
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: f.answer
						})]
					}, f.question))
				})
			})]
		})
	});
}
//#endregion
export { FAQSection as t };
