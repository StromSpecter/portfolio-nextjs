import type { Metadata } from "next";
import { Geist_Mono, Righteous } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import rLogo from "./assets/svgs/R_Logo.svg";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  variable: "--font-righteous",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M. Fadillah Rasyid | Software Engineer Portfolio",
    template: "%s | M. Fadillah Rasyid",
  },
  description:
    "Portfolio of M. Fadillah Rasyid, a Software Engineer focused on web and mobile development, product delivery, and scalable digital solutions.",
  keywords: [
    "M. Fadillah Rasyid",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "M. Fadillah Rasyid" }],
  creator: "M. Fadillah Rasyid",
  openGraph: {
    title: "M. Fadillah Rasyid | Software Engineer Portfolio",
    description:
      "Explore projects, tech stack, and professional experience from M. Fadillah Rasyid.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Fadillah Rasyid | Software Engineer Portfolio",
    description:
      "Projects, tech stack, and software engineering experience by M. Fadillah Rasyid.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: rLogo.src, type: "image/svg+xml" }],
    shortcut: [{ url: rLogo.src, type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${righteous.className} ${righteous.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
