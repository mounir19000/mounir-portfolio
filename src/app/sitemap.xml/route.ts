import { locales } from "@/i18n/config";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mounir-mostefai.netlify.app";

export const dynamic = "force-static";

export async function GET() {
  const lastmod = new Date().toISOString();

  const urls = locales
    .map(
      (lang) => `  <url>
    <loc>${siteUrl}/${lang}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${lang === "en" ? "1.0" : "0.9"}</priority>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
