import Link from "next/link";
import { ArrowRight, Calendar, Users } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Events – Collab Cubicles Whitefield",
  description:
    "Join a thriving community of freelancers, startups, and remote professionals at Collab Cubicles, Whitefield. Monthly events, workshops, and networking.",
};

const events = [
  {
    date: "March 20, 2025",
    day: "Thu",
    title: "Founder's Friday Mixer",
    description: "Monthly casual networking for founders and freelancers in the Whitefield ecosystem. Drinks, conversations, and connections.",
    type: "Networking",
    typeColor: "#1E3A5F",
    free: true,
  },
  {
    date: "March 27, 2025",
    day: "Thu",
    title: "Workshop: GST Basics for Freelancers",
    description: "A 90-minute hands-on workshop covering GST registration, invoicing, and compliance for independent professionals.",
    type: "Workshop",
    typeColor: "#FF6B35",
    free: false,
  },
  {
    date: "April 5, 2025",
    day: "Sat",
    title: "Demo Day: Whitefield Startups",
    description: "Watch 5 early-stage startups pitch their products to a panel of investors and mentors. Open to all community members.",
    type: "Demo Day",
    typeColor: "#059669",
    free: true,
  },
  {
    date: "April 12, 2025",
    day: "Sat",
    title: "Remote Work Productivity Masterclass",
    description: "Practical session on async collaboration tools, focus routines, and deep work strategies for remote professionals.",
    type: "Workshop",
    typeColor: "#FF6B35",
    free: false,
  },
  {
    date: "April 25, 2025",
    day: "Fri",
    title: "Startup Branding on a Budget",
    description: "Learn how early-stage founders can build a strong brand identity without a big agency budget.",
    type: "Workshop",
    typeColor: "#FF6B35",
    free: false,
  },
];

const memberTypes = [
  { icon: "👨‍💻", label: "Freelancers", count: "50+" },
  { icon: "🚀", label: "Startups", count: "30+" },
  { icon: "🏢", label: "SMBs & Agencies", count: "20+" },
  { icon: "💼", label: "Remote Professionals", count: "100+" },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Freelance UX Designer",
    quote: "The Founder's Friday events have been incredible for my network. I've landed two projects through connections made here.",
    avatar: "AM",
  },
  {
    name: "Priya Nair",
    role: "Co-founder, Stackd Analytics",
    quote: "The community here is tight-knit but welcoming. We've found advisors, designers, and even our first hire through Collab Cubicles events.",
    avatar: "PN",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Community & Events
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Work alongside Whitefield&apos;s best builders, freelancers, and founders — and
            grow your network while you do it.
          </p>
        </div>
      </section>

      {/* Community ethos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#1E3A5F" }}>
                More Than Just Desks
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                At Collab Cubicles, we believe the people you work around are as important as the
                space you work in. Our community is curated — professional, collaborative, and
                genuinely supportive of each other&apos;s work.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From early-stage founders swapping investor intros to freelancers collaborating on
                client projects, we create the environment — you create the connections.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {memberTypes.map((m) => (
                  <div key={m.label} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                    <span className="text-3xl">{m.icon}</span>
                    <div>
                      <div className="font-bold text-lg" style={{ color: "#1E3A5F" }}>{m.count}</div>
                      <div className="text-sm text-gray-500">{m.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: "🤝", title: "Peer-to-peer collaboration", desc: "Members frequently collaborate, refer, and support each other's work." },
                { icon: "📣", title: "Member showcase board", desc: "Share your work and services with the broader Collab community." },
                { icon: "💬", title: "Community Slack / WhatsApp", desc: "Stay connected, share resources, and ask for help between visits." },
                { icon: "🎯", title: "Monthly focus themes", desc: "Each month we pick a theme — growth, design, finance — and build events around it." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#1E3A5F" }}>
                Upcoming Events
              </h2>
              <p className="text-gray-600 mt-1">Join us at Brigade IRV Centre, Whitefield</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: "#FF6B35" }} />
              <span className="text-sm text-gray-500">Q1–Q2 2025</span>
            </div>
          </div>
          <div className="space-y-5">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-5"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0"
                  style={{ backgroundColor: "#1E3A5F" }}
                >
                  <span className="text-lg font-bold leading-none">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                  <span className="text-xs text-blue-300">
                    {event.date.split(" ")[0].slice(0, 3)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: event.typeColor }}
                    >
                      {event.type}
                    </span>
                    {event.free && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                        Free
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{event.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{event.description}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    📍 Collab Cubicles, Brigade IRV Centre · {event.date}
                  </p>
                </div>
                <div className="flex-shrink-0 self-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#FF6B35" }}
                  >
                    Register <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#1E3A5F" }}>
            What Community Members Say
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: "#1E3A5F" }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host an event */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 text-white text-center"
            style={{ backgroundColor: "#1E3A5F" }}
          >
            <Users className="w-10 h-10 mx-auto mb-4" style={{ color: "#FF6B35" }} />
            <h3 className="text-2xl font-bold mb-3">Want to Host an Event Here?</h3>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Partner with Collab Cubicles to run a workshop, meetup, or panel at Brigade IRV Centre.
              We handle the space — you bring the content.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Partner with Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        title="Join the Collab Cubicles community"
        subtitle="Book a tour and meet the people who make this space great."
      />
    </>
  );
}
