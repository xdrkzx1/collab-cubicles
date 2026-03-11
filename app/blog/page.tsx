import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Blog – Coworking, Freelancing & Whitefield Guides",
  description:
    "Articles, guides, and tips for freelancers, startups, and remote professionals in Whitefield, Bangalore. By the Collab Cubicles team.",
};

const posts = [
  {
    slug: "why-coworking-whitefield",
    title: "Why Whitefield is Bangalore's Best Neighbourhood for Coworking",
    excerpt: "From its proximity to IT parks to its thriving startup ecosystem, Whitefield has become the go-to hub for professionals in East Bengaluru.",
    category: "Whitefield Guide",
    categoryColor: "#1E3A5F",
    date: "March 5, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "freelancer-guide-coworking",
    title: "The Freelancer's Guide to Choosing a Coworking Space in Bangalore",
    excerpt: "Day passes, dedicated desks, or just a coffee shop? We break down what matters most when picking your workspace as a freelancer.",
    category: "Freelancer Tips",
    categoryColor: "#FF6B35",
    date: "February 18, 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    slug: "startup-office-coworking-vs-lease",
    title: "Coworking vs Traditional Lease: What Early-Stage Startups Should Know",
    excerpt: "Locked into a 3-year lease at ₹80/sqft, or flexible coworking with zero capex? We crunch the numbers for Whitefield startups.",
    category: "Startup Resources",
    categoryColor: "#059669",
    date: "January 30, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "productivity-tips-shared-office",
    title: "10 Productivity Tricks for Working in a Shared Office Space",
    excerpt: "From noise-cancelling headphones to power scheduling, here's how top performers stay focused in a coworking environment.",
    category: "Productivity",
    categoryColor: "#7C3AED",
    date: "January 12, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "brigade-irv-location-guide",
    title: "Getting to Brigade IRV Centre, Whitefield: The Complete Commute Guide",
    excerpt: "Bus routes, metro access, parking tips, and the best nearby cafés — everything you need to know before your first visit.",
    category: "Whitefield Guide",
    categoryColor: "#1E3A5F",
    date: "December 20, 2024",
    readTime: "4 min read",
    featured: false,
  },
  {
    slug: "virtual-office-gst-registration",
    title: "Using a Virtual Office for GST Registration in Bangalore",
    excerpt: "A step-by-step guide to using a coworking space address for GST, MSME, and company incorporation in Karnataka.",
    category: "Freelancer Tips",
    categoryColor: "#FF6B35",
    date: "December 5, 2024",
    readTime: "5 min read",
    featured: false,
  },
];

const categories = ["All", "Whitefield Guide", "Freelancer Tips", "Startup Resources", "Productivity"];

const featuredPosts = posts.filter((p) => p.featured);
const regularPosts = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Resources</h1>
          <p className="text-blue-200 text-xl max-w-xl mx-auto">
            Guides, tips, and insights for freelancers, founders, and remote professionals
            in Whitefield.
          </p>
        </div>
      </section>

      {/* Category filter (static) */}
      <section className="bg-white border-b border-gray-100 sticky top-[64px] lg:top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 no-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className="px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex-shrink-0"
                style={
                  i === 0
                    ? { backgroundColor: "#1E3A5F", color: "#fff" }
                    : { backgroundColor: "#f3f4f6", color: "#374151" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured posts */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1E3A5F" }}>Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 overflow-hidden flex flex-col"
              >
                <div
                  className="h-48 flex items-center justify-center"
                  style={{ backgroundColor: post.categoryColor + "15" }}
                >
                  <span className="text-7xl">📝</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span
                      className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: "#FF6B35" }}
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1E3A5F" }}>All Articles</h2>
          <div className="space-y-5">
            {regularPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row gap-5 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className="w-full sm:w-32 h-24 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: post.categoryColor + "15" }}
                >
                  <span className="text-4xl">📝</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="text-xs text-gray-400 mt-2 block">{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to find your workspace?"
        subtitle="All the reading is done. Come see Collab Cubicles in person."
        secondaryLabel="View All Workspaces"
        secondaryHref="/workspaces"
      />
    </>
  );
}
