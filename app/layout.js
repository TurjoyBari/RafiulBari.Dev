import { Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://rafiulbari.dev"),
  title: {
    default: "Rafiul Bari Turjo | Software Engineer & Full Stack Developer",
    template: "%s | Rafiul Bari Turjo",
  },
  description:
    "Rafiul Bari Turjo is a professional Software Engineer, AI Integration Specialist, and Full Stack Developer specializing in React, Next.js, Node.js, and scalable web applications.",
  keywords: [
    "Rafiul Bari Turjo",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Integration Specialist",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Rafiul Bari Turjo", url: "https://rafiulbari.dev" }],
  creator: "Rafiul Bari Turjo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rafiulbari.dev",
    siteName: "Rafiul Bari Turjo",
    title: "Rafiul Bari Turjo | Software Engineer & Full Stack Developer",
    description:
      "Professional Software Engineer building scalable, high-performance web applications with React, Next.js, and AI-powered solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafiul Bari Turjo — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafiul Bari Turjo | Software Engineer & Full Stack Developer",
    description:
      "Professional Software Engineer building scalable, high-performance web applications with React, Next.js, and AI-powered solutions.",
    creator: "@rafiulbariturjo",
    images: ["/og-image.jpg"],
  },
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
  alternates: {
    canonical: "https://rafiulbari.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1C1C1C" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} bg-bg-primary text-text-primary antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden bg-bg-primary">
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-radial-overlay" />
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-grid bg-grid-fade" />
          <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-noise" />
          <div aria-hidden="true" className="glow-blob glow-blob-blue fixed -top-40 -left-40 h-[600px] w-[600px]" />
          <div aria-hidden="true" className="glow-blob glow-blob-purple fixed top-1/4 -right-56 h-[500px] w-[500px]" />
          <div aria-hidden="true" className="glow-blob glow-blob-cyan fixed -bottom-40 left-1/4 h-[550px] w-[550px]" />
          <div aria-hidden="true" className="glow-blob glow-blob-emerald fixed top-2/3 -left-20 h-[400px] w-[400px]" />

          <div className="relative z-10">
            <AppShell>{children}</AppShell>
          </div>
        </div>
      </body>
    </html>
  );
}
