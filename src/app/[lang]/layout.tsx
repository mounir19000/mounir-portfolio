import type { Metadata } from "next";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import { notFound } from "next/navigation";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(lang) ? lang : defaultLocale;
  const dictionary = await getDictionary(locale);

  return {
    metadataBase: new URL(baseUrl),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    keywords: dictionary.metadata.keywords,
    authors: [{ name: "Mostefai Mounir Sofiane" }],
    category: "technology",
    creator: "Mostefai Mounir Sofiane",
    publisher: "Mostefai Mounir Sofiane",
    applicationName: "Mostefai Mounir Portfolio",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      type: "website",
      url: `/${locale}`,
      locale: dictionary.metadata.openGraphLocale,
      siteName: "Mostefai Mounir Portfolio",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: dictionary.metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      images: ["/twitter-image"],
      creator: "@mounir19000",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return children;
}
