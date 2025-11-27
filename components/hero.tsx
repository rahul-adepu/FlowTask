"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const handleScroll = () => {
    const pricingSection = document.getElementById("pricing")
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-12 lg:grid lg:grid-cols-2 lg:items-center">
          {/* Left content */}
          <div className="flex flex-col justify-center space-y-6 lg:text-left text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Organize Your Work, Amplify Your Output
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-center lg:text-left mx-auto lg:mx-0">
                FlowTask helps teams collaborate, prioritize, and deliver projects on time with intuitive task
                management and real-time insights.
              </p>
            </div>
            <Button onClick={handleScroll} size="lg" className="w-fit lg:w-fit mx-auto lg:mx-0">
              Get started
            </Button>
          </div>

          {/* Right illustration */}
          <div className="relative flex items-center justify-center min-h-80 lg:min-h-auto">
            <Image
              src="/task-management-dashboard-illustration.jpg"
              alt="FlowTask Dashboard"
              width={400}
              height={400}
              className="relative z-10 rounded-3xl shadow-2xl w-full max-w-sm lg:max-w-md h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
