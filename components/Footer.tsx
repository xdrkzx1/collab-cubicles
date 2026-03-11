import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  workspaces: [
    { href: "/workspaces/open-desks", label: "Open Desks" },
    { href: "/workspaces/dedicated-desks", label: "Dedicated Desks" },
    { href: "/workspaces/private-cabins", label: "Private Cabins" },
    { href: "/workspaces/meeting-rooms", label: "Meeting Rooms" },
    { href: "/workspaces/virtual-office", label: "Virtual Office" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/community", label: "Community & Events" },
    { href: "/blog", label: "Resources" },
    { href: "/pricing", label: "Plans & Pricing" },
    { href: "/location", label: "Location" },
  ],
  contact: [
    { href: "/contact", label: "Book a Tour" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1E3A5F" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-xl text-white">Collab Cubicles</span>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Flexible workspaces for freelancers, startups, and small teams in Brigade IRV Centre, Whitefield, Bangalore.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-blue-200">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-400" />
                <span>Brigade IRV Centre, Nallurhalli Road, Whitefield, Bengaluru – 560066</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-blue-200">
                <Phone className="w-4 h-4 text-orange-400" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-blue-200">
                <Mail className="w-4 h-4 text-orange-400" />
                <a href="mailto:hello@collabcubicles.in" className="hover:text-white transition-colors">hello@collabcubicles.in</a>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Workspaces */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Workspaces</h3>
            <ul className="space-y-2.5">
              {footerLinks.workspaces.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Visit Us</h3>
              <ul className="space-y-2.5">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-blue-200 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Enquiry */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Enquiry</h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-blue-300 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Email or Phone"
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-blue-300 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <textarea
                rows={3}
                placeholder="Your message..."
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-blue-300 focus:outline-none focus:border-orange-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 text-sm font-semibold rounded-lg text-white transition-colors"
                style={{ backgroundColor: "#FF6B35" }}
              >
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-blue-300">
          <span>© 2025 Collab Cubicles. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}