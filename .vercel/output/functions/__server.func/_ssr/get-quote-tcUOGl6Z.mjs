import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as ArrowRight, L as Calculator, M as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as PageShell, c as designServices, i as PageHeader, n as COMPANY, r as Input, t as Button, u as printServices } from "./PageShell-abhac41t.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select } from "./select-D98TVWrd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-quote-tcUOGl6Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var products = [{
	id: "none",
	name: "No Printing Required"
}, ...printServices.map((service, index) => ({
	id: `service-${index}`,
	name: service.title
}))];
var designProducts = [{
	id: "none",
	name: "No Design Required (I have artwork)"
}, ...designServices.map((service, index) => ({
	id: `design-${index}`,
	name: service.title
}))];
var finishes = [
	{
		id: "standard",
		name: "Standard Uncoated"
	},
	{
		id: "matte",
		name: "Soft-Touch Matte Lamination"
	},
	{
		id: "gloss",
		name: "High-Gloss UV Coating"
	},
	{
		id: "gold-foil",
		name: "Metallic Gold Foil Stamping"
	},
	{
		id: "spot-uv",
		name: "Raised Spot UV Accents"
	}
];
function PrintCalculator() {
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(products[0]);
	const [selectedDesign, setSelectedDesign] = (0, import_react.useState)(designProducts[0]);
	const [qty, setQty] = (0, import_react.useState)(250);
	const [selectedFinish, setSelectedFinish] = (0, import_react.useState)(finishes[0]);
	const generateWhatsAppLink = () => {
		let msg = `Hi! I would like to request a quote.%0A%0A`;
		if (selectedProduct.id !== "none") {
			msg += `*Print Product:* ${selectedProduct.name}%0A`;
			msg += `*Quantity:* ${qty} pcs%0A`;
			msg += `*Finish:* ${selectedFinish.name}%0A`;
		}
		if (selectedDesign.id !== "none") msg += `*Design Service:* ${selectedDesign.name}%0A`;
		return `https://wa.me/${COMPANY.whatsapp}?text=${msg}`;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "quote-calculator",
		className: "px-5 py-20 lg:px-8 bg-surface/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-accent/20 bg-gradient-soft px-3.5 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "h-3.5 w-3.5 text-accent" }), "Instant Estimator"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl",
							children: ["Calculate Your Print Order ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "Estimate"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-muted-foreground",
							children: "Select your product specifications, material finish, and quantity to get an instant budget estimate for your next design & print project."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 pt-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "No minimum order limits for digital print runs" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Free press-ready file proofing & color check" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-accent shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fast express production available" })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-3xl p-7 sm:p-9 shadow-card border border-border space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3",
								children: "1. Select Print Product"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-w-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedProduct.id,
									onValueChange: (val) => {
										const product = products.find((p) => p.id === val);
										if (product) setSelectedProduct(product);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "w-full bg-surface/80 border-border/80 text-sm py-5 font-medium",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a product" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: p.id,
										className: "text-sm py-2.5 font-medium",
										children: p.name
									}, p.id)) })]
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3",
								children: "2. Select Design Service"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-w-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedDesign.id,
									onValueChange: (val) => {
										const design = designProducts.find((p) => p.id === val);
										if (design) setSelectedDesign(design);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "w-full bg-surface/80 border-border/80 text-sm py-5 font-medium",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a design service" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: designProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: p.id,
										className: "text-sm py-2.5 font-medium",
										children: p.name
									}, p.id)) })]
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "quantity",
								className: "block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3",
								children: "3. Enter Quantity"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-[200px] relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "quantity",
									type: "number",
									min: 1,
									value: qty || "",
									onChange: (e) => setQty(parseInt(e.target.value) || 0),
									className: "font-mono bg-surface/80 border-border/80 focus-visible:ring-accent pr-12",
									placeholder: "e.g. 500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono pointer-events-none",
									children: "pcs"
								})]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3",
								children: "4. Choose Premium Finish"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "max-w-md",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: selectedFinish.id,
									onValueChange: (val) => {
										const finish = finishes.find((f) => f.id === val);
										if (finish) setSelectedFinish(finish);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
										className: "w-full bg-surface/80 border-border/80 text-xs py-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select a finish" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: finishes.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: f.id,
										className: "text-xs py-2.5",
										children: f.name
									}, f.id)) })]
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-end gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "lg",
									className: "w-full sm:w-auto bg-gradient-brand text-accent-foreground shadow-glow",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: generateWhatsAppLink(),
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Request Quote via WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
									})
								})
							})
						]
					})
				})]
			})
		})
	});
}
function GetQuotePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Estimator",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Instant ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gradient-brand",
			children: "Quote"
		})] }),
		sub: "Use our calculator to get an instant estimate for your next print project."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintCalculator, {})
	})] });
}
//#endregion
export { GetQuotePage as component };
