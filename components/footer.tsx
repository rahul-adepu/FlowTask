import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">FlowTask</h3>
            <p className="text-sm text-background/70">Streamline your workflow and amplify your team's output.</p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">Connect</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="GitHub" className="text-background/70 hover:text-background transition">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-background/70 hover:text-background transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-background/70 hover:text-background transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Email" className="text-background/70 hover:text-background transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>&copy; {currentYear} FlowTask. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
