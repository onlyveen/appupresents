import type { Metadata } from "next";
import { Inter, Bona_Nova_SC } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bonaNovaSC = Bona_Nova_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-bona-nova-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appu Presents - Premium Apparel for Women",
  description: "Founded on September 09, 2023, Appu Presents is a movement dedicated to bringing high-end fashion to every woman in India. We believe that premium quality shouldn't come with a premium price tag.",
  keywords: [
    "Appu Presents",
    "women's fashion",
    "premium apparel",
    "women's clothing",
    "fashion store",
    "Visakhapatnam",
    "Andhra Pradesh",
    "affordable premium fashion",
    "women's ethnic wear",
    "women's western wear",
  ],
  authors: [{ name: "Appu Presents" }],
  creator: "Appu Presents",
  publisher: "Appu Presents",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://appupresents.com",
    title: "Appu Presents - Premium Apparel for Women",
    description: "Founded on September 09, 2023, Appu Presents is a movement dedicated to bringing high-end fashion to every woman in India. We believe that premium quality shouldn't come with a premium price tag.",
    siteName: "Appu Presents",
    images: [
      {
        url: "/images/SEO.jpg",
        width: 1200,
        height: 630,
        alt: "Appu Presents - Premium Apparel for Women",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appu Presents - Premium Apparel for Women",
    description: "Founded on September 09, 2023, Appu Presents is a movement dedicated to bringing high-end fashion to every woman in India.",
    images: ["/images/SEO.jpg"],
  },
  verification: {
    google: "", // Add Google Search Console verification code here
  },
  alternates: {
    canonical: "https://appupresents.com",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: "Appu Presents",
    description: "Premium apparel for women at affordable prices",
    url: "https://appupresents.com",
    telephone: "+919063656201",
    foundingDate: "2023-09-09",
    logo: "https://appupresents.com/images/SEO.jpg",
    image: "https://appupresents.com/images/SEO.jpg",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Fire Station Jn, Pedagantyada, Gajuwaka",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530044",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "18-15/9, Krishna Nagar, Srinivasa Nagar, Madhurawada",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530048",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Raghuram Colony Rd, Raghuram Layout, Niddanam Doddi",
        addressLocality: "Anakapalli",
        addressRegion: "Andhra Pradesh",
        postalCode: "531002",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1-55, Santosh Nagar",
        addressLocality: "Vepagunta",
        addressRegion: "Andhra Pradesh",
        postalCode: "530047",
        addressCountry: "IN",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "40-51-15A, Kasturi Nagar-01, Santhosh Nagar, Santhi Nagar, Kailasapuram",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530024",
        addressCountry: "IN",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "12:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      // Add social media links here when available
    ],
    priceRange: "₹₹",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${bonaNovaSC.variable} antialiased bg-brand-beige font-inter`}>
        <Nav />
        <main className="relative w-full min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
