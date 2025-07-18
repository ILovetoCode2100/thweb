import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary/5 text-gray-700">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/site-logo.png"
                alt="Taylored Hypnotherapy Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <div>
                <h4 className="text-gray-800">Taylored Hypnotherapy</h4>
                <p className="small !mb-0">Solution Focused Hypnotherapy</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              A professional and confidential service dedicated to helping you achieve your goals. NCH registered
              practitioner.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+447801279880" className="text-gray-700 font-medium hover:text-primary transition-colors">
                  +44 7801 279880
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:morven@tayloredhypnotherapy.com"
                  className="text-gray-700 font-medium hover:text-primary transition-colors"
                >
                  morven@tayloredhypnotherapy.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700 font-medium">3 Ennis Park, Polbeth, West Calder EH55 8TN</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "About Me", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Anxiety & Stress Relief",
                "Confidence Building",
                "Stop Smoking",
                "Weight Management",
                "Sleep Issues",
                "Fears & Phobias",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-600 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="small text-center md:text-left">
              © {new Date().getFullYear()} TAYLORED SOLUTION FOCUSED HYPNOTHERAPY LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="small hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="small hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
