import Link from "next/link";
import { Mail, MessageCircleMore } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type ContactSectionProps = {
  locale: Locale;
};

export function ContactSection({ locale }: ContactSectionProps) {
  const content = siteContent[locale].contact;

  const contactItems = [
    {
      title: content.items[0].title,
      href: `mailto:${siteConfig.email}`,
      label: siteConfig.email,
      icon: Mail
    },
    {
      title: content.items[1].title,
      href: siteConfig.whatsappUrl,
      label: content.items[1].label,
      icon: MessageCircleMore
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-18">
      <Container>
        <div className="rounded-[2.5rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,var(--panel-highlight),transparent)] p-7 sm:p-10 lg:p-12">
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="surface-card rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6"
                >
                  <div className="inline-flex rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3 text-[color:var(--foreground)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm uppercase tracking-[0.22em] text-[color:var(--subtle)]">{item.title}</p>
                  <p className="mt-2 text-lg font-medium text-[color:var(--foreground)]">{item.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
