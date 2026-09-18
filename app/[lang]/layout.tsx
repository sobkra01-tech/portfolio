import type { Metadata } from "next";
import { archivo, instrumentSans } from "@/lib/fonts";
import { locales, resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { profile } from "@/data/profile";
import { siteUrl, defaultOgImage } from "@/lib/seo";
import { websiteSchema } from "@/lib/structured-data";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import MobileTabBar from "@/components/navigation/MobileTabBar";
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

/**
 * Only truly page-independent defaults live here (title fallback, base
 * description, site-wide OG identity). Canonical, hreflang and the
 * per-page OG url/title/description are set by each page's own
 * generateMetadata via lib/seo.ts's buildPageMetadata — they can't be
 * correct at this layout level since every page under it would otherwise
 * inherit the same values (previously all pointing at the homepage).
 */
export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${profile.name} — ${profile.title}`,
      template: `%s · Kra Modeste`
    },
    description: dict.meta.description,
    openGraph: {
      siteName: profile.name,
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: [{ url: `${siteUrl}${defaultOgImage}` }]
    },
    twitter: {
      card: "summary"
    }
  };
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${archivo.variable} ${instrumentSans.variable}`}>
      <body className="font-body min-h-screen bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema(lang)) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-signature focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        <Navbar lang={lang} dict={dict} />
        <main id="main-content" className="pb-20 md:pb-0">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
        <MobileTabBar lang={lang} dict={dict} />
      </body>
    </html>
  );
}
