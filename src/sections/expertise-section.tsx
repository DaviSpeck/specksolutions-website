import {
  Activity,
  Blocks,
  Building2,
  Cable,
  CreditCard,
  Layers3,
  SmartphoneNfc,
  RadioTower,
  Scaling,
  ShieldCheck,
  Workflow
} from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const expertiseIcons = [
  Blocks,
  Scaling,
  CreditCard,
  Building2,
  Workflow,
  Cable,
  Layers3,
  ShieldCheck,
  SmartphoneNfc,
  Activity,
  RadioTower
];

type ExpertiseSectionProps = {
  locale: Locale;
};

export function ExpertiseSection({ locale }: ExpertiseSectionProps) {
  const content = siteContent[locale].expertise;

  return (
    <section id="expertise" className="py-16 sm:py-18">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = expertiseIcons[index];

            return (
              <article
                key={item.title}
                className="surface-card group rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6"
              >
                <div className="inline-flex rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-3 text-[color:var(--foreground)] transition-transform duration-300 group-hover:scale-[1.04]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-[color:var(--foreground)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
