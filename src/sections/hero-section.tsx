import Link from "next/link";
import { Activity, ArrowRight, Radar, ShieldCheck } from "lucide-react";

import { Container } from "@/components/container";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const content = siteContent[locale].hero;
  const signalIcons = [ShieldCheck, Activity, Radar];

  return (
    <section className="relative overflow-hidden py-18 sm:py-22 lg:py-28">
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-[color:var(--soft-foreground)]">
              {content.badge}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl xl:text-7xl">
              {content.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg">
              {content.description}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {content.signals.map((signal, index) => {
                const Icon = signalIcons[index];

                return (
                  <div
                    key={signal}
                    className="animate-fade-up interactive-chip inline-flex items-center gap-2 rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-3 text-sm text-[color:var(--soft-foreground)]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{signal}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}#contact`}
                className="interactive-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[color:var(--foreground)] px-6 py-3 text-sm font-medium text-[color:var(--background)]"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`/${locale}#projects`}
                className="interactive-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-6 py-3 text-sm font-medium text-[color:var(--foreground)]"
              >
                {content.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="animate-float rounded-[2rem] border border-[color:var(--line)] bg-[linear-gradient(180deg,var(--panel-highlight),transparent)] p-5 shadow-[0_30px_120px_var(--shadow)]">
            <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)] p-6 sm:p-7">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-[color:var(--subtle)]">
                {content.positioningLabel}
              </p>
              <div className="mt-6 space-y-4">
                {content.metrics.map((metric, index) => (
                  <div key={metric} className="surface-card flex gap-4 rounded-[1.25rem] border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] text-xs font-semibold text-[color:var(--foreground)]">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[color:var(--soft-foreground)]">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
