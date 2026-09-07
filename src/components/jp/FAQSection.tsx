import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./ui-blocks";

export function FAQSection() {
  return (
    <section id="faq" className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            sub="Everything clients usually ask before starting a project with us."
          />
        </Reveal>
        <Reveal delay={80} className="mt-10">
          <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.question}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold hover:no-underline">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
