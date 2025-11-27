import TestimonialCard from "@/components/testimonial-card"

const testimonials = [
  {
    quote: "FlowTask transformed how our team manages projects. We're 40% more productive.",
    name: "Sarah Chen",
    role: "Project Manager",
    avatar: "SC",
  },
  {
    quote: "The simplicity is deceiving. It handles complex workflows effortlessly.",
    name: "Marcus Johnson",
    role: "Team Lead",
    avatar: "MJ",
  },
  {
    quote: "Best investment we made this year. Highly recommend for any growing team.",
    name: "Elena Rodriguez",
    role: "Operations Director",
    avatar: "ER",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Loved by Teams Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams who have transformed their workflow with FlowTask.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
