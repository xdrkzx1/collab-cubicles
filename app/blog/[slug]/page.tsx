import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import CTABand from "@/components/CTABand";
import type { Metadata } from "next";

const posts: Record<string, {
  title: string;
  category: string;
  categoryColor: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}> = {
  "why-coworking-whitefield": {
    title: "Why Whitefield is Bangalore's Best Neighbourhood for Coworking",
    category: "Whitefield Guide",
    categoryColor: "#1E3A5F",
    date: "March 5, 2025",
    readTime: "5 min read",
    excerpt: "From its proximity to IT parks to its thriving startup ecosystem, Whitefield has become the go-to hub for professionals in East Bengaluru.",
    content: `
Whitefield has undergone a remarkable transformation over the past decade. Once known primarily as a quiet residential suburb, it is now one of Bangalore's most dynamic professional hubs — and for coworking in particular, it stands out.

## The IT Corridor Advantage

Whitefield sits at the centre of East Bangalore's technology corridor. ITPL (International Tech Park Ltd), Bagmane Tech Park, Salarpuria GR Tech Park, and dozens of smaller tech campuses are all within 5 km of the area. For professionals who work with or for tech companies — consultants, agencies, freelance developers, product designers — being in Whitefield means being in the room where it happens.

## Startup Density is Growing

The startup scene in Whitefield has grown significantly. From SaaS companies and fintech startups to D2C brands and creative agencies, Whitefield's startup density makes it a productive environment for early-stage founders who want proximity to potential clients, investors, and talent.

## Connectivity Has Improved Dramatically

The extension of Namma Metro's Purple Line to Whitefield (Kadugodi) has transformed commutes from central Bangalore. Combined with improved road infrastructure, Whitefield is now genuinely accessible — a key factor for coworking spaces that depend on regular daily commuters.

## Affordability vs. Central Bangalore

Office space in Whitefield is meaningfully more affordable than Indiranagar, Koramangala, or HSR Layout. For coworking members, this translates to better per-seat pricing without sacrificing on quality or location prestige.

## Why Collab Cubicles at Brigade IRV

Brigade IRV Centre gives Collab Cubicles members the best of both worlds: a Grade A corporate campus address with all the legitimacy that implies, at pricing that's accessible to independent professionals and early-stage teams. It's located on Nallurhalli Road — well-connected by road, close to the metro, and surrounded by the area's professional density.

If you're based in East Bangalore and looking for a coworking space, Whitefield — and Brigade IRV specifically — deserves to be at the top of your shortlist.
    `,
  },
  "freelancer-guide-coworking": {
    title: "The Freelancer's Guide to Choosing a Coworking Space in Bangalore",
    category: "Freelancer Tips",
    categoryColor: "#FF6B35",
    date: "February 18, 2025",
    readTime: "7 min read",
    excerpt: "Day passes, dedicated desks, or just a coffee shop? We break down what matters most when picking your workspace as a freelancer.",
    content: `
As a freelancer in Bangalore, you have more workspace options than ever — and more noise to cut through. Here's a practical framework for making the right choice.

## 1. Figure Out How Often You'll Actually Use It

Be honest with yourself. If you're going to show up 3–4 days a week, a monthly dedicated desk plan makes far more economic sense than daily day passes. If you're primarily home-based with occasional client meetings, a virtual office with a few meeting room hours might be all you need.

## 2. WiFi Reliability is Non-Negotiable

For freelancers on video calls, uploading files, or running cloud tools, WiFi is your lifeline. Before committing, ask the space about their setup: What's the speed? Is there a backup ISP? Are there dedicated lines for meeting rooms?

## 3. Location Matters More Than You Think

Even if you don't meet clients at your coworking space, proximity to your key clients and networking events matters. In Bangalore, being in the right corridor — Whitefield for IT, Koramangala for consumer startups, HSR for SaaS — creates passive value over time.

## 4. Meeting Room Access is Often Undervalued

You may not think you need meeting rooms until you have a client call you don't want to take from a café. Look for spaces that include meeting room credits in their plans — it's a meaningful benefit.

## 5. Community vs. Quiet: Know Your Work Style

Some freelancers thrive on serendipitous conversations and collaboration. Others need quiet, focused environments. Ask to do a trial day before committing — it's the best way to know if the vibe suits you.

## 6. Pricing Transparency

Watch out for spaces that quote a low headline price but charge extra for WiFi, printing, parking, and meeting rooms. Add up the real cost based on your actual usage.

At Collab Cubicles, our open desk plan starts at ₹4,999/month inclusive of WiFi, pantry, 2 meeting room credits, and printing — no hidden add-ons.
    `,
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="font-semibold" style={{ color: "#FF6B35" }}>
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = post.content.trim().split("\n\n");

  return (
    <>
      {/* Header */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1E3A5F 0%, #2A4F82 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: post.categoryColor }}
            >
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold mt-10 mb-4" style={{ color: "#1E3A5F" }}>
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {para}
                </p>
              );
            })}
          </div>

          {/* CTA inline */}
          <div
            className="mt-12 rounded-2xl p-7 text-white"
            style={{ backgroundColor: "#1E3A5F" }}
          >
            <h3 className="text-xl font-bold mb-2">Ready to find your workspace in Whitefield?</h3>
            <p className="text-blue-200 mb-4">
              Book a free tour at Collab Cubicles, Brigade IRV Centre and see if it&apos;s the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white transition-opacity hover:opacity-90 text-sm"
              style={{ backgroundColor: "#FF6B35" }}
            >
              Book a Free Tour →
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-5" style={{ color: "#1E3A5F" }}>
            More Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(posts)
              .filter(([s]) => s !== slug)
              .slice(0, 2)
              .map(([s, p]) => (
                <Link
                  key={s}
                  href={`/blog/${s}`}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow group"
                >
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: p.categoryColor }}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-orange-600 transition-colors text-sm leading-snug">
                    {p.title}
                  </h3>
                  <span className="text-xs text-gray-400 mt-2 block">{p.readTime}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
