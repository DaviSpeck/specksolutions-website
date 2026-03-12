import type { Metadata } from "next";

import { Analytics } from "@/components/analytics";
import { ThemeScript } from "@/components/theme-script";
import { isValidLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Davi Speck", url: siteConfig.linkedinUrl }],
  creator: "Davi Speck",
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: `${siteConfig.url}/en`,
      pt: `${siteConfig.url}/pt`,
      "x-default": `${siteConfig.url}/pt`
    }
  },
  icons: {
    icon: [
      { url: "/new-favicon.png?v=2", type: "image/png", sizes: "257x253" },
      { url: "/favicon.svg?v=2", type: "image/svg+xml" }
    ],
    apple: "/new-favicon.png?v=2",
    shortcut: "/new-favicon.png?v=2"
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locales[siteConfig.defaultLocale],
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.socialImage]
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  }
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}>) {
  const { locale } = await params;
  const htmlLang = locale && isValidLocale(locale) ? locale : siteConfig.defaultLocale;

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <body className="bg-[color:var(--background)] text-[color:var(--foreground)] antialiased">
        <ThemeScript />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
