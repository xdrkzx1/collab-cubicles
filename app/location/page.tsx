import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworking Space in Brigade IRV, Whitefield, Bangalore",
  description:
    "Collab Cubicles is located at Brigade IRV Centre, Nallurhalli Road, Whitefield, Bengaluru 560066. Directions, parking, and nearby transport options.",
};

const directions = [
  {
    icon: "🚇",
    title: "Metro",
    steps: [
      "Take the Purple Line to Whitefield (Kadugodi) Metro Station",
      "From the station, take an auto/cab — approx. 2 km, 7–10 min",
      "Ask for Brigade IRV Centre, Nallurhalli Road",
    ],
  },
  {
    icon: "🚌",
    title: "Bus (BMTC)",
    steps: [
      "Routes 335E, 335EL, 340, and 500C stop near Whitefield",
      "Deboard at Whitefield Main Road stop",
      "Take a short auto ride to Brigade IRV Centre",
    ],
  },
  {
    icon: "🚗",
    title: "By Car / Cab",
    steps: [
      "From MG Road: Take the Old Airport Road → Outer Ring Road → Whitefield Road (~35 min)",
      "From Marathahalli: Via ITPL Main Road → Nallurhalli Road (~15 min)",
      "Enter Brigade IRV Centre from the main gate on Nallurhalli Road",
    ],
  },
  {
    icon: "🛵",
    title: "By Bike / Two-wheeler",
    steps: [
      "Enter via Nallurhalli Road main gate",
      "Dedicated two-wheeler parking available inside campus",
      "Security will direct you to the Collab Cubicles entrance",
    ],
  },
];

const nearby = [
  { icon: "☕", label: "Café Coffee Day", sub: "2-min walk inside campus" },
  { icon: "🍽️", label: "Food Court", sub: "Ground floor, Brigade IRV" },
  { icon: "🏦", label: "ATM (HDFC & SBI)", sub: "Within the campus" },
  { icon: "🏥", label: "Manipal Hospital", sub: "3 km, ~10 min" },
  { icon: "🏪", label: "Reliance Smart", sub: "1.5 km, Whitefield Main Rd" },
  { icon: "🏙️", label: "ITPL", sub: "3.5 km, 10 min by road" },
];

export default function LocationPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Coworking Space in
              <br />Brigade IRV, Whitefield
            </h1>
            <p className="text-blue-200 text-xl mb-6">
              Conveniently located inside Brigade IRV Centre — a Grade A corporate campus in the
              heart of Whitefield, East Bengaluru.
            </p>
            <div className="flex items-center gap-2 text-blue-100">
              <MapPin className="w-5 h-5" style={{ color: "#FF6B35" }} />
              <span>Brigade IRV Centre, Nallurhalli Road, Whitefield, Bengaluru – 560066</span>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Address */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map placeholder */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center"
              style={{ backgroundColor: "#e8edf2" }}
            >
              <div className="text-center p-8">
                <MapPin className="w-14 h-14 mx-auto mb-4" style={{ color: "#1E3A5F" }} />
                <p className="text-xl font-bold text-gray-800">Collab Cubicles</p>
                <p className="text-gray-600 mt-1">Brigade IRV Centre</p>
                <p className="text-gray-500 text-sm mt-0.5">Nallurhalli Road, Whitefield, Bengaluru</p>
                <a
                  href="https://maps.google.com/?q=Brigade+IRV+Centre+Whitefield+Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  Open in Google Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Address & building info */}
            <div>
              <h2 className="text-2xl font-bold mb-5" style={{ color: "#1E3A5F" }}>
                Building & Address
              </h2>
              <div className="space-y-4">
                {[
                  {
                    icon: "📍",
                    title: "Full Address",
                    content: "Collab Cubicles, Brigade IRV Centre, Nallurhalli Road, Whitefield, Bengaluru – 560066, Karnataka, India",
                  },
                  {
                    icon: "🏢",
                    title: "About Brigade IRV Centre",
                    content: "Grade A commercial campus offering modern, well-maintained facilities. The campus houses several tech companies and professional services firms.",
                  },
                  {
                    icon: "🕐",
                    title: "Operating Hours",
                    content: "Monday – Saturday: 9:00 AM – 8:00 PM. Sunday: by appointment. 24×7 access available on Private Cabin plans.",
                  },
                  {
                    icon: "📞",
                    title: "Contact",
                    content: "+91 98765 43210 · hello@collabcubicles.in · WhatsApp available",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-600 mt-0.5 leading-relaxed">{item.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to get here */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: "#1E3A5F" }}>
            How to Get Here
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directions.map((d) => (
              <div key={d.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{d.icon}</span>
                  <h3 className="font-bold text-lg" style={{ color: "#1E3A5F" }}>{d.title}</h3>
                </div>
                <ol className="space-y-2">
                  {d.steps.map((step, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600">
                      <span
                        className="w-5 h-5 rounded-full text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold"
                        style={{ backgroundColor: "#FF6B35" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parking */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E3A5F" }}>
                Parking at Brigade IRV
              </h2>
              <p className="text-gray-600 mb-4">
                Brigade IRV Centre offers ample parking within the campus — one of the key advantages
                of being based here versus street-side coworking spaces.
              </p>
              <ul className="space-y-3">
                {[
                  { icon: "🛵", label: "Two-wheeler parking", sub: "Dedicated area inside campus, free for members" },
                  { icon: "🚗", label: "Four-wheeler parking", sub: "Campus parking lot, paid (market rates)" },
                  { icon: "🅿️", label: "Visitor parking", sub: "Available for short-term tours and meetings" },
                ].map((p) => (
                  <li key={p.label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{p.label}</div>
                      <div className="text-xs text-gray-500">{p.sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "#1E3A5F" }}>
                Neighbourhood Conveniences
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {nearby.map((n) => (
                  <div key={n.label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                    <span className="text-xl">{n.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-gray-900">{n.label}</div>
                      <div className="text-xs text-gray-500">{n.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Come visit us in Whitefield"
        subtitle="Book a free tour at Brigade IRV Centre — see the space and meet the team."
      />
    </>
  );
}
