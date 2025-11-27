import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export const metadata = {
  title: "FlowTask - Streamline Your Workflow",
  description:
    "FlowTask is the ultimate task management platform to organize, track, and collaborate on projects with your team.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
