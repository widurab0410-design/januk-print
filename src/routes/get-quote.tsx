import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/jp/PageShell";
import { PrintCalculator } from "@/components/jp/PrintCalculator";

export const Route = createFileRoute("/get-quote")({
  head: () => ({
    meta: [
      { title: "Get a Quote — Jayamina Print" },
      { name: "description", content: "Calculate your print order estimate instantly." },
    ],
  }),
  component: GetQuotePage,
});

function GetQuotePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Estimator"
        title={
          <>
            Instant <span className="text-gradient-brand">Quote</span>
          </>
        }
        sub="Use our calculator to get an instant estimate for your next print project."
      />
      <div className="pb-20">
        <PrintCalculator />
      </div>
    </PageShell>
  );
}
