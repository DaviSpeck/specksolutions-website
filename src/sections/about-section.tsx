import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type AboutSectionProps = {
  locale: Locale;
};

export function AboutSection({ locale }: AboutSectionProps) {
  const content = siteContent[locale].about;

  return (
    <section id="about" className="py-16 sm:py-18">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {content.cards.map((item) => (
            <article key={item.title} className="surface-card rounded-[1.75rem] border border-[color:var(--line)] bg-[color:var(--panel)] p-6 sm:p-7">
              <h3 className="text-lg font-medium text-[color:var(--foreground)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
