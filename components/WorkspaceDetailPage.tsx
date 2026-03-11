import Link from "next/link";
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import CTABand from "@/components/CTABand";
import BookTourForm from "@/components/BookTourForm";

interface WorkspaceDetailProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  idealFor: string[];
  fromPrice: string;
  features: string[];
  faqs: { q: string; a: string }[];
  ctaLabel?: string;
}

export default function WorkspaceDetailPage({
  name,
  tagline,
  description,
  icon,
  idealFor,
  fromPrice,
  features,
  faqs,
  ctaLabel = "Book a Tour",
}: WorkspaceDetailProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <Link
                href="/workspaces"
                className="text-blue-300 hover:text-white text-sm mb-4 inline-flex items-center gap-1 transition-colors"
              >
                ← All Workspaces
              </Link>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-6xl">{icon}</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white">{name}</h1>
                  <p className="text-blue-200 text-lg mt-1">{tagline}</p>
                </div>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-6">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  {ctaLabel} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
            <div
              className="w-full lg:w-80 rounded-2xl p-6 text-white"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              <div className="text-sm text-blue-200 mb-1">Starting from</div>
              <div className="text-3xl font-bold mb-4">{fromPrice}</div>
              <div className="text-sm text-blue-200 mb-3">Ideal for:</div>
              <div className="flex flex-wrap gap-2">
                {idealFor.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E3A5F" }}>
                What&apos;s Included
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo placeholder */}
              <div
                className="mt-6 rounded-2xl p-8 text-center"
                style={{ backgroundColor: "#1E3A5F" }}
              >
                <span className="text-7xl">{icon}</span>
                <p className="text-blue-200 text-sm mt-4">Professional photos coming soon</p>
                <p className="text-white font-semibold mt-1">{name} at Brigade IRV</p>
              </div>
            </div>

            {/* Book Tour Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#1E3A5F" }}>
                {ctaLabel}
              </h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <BookTourForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1E3A5F" }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-100 transition-colors list-none">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Ready to try ${name}?`}
        subtitle="Book a free tour at Brigade IRV Centre and see the space for yourself."
      />
    </>
  );
}
