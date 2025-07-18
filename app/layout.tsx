import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhit Yadav – Portfolio",
  description: "Portfolio of Abhit Yadav – Full-Stack Developer. Projects, skills, experience, and contact information.",
  openGraph: {
    title: "Abhit Yadav – Portfolio",
    description: "Portfolio of Abhit Yadav – Full-Stack Developer. Projects, skills, experience, and contact information.",
    url: "https://www.codewithabhit.com/",
    siteName: "Abhit Yadav Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 64,
        height: 64,
        alt: "Abhit Yadav Portfolio Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Abhit Yadav – Portfolio",
    description: "Portfolio of Abhit Yadav – Full-Stack Developer. Projects, skills, experience, and contact information.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
