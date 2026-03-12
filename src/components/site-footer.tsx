import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

import { Container } from "@/components/container";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const content = siteContent[locale];

  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <Container className="flex flex-col gap-4 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. {content.footer}
        </p>
        <div className="flex items-center gap-4">
          <Link href={`mailto:${siteConfig.email}`} className="transition hover:text-[color:var(--foreground)]">
            {siteConfig.email}
          </Link>
          <Link
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] transition hover:text-[color:var(--foreground)]"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] transition hover:text-[color:var(--foreground)]"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link href={`/${locale}#contact`} className="transition hover:text-[color:var(--foreground)]">
            {content.nav[4]?.label}
          </Link>
        </div>
      </Container>
    </footer>
  );
}
