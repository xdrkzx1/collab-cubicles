import WorkspaceDetailPage from "@/components/WorkspaceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Cabins – Team Office Space in Whitefield",
  description:
    "Fully enclosed private cabins for teams of 3–12 at Collab Cubicles, Brigade IRV Centre, Whitefield. Branded, furnished, 24×7 access. Custom pricing.",
};

export default function PrivateCabinsPage() {
  return (
    <WorkspaceDetailPage
      name="Private Cabins"
      tagline="A private office without the long lease."
      description="Fully enclosed, branded-ready private cabins for teams of 3 to 12 people. All the benefits of a private office — security, focus, client-readiness — with the flexibility and community of coworking."
      icon="🏢"
      idealFor={["Startups (3–15 people)", "Small agencies", "Remote-first company offices", "Project teams"]}
      fromPrice="Pricing on request"
      features={[
        "Fully enclosed private cabin",
        "Branded nameplate outside cabin",
        "Dedicated high-speed internet line",
        "10+ meeting room credits/month",
        "24×7 access",
        "Printing & scanning",
        "Mail, courier & reception services",
        "Fully furnished — chairs, desks, storage",
        "Power backup & UPS",
        "Cabin sizes: 3, 5, 8, and 12 people",
      ]}
      faqs={[
        {
          q: "What cabin sizes are available?",
          a: "We have cabins for 3, 5, 8, and 12 people. Custom configurations for larger teams are available — reach out to discuss.",
        },
        {
          q: "Can I add branding to my cabin?",
          a: "Yes — you can add your company's branding, whiteboard, and minor décor subject to community guidelines.",
        },
        {
          q: "What is the lock-in period?",
          a: "Minimum 3 months. 6-month and 12-month plans come with significant per-seat discounts.",
        },
        {
          q: "Is furniture included?",
          a: "All cabins come fully furnished with ergonomic chairs, desks, and storage units at no extra charge.",
        },
      ]}
      ctaLabel="Get Custom Pricing"
    />
  );
}
