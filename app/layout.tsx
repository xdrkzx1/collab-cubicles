import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Collab Cubicles | Coworking Space in Whitefield, Bangalore",
    template: "%s | Collab Cubicles Whitefield",
  },
  description:
    "Affordable coworking space at Brigade IRV Centre, Whitefield. Open desks, dedicated desks, private cabins, meeting rooms & virtual office for freelancers and startups in East Bengaluru.",
  keywords: [
    "coworking space Whitefield",
    "shared office Whitefield",
    "coworking space Brigade IRV",
    "affordable coworking Whitefield",
    "coworking Bangalore",
  ],
  metadataBase: new URL("https://collabcubicles.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Collab Cubicles",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
