import type { Metadata } from "next";
import { archivo, instrumentSans } from "@/lib/fonts";
import { locales, resolveLangParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import MobileTabBar from "@/components/navigation/MobileTabBar";
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = await resolveLangParam(params);
  const dict = getDictionary(lang);
  const base = "https://kra-modeste.vercel.app";

  return {
    metadataBase: new URL(base),
    title: {
      default: `Kouakou Kra Modeste — ${dict.meta.titleSuffix.split("—")[1]?.trim() ?? ""}`,
      template: `%s · Kra Modeste`
    },
    description: dict.meta.description,
    alternates: {
      canonical: `${base}/${lang}`,
      languages: { en: `${base}/en`, fr: `${base}/fr` }
    },
    openGraph: {
      title: "Kouakou Kra Modeste — Data Scientist | Big Data Engineer",
      description: dict.meta.description,
      url: `${base}/${lang}`,
      siteName: "Kra Modeste",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary",
      title: "Kouakou Kra Modeste — Data Scientist | Big Data Engineer",
      description: dict.meta.description
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-signature focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
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
