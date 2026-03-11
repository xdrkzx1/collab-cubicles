import WorkspaceDetailPage from "@/components/WorkspaceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Office – Business Address in Whitefield, Bangalore",
  description:
    "Get a prestigious Brigade IRV Centre business address from ₹1,499/month. GST registration, mail handling, and meeting room access — no physical desk needed.",
};

export default function VirtualOfficePage() {
  return (
    <WorkspaceDetailPage
      name="Virtual Office"
      tagline="A prestigious address. No desk required."
      description="Get a professional business address at Brigade IRV Centre, Whitefield for GST registration, company incorporation, and mail handling — all without renting a physical desk."
      icon="📬"
      idealFor={["Remote-first businesses", "Freelancers needing GST address", "E-commerce sellers", "Companies needing Whitefield presence"]}
      fromPrice="₹1,499/month"
      features={[
        "Prestigious Brigade IRV Centre address",
        "GST & company registration support",
        "NOC and rental agreement provided",
        "Mail & package receipt and storage",
        "Mail scanning & forwarding service",
        "5 free meeting room hours/month",
        "Use of address on website & business cards",
        "Annual NOC / agreement renewal",
        "Reception call answering (add-on)",
      ]}
      faqs={[
        {
          q: "Can I use this address for GST registration?",
          a: "Yes. We provide the required NOC and rental agreement for GST, MSME, and company registration purposes.",
        },
        {
          q: "Will I receive physical mail at this address?",
          a: "Yes. All mail and packages are received, logged, and stored securely. We also offer scanning and courier-forwarding services.",
        },
        {
          q: "Can I visit the space occasionally?",
          a: "Virtual office plans include 5 meeting room hours per month so you can host occasional client meetings at Brigade IRV.",
        },
        {
          q: "What is the minimum tenure?",
          a: "Minimum 3 months. Annual plans offer the best per-month value and include a full-year agreement document.",
        },
      ]}
      ctaLabel="Get Your Business Address"
    />
  );
}
