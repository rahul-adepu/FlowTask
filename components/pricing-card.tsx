import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  plan: {
    name: string
    price: string
    period?: string
    description: string
    features: string[]
    cta: string
    highlighted: boolean
  }
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border transition-all ${
        plan.highlighted ? "border-primary bg-primary/5 shadow-lg" : "border-border bg-background shadow-sm"
      } p-8 flex flex-col`}
    >
      {plan.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Recommended
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
        {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
      </div>

      <Button
        className={`w-full mb-8 ${
          plan.highlighted
            ? "bg-primary hover:bg-primary/90"
            : "bg-muted hover:bg-muted/80 text-foreground border border-border"
        }`}
      >
        {plan.cta}
      </Button>

      <div className="space-y-3 flex-1">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
