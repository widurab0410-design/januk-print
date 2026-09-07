import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calculator, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { printServices, designServices, COMPANY } from "@/components/jp/data";

const products = [
  { id: "none", name: "No Printing Required" },
  ...printServices.map((service, index) => ({
    id: `service-${index}`,
    name: service.title,
  })),
];

const designProducts = [
  { id: "none", name: "No Design Required (I have artwork)" },
  ...designServices.map((service, index) => ({
    id: `design-${index}`,
    name: service.title,
  })),
];

const quantities = [100, 250, 500, 1000, 2500, 5000];

const finishes = [
  { id: "standard", name: "Standard Uncoated" },
  { id: "matte", name: "Soft-Touch Matte Lamination" },
  { id: "gloss", name: "High-Gloss UV Coating" },
  { id: "gold-foil", name: "Metallic Gold Foil Stamping" },
  { id: "spot-uv", name: "Raised Spot UV Accents" },
];

export function PrintCalculator() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]!);
  const [selectedDesign, setSelectedDesign] = useState(designProducts[0]!);
  const [qty, setQty] = useState(250);
  const [selectedFinish, setSelectedFinish] = useState(finishes[0]!);

  const generateWhatsAppLink = () => {
    let msg = `Hi! I would like to request a quote.%0A%0A`;
    if (selectedProduct.id !== "none") {
      msg += `*Print Product:* ${selectedProduct.name}%0A`;
      msg += `*Quantity:* ${qty} pcs%0A`;
      msg += `*Finish:* ${selectedFinish.name}%0A`;
    }
    if (selectedDesign.id !== "none") {
      msg += `*Design Service:* ${selectedDesign.name}%0A`;
    }
    return `https://wa.me/${COMPANY.whatsapp}?text=${msg}`;
  };

  return (
    <section id="quote-calculator" className="px-5 py-20 lg:px-8 bg-surface/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Section Left Title */}
          <div className="lg:col-span-5 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-gradient-soft px-3.5 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-accent">
              <Calculator className="h-3.5 w-3.5 text-accent" />
              Instant Estimator
            </span>

            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Calculate Your Print Order <span className="text-gradient-brand">Estimate</span>
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground">
              Select your product specifications, material finish, and quantity to get an instant budget estimate for your next design &amp; print project.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>No minimum order limits for digital print runs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Free press-ready file proofing &amp; color check</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                <span>Fast express production available</span>
              </li>
            </ul>
          </div>

          {/* Calculator Card */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-7 sm:p-9 shadow-card border border-border space-y-6">
              {/* Product Select */}
              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  1. Select Print Product
                </label>
                <div className="max-w-md">
                  <Select 
                    value={selectedProduct.id} 
                    onValueChange={(val) => {
                      const product = products.find((p) => p.id === val);
                      if (product) setSelectedProduct(product);
                    }}
                  >
                    <SelectTrigger className="w-full bg-surface/80 border-border/80 text-sm py-5 font-medium">
                      <SelectValue placeholder="Select a product" />
                    </SelectTrigger>
                    <SelectContent>
                      {products.map((p) => (
                        <SelectItem key={p.id} value={p.id} className="text-sm py-2.5 font-medium">
                          {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Design Select */}
              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  2. Select Design Service
                </label>
                <div className="max-w-md">
                  <Select 
                    value={selectedDesign.id} 
                    onValueChange={(val) => {
                      const design = designProducts.find((p) => p.id === val);
                      if (design) setSelectedDesign(design);
                    }}
                  >
                    <SelectTrigger className="w-full bg-surface/80 border-border/80 text-sm py-5 font-medium">
                      <SelectValue placeholder="Select a design service" />
                    </SelectTrigger>
                    <SelectContent>
                      {designProducts.map((p) => (
                        <SelectItem key={p.id} value={p.id} className="text-sm py-2.5 font-medium">
                          {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Quantity Select */}
              <div>
                <label htmlFor="quantity" className="block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  3. Enter Quantity
                </label>
                <div className="max-w-[200px] relative">
                  <Input
                    id="quantity"
                    type="number"
                    min={1}
                    value={qty || ""}
                    onChange={(e) => setQty(parseInt(e.target.value) || 0)}
                    className="font-mono bg-surface/80 border-border/80 focus-visible:ring-accent pr-12"
                    placeholder="e.g. 500"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground font-mono pointer-events-none">
                    pcs
                  </span>
                </div>
              </div>

              {/* Material Finish Select */}
              <div>
                <label className="block font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  4. Choose Premium Finish
                </label>
                <div className="max-w-md">
                  <Select 
                    value={selectedFinish.id} 
                    onValueChange={(val) => {
                      const finish = finishes.find((f) => f.id === val);
                      if (finish) setSelectedFinish(finish);
                    }}
                  >
                    <SelectTrigger className="w-full bg-surface/80 border-border/80 text-xs py-5">
                      <SelectValue placeholder="Select a finish" />
                    </SelectTrigger>
                    <SelectContent>
                      {finishes.map((f) => (
                        <SelectItem key={f.id} value={f.id} className="text-xs py-2.5">
                          {f.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Estimate Summary Footer */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-end gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-brand text-accent-foreground shadow-glow">
                  <a href={generateWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    Request Quote via WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
