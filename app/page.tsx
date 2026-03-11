import Link from "next/link";
import { MapPin, Clock, Users, ArrowRight, Star, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Collab Cubicles | Coworking Space in Whitefield, Bangalore",
  description:
    "Flexible workspaces at Brigade IRV Centre, Whitefield. Open desks, dedicated desks, private cabins, meeting rooms & virtual office for freelancers and startups in East Bengaluru.",
};

const workspaces = [
  {
    slug: "open-desks",
    name: "Open Desks",
    icon: "🪑",
    benefits: ["Pay per day or monthly", "Any available desk", "Meeting room credits included"],
    from: "₹299/day",
  },
  {
    slug: "dedicated-desks",
    name: "Dedicated Desks",
    icon: "💼",
    benefits: ["Fixed desk — your permanent spot", "Lockable storage included", "More meeting room credits"],
    from: "₹7,999/month",
  },
  {
    slug: "private-cabins",
    name: "Private Cabins",
    icon: "🏢",
    benefits: ["Fully enclosed private office", "Teams of 3–12 people", "24×7 access available"],
    from: "Custom pricing",
  },
  {
    slug: "meeting-rooms",
    name: "Meeting Rooms",
    icon: "📊",
    benefits: ["4K display & video conferencing", "Rooms for 4, 8, and 12 pax", "Hourly bookings"],
    from: "₹499/hour",
  },
  {
    slug: "virtual-office",
    name: "Virtual Office",
    icon: "📬",
    benefits: ["Brigade IRV business address", "GST & company registration", "Mail handling included"],
    from: "₹1,499/month",
  },
];

