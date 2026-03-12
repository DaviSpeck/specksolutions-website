import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ProductsSectionProps = {
  locale: Locale;
};

export function ProductsSection({ locale }: ProductsSectionProps) {
  const content = siteContent[locale].products;

  return (
    <section id="products" className="py-16 sm:py-18">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-6 sm:p-8">
            <p className="text-sm leading-7 text-[color:var(--muted)]">{content.intro}</p>
          </div>
          <div className="space-y-4">
            {content.items.map((item) => (
              <article key={item.name} className="surface-card rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 sm:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.26em] text-[color:var(--subtle)]">{item.status}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-[color:var(--foreground)]">{item.name}</h3>
                  </div>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="interactive-button inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                    >
                      {item.cta}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-[color:var(--line)] px-4 py-2 text-sm text-[color:var(--subtle)]">
                      {item.cta}
                    </span>
                  )}
                </div>
                <p className="mt-5 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
