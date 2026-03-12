import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExpertiseSection } from "@/sections/expertise-section";
import { HeroSection } from "@/sections/hero-section";
import { ProductsSection } from "@/sections/products-section";
import { ProjectsSection } from "@/sections/projects-section";
import { TechnologySection } from "@/sections/technology-section";
import { siteContent } from "@/lib/content";
import { isValidLocale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default async function LocalePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = siteContent[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        url: siteConfig.url,
        logo: `${siteConfig.url}/new-favicon.png`,
        email: siteConfig.email,
        sameAs: siteConfig.sameAs,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: siteConfig.email,
            availableLanguage: ["English", "Portuguese"]
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/${locale}#service`,
        name: `${siteConfig.name} ${locale === "pt" ? "Consultoria em Tecnologia" : "Technology Consulting"}`,
        description: content.metadataDescription,
        url: `${siteConfig.url}/${locale}`,
        areaServed: "Worldwide",
        availableLanguage: ["en", "pt-BR"],
        provider: {
          "@id": `${siteConfig.url}/#organization`
        },
        serviceType: [
          "Software architecture",
          "Scalable systems",
          "Technology consulting",
          "Payment platform consulting",
          "SaaS architecture"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: ["en", "pt-BR"],
        publisher: {
          "@id": `${siteConfig.url}/#organization`
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,var(--glow-strong),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-80 -z-10 h-[42rem] bg-[radial-gradient(circle_at_center,var(--glow-soft),transparent_58%)]" />
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <ProjectsSection locale={locale} />
        <AboutSection locale={locale} />
        <ExpertiseSection locale={locale} />
        <TechnologySection locale={locale} />
        <ProductsSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
