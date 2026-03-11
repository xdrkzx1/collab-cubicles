import WorkspaceDetailPage from "@/components/WorkspaceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Desks & Day Passes – Flexible Coworking Whitefield",
  description:
    "Flexible open desks and day passes at Collab Cubicles, Brigade IRV Centre, Whitefield. From ₹299/day or ₹4,999/month. No commitment required.",
};

export default function OpenDesksPage() {
  return (
    <WorkspaceDetailPage
      name="Open Desks"
      tagline="Flexible seating, no fuss."
      description="Grab any available desk and get to work. Perfect for freelancers and remote workers who need a professional, energizing space without a long commitment. Pay for a day or lock in a monthly plan."
      icon="🪑"
      idealFor={["Freelancers", "Remote workers", "Day visitors", "Short-term projects"]}
      fromPrice="₹299/day"
      features={[
        "Any available desk each day",
        "High-speed WiFi (100+ Mbps)",
        "Access to shared pantry & beverages",
        "2 meeting room credits/month (on monthly plan)",
        "Printing & scanning",
        "Locker access (add-on)",
        "Business hours access (9 AM – 8 PM)",
        "Power backup",
        "AC throughout",
      ]}
      faqs={[
        {
          q: "Can I use a day pass without booking?",
          a: "Walk-ins are welcome subject to availability, but we recommend booking in advance through the website or WhatsApp to guarantee your spot.",
        },
        {
          q: "Is there a minimum commitment for monthly plans?",
          a: "No minimum! Day passes are pay-as-you-go. Monthly open desk plans have no lock-in for the first month.",
        },
        {
          q: "Are lockers included?",
          a: "Lockers can be added for a small monthly fee. They are not included in the base open desk plan.",
        },
        {
          q: "What are the access hours?",
          a: "Standard access is 9 AM – 8 PM, Monday to Saturday. Sunday access is available by request.",
        },
      ]}
      ctaLabel="Book a Day Pass or Tour"
    />
  );
}
