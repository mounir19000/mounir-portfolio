import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Mostefai Mounir Sofiane — AI & Front-End Engineer",
  description:
    "Computer Science engineering student at ESI Algiers. AI/ML systems, computer vision, NLP, and modern web development. From data and models to deployed APIs and polished interfaces.",
  keywords: [
    "AI",
    "Machine Learning",
    "Front-End",
    "React",
    "Next.js",
    "Computer Vision",
    "NLP",
    "Portfolio",
    "ESI Algiers",
  ],
  authors: [{ name: "Mostefai Mounir Sofiane" }],
  openGraph: {
    title: "Mostefai Mounir Sofiane — AI & Front-End Engineer",
    description:
      "AI/ML systems, computer vision, and modern web development. From data and models to deployed APIs and polished interfaces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mostefai Mounir Sofiane — AI & Front-End Engineer",
    description:
      "AI/ML systems, computer vision, and modern web development.",
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
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