const amenities = [
  { icon: "📶", label: "100 Mbps+ WiFi" },
  { icon: "🖨️", label: "Printing & Scanning" },
  { icon: "☕", label: "Pantry & Beverages" },
  { icon: "🚗", label: "Ample Parking" },
  { icon: "⚡", label: "Power Backup" },
  { icon: "❄️", label: "AC Throughout" },
  { icon: "🔒", label: "Secure Access" },
  { icon: "🏞️", label: "Terrace Breakout" },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Freelance UX Designer",
    quote:
      "The WiFi is rock-solid, the pantry is great, and I love running into other creatives. Affordable without feeling cheap.",
    avatar: "AM",
  },
  {
    name: "Priya Nair",
    role: "Co-founder, Stackd Analytics",
    quote:
      "We started with two dedicated desks and moved to a cabin as our team grew. No hassle, no new deposit.",
    avatar: "PN",
  },
  {
    name: "Rahul Srinivas",
    role: "Remote Engineer, US-based startup",
    quote:
      "The meeting rooms are proper — HD screens, good calls, zero background noise. My team thinks I'm in a Fortune 500 office.",
    avatar: "RS",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 60%, #1E3A5F 100%)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm mb-6 border border-white/20">
              <MapPin className="w-4 h-4" style={{ color: "#FF6B35" }} />
              Brigade IRV Centre, Whitefield
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Flexible Workspaces
              <br />
              <span style={{ color: "#FF6B35" }}>Built for Doers</span>
              <br />
              in Whitefield
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 mb-8 max-w-2xl leading-relaxed">
              Open desks, dedicated desks, private cabins, meeting rooms, and virtual office —
              all at Brigade IRV Centre. Designed for freelancers and startup teams in East Bengaluru.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Book a Tour <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/30 hover:bg-white/10 transition-all"
              >
                View Plans & Pricing
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                No lock-in on first month
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Day passes available
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free tours every weekday
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "200+", label: "Active Members" },
              { value: "5", label: "Workspace Types" },
              { value: "4", label: "Meeting Rooms" },
              { value: "100+", label: "Mbps WiFi" },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <div className="text-3xl font-bold mb-1" style={{ color: "#FF6B35" }}>{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspaces */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3A5F" }}>
              Find Your Perfect Workspace
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From a single desk for a day to a private cabin for your team — we have the right setup for every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaces.map((ws) => (
              <Link
                key={ws.slug}
                href={`/workspaces/${ws.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{ws.icon}</span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-600">
                    From {ws.from}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1E3A5F" }}>{ws.name}</h3>
                <ul className="space-y-2 mb-4">
                  {ws.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div
                  className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                  style={{ color: "#FF6B35" }}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/workspaces"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-colors hover:text-white"
              style={{ borderColor: "#1E3A5F", color: "#1E3A5F" }}
            >
              View All Workspaces <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E3A5F" }}>
                Everything You Need,
                <br />Already Included
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                No hidden extras. High-speed WiFi, pantry, meeting rooms, parking — all standard at
                Collab Cubicles, Whitefield.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((a) => (
                  <div key={a.label} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                    <span className="text-2xl">{a.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-xl aspect-video flex items-center justify-center"
                style={{ backgroundColor: "#1E3A5F" }}
              >
                <div className="text-center text-white p-8">
                  <div className="text-6xl mb-4">🏢</div>
                  <p className="font-semibold mt-2">Brigade IRV Centre, Whitefield</p>
                  <p className="text-blue-200 text-sm mt-1">Nallurhalli Road, Bengaluru – 560066</p>
                </div>
              </div>
              <div
                className="absolute -bottom-4 -right-4 rounded-xl p-4 shadow-lg text-white text-center"
                style={{ backgroundColor: "#FF6B35" }}
              >
                <div className="text-2xl font-bold">Grade A</div>
                <div className="text-sm opacity-90">Office Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: "#1E3A5F" }}>
                  <Users className="w-8 h-8 mb-3" style={{ color: "#FF6B35" }} />
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-blue-200 text-sm mt-1">Community Members</div>
                </div>
                <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: "#FF6B35" }}>
                  <Star className="w-8 h-8 mb-3 text-yellow-300" />
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-orange-100 text-sm mt-1">Average Rating</div>
                </div>
                <div className="rounded-2xl p-6 bg-white shadow-sm col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6" style={{ color: "#1E3A5F" }} />
                    <span className="font-semibold" style={{ color: "#1E3A5F" }}>Monthly Events</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Founder mixers, workshops, and skill sessions every month. Build your network while you work.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1E3A5F" }}>
                A Community of
                <br />Builders & Creators
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Collab Cubicles is home to a curated mix of freelancers, remote professionals, and
                early-stage startup teams. Our community events make collaboration happen naturally.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Monthly Founder Mixers & Networking Evenings",
                  "Skill Workshops (GST, Branding, Productivity)",
                  "Demo Days for early-stage startups",
                  "Informal coffee chats & peer learning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/community" className="inline-flex items-center gap-2 font-semibold" style={{ color: "#FF6B35" }}>
                Explore community & events <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3A5F" }}>
              Prime Location in Whitefield
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Located inside Brigade IRV Centre — a Grade A corporate campus close to major IT parks,
              expressways, and public transport.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              {[
                { icon: "🏢", title: "Brigade IRV Centre", sub: "Nallurhalli Road, Whitefield, Bengaluru – 560066" },
                { icon: "🚌", title: "Public Transport", sub: "Whitefield Metro Station (Purple Line) – 2 km. Multiple BMTC bus routes." },
                { icon: "🚗", title: "Parking", sub: "Ample 2-wheeler and 4-wheeler parking available within the campus." },
                { icon: "🏙️", title: "Nearby IT Parks", sub: "ITPL, Bagmane Tech Park, Salarpuria GR Tech Park — all within 5 km." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-600 mt-0.5">{item.sub}</div>
                  </div>
                </div>
              ))}
              <Link href="/location" className="inline-flex items-center gap-2 font-semibold mt-2" style={{ color: "#FF6B35" }}>
                Full location guide & directions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-md aspect-video flex items-center justify-center"
              style={{ backgroundColor: "#e8edf2" }}
            >
              <div className="text-center p-8">
                <MapPin className="w-12 h-12 mx-auto mb-3" style={{ color: "#1E3A5F" }} />
                <p className="font-semibold text-gray-700">Brigade IRV Centre</p>
                <p className="text-sm text-gray-500">Nallurhalli Road, Whitefield</p>
                <a
                  href="https://maps.google.com/?q=Brigade+IRV+Centre+Whitefield+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold"
                  style={{ color: "#FF6B35" }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1E3A5F" }}>
              Loved by Whitefield&apos;s Professionals
            </h2>
            <p className="text-gray-600 text-lg">
              Hear from freelancers and founders who call Collab Cubicles home.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: "#1E3A5F" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: "#1E3A5F" }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Come See It for Yourself
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Book a free tour at Brigade IRV Centre — walk around the space, ask us anything,
            and see if it&apos;s the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Book a Free Tour <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white text-lg border-2 border-white/30 hover:bg-white/10 transition-all"
            >
              View Plans & Pricing
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-300">
            <span>📍 Brigade IRV Centre, Whitefield</span>
            <span>📞 +91 98765 43210</span>
            <span>✉️ hello@collabcubicles.in</span>
          </div>
        </div>
      </section>
    </>
  );
}
