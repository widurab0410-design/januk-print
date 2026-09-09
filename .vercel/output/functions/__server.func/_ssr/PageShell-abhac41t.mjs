import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as Slot, v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { S as Instagram, _ as MessageCircle, a as Sun, b as Mail, g as Moon, j as Clock, k as Facebook, m as Phone, n as X, u as Send, v as Menu, x as Linkedin, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-abhac41t.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function useScrolled(threshold = 12) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);
	return scrolled;
}
function ThemeToggle({ className }) {
	const [theme, setTheme] = (0, import_react.useState)(() => {
		if (typeof window !== "undefined") {
			const stored = localStorage.getItem("theme");
			if (stored === "dark" || stored === "light") return stored;
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
		}
		return "light";
	});
	(0, import_react.useEffect)(() => {
		const root = document.documentElement;
		if (theme === "dark") root.classList.add("dark");
		else root.classList.remove("dark");
		localStorage.setItem("theme", theme);
	}, [theme]);
	const toggleTheme = () => {
		setTheme((prev) => prev === "light" ? "dark" : "light");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggleTheme,
		className: `relative rounded-xl border border-border/60 bg-surface/50 text-foreground transition-all hover:bg-secondary hover:text-accent ${className}`,
		"aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
		title: `Switch to ${theme === "light" ? "dark" : "light"} mode`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Toggle theme"
			})
		]
	});
}
var januk_logo_horizontal_default = "/assets/januk-logo-horizontal-B0qsuCKe.png";
var extendedNavLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Graphic Designing",
		to: "/graphic-designing"
	},
	{
		label: "Printing Products",
		to: "/printing-products"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const scrolled = useScrolled(12);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isHomePage = pathname === "/";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 transition-all duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `transition-all duration-300 ${scrolled ? "border-b border-border bg-background/90 backdrop-blur-xl shadow-sm" : "border-b border-transparent bg-transparent"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full max-w-7xl mx-auto items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "group flex shrink-0 items-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center bg-white/95 px-3 py-1.5 rounded-xl shadow-sm border border-black/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: januk_logo_horizontal_default,
							alt: "Januk Print",
							className: "h-8 sm:h-10 md:h-11 w-auto object-contain transition-all duration-300 drop-shadow-none"
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Main",
							className: "hidden items-center gap-1 xl:gap-2 md:flex",
							children: extendedNavLinks.map((link) => {
								const isActive = pathname === link.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: link.to,
									...link.hash ? { hash: link.hash } : {},
									className: `relative whitespace-nowrap px-2.5 py-1.5 font-sans text-sm lg:text-[0.95rem] xl:text-base font-bold uppercase tracking-wide transition-colors duration-200 ${isActive ? "text-primary after:absolute after:bottom-0 after:left-1.5 after:right-1.5 after:h-[3px] after:bg-primary after:rounded-full drop-shadow-[0_2px_8px_rgba(234,88,12,0.35)]" : `${scrolled || !isHomePage ? "text-black drop-shadow-sm" : "text-white drop-shadow-md"} hover:text-primary hover:scale-[1.02] transition-all duration-200`}`,
									children: link.label
								}, link.label);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "sm",
							className: "ml-1 hidden bg-gradient-brand text-accent-foreground shadow-glow hover:opacity-90 sm:inline-flex font-poppins font-semibold uppercase tracking-wider text-sm px-4.5 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/graphic-designing",
								children: "Design With Us"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
							open,
							onOpenChange: setOpen,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									className: "md:hidden",
									"aria-label": "Open menu",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
								side: "right",
								className: "w-[86vw] max-w-xs border-border bg-surface p-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center justify-between border-b border-border px-6 py-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
											className: "font-poppins text-base font-semibold text-primary",
											children: "JANUK PRINT"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
										"aria-label": "Mobile",
										className: "flex flex-col gap-1 p-4",
										children: extendedNavLinks.map((link) => {
											const isActive = pathname === link.to;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: link.to,
												...link.hash ? { hash: link.hash } : {},
												onClick: () => setOpen(false),
												className: `rounded-lg px-3.5 py-3 font-poppins text-lg font-medium uppercase tracking-wide transition-all ${isActive ? "bg-primary/15 text-primary border-l-4 border-primary font-semibold pl-4" : "text-foreground hover:bg-secondary hover:text-primary"}`,
												children: link.label
											}, link.label);
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto border-t border-border p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											className: "w-full bg-gradient-brand text-accent-foreground font-display font-bold uppercase tracking-wider text-base py-3",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/graphic-designing",
												onClick: () => setOpen(false),
												children: "Design With Us"
											})
										})
									})
								]
							})]
						})
					]
				})]
			})
		})
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var COMPANY = {
	name: "Januk Print",
	tagline: "Creative Design. Quality Printing. Trusted Since 2013.",
	since: 2013,
	email: "contact@janukprint.com",
	phone: "+94 77 456 7890",
	whatsapp: "94774567890",
	location: "Colombo, Sri Lanka — serving clients worldwide"
};
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Graphic Designing",
		to: "/graphic-designing"
	},
	{
		label: "Printing Products",
		to: "/printing-products"
	},
	{
		label: "Industries",
		to: "/industries"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
var stats = [
	{
		value: 10,
		suffix: "+",
		label: "Years of Experience"
	},
	{
		value: 500,
		suffix: "+",
		label: "Projects Delivered"
	},
	{
		value: 100,
		suffix: "%",
		label: "Client Satisfaction"
	},
	{
		value: 0,
		suffix: "",
		display: "Worldwide",
		label: "Online Service"
	}
];
var superpowers = [
	{
		icon: "Palette",
		title: "Design",
		description: "Logos, brand identities and print-ready artwork crafted by professional designers who sweat the details."
	},
	{
		icon: "Printer",
		title: "Print",
		description: "Digital, offset and large-format printing on premium materials with consistent, colour-accurate results."
	},
	{
		icon: "Truck",
		title: "Deliver",
		description: "Custom solutions, fast turnaround and reliable dispatch — locally and to online clients worldwide."
	}
];
var designServices = [
	{
		title: "Logo Design",
		description: "Distinctive, memorable marks built to scale — from favicon to shopfront signage."
	},
	{
		title: "Brand Identity Design",
		description: "Complete brand systems: colour palettes, typography, usage rules and guidelines."
	},
	{
		title: "Business Cards",
		description: "Premium layouts that make a confident first impression in the hand."
	},
	{
		title: "Flyers & Brochures",
		description: "Clear hierarchy and copy-led layouts for single-sheet flyers and multi-fold brochures."
	},
	{
		title: "Posters",
		description: "Bold, readable-at-distance poster artwork for events, campaigns and retail environments."
	},
	{
		title: "Social Media Graphics",
		description: "Scroll-stopping post and story sets — sized and optimised for every major platform."
	},
	{
		title: "Packaging Design",
		description: "Shelf-ready packaging dielines, product labels and finishing recommendations."
	},
	{
		title: "Banner Design",
		description: "High-impact pull-up banners, roll banners and outdoor banner artwork."
	},
	{
		title: "Menu Design",
		description: "Appetising, easy-to-scan menu layouts for cafés, restaurants and hospitality venues."
	},
	{
		title: "Invitation Cards",
		description: "Elegant invitation and card design for weddings, events and corporate occasions."
	},
	{
		title: "Booklets & Catalogues",
		description: "Multi-page editorial layouts, product catalogues and corporate booklets, press-ready."
	}
];
var printServices = [
	{
		title: "Digital Printing",
		description: "Short runs and quick reprints with sharp detail and low minimums."
	},
	{
		title: "Offset Printing",
		description: "Cost-efficient high volumes with precise, repeatable colour."
	},
	{
		title: "Large Format Printing",
		description: "Banners, backdrops and posters up to wide-format sizes."
	},
	{
		title: "Business Card Printing",
		description: "Premium stocks with matte, gloss, spot UV or foil finishes."
	},
	{
		title: "Sticker & Label Printing",
		description: "Contour-cut, waterproof and roll labels for products."
	},
	{
		title: "T-Shirt & Apparel Printing",
		description: "Screen, DTF and heat-transfer printing for teams and events."
	},
	{
		title: "Mug & Gift Printing",
		description: "Sublimated mugs, bottles and corporate giveaway items."
	},
	{
		title: "Banner & Backdrop Printing",
		description: "Durable PVC and fabric prints with hemming and eyelets."
	},
	{
		title: "Wedding & Invitation Printing",
		description: "Special stocks, foiling and embossing for keepsake pieces."
	},
	{
		title: "Book & Booklet Printing",
		description: "Saddle-stitch and perfect-bound binding in any quantity."
	},
	{
		title: "Packaging & Box Printing",
		description: "Custom boxes, sleeves and bags die-cut to your dieline."
	}
];
var whyChooseUs = [
	{
		icon: "BadgeCheck",
		title: "Established Since 2013",
		description: "Over a decade of hands-on design and print experience behind every job."
	},
	{
		icon: "Sparkles",
		title: "Creative Professionals",
		description: "A dedicated design team that treats your brand like its own."
	},
	{
		icon: "Gem",
		title: "Premium Quality",
		description: "Carefully selected materials and rigorous quality checks before dispatch."
	},
	{
		icon: "Wallet",
		title: "Affordable Pricing",
		description: "Transparent quotations with no hidden charges or surprise add-ons."
	},
	{
		icon: "Zap",
		title: "Fast Turnaround",
		description: "Tight deadlines handled calmly, with express options when you need them."
	},
	{
		icon: "Globe",
		title: "Worldwide Online Service",
		description: "Work with us entirely online — brief, proof and approve from anywhere."
	},
	{
		icon: "HeartHandshake",
		title: "Customer Satisfaction",
		description: "We revise until it's right, because repeat clients are our best marketing."
	}
];
var process = [
	{
		step: "01",
		title: "Requirements",
		description: "We listen first — your goals, audience, quantities and deadlines."
	},
	{
		step: "02",
		title: "Quotation",
		description: "A clear, itemised quote with material and finishing options."
	},
	{
		step: "03",
		title: "Concept Design",
		description: "Initial concepts that translate your brief into visual direction."
	},
	{
		step: "04",
		title: "Revisions",
		description: "Focused rounds of refinement until the design feels exactly right."
	},
	{
		step: "05",
		title: "Approval",
		description: "Final proof and press-ready files signed off by you before printing."
	},
	{
		step: "06",
		title: "Production",
		description: "Printing, finishing and quality control on every single piece."
	},
	{
		step: "07",
		title: "Delivery",
		description: "Packed carefully and delivered locally or dispatched worldwide."
	}
];
var coreValues = [
	{
		icon: "Lightbulb",
		title: "Creativity",
		description: "Original thinking on every brief, never recycled templates."
	},
	{
		icon: "ShieldCheck",
		title: "Quality",
		description: "Premium materials and finishing standards we refuse to compromise."
	},
	{
		icon: "Scale",
		title: "Integrity",
		description: "Honest pricing, honest timelines and honest advice."
	},
	{
		icon: "Users",
		title: "Customer Focus",
		description: "Your goals lead the process from first brief to final delivery."
	},
	{
		icon: "TrendingUp",
		title: "Continuous Improvement",
		description: "New techniques, materials and technology, adopted continuously."
	}
];
var trustPoints = [
	"More than a decade of design and printing experience since 2013.",
	"A professional in-house creative team, not outsourced freelancers.",
	"Print-ready artwork prepared correctly the first time.",
	"Premium stocks, inks and finishing options for every budget.",
	"Transparent, itemised quotations with no hidden costs.",
	"Fast turnaround with express options for urgent campaigns.",
	"Fully remote-friendly workflow for online and overseas clients.",
	"Generous revision rounds until you are genuinely happy.",
	"Careful packing and reliable island-wide and worldwide dispatch.",
	"Long-term client relationships built on consistent results."
];
var faqs = [
	{
		question: "How is pricing calculated?",
		answer: "Pricing depends on the design scope, quantity, material and finishing you choose. Send us your requirements and you'll receive a clear, itemised quotation — no hidden charges."
	},
	{
		question: "What is your usual turnaround time?",
		answer: "Most design concepts are ready within 2–3 working days, and printing typically takes 2–5 working days depending on quantity and finishing. Express options are available for urgent deadlines."
	},
	{
		question: "Can you work with remote or overseas clients?",
		answer: "Yes. We work with clients worldwide entirely online — briefs, proofs and approvals happen over email or WhatsApp, and print jobs can be dispatched internationally."
	},
	{
		question: "What printing materials do you offer?",
		answer: "We print on art card, matte and gloss papers, kraft, vinyl, PVC, fabric, acrylic and apparel, with finishing options including lamination, spot UV, foiling and embossing."
	},
	{
		question: "How many revisions are included?",
		answer: "Every design package includes multiple revision rounds. We keep refining the concept until you're happy to approve it for production."
	},
	{
		question: "In what format will I receive my files?",
		answer: "You receive print-ready PDFs plus web-optimised PNG or JPG versions. Source files and full brand asset kits are available on request."
	}
];
var new_logo_default = "/assets/new-logo-Cg6-APZw.jpg";
var socials = [
	{
		icon: Facebook,
		label: "Facebook",
		href: "https://facebook.com"
	},
	{
		icon: Instagram,
		label: "Instagram",
		href: "https://instagram.com"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://linkedin.com"
	}
];
var serviceLinks = [
	{
		label: "Books & Magazines",
		to: "/printing-products"
	},
	{
		label: "Flyers & Leaflets",
		to: "/printing-products"
	},
	{
		label: "Business Cards",
		to: "/printing-products"
	},
	{
		label: "Cartons & Packaging",
		to: "/printing-products"
	},
	{
		label: "Stickers & Labels",
		to: "/printing-products"
	}
];
var legalLinks = [
	{
		label: "Terms of Service",
		to: "/contact"
	},
	{
		label: "Awards & Recognition",
		to: "/about"
	},
	{
		label: "Privacy Policy",
		to: "/contact"
	}
];
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const handleSubscribe = (e) => {
		e.preventDefault();
		if (!email) return;
		toast.success("Thank you for subscribing to Januk Print newsletter!");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-neutral-950 text-neutral-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-neutral-800 bg-neutral-900/60 py-10 px-5 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-bold text-white",
					children: "Subscribe to our newsletter"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-neutral-400 mt-1",
					children: "Get the latest printing offers, material samples, and design tips directly to your inbox."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubscribe,
					className: "flex w-full md:w-auto items-center gap-2 max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						placeholder: "Enter your email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true,
						className: "bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 focus-visible:ring-[#BB8F3E]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "submit",
						className: "bg-gradient-brand text-accent-foreground font-display font-semibold shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-2 h-4 w-4" }), "Subscribe"]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-block transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex items-center bg-white/95 p-2 rounded-xl shadow-sm border border-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: new_logo_default,
									alt: "Januk Print",
									className: "h-14 sm:h-16 w-auto object-contain rounded-lg"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-xs leading-relaxed text-neutral-400",
							children: "Pioneer offset and digital printer of books, magazines, cartons, flyers, leaflets, posters & commercial packaging."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex gap-2",
							children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: s.href,
								target: "_blank",
								rel: "noopener noreferrer",
								"aria-label": s.label,
								className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-neutral-400 transition-colors hover:border-[#BB8F3E] hover:text-[#BB8F3E]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
							}, s.label))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-[#BB8F3E]",
						children: "Navigation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							...l.hash ? { hash: l.hash } : {},
							className: "text-xs text-neutral-400 transition-colors hover:text-white",
							children: l.label
						}) }, l.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-[#BB8F3E]",
						children: "Commercial Products"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: serviceLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-xs text-neutral-400 transition-colors hover:text-white",
							children: l.label
						}) }, l.label))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xs font-bold uppercase tracking-[0.18em] text-[#BB8F3E]",
						children: "Contact & Hours"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-xs text-neutral-400",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "947, Peradeniya Road, Kandy / Colombo, Sri Lanka 20000." })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
									className: "hover:text-white",
									children: COMPANY.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${COMPANY.email}`,
									className: "hover:text-white",
									children: COMPANY.email
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-[#BB8F3E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold text-neutral-300",
										children: "Working Hours:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Mon - Fri: 08:30 AM - 05:30 PM" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Saturday: 08:30 AM - 01:30 PM" })
								] })]
							})
						]
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Januk Print. All rights reserved. | Managed and Created by",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.univerzlk.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "text-[#BB8F3E] hover:underline font-medium",
						children: "UniverzLK"
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-4",
					children: legalLinks.map((ll) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: ll.to,
						className: "hover:text-neutral-300 transition-colors",
						children: ll.label
					}, ll.label))
				})]
			})]
		})]
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Hi Januk Print! I'd like a quote for a design/printing job.")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with Januk Print on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-brand text-accent-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-7 sm:right-7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "overflow-x-hidden",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
function PageHeader({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden px-5 pt-32 pb-12 lg:px-8 lg:pt-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "surface-grid pointer-events-none absolute inset-0 opacity-60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gradient-brand opacity-15 blur-[120px]",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-4xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl",
						children: title
					}),
					sub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: sub
					}) : null
				]
			})
		]
	});
}
//#endregion
export { PageShell as a, designServices as c, process as d, stats as f, whyChooseUs as h, PageHeader as i, faqs as l, trustPoints as m, COMPANY as n, cn as o, superpowers as p, Input as r, coreValues as s, Button as t, printServices as u };
