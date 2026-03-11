import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import BookTourForm from "@/components/BookTourForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Tour – Contact Collab Cubicles Whitefield",
  description:
    "Book a free tour at Collab Cubicles, Brigade IRV Centre, Whitefield. Fill in the form or call us directly. We respond within 2–4 hours.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "Brigade IRV Centre, Nallurhalli Road, Whitefield, Bengaluru – 560066",
    link: "https://maps.google.com/?q=Brigade+IRV+Centre+Whitefield+Bangalore",
    linkLabel: "Get directions →",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
    linkLabel: "Call now",
  },
  {
    icon: Mail,
    title: "Email",
    content: "hello@collabcubicles.in",
    link: "mailto:hello@collabcubicles.in",
    linkLabel: "Send email",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Quick replies on WhatsApp during working hours.",
    link: "https://wa.me/919876543210",
    linkLabel: "Chat on WhatsApp",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Monday – Saturday: 9:00 AM – 8:00 PM",
    link: null,
    linkLabel: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book a Tour
          </h1>
          <p className="text-blue-200 text-xl max-w-xl mx-auto">
            Fill in the form and we&apos;ll confirm your visit within a few hours. It&apos;s
            completely free, no commitment required.
          </p>
        </div>
      </section>

      {/* Form + Contact info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-4">
              <h2 className="text-xl font-bold mb-5" style={{ color: "#1E3A5F" }}>
                Get in Touch
              </h2>
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#FF6B35" }}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{item.content}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-semibold hover:underline"
                      style={{ color: "#FF6B35" }}
                    >
                      {item.linkLabel}
                    </a>
                  )}
                </div>
              ))}

              {/* Map placeholder */}
              <div
                className="rounded-xl overflow-hidden aspect-video flex items-center justify-center"
                style={{ backgroundColor: "#e8edf2" }}
              >
                <div className="text-center p-6">
                  <MapPin className="w-10 h-10 mx-auto mb-2" style={{ color: "#1E3A5F" }} />
                  <p className="text-sm font-semibold text-gray-700">Brigade IRV Centre</p>
                  <a
                    href="https://maps.google.com/?q=Brigade+IRV+Centre+Whitefield+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs mt-1 block font-semibold"
                    style={{ color: "#FF6B35" }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Tour booking form */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-xl font-bold mb-1" style={{ color: "#1E3A5F" }}>
                Request a Tour
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Tell us a bit about yourself and we&apos;ll arrange a personalised tour of
                Collab Cubicles at Brigade IRV, Whitefield.
              </p>
              <BookTourForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#1E3A5F" }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is the tour free?",
                a: "Yes, completely free and no commitment required. Walk around, ask questions, and decide at your own pace.",
              },
              {
                q: "How long does a tour take?",
                a: "Typically 20–30 minutes. We show you all workspace types, the amenities, and answer any questions about plans and pricing.",
              },
              {
                q: "Can I try a day pass without a tour?",
                a: "Yes — walk-ins are welcome subject to availability. But booking in advance guarantees your spot and gives us time to prepare.",
              },
              {
                q: "How quickly do you respond to tour requests?",
                a: "We respond within 2–4 hours on weekdays, and within a few hours on Saturdays. WhatsApp is the fastest channel for urgent requests.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-100 transition-colors list-none">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-lg">↓</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
