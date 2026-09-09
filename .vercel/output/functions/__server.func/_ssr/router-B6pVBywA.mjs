import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B6pVBywA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-h-dClBYJ.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Januk Print — Graphic Design & Printing Since 2013" },
			{
				name: "description",
				content: "Professional graphic design and printing since 2013 — branding, packaging, signage and apparel, delivered worldwide."
			},
			{
				property: "og:title",
				content: "Januk Print — Graphic Design & Printing Since 2013"
			},
			{
				property: "og:description",
				content: "Professional graphic design and printing since 2013 — branding, packaging, signage and apparel, delivered worldwide."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-background",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-[10%] -left-[10%] w-[40%] h-[50%] opacity-[0.06] blur-[60px] md:blur-[100px] text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 200 200",
								xmlns: "http://www.w3.org/2000/svg",
								className: "w-full h-full fill-current",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M47.7,-67.2C59,-58.5,64.2,-41.8,69.5,-26.1C74.7,-10.3,80.1,4.4,75.8,17.2C71.5,30,57.5,40.8,43.2,50.7C28.9,60.6,14.5,69.6,-0.6,70.4C-15.7,71.2,-31.4,63.8,-42.6,52.3C-53.7,40.8,-60.2,25.2,-64.4,9.3C-68.6,-6.6,-70.5,-22.7,-64.7,-35.3C-58.9,-47.9,-45.5,-57,-31.8,-63.3C-18.1,-69.6,-4.1,-73.2,7.3,-71C18.6,-68.8,36.4,-75.9,47.7,-67.2Z",
									transform: "translate(100 100)"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-[30%] -right-[5%] w-[35%] h-[40%] opacity-[0.05] blur-[60px] md:blur-[90px] text-primary rotate-45",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 200 200",
								xmlns: "http://www.w3.org/2000/svg",
								className: "w-full h-full fill-current",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M38.1,-48.6C48.8,-40.4,56.5,-28.5,61.7,-15.1C66.9,-1.7,69.6,13.2,63.5,25.3C57.4,37.3,42.5,46.5,28.2,52C13.8,57.6,0,59.5,-15.5,58C-31,56.5,-48.2,51.6,-59.7,40.1C-71.2,28.6,-77,10.6,-74.6,-6.2C-72.2,-23,-61.7,-38.7,-48,-46.8C-34.4,-54.9,-17.2,-55.5,-1.9,-53.2C13.4,-51,27.3,-56.9,38.1,-48.6Z",
									transform: "translate(100 100)"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-[10%] left-[15%] w-[45%] h-[45%] opacity-[0.04] blur-[70px] md:blur-[120px] text-primary -rotate-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 200 200",
								xmlns: "http://www.w3.org/2000/svg",
								className: "w-full h-full fill-current",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: "M41.7,-52.1C55.4,-44.6,68.7,-34.5,75.4,-20.9C82.1,-7.4,82.2,9.6,75.3,23.5C68.3,37.5,54.4,48.4,40.1,55.9C25.7,63.4,10.9,67.6,-3.4,71.8C-17.7,76,-31.6,80.3,-43.3,75.2C-55,70.1,-64.5,55.7,-70.7,40.6C-76.8,25.5,-79.7,9.6,-76.8,-5.2C-73.9,-20,-65.2,-33.7,-53.4,-43.2C-41.6,-52.7,-26.8,-58,-12.3,-58.5C2.2,-59,16.7,-54.8,27.9,-59.6C39.1,-64.4,41.7,-52.1,41.7,-52.1Z",
									transform: "translate(100 100)"
								})
							})
						})
					]
				}),
				children,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
			]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			position: "top-center",
			richColors: true
		})]
	});
}
var $$splitComponentImporter$7 = () => import("./routes-Cuv4h2TE.mjs");
var title$6 = "Januk Print — Quality Offset and Digital Printing Since 2013";
var description$6 = "Pioneer offset and digital printer of books, magazines, cartons and boxes, flyers, leaflets, posters, bill books and luxury corporate stationery. Get an instant quote!";
var Route$7 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: title$6 },
			{
				name: "description",
				content: description$6
			},
			{
				property: "og:title",
				content: title$6
			},
			{
				property: "og:description",
				content: description$6
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-DjxbZycw.mjs");
var title$5 = "About Januk Print — Trusted Design & Print Since 2013";
var description$5 = "Creative design. Quality printing. Trusted since 2013. Learn about Januk Print's story, mission, vision and the values behind every project we deliver.";
var Route$6 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: title$5 },
			{
				name: "description",
				content: description$5
			},
			{
				property: "og:title",
				content: title$5
			},
			{
				property: "og:description",
				content: description$5
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-C4hMtyEh.mjs");
var title$4 = "Contact Januk Print — Get a Free Quote";
var description$4 = "Contact Januk Print for design and printing quotes. Email, phone or WhatsApp us, or send your requirements using the form and we'll reply within hours.";
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: title$4 },
			{
				name: "description",
				content: description$4
			},
			{
				property: "og:title",
				content: title$4
			},
			{
				property: "og:description",
				content: description$4
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./get-quote-tcUOGl6Z.mjs");
var Route$4 = createFileRoute("/get-quote")({
	head: () => ({ meta: [{ title: "Get a Quote — Januk Print" }, {
		name: "description",
		content: "Calculate your print order estimate instantly."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./graphic-designing-BJLi9pa0.mjs");
var title$3 = "Graphic Designing Services | Januk Print";
var description$3 = "Professional graphic design services — logo design, brand identity, packaging, brochures, social media graphics and more. Crafted by Januk Print's in-house creative team.";
var Route$3 = createFileRoute("/graphic-designing")({
	head: () => ({
		meta: [
			{ title: title$3 },
			{
				name: "description",
				content: description$3
			},
			{
				property: "og:title",
				content: title$3
			},
			{
				property: "og:description",
				content: description$3
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/graphic-designing"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/graphic-designing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./industries-C0LRzH7N.mjs");
var title$2 = "Industries We Serve — Januk Print";
var description$2 = "From retail and e-commerce to restaurants, education, and real estate. Discover custom design and printing solutions tailored to your industry.";
var Route$2 = createFileRoute("/industries")({
	head: () => ({
		meta: [
			{ title: title$2 },
			{
				name: "description",
				content: description$2
			},
			{
				property: "og:title",
				content: title$2
			},
			{
				property: "og:description",
				content: description$2
			}
		],
		links: [{
			rel: "canonical",
			href: "/industries"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./printing-products-DwWic1DP.mjs");
var title$1 = "Printing Products & Services | Januk Print";
var description$1 = "Premium printing products — digital, offset, large-format, apparel, stickers, packaging and more. Quality materials, accurate colour and reliable delivery by Januk Print.";
var Route$1 = createFileRoute("/printing-products")({
	head: () => ({
		meta: [
			{ title: title$1 },
			{
				name: "description",
				content: description$1
			},
			{
				property: "og:title",
				content: title$1
			},
			{
				property: "og:description",
				content: description$1
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/printing-products"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/printing-products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./process-HRlOLPM4.mjs");
var title = "Our Process — Januk Print";
var description = "Seven clear steps from first conversation to delivered product. See how Januk Print handles your design and printing project from brief to delivery.";
var Route = createFileRoute("/process")({
	head: () => ({
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		],
		links: [{
			rel: "canonical",
			href: "/process"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute: Route$6.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	GetQuoteRoute: Route$4.update({
		id: "/get-quote",
		path: "/get-quote",
		getParentRoute: () => Route$8
	}),
	GraphicDesigningRoute: Route$3.update({
		id: "/graphic-designing",
		path: "/graphic-designing",
		getParentRoute: () => Route$8
	}),
	IndustriesRoute: Route$2.update({
		id: "/industries",
		path: "/industries",
		getParentRoute: () => Route$8
	}),
	PrintingProductsRoute: Route$1.update({
		id: "/printing-products",
		path: "/printing-products",
		getParentRoute: () => Route$8
	}),
	ProcessRoute: Route.update({
		id: "/process",
		path: "/process",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
