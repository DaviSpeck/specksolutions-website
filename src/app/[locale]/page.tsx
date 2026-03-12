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
import { isValidLocale } from "@/lib/i18n";

export default async function LocalePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[color:var(--background)]">
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
