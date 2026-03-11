import Link from "next/link";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plans & Pricing – Coworking Space Whitefield",
  description:
    "Transparent pricing for all workspace types at Collab Cubicles, Whitefield. Day passes from ₹299, monthly plans from ₹4,999. No hidden fees.",
};

const plans = [
  {
    name: "Day Pass",
    price: "₹299",
    unit: "per day",
    description: "Drop in whenever you need",
    featured: false,
    accentColor: "#6B7280",
    features: [
      { label: "Open desk access", included: true },
      { label: "High-speed WiFi", included: true },
      { label: "Pantry & beverages", included: true },
      { label: "Power backup", included: true },
      { label: "Fixed desk", included: false },
      { label: "Meeting room credits", included: false },
      { label: "Mail handling", included: false },
      { label: "24×7 access", included: false },
    ],
    cta: "Book a Day Pass",
    href: "/contact",
    idealFor: "Occasional visitors",
  },
  {
    name: "Open Desk",
    price: "₹4,999",
    unit: "per month",
    description: "Flexible hot-desking all month",
    featured: false,
    accentColor: "#1E3A5F",
    features: [
      { label: "Open desk access", included: true },
      { label: "High-speed WiFi", included: true },
      { label: "Pantry & beverages", included: true },
      { label: "2 meeting room credits", included: true },
      { label: "Printing & scanning", included: true },
      { label: "Fixed desk", included: false },
      { label: "Mail handling", included: false },
      { label: "24×7 access", included: false },
    ],
    cta: "Book a Tour",
    href: "/contact",
    idealFor: "Freelancers & remote workers",
  },
  {
    name: "Dedicated Desk",
    price: "₹7,999",
    unit: "per month",
    description: "Your fixed desk, every day",
    featured: true,
    accentColor: "#FF6B35",
    features: [
      { label: "Fixed assigned desk", included: true },
      { label: "Lockable storage", included: true },
      { label: "High-speed WiFi", included: true },
      { label: "5 meeting room credits", included: true },
      { label: "Printing & scanning", included: true },
      { label: "Mail & courier handling", included: true },
      { label: "Pantry & beverages", included: true },
      { label: "24×7 access", included: false },
    ],
    cta: "Book a Tour",
    href: "/contact",
    idealFor: "Solopreneurs & consultants",
  },
  {
    name: "Private Cabin",
    price: "Custom",
    unit: "pricing",
    description: "Private team office (3–12 pax)",
    featured: false,
    accentColor: "#1E3A5F",
    features: [
      { label: "Fully enclosed cabin", included: true },
      { label: "Dedicated internet line", included: true },
      { label: "10+ meeting room credits", included: true },
      { label: "24×7 access", included: true },
      { label: "Mail & reception services", included: true },
      { label: "Branded nameplate", included: true },
      { label: "Printing & scanning", included: true },
      { label: "Fully furnished", included: true },
    ],
    cta: "Get Custom Pricing",
    href: "/contact",
    idealFor: "Startups & small teams",
  },
  {
    name: "Virtual Office",
    price: "₹1,499",
    unit: "per month",
    description: "Business address, no desk needed",
    featured: false,
    accentColor: "#059669",
    features: [
      { label: "Brigade IRV Centre address", included: true },
      { label: "GST registration support", included: true },
      { label: "Mail & package handling", included: true },
      { label: "5 meeting room hours/month", included: true },
      { label: "Mail scanning & forwarding", included: true },
      { label: "Physical desk access", included: false },
      { label: "Meeting room credits", included: false },
      { label: "Storage", included: false },
    ],
    cta: "Book a Tour",
    href: "/contact",
    idealFor: "Remote businesses",
  },
];

const comparisonRows = [
  { feature: "Desk type", values: ["Any open desk", "Any open desk", "Fixed desk", "Private cabin", "No physical desk"] },
  { feature: "Access hours", values: ["9AM–8PM", "9AM–8PM", "9AM–8PM", "24×7", "Meeting rooms only"] },
  { feature: "Meeting room", values: ["—", "2 credits/mo", "5 credits/mo", "10+ credits/mo", "5 hrs/mo"] },
  { feature: "Storage", values: ["—", "—", "Lockable unit", "Cabin storage", "—"] },
  { feature: "Mail handling", values: ["—", "—", "✓", "✓", "✓"] },
  { feature: "WiFi", values: ["✓", "✓", "✓", "Dedicated line", "—"] },
  { feature: "Min. tenure", values: ["1 day", "1 month", "1 month", "3 months", "3 months"] },
];

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Plans & Pricing</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Transparent &ldquo;from&rdquo; pricing — no hidden fees. Book a tour for a final
            proposal tailored to your team size and duration.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl shadow-sm flex flex-col overflow-hidden border-2 transition-shadow hover:shadow-lg ${
                  plan.featured ? "shadow-md" : ""
                }`}
                style={{ borderColor: plan.featured ? plan.accentColor : "#e5e7eb" }}
              >
                {plan.featured && (
                  <div
                    className="text-white text-xs font-bold text-center py-1.5 tracking-wide uppercase"
                    style={{ backgroundColor: plan.accentColor }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{plan.description}</p>
                  </div>
                  <div className="mb-5">
                    <span className="text-3xl font-bold" style={{ color: plan.accentColor }}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">{plan.unit}</span>
                  </div>
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">
                    Ideal for: {plan.idealFor}
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.label} className="flex items-center gap-2 text-sm">
                        {f.included ? (
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={f.included ? "text-gray-700" : "text-gray-400"}>
                          {f.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.href}
                    className="block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                    style={
                      plan.featured
                        ? { backgroundColor: "#FF6B35", color: "#fff" }
                        : { backgroundColor: "#f3f4f6", color: "#1E3A5F" }
                    }
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            Prices shown are &ldquo;from&rdquo; rates. Final pricing depends on availability, current offers, and team
            size.{" "}
            <Link href="/contact" className="font-semibold hover:underline" style={{ color: "#FF6B35" }}>
              Book a tour for a custom proposal →
            </Link>
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1E3A5F" }}>
            Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#1E3A5F" }}>
                  <th className="px-4 py-4 text-left text-white font-semibold">Feature</th>
                  {plans.map((p) => (
                    <th
                      key={p.name}
                      className="px-4 py-4 text-center text-white font-semibold"
                      style={p.featured ? { color: "#FFB347" } : {}}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 bg-orange-50">
                  <td className="px-4 py-3 font-semibold text-gray-700">Price</td>
                  {plans.map((p) => (
                    <td key={p.name} className="px-4 py-3 text-center font-bold" style={{ color: "#1E3A5F" }}>
                      {p.price}
                      <span className="text-xs text-gray-500 font-normal ml-1">{p.unit}</span>
                    </td>
                  ))}
                </tr>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-4 py-3 text-gray-700 font-medium">{row.feature}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-3 text-center text-gray-600">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ backgroundColor: "#1E3A5F" }}
          >
            <h3 className="text-xl font-bold mb-3">Not sure which plan is right for you?</h3>
            <p className="text-blue-200 mb-6">
              Book a free tour — walk through the space, discuss your needs, and we&apos;ll recommend
              the best fit with a final pricing proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Book a Free Tour <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to get started?"
        subtitle="Visit Brigade IRV Centre and find your ideal workspace in Whitefield."
      />
    </>
  );
}
