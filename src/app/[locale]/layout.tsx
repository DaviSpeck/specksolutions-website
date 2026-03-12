import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteContent } from "@/lib/content";
import { isValidLocale, locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale];

  return {
    title: {
      default: content.metadataTitle,
      template: `%s | ${siteConfig.name}`
    },
    description: content.metadataDescription,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        pt: `${siteConfig.url}/pt`
      }
    },
    openGraph: {
      title: content.metadataTitle,
      description: content.metadataDescription,
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      images: [
        {
          url: "/og-image.svg",
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: content.metadataTitle,
      description: content.metadataDescription,
      images: ["/og-image.svg"]
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}
