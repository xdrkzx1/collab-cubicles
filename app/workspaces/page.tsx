import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workspaces – Open Desks, Cabins, Meeting Rooms & More",
  description:
    "Explore all workspace options at Collab Cubicles, Whitefield — open desks, dedicated desks, private cabins, meeting rooms, and virtual office.",
};

const workspaces = [
  {
    slug: "open-desks",
    name: "Open Desks",
    tagline: "Flexible seating, no fuss.",
    description:
      "Grab any available desk and get to work. Perfect for freelancers and remote workers who need a professional space without a long commitment.",
    icon: "🪑",
    from: "₹299/day",
    monthlyFrom: "₹4,999/month",
    highlights: [
      "Pay per day or monthly",
      "High-speed WiFi included",
      "Meeting room credits",
      "Pantry & beverages",
    ],
  },
  {
    slug: "dedicated-desks",
    name: "Dedicated Desks",
    tagline: "Your desk. Every single day.",
    description:
      "Reserve a permanent desk that's yours alone — set it up, leave your things, and come back to the same productive spot every day.",
    icon: "💼",
    from: "₹7,999/month",
    monthlyFrom: "₹7,999/month",
    highlights: [
      "Fixed assigned desk",
      "Lockable personal storage",
      "5 meeting room credits/month",
      "Mail & courier handling",
    ],
  },
  {
    slug: "private-cabins",
    name: "Private Cabins",
    tagline: "A private office without the long lease.",
    description:
      "Fully enclosed, branded-ready private cabins for teams of 3 to 12 people. All the benefits of a private office with the flexibility of coworking.",
    icon: "🏢",
    from: "Custom pricing",
    monthlyFrom: "Contact us",
    highlights: [
      "Fully enclosed private office",
      "Teams of 3–12 people",
      "24×7 access available",
      "Dedicated internet line",
    ],
  },
  {
    slug: "meeting-rooms",
    name: "Meeting Rooms",
    tagline: "Impress clients. Run great meetings.",
    description:
      "Bookable meeting rooms equipped for video calls, presentations, and client meetings. Available to members and non-members.",
    icon: "📊",
    from: "₹499/hour",
    monthlyFrom: "₹499/hour",
    highlights: [
      "Rooms for 4, 8, and 12 pax",
      "4K display & video conferencing",
      "Whiteboard included",
      "Available to non-members",
    ],
  },
  {
    slug: "virtual-office",
    name: "Virtual Office",
    tagline: "A prestigious address. No desk required.",
    description:
      "Get a professional business address at Brigade IRV Centre, Whitefield for GST registration, company incorporation, and mail handling.",
    icon: "📬",
    from: "₹1,499/month",
    monthlyFrom: "₹1,499/month",
    highlights: [
      "Brigade IRV Centre address",
      "GST & company registration",
      "Mail & package handling",
      "5 meeting room hours/month",
    ],
  },
];

export default function WorkspacesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All Workspaces
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">
            Start from a single desk and scale to a full team cabin — all under one roof at
            Brigade IRV Centre, Whitefield.
          </p>
        </div>
      </section>

      {/* Workspace cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {workspaces.map((ws, idx) => (
              <div
                key={ws.slug}
                className={`flex flex-col ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 items-center rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-5xl">{ws.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold" style={{ color: "#1E3A5F" }}>
                        {ws.name}
                      </h2>
                      <p className="text-gray-500 text-sm">{ws.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{ws.description}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {ws.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <div>
                      <span className="text-2xl font-bold" style={{ color: "#1E3A5F" }}>
                        {ws.from}
                      </span>
                      {ws.from !== ws.monthlyFrom && (
                        <span className="text-sm text-gray-500 ml-2">or {ws.monthlyFrom}</span>
                      )}
                    </div>
                    <Link
                      href={`/workspaces/${ws.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-opacity hover:opacity-90"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      View details <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div
                  className="w-full lg:w-72 h-48 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: idx % 2 === 0 ? "#f0f4f8" : "#fff5f0" }}
                >
                  <span className="text-8xl">{ws.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
