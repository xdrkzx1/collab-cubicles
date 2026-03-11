"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const workspaceLinks = [
  { href: "/workspaces/open-desks", label: "Open Desks" },
  { href: "/workspaces/dedicated-desks", label: "Dedicated Desks" },
  { href: "/workspaces/private-cabins", label: "Private Cabins" },
  { href: "/workspaces/meeting-rooms", label: "Meeting Rooms" },
  { href: "/workspaces/virtual-office", label: "Virtual Office" },
];

const navLinks = [
  { href: "/workspaces", label: "Workspaces", hasDropdown: true },
  { href: "/pricing", label: "Plans & Pricing" },
  { href: "/community", label: "Community" },
  { href: "/location", label: "Location" },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#1E3A5F" }}>
              <span className="text-white font-bold text-sm">CC</span>
            </div>
            <span className="font-bold text-lg" style={{ color: "#1E3A5F" }}>
              Collab Cubicles
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy rounded-md transition-colors"
                    style={{ "--tw-text-opacity": "1" } as React.CSSProperties}
                    onMouseEnter={() => setWorkspaceOpen(true)}
                    onMouseLeave={() => setWorkspaceOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                      workspaceOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={() => setWorkspaceOpen(true)}
                    onMouseLeave={() => setWorkspaceOpen(false)}
                  >
                    {workspaceLinks.map((ws) => (
                      <Link
                        key={ws.href}
                        href={ws.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-orange-500 transition-colors"
                      >
                        {ws.label}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link href="/workspaces" className="block px-4 py-2.5 text-sm font-medium text-orange-500">
                        View All Workspaces →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg text-white transition-colors"
              style={{ backgroundColor: "#FF6B35" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e85d2a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B35")}
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {workspaceLinks.map((ws) => (
                      <Link
                        key={ws.href}
                        href={ws.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {ws.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 text-sm font-semibold rounded-lg text-white"
                style={{ backgroundColor: "#FF6B35" }}
                onClick={() => setIsOpen(false)}
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}