export const COMPANY = {
  name: "Jayamina Print",
  tagline: "Creative Design. Quality Printing. Trusted Since 2013.",
  since: 2013,
  email: "isuru@jayaminaprint.com",
  phone: "+94 77 456 7890",
  whatsapp: "94774567890",
  location: "Colombo, Sri Lanka — serving clients worldwide",
};

export const navLinks: Array<{ label: string; to: string; hash?: string }> = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Graphic Designing", to: "/graphic-designing" },
  { label: "Printing Products", to: "/printing-products" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export type Stat = { value: number; suffix: string; label: string; display?: string };

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 0, suffix: "", display: "Worldwide", label: "Online Service" },
];

export const superpowers = [
  {
    icon: "Palette" as const,
    title: "Design",
    description:
      "Logos, brand identities and print-ready artwork crafted by professional designers who sweat the details.",
  },
  {
    icon: "Printer" as const,
    title: "Print",
    description:
      "Digital, offset and large-format printing on premium materials with consistent, colour-accurate results.",
  },
  {
    icon: "Truck" as const,
    title: "Deliver",
    description:
      "Custom solutions, fast turnaround and reliable dispatch — locally and to online clients worldwide.",
  },
];

export const designServices = [
  { title: "Logo Design", description: "Distinctive, memorable marks built to scale — from favicon to shopfront signage." },
  { title: "Brand Identity Design", description: "Complete brand systems: colour palettes, typography, usage rules and guidelines." },
  { title: "Business Cards", description: "Premium layouts that make a confident first impression in the hand." },
  { title: "Flyers & Brochures", description: "Clear hierarchy and copy-led layouts for single-sheet flyers and multi-fold brochures." },
  { title: "Posters", description: "Bold, readable-at-distance poster artwork for events, campaigns and retail environments." },
  { title: "Social Media Graphics", description: "Scroll-stopping post and story sets — sized and optimised for every major platform." },
  { title: "Packaging Design", description: "Shelf-ready packaging dielines, product labels and finishing recommendations." },
  { title: "Banner Design", description: "High-impact pull-up banners, roll banners and outdoor banner artwork." },
  { title: "Menu Design", description: "Appetising, easy-to-scan menu layouts for cafés, restaurants and hospitality venues." },
  { title: "Invitation Cards", description: "Elegant invitation and card design for weddings, events and corporate occasions." },
  { title: "Booklets & Catalogues", description: "Multi-page editorial layouts, product catalogues and corporate booklets, press-ready." },
];

export const printServices = [
  { title: "Digital Printing", description: "Short runs and quick reprints with sharp detail and low minimums." },
  { title: "Offset Printing", description: "Cost-efficient high volumes with precise, repeatable colour." },
  { title: "Large Format Printing", description: "Banners, backdrops and posters up to wide-format sizes." },
  { title: "Business Card Printing", description: "Premium stocks with matte, gloss, spot UV or foil finishes." },
  { title: "Sticker & Label Printing", description: "Contour-cut, waterproof and roll labels for products." },
  { title: "T-Shirt & Apparel Printing", description: "Screen, DTF and heat-transfer printing for teams and events." },
  { title: "Mug & Gift Printing", description: "Sublimated mugs, bottles and corporate giveaway items." },
  { title: "Banner & Backdrop Printing", description: "Durable PVC and fabric prints with hemming and eyelets." },
  { title: "Wedding & Invitation Printing", description: "Special stocks, foiling and embossing for keepsake pieces." },
  { title: "Book & Booklet Printing", description: "Saddle-stitch and perfect-bound binding in any quantity." },
  { title: "Packaging & Box Printing", description: "Custom boxes, sleeves and bags die-cut to your dieline." },
];

