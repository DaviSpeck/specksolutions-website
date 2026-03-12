import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type ProjectsSectionProps = {
  locale: Locale;
};

export function ProjectsSection({ locale }: ProjectsSectionProps) {
  const content = siteContent[locale].projects;

  return (
    <section id="projects" className="py-16 sm:py-18">
      <Container>
        <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {content.items.map((project) => (
            <article
              key={project.name}
              className="surface-card rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,var(--panel-highlight),transparent)] p-6 sm:p-8"
            >
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[color:var(--subtle)]">
                {content.systemLabel}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[color:var(--foreground)] sm:text-2xl">{project.name}</h3>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{project.summary}</p>
              <div className="mt-7 border-t border-[color:var(--line)] pt-6">
                <p className="text-sm font-medium text-[color:var(--soft-foreground)]">{content.challengeLabel}</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[color:var(--muted)]">
                  {project.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[color:var(--soft-foreground)]" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
