import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  feature: {
    icon: LucideIcon
    title: string
    description: string
  }
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon

  return (
    <div className="rounded-xl bg-background border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-3 mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.description}</p>
    </div>
  )
}
