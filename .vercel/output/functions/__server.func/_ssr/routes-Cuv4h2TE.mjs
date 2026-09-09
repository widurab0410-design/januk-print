import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as ArrowRight, E as HeartHandshake, M as CircleCheck, f as Quote, h as Palette, j as Clock, o as Sparkles, p as Printer, z as Award } from "../_libs/lucide-react.mjs";
import { a as PageShell, c as designServices, f as stats, h as whyChooseUs, o as cn, p as superpowers, t as Button, u as printServices } from "./PageShell-abhac41t.mjs";
import { n as useInView, t as Reveal } from "./Reveal-AAMoU_tQ.mjs";
import { t as CTASection } from "./CTASection-DMy7fKF3.mjs";
import { i as SectionHeading, n as FeatureCard, r as Icon } from "./ui-blocks-C57BSIkz.mjs";
import { t as FAQSection } from "./FAQSection-CAbvbI0y.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { n as motion, r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cuv4h2TE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		id: "flyers",
		eyebrow: "01 — Popular Bestseller",
		title: "Flyers &\nLeaflets",
		sub: "Vibrant single & multi-fold marketing handouts engineered to capture attention and boost brand conversion rates.",
		specs: [
			"Bi-Fold, Tri-Fold, Z-Fold",
			"130–250gsm Art Paper",
			"Same-Day Dispatch Option"
		],
		image: "/assets/flyers-Du0zsmzy.jpg",
		cta: "/printing-products"
	},
	{
		id: "printing-services",
		eyebrow: "02 — High Quality Printing Services",
		title: "High Quality\nPrinting Services",
		sub: "Professional wide-format printing, offset & digital printing solutions designed to impress.",
		specs: [
			"High Resolution Printing",
			"Custom Sizes & Formats",
			"Fast Turnaround Time"
		],
		image: "/assets/slide-2-highres-C8KRj_6S.png",
		cta: "/printing-products"
	},
	{
		id: "stickers",
		eyebrow: "03 — Die-Cut Vinyl & Labels",
		title: "Custom Stickers\n& Labels",
		sub: "Waterproof contour die-cut vinyl stickers, product labels, roll labels and decorative brand sticker sheets.",
		specs: [
			"Waterproof Die-Cut Vinyl",
			"Roll & Sheet Product Labels",
			"Matte, Gloss & Clear Options"
		],
		image: "/assets/slide-3-highres-B-R8BEUs.png",
		cta: "/printing-products"
	}
];
function HeroBanner() {
	const autoplay = Autoplay({
		delay: 3500,
		stopOnInteraction: false,
		stopOnMouseEnter: false
	});
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start"
	}, [autoplay]);
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	(0, import_react.useCallback)(() => {
		emblaApi?.scrollPrev();
	}, [emblaApi]);
	(0, import_react.useCallback)(() => {
		emblaApi?.scrollNext();
	}, [emblaApi]);
	const scrollTo = (0, import_react.useCallback)((i) => {
		emblaApi?.scrollTo(i);
	}, [emblaApi]);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden",
			ref: emblaRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex",
				children: slides.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-[0_0_100%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full min-h-[600px] h-[100vh] lg:h-[100vh]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.image,
								alt: s.title,
								className: "absolute inset-0 h-full w-full object-cover brightness-[0.88] contrast-[1.06] saturate-[1.08] transition-all duration-700 pointer-events-none"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 flex items-center pt-24 pb-16 sm:pt-28 lg:pt-16 sm:py-0 z-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid lg:grid-cols-12 gap-8 items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "lg:col-span-7 max-w-xl lg:max-w-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
													className: "mt-3 sm:mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] text-white drop-shadow-md whitespace-pre-line",
													children: s.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-2.5 sm:mt-4 text-xs sm:text-base text-neutral-200 leading-relaxed max-w-xl drop-shadow",
													children: s.sub
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "mt-3 sm:mt-4 flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1.5",
													children: s.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1.5 text-[0.7rem] sm:text-xs font-medium text-white/95 bg-black/40 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-sm",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-[#BB8F3E] shrink-0" }), spec]
													}, spec))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-5 sm:mt-7 flex flex-wrap gap-2.5 sm:gap-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														asChild: true,
														size: "sm",
														className: "sm:h-11 sm:px-8 bg-gradient-brand text-accent-foreground shadow-glow hover:-translate-y-0.5 transition-transform text-xs sm:text-sm font-semibold",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
															to: "/graphic-designing",
															children: ["Design With Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" })]
														})
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
														asChild: true,
														size: "sm",
														variant: "outline",
														className: "sm:h-11 sm:px-6 border-white/40 bg-black/50 text-white backdrop-blur-md hover:bg-white/20 text-xs sm:text-sm",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
															to: "/printing-products",
															children: "View All Services"
														})
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "lg:col-span-5 relative flex justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative w-full max-w-[430px] group",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 bg-gradient-to-r from-[#BB8F3E]/30 via-[#E2C175]/20 to-[#8A6421]/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "relative p-[6px] rounded-2xl bg-gradient-to-b from-[#FFEFA6] via-[#E8C86C] to-[#D4AF37] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(232,200,108,0.25)]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative overflow-hidden rounded-[14px] bg-neutral-950",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative overflow-hidden w-full h-[250px] sm:h-[320px] xl:h-[380px] bg-black",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		src: s.image,
																		alt: s.title,
																		className: "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border border-white/10 pointer-events-none z-10" }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" })
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-3 left-3 h-4 w-4 border-t-2 border-l-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-3 right-3 h-4 w-4 border-t-2 border-r-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#E2C175] pointer-events-none z-20 drop-shadow-md" })
														]
													})
												})]
											})
										})]
									})
								})
							})
						]
					})
				}, s.id))
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-0 inset-x-0 z-10 bg-gradient-to-t from-black/95 via-black/70 to-transparent pt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pb-3 flex items-center justify-start",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: slides.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => scrollTo(idx),
						className: `h-2 rounded-full transition-all duration-300 ${selectedIndex === idx ? "w-8 bg-[#BB8F3E]" : "w-2 bg-white/30 hover:bg-white/60"}`,
						"aria-label": `Go to slide ${idx + 1}`
					}, s.id))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-0.5 bg-white/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-[#BB8F3E] transition-all duration-500",
					style: { width: `${(selectedIndex + 1) / slides.length * 100}%` }
				})
			})]
		})]
	});
}
function useCount(target, run) {
	const [value, setValue] = (0, import_react.useState)(0);
	const frame = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		if (!run) return;
		const duration = 1400;
		const start = performance.now();
		const tick = (now) => {
			const p = Math.min((now - start) / duration, 1);
			const eased = 1 - Math.pow(1 - p, 3);
			setValue(Math.round(target * eased));
			if (p < 1) frame.current = requestAnimationFrame(tick);
		};
		frame.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame.current);
	}, [target, run]);
	return value;
}
function Stat({ item, run }) {
	const count = useCount(item.value, run);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-4 py-6 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-3xl font-bold text-gradient-brand sm:text-4xl",
			children: item.display ?? `${count}${item.suffix}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-xs uppercase tracking-[0.14em] text-muted-foreground sm:text-sm sm:tracking-normal sm:normal-case",
			children: item.label
		})]
	});
}
function StatBar() {
	const { ref, visible } = useInView();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "mx-auto max-w-7xl px-5 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 divide-border rounded-2xl border border-border bg-surface/60 backdrop-blur-sm sm:grid-cols-4 sm:divide-x",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
				item: s,
				run: visible
			}, s.label))
		})
	});
}
var benefits = [
	{
		icon: Award,
		title: "Quality Printing",
		description: "Bright inks. Thick Paper. Precise cuts. We believe that quality printing matters."
	},
	{
		icon: Palette,
		title: "Quality Design",
		description: "The alternative to good design is always bad design. There is no such thing as no design."
	},
	{
		icon: Clock,
		title: "Timely Delivery",
		description: "No printer is faster. Order today and get your production dispatched on guaranteed schedule."
	},
	{
		icon: HeartHandshake,
		title: "Friendly Service",
		description: "To listen closely and reply well is the highest perfection we are able to attain."
	}
];
function ServiceBenefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-20 lg:px-8 bg-surface/50 border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl space-y-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl font-bold sm:text-4xl lg:text-5xl",
					children: ["Explore how Our Service can ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "benefit your business"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base text-muted-foreground",
					children: "Decades of commercial printing excellence, cutting-edge technology, and personal commitment to every order."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-lift rounded-3xl border border-border bg-card p-8 text-center shadow-card space-y-4 hover:border-accent/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand text-accent-foreground mx-auto shadow-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-foreground",
							children: b.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-muted-foreground",
							children: b.description
						})
					]
				}, b.title))
			})]
		})
	});
}
var productItems = [
	{
		num: "1.",
		name: "Flyers & Leaflets",
		desc: "Vibrant single & multi-fold promotional flyers",
		img: "/showcase_flyers.png"
	},
	{
		num: "2.",
		name: "Tri-Fold Brochures",
		desc: "Corporate 3-panel folded presentation brochures",
		img: "/assets/cat-commercial-DG5z8hFt.jpg"
	},
	{
		num: "3.",
		name: "Roll-up Banners",
		desc: "Portable erect display standees & vinyl banners",
		img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
	},
	{
		num: "4.",
		name: "Letterheads & Stationery",
		desc: "Official corporate letterheads & matching envelopes",
		img: "https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80"
	},
	{
		num: "5.",
		name: "Luxury Business Cards",
		desc: "350gsm+ cardstock with gold foil & matte finish",
		img: "/showcase_bizcards.png"
	},
	{
		num: "6.",
		name: "Custom Stickers & Labels",
		desc: "Waterproof contour die-cut vinyl stickers & sheets",
		img: "/assets/slide-3-xvoWJcQP.jpg"
	},
	{
		num: "7.",
		name: "Invoice Books & NCR",
		desc: "Custom carbonless duplicate & triplicate books",
		img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80"
	},
	{
		num: "8.",
		name: "Promotional Items",
		desc: "Custom printed mugs, pens, umbrellas & gifts",
		img: "/assets/promotional-items-Cf0mIdAh.png"
	}
];
function CommercialGridShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-20 lg:px-8 bg-surface/30 border-y border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Individual Product Showcase"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl",
							children: ["Commercial Printing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "Products Gallery"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground text-sm sm:text-base",
							children: "Explore our range of high-precision offset and digital print products, crafted with premium materials and finishes."
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: productItems.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: idx * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/3] w-full overflow-hidden bg-neutral-900",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: item.img,
										alt: item.name,
										className: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute top-3 left-3 rounded-md bg-black/85 px-2.5 py-0.5 font-mono text-xs font-bold text-[#F5B027] backdrop-blur-sm border border-white/15 shadow-sm",
										children: item.num
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-base font-bold text-foreground group-hover:text-accent transition-colors",
										children: item.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-xs text-muted-foreground leading-normal",
										children: item.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 pt-3 border-t border-border/60 flex items-center justify-between text-xs text-accent font-semibold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Premium Quality"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/graphic-designing",
											className: "inline-flex items-center gap-1 hover:underline",
											children: ["Design With Us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
										})]
									})
								]
							})]
						})
					}, item.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "lg",
						className: "bg-gradient-brand text-accent-foreground shadow-glow",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/get-quote",
							children: ["Order Custom Printing Now", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
						})
					})
				})
			]
		})
	});
}
function DirectorQuote() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-20 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-12 overflow-hidden rounded-3xl border border-border shadow-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 bg-card p-8 sm:p-12 space-y-6 flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs font-semibold uppercase tracking-widest text-[#BB8F3E]",
							children: "Commercial Printing Excellence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl font-bold leading-tight sm:text-4xl",
							children: "Professional and personalized services."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-base leading-relaxed text-muted-foreground",
							children: "At Januk Print, everything is done to make your life easier: our team has the expertise to carry out your projects and meet your needs. We take care of your project from production to delivery on time, respecting your requirements and according to your budget."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-lg font-semibold text-foreground",
							children: "Whatever your project, we can help you!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							size: "lg",
							className: "bg-gradient-brand text-accent-foreground shadow-glow",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/printing-products",
								children: ["Discover Our Services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
							})
						}) })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 bg-gradient-brand p-8 sm:p-12 text-accent-foreground flex flex-col justify-between relative overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-24 w-24 absolute -bottom-6 -right-6 opacity-15 pointer-events-none text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 relative z-10 my-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block rounded-full bg-black/20 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-white",
								children: "Leadership Commitment"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold italic leading-snug sm:text-3xl",
								children: "“Our goal is to collaborate in the success of your projects. Our motivation, your satisfaction!”"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-white/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display font-bold text-base uppercase tracking-wider text-white",
									children: "Januk Print Team"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/80 font-mono mt-0.5",
									children: "Managing Director, Januk Print House Ltd"
								})]
							})
						]
					})]
				})]
			})
		})
	});
}
var DEFAULT_PHASES = [
	{
		at: 0,
		label: "starting up"
	},
	{
		at: 25,
		label: "loading assets"
	},
	{
		at: 55,
		label: "preparing magic"
	},
	{
		at: 80,
		label: "almost there"
	},
	{
		at: 100,
		label: "all done"
	}
];
var FLUX_FROM = "var(--flux-from, #1d6ffb)";
var FLUX_TO = "var(--flux-to, #74e1ff)";
var FLUX_MID = `color-mix(in oklab, ${FLUX_FROM}, ${FLUX_TO})`;
var DEFAULT_GRADIENT = `linear-gradient(90deg, ${FLUX_FROM} 0%, ${FLUX_MID} 35%, ${FLUX_TO} 55%, ${FLUX_MID} 78%, ${FLUX_FROM} 100%)`;
var BAR_SHADOW = `0 0 18px color-mix(in oklab, ${FLUX_FROM} 55%, transparent), 0 0 32px color-mix(in oklab, ${FLUX_TO} 40%, transparent), inset 0 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 3px rgba(0, 40, 120, 0.35)`;
var SHEEN_GRADIENT = "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.55) 50%, transparent 100%)";
var Z_TRANSITION = {
	duration: .9,
	ease: [
		.22,
		1,
		.36,
		1
	]
};
var LETTER_TRANSITION = {
	duration: .45,
	ease: [
		.22,
		1,
		.36,
		1
	]
};
/** Latest label whose threshold has been crossed. Expects pre-sorted phases. */
function pickLabel(value, sortedPhases) {
	let active = sortedPhases[0]?.label ?? "";
	for (const phase of sortedPhases) if (value >= phase.at) active = phase.label;
	return active;
}
function FluxLabel({ label, reduced, className }) {
	const base = cn("absolute inset-0 flex items-center justify-center text-center text-3xl font-semibold tracking-tight text-muted-foreground sm:text-4xl", className);
	if (reduced) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: base,
		children: label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": true,
			className: base,
			style: { transformStyle: "preserve-3d" },
			initial: {
				opacity: 0,
				z: -380,
				scale: .65,
				filter: "blur(14px)"
			},
			animate: {
				opacity: [
					0,
					1,
					1,
					1
				],
				z: [
					-380,
					60,
					-8,
					0
				],
				scale: [
					.65,
					1.08,
					.985,
					1
				],
				filter: [
					"blur(14px)",
					"blur(0px)",
					"blur(0px)",
					"blur(0px)"
				]
			},
			exit: {
				opacity: 0,
				z: 220,
				scale: 1.35,
				filter: "blur(10px)",
				transition: {
					duration: .45,
					ease: [
						.7,
						0,
						.84,
						0
					]
				}
			},
			transition: Z_TRANSITION,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex",
				children: label.split("").map((char, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					className: "inline-block",
					initial: {
						opacity: 0,
						y: 12,
						filter: "blur(8px)"
					},
					animate: {
						opacity: 1,
						y: 0,
						filter: "blur(0px)"
					},
					transition: {
						...LETTER_TRANSITION,
						delay: .18 + index * .035
					},
					children: char === " " ? "\xA0" : char
				}, `${label}-${index}`))
			})
		}, label)
	});
}
function ProgressiveFluxLoader({ value, phases = DEFAULT_PHASES, duration = 12, loop = true, showLabel = true, gradient = DEFAULT_GRADIENT, onComplete, className, barClassName, textClassName }) {
	const reduced = !!useReducedMotion();
	const isControlled = typeof value === "number";
	const [internal, setInternal] = import_react.useState(0);
	const onCompleteRef = import_react.useRef(onComplete);
	import_react.useEffect(() => {
		onCompleteRef.current = onComplete;
	});
	const completedRef = import_react.useRef(false);
	import_react.useEffect(() => {
		if (isControlled) return;
		let raf = 0;
		let timer = 0;
		let start = null;
		const totalMs = Math.max(500, duration * 1e3);
		const tick = (ts) => {
			if (start === null) start = ts;
			const pct = Math.min(100, (ts - start) / totalMs * 100);
			setInternal(pct);
			if (pct >= 100) {
				if (!completedRef.current) {
					completedRef.current = true;
					onCompleteRef.current?.();
				}
				if (loop) {
					start = null;
					completedRef.current = false;
					timer = window.setTimeout(() => {
						setInternal(0);
						raf = requestAnimationFrame(tick);
					}, 700);
				}
				return;
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			clearTimeout(timer);
		};
	}, [
		isControlled,
		duration,
		loop
	]);
	const raw = isControlled ? value : internal;
	const current = Number.isFinite(raw) ? Math.min(100, Math.max(0, raw)) : 0;
	import_react.useEffect(() => {
		if (!isControlled) return;
		if (current >= 100 && !completedRef.current) {
			completedRef.current = true;
			onCompleteRef.current?.();
		} else if (current < 100) completedRef.current = false;
	}, [isControlled, current]);
	const sortedPhases = import_react.useMemo(() => [...phases].sort((a, b) => a.at - b.at), [phases]);
	const label = import_react.useMemo(() => pickLabel(current, sortedPhases), [current, sortedPhases]);
	const rounded = Math.round(current);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mx-auto flex w-full max-w-md flex-col items-center gap-8", className),
		children: [showLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-16 w-full select-none",
			style: reduced ? void 0 : { perspective: "1000px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FluxLabel, {
				label,
				reduced,
				className: textClassName
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("relative h-5 w-full overflow-hidden rounded-full bg-muted shadow-[inset_0_2px_3px_rgba(0,0,0,0.09),inset_0_-1px_2px_rgba(255,255,255,0.7)] dark:shadow-[inset_0_2px_3px_rgba(0,0,0,0.45),inset_0_-1px_2px_rgba(255,255,255,0.05)]", barClassName),
			role: "progressbar",
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			"aria-valuenow": rounded,
			"aria-valuetext": label ? `${rounded}% – ${label}` : `${rounded}%`,
			"aria-label": "Loading",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "relative h-full rounded-full",
				style: {
					background: gradient,
					boxShadow: BAR_SHADOW
				},
				initial: false,
				animate: { width: `${current}%` },
				transition: reduced ? { duration: 0 } : {
					duration: .55,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				children: !reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-y-0 left-0 w-1/2 rounded-full",
					style: {
						background: SHEEN_GRADIENT,
						mixBlendMode: "screen"
					},
					animate: { x: ["-110%", "210%"] },
					transition: {
						duration: 1.6,
						ease: "linear",
						repeat: Infinity
					}
				})
			})
		})]
	});
}
var PHASES = [
	{
		at: 0,
		label: "loading assets"
	},
	{
		at: 30,
		label: "preparing layout"
	},
	{
		at: 60,
		label: "rendering pages"
	},
	{
		at: 85,
		label: "almost ready"
	},
	{
		at: 100,
		label: "welcome"
	}
];
/** Auto-dismiss threshold in ms (hard cap so the screen never sticks). */
var MAX_DURATION_MS = 4200;
function HomeLoadingScreen() {
	const reduced = !!useReducedMotion();
	const [visible, setVisible] = import_react.useState(true);
	const [progress, setProgress] = import_react.useState(0);
	import_react.useEffect(() => {
		const start = performance.now();
		const tick = () => {
			const elapsed = performance.now() - start;
			const t = Math.min(elapsed / MAX_DURATION_MS, 1);
			const eased = 1 - Math.pow(1 - t, 3);
			setProgress(Math.round(eased * 100));
			if (t < 1) requestAnimationFrame(tick);
		};
		const raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, []);
	const handleComplete = import_react.useCallback(() => {
		const id = setTimeout(() => setVisible(false), 600);
		return () => clearTimeout(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: visible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background",
		initial: { opacity: 1 },
		exit: reduced ? {
			opacity: 0,
			scale: 1.04,
			transition: {
				duration: .55,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		} : {
			opacity: 0,
			scale: 1.04,
			filter: "blur(6px)",
			transition: {
				duration: .55,
				ease: [
					.22,
					1,
					.36,
					1
				]
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-1/3 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#EA580C] opacity-[0.07] blur-[120px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/3 top-2/3 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FB923C] opacity-[0.05] blur-[100px]" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "surface-grid pointer-events-none absolute inset-0 opacity-30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex flex-col items-center gap-10 px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						y: 24,
						scale: .85
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					transition: {
						duration: .7,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "flex flex-col items-center gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [!reduced && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							className: "absolute -inset-6 rounded-full",
							style: { background: "radial-gradient(circle, rgba(251,146,60,0.3) 0%, rgba(234,88,12,0.2) 50%, transparent 75%)" },
							animate: {
								scale: [
									1,
									1.2,
									1
								],
								opacity: [
									.6,
									1,
									.6
								]
							},
							transition: {
								duration: 2.5,
								ease: "easeInOut",
								repeat: Infinity
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative p-3.5 bg-white/95 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/assets/new-logo-Cg6-APZw.jpg",
								alt: "Januk Print",
								className: "h-36 sm:h-44 md:h-52 w-auto object-contain rounded-2xl filter drop-shadow-sm"
							})
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .4,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "w-full max-w-xs sm:max-w-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressiveFluxLoader, {
						value: progress,
						phases: PHASES,
						loop: false,
						showLabel: true,
						onComplete: handleComplete,
						gradient: "linear-gradient(90deg, #C2410C 0%, #EA580C 35%, #FB923C 55%, #EA580C 78%, #C2410C 100%)",
						textClassName: "!text-xl !sm:text-2xl !text-muted-foreground/70",
						barClassName: "!h-3"
					})
				})]
			})
		]
	}, "home-loading") });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeLoadingScreen, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBanner, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommercialGridShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatBar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceBenefits, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectorQuote, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "What we do",
					title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Design. Print. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "Deliver."
					})] }),
					sub: "One studio, three strengths — creative design, quality printing and custom solutions built around your deadline."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: superpowers.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lift h-full rounded-3xl border border-border bg-card p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-grid h-14 w-14 place-items-center rounded-2xl bg-gradient-brand text-accent-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: s.icon,
										className: "h-6 w-6"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-display text-2xl font-bold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: s.description
								})
							]
						})
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Services",
					title: "Everything your brand needs, in one place",
					sub: "From the first sketch to the finished, packed and delivered product."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 lg:grid-cols-2",
					children: [{
						heading: "Graphic Design",
						icon: Palette,
						items: designServices,
						to: "/graphic-designing"
					}, {
						heading: "Printing Services",
						icon: Printer,
						items: printServices,
						to: "/printing-products"
					}].map((group, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: gi * 90,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "h-full rounded-3xl border border-border bg-card p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft text-accent",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(group.icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl font-bold",
										children: group.heading
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 grid gap-2.5 sm:grid-cols-2",
									children: group.items.slice(0, 8).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
											className: "mt-1 h-3.5 w-3.5 shrink-0 text-accent",
											"aria-hidden": true
										}), s.title]
									}, s.title))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "outline",
									className: "mt-7 border-border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: group.to,
										children: [
											"View all ",
											group.heading.toLowerCase(),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })
										]
									})
								})
							]
						})
					}, group.heading))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "why-us",
			className: "bg-surface/40 px-5 py-20 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why us",
					title: "Why Choose Januk Print?",
					sub: "Ten years of consistent work, honest pricing and a team that genuinely cares how your brand looks."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: whyChooseUs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i % 3 * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureCard, {
							icon: f.icon,
							title: f.title,
							description: f.description
						})
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {})
	] })] });
}
//#endregion
export { Home as component };
