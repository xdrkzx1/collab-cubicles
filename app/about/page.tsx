import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Collab Cubicles – Coworking in Whitefield",
  description:
    "The story of Collab Cubicles — why we built an affordable, community-first coworking space at Brigade IRV Centre, Whitefield, Bangalore.",
};

const values = [
  {
    icon: "💡",
    title: "Affordability without compromise",
    desc: "We believe professional workspace shouldn't cost a fortune. Our pricing is transparent and competitive so you can focus on your work, not your overhead.",
  },
  {
    icon: "🤝",
    title: "Community over cubicles",
    desc: "The people around you matter. We curate a mix of freelancers, founders, and remote professionals who actually engage with and support each other.",
  },
  {
    icon: "📍",
    title: "Location that works",
    desc: "Brigade IRV Centre isn't just a prestigious address — it's genuinely convenient. Close to Whitefield's IT corridors, well-connected by road and metro.",
  },
  {
    icon: "🔧",
    title: "Reliability first",
    desc: "Consistent WiFi, clean spaces, working AV equipment, and prompt support. We sweat the small stuff so your workday runs without friction.",
  },
];

const differentiators = [
  "Affordable per-seat pricing vs BHIVE, COWRKS, GoodWorks",
  "No large-scale corporate impersonality",
  "Strong community of freelancers and early-stage teams",
  "Prime Brigade IRV Centre location with easy parking",
  "Flexible plans from day passes to 12-month cabins",
  "Hands-on, responsive operations team",
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-24"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Our Story
            </h1>
            <p className="text-blue-100 text-xl leading-relaxed">
              Collab Cubicles was built on a simple observation: Whitefield had no shortage of
              coworking spaces, but it had very few that were genuinely affordable, professionally
              run, and community-focused at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: "#1E3A5F" }}>
                Why We Built Collab Cubicles
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  East Bengaluru — and Whitefield in particular — is home to thousands of independent
                  professionals, small startup teams, and remote workers who need a serious place to
                  work. Not a café, and not a ₹30,000/seat office.
                </p>
                <p>
                  We saw that the dominant coworking players in Whitefield — BHIVE, COWRKS, GoodWorks,
                  GoSpaze — were excellent spaces, but often too expensive for freelancers and early-stage
                  teams, and too large to feel community-oriented.
                </p>
                <p>
                  So we secured space at Brigade IRV Centre — a Grade A campus on Nallurhalli Road —
                  and designed Collab Cubicles from the ground up to be the most affordable and
                  community-focused option in Whitefield, without cutting corners on the things that
                  matter: WiFi reliability, meeting room quality, cleanliness, and support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-6 text-white col-span-2" style={{ backgroundColor: "#1E3A5F" }}>
                <div className="text-5xl mb-3">🏢</div>
                <h3 className="font-bold text-xl">Brigade IRV Centre</h3>
                <p className="text-blue-200 text-sm mt-1">Nallurhalli Road, Whitefield</p>
                <p className="text-blue-100 text-sm mt-3">
                  Grade A campus, close to ITPL, Bagmane Tech Park, and Whitefield Metro Station.
                </p>
              </div>
              {[
                { value: "2023", label: "Founded" },
                { value: "200+", label: "Happy members" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-6 bg-gray-50 text-center">
                  <div className="text-4xl font-bold mb-1" style={{ color: "#FF6B35" }}>{s.value}</div>
                  <div className="text-sm text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#1E3A5F" }}>
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <span className="text-4xl mb-4 block">{v.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* vs Competitors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#1E3A5F" }}>
                How We&apos;re Different
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Whitefield has excellent coworking options — and we respect them. But Collab Cubicles
                occupies a specific, underserved space in the market.
              </p>
              <ul className="space-y-3">
                {differentiators.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl p-8 text-white"
              style={{ backgroundColor: "#1E3A5F" }}
            >
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                &ldquo;For freelancers, startups, and small teams in East Bengaluru, Collab Cubicles
                should be the easiest Whitefield coworking site to understand, compare, and act on —
                visitors quickly see if it fits their budget and needs, then book a tour within
                1–2 clicks.&rdquo;
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Book a Tour <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Come say hello"
        subtitle="Tour the space, meet the team, and see if Collab Cubicles is the right fit for you."
      />
    </>
  );
}
