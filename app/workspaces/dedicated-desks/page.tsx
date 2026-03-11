import WorkspaceDetailPage from "@/components/WorkspaceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dedicated Desks – Your Fixed Desk in Whitefield",
  description:
    "Reserve your own permanent desk at Collab Cubicles, Brigade IRV Centre, Whitefield. From ₹7,999/month. Lockable storage, 5 meeting room credits, and more.",
};

export default function DedicatedDesksPage() {
  return (
    <WorkspaceDetailPage
      name="Dedicated Desks"
      tagline="Your desk. Every single day."
      description="Reserve a permanent desk that's yours alone — set it up, leave your things, and come back to the same productive spot every day. No more hunting for a seat in the morning."
      icon="💼"
      idealFor={["Regular remote workers", "Solopreneurs", "Consultants", "Growing professionals"]}
      fromPrice="₹7,999/month"
      features={[
        "Fixed assigned desk — same spot every day",
        "Personal lockable storage unit",
        "High-speed WiFi (100+ Mbps)",
        "5 meeting room credits/month",
        "Printing & scanning included",
        "Dedicated power outlet",
        "Mail & courier handling",
        "Pantry & beverages access",
        "Business hours (9 AM – 8 PM)",
        "Power backup & UPS",
      ]}
      faqs={[
        {
          q: "Can I leave my belongings overnight?",
          a: "Yes! Your dedicated desk comes with a lockable storage unit so your items are always secure overnight and on weekends.",
        },
        {
          q: "What is the minimum tenure?",
          a: "Minimum 1 month. Discounts are available for 3-month and 6-month commitments.",
        },
        {
          q: "Are meeting room credits shareable with teammates?",
          a: "Credits are per-person and do not roll over month to month. Team plans with shared credits are available on request.",
        },
        {
          q: "Can I upgrade to a private cabin later?",
          a: "Absolutely. We make upgrades easy — no extra deposit required when staying within the same space.",
        },
      ]}
      ctaLabel="Book a Tour"
    />
  );
}