export const whyChooseUs = [
  { icon: "BadgeCheck" as const, title: "Established Since 2013", description: "Over a decade of hands-on design and print experience behind every job." },
  { icon: "Sparkles" as const, title: "Creative Professionals", description: "A dedicated design team that treats your brand like its own." },
  { icon: "Gem" as const, title: "Premium Quality", description: "Carefully selected materials and rigorous quality checks before dispatch." },
  { icon: "Wallet" as const, title: "Affordable Pricing", description: "Transparent quotations with no hidden charges or surprise add-ons." },
  { icon: "Zap" as const, title: "Fast Turnaround", description: "Tight deadlines handled calmly, with express options when you need them." },
  { icon: "Globe" as const, title: "Worldwide Online Service", description: "Work with us entirely online — brief, proof and approve from anywhere." },
  { icon: "HeartHandshake" as const, title: "Customer Satisfaction", description: "We revise until it's right, because repeat clients are our best marketing." },
];

export const process = [
  { step: "01", title: "Requirements", description: "We listen first — your goals, audience, quantities and deadlines." },
  { step: "02", title: "Quotation", description: "A clear, itemised quote with material and finishing options." },
  { step: "03", title: "Concept Design", description: "Initial concepts that translate your brief into visual direction." },
  { step: "04", title: "Revisions", description: "Focused rounds of refinement until the design feels exactly right." },
  { step: "05", title: "Approval", description: "Final proof and press-ready files signed off by you before printing." },
  { step: "06", title: "Production", description: "Printing, finishing and quality control on every single piece." },
  { step: "07", title: "Delivery", description: "Packed carefully and delivered locally or dispatched worldwide." },
];

export const industries = [
  "Retail & Shops",
  "Restaurants & Cafés",
  "Hotels & Hospitality",
  "Education & Institutes",
  "Healthcare & Pharmacy",
  "Real Estate",
  "Construction & Engineering",
  "Events & Weddings",
  "Fashion & Apparel",
  "Startups & SMEs",
  "NGOs & Charities",
  "E-commerce Brands",
];

export const coreValues = [
  { icon: "Lightbulb" as const, title: "Creativity", description: "Original thinking on every brief, never recycled templates." },
  { icon: "ShieldCheck" as const, title: "Quality", description: "Premium materials and finishing standards we refuse to compromise." },
  { icon: "Scale" as const, title: "Integrity", description: "Honest pricing, honest timelines and honest advice." },
  { icon: "Users" as const, title: "Customer Focus", description: "Your goals lead the process from first brief to final delivery." },
  { icon: "TrendingUp" as const, title: "Continuous Improvement", description: "New techniques, materials and technology, adopted continuously." },
];

export const trustPoints = [
  "More than a decade of design and printing experience since 2013.",
  "A professional in-house creative team, not outsourced freelancers.",
  "Print-ready artwork prepared correctly the first time.",
  "Premium stocks, inks and finishing options for every budget.",
  "Transparent, itemised quotations with no hidden costs.",
  "Fast turnaround with express options for urgent campaigns.",
  "Fully remote-friendly workflow for online and overseas clients.",
  "Generous revision rounds until you are genuinely happy.",
  "Careful packing and reliable island-wide and worldwide dispatch.",
  "Long-term client relationships built on consistent results.",
];

export const faqs = [
  {
    question: "How is pricing calculated?",
    answer:
      "Pricing depends on the design scope, quantity, material and finishing you choose. Send us your requirements and you'll receive a clear, itemised quotation — no hidden charges.",
  },
  {
    question: "What is your usual turnaround time?",
    answer:
      "Most design concepts are ready within 2–3 working days, and printing typically takes 2–5 working days depending on quantity and finishing. Express options are available for urgent deadlines.",
  },
  {
    question: "Can you work with remote or overseas clients?",
    answer:
      "Yes. We work with clients worldwide entirely online — briefs, proofs and approvals happen over email or WhatsApp, and print jobs can be dispatched internationally.",
  },
  {
    question: "What printing materials do you offer?",
    answer:
      "We print on art card, matte and gloss papers, kraft, vinyl, PVC, fabric, acrylic and apparel, with finishing options including lamination, spot UV, foiling and embossing.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Every design package includes multiple revision rounds. We keep refining the concept until you're happy to approve it for production.",
  },
  {
    question: "In what format will I receive my files?",
    answer:
      "You receive print-ready PDFs plus web-optimised PNG or JPG versions. Source files and full brand asset kits are available on request.",
  },
];

export const clients = [
  "Aurelle",
  "Harbour",
  "Meridian",
  "Ember",
  "Northline",
  "Volta",
];
