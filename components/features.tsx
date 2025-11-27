import FeatureCard from "@/components/feature-card"
import { CheckCircle2, Zap, Users } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Smart Task Tracking",
    description: "Create, organize, and track tasks with custom priorities, deadlines, and dependencies.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Collaboration",
    description: "Real-time updates keep your team in sync and moving forward together.",
  },
  {
    icon: Users,
    title: "Team Workspace",
    description: "Assign tasks, set permissions, and streamline communication across your organization.",
  },
]

export default function Features() {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help teams work smarter, faster, and together.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
