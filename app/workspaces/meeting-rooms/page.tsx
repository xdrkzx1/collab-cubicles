import WorkspaceDetailPage from "@/components/WorkspaceDetailPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meeting Rooms – Bookable Conference Rooms in Whitefield",
  description:
    "Professional meeting rooms at Collab Cubicles, Brigade IRV Centre, Whitefield. From ₹499/hour. 4K display, video conferencing, 4–12 seater options.",
};

export default function MeetingRoomsPage() {
  return (
    <WorkspaceDetailPage
      name="Meeting Rooms"
      tagline="Impress clients. Run great meetings."
      description="Bookable meeting rooms equipped for video calls, client presentations, and team standups. Available to members and non-members on an hourly basis. No membership required."
      icon="📊"
      idealFor={["Client presentations", "Team standups", "Video interviews", "Training sessions", "Board meetings"]}
      fromPrice="₹499/hour"
      features={[
        "Rooms for 4, 8, and 12 people",
        "4K display / projector",
        "Full video conferencing setup (Zoom, Meet, Teams)",
        "Whiteboard",
        "High-speed dedicated WiFi",
        "Complimentary coffee & water",
        "Hourly or half-day bookings",
        "Available to non-members",
        "Natural light in all rooms",
        "Soundproofed walls",
      ]}
      faqs={[
        {
          q: "Do I need to be a member to book a meeting room?",
          a: "No! Meeting rooms are available to non-members on an hourly basis. Members receive monthly credits that offset the cost.",
        },
        {
          q: "How far in advance can I book?",
          a: "Up to 30 days in advance. Same-day bookings are available subject to availability — WhatsApp us for urgent requests.",
        },
        {
          q: "Is AV equipment included in the price?",
          a: "Yes — all rooms include a large 4K display or projector, full video conferencing setup, and a whiteboard at no extra charge.",
        },
        {
          q: "Are there catering options?",
          a: "Tea, coffee, and water are complimentary. External catering is permitted with 24-hour prior notice.",
        },
      ]}
      ctaLabel="Book a Room"
    />
  );
}
