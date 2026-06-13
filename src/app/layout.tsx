import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MD KAIF | Software Engineer & AI Builder",
  description: "Next-generation technology portfolio of MD KAIF. Software Engineer, .NET Full Stack Developer, and AI Engineer.",
  openGraph: {
    title: "MD KAIF | Software Engineer",
    description: "Next-generation technology portfolio.",
    url: "https://kaif-portfolio-pi.vercel.app",
    siteName: "MD KAIF Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD KAIF | Software Engineer",
    description: "Next-generation technology portfolio.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
