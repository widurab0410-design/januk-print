import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { F as Check, t as icons_exports } from "../_libs/lucide-react.mjs";
import { o as cn } from "./PageShell-abhac41t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-blocks-C57BSIkz.js
var import_jsx_runtime = require_jsx_runtime();
function Icon({ name, className }) {
	const LucideIcon = icons_exports[name] ?? Check;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LucideIcon, {
		className,
		"aria-hidden": true
	});
}
function SectionHeading({ eyebrow, title, sub, align = "center" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-3xl", align === "center" && "mx-auto text-center"),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]",
				children: title
			}),
			sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: sub
			}) : null
		]
	});
}
function FeatureCard({ icon, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-lift h-full rounded-2xl border border-border bg-card p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft text-accent",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					name: icon,
					className: "h-5 w-5"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 font-display text-lg font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: description
			})
		]
	});
}
function ServiceCard({ title, description, icon = "Check" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "card-lift flex h-full gap-4 rounded-2xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-0.5 inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-soft text-accent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				name: icon,
				className: "h-4 w-4"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-base font-semibold",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
				children: description
			})]
		})]
	});
}
function CheckItem({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-3 text-sm leading-relaxed text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "mt-0.5 h-4 w-4 shrink-0 text-accent",
			"aria-hidden": true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children })]
	});
}
//#endregion
export { ServiceCard as a, SectionHeading as i, FeatureCard as n, Icon as r, CheckItem as t };
