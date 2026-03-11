import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABand({
  title = "Ready to see the space?",
  subtitle = "Book a tour at Brigade IRV Centre, Whitefield — it takes less than 2 minutes.",
  primaryLabel = "Book a Tour",
  primaryHref = "/contact",
  secondaryLabel = "View Plans & Pricing",
  secondaryHref = "/pricing",
}: CTABandProps) {
  return (
    <section style={{ backgroundColor: "#1E3A5F" }} className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{title}</h2>
        <p className="text-blue-200 text-lg mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#FF6B35" }}
          >
            {primaryLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/40 hover:border-white hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
