import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const content = siteContent[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--header)] backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 text-sm font-medium text-[color:var(--foreground)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--line)] bg-[color:var(--panel)] p-1.5">
            <Image src="/new-favicon.png" alt="Speck symbol" width={28} height={28} className="h-7 w-7" />
          </span>
          <span className="flex flex-col gap-0.5 leading-none sm:flex-row sm:items-baseline sm:gap-2">
            <span className="text-base font-medium tracking-[0.08em] text-[color:var(--foreground)] sm:text-lg">
              {siteConfig.shortName}
            </span>
            <span className="text-[11px] font-medium tracking-[0.08em] text-[color:var(--muted)] sm:text-xs">
              Tech Solutions
            </span>
          </span>
        </Link>
        <div className="flex items-center gap-2 md:gap-3">
          <nav className="hidden items-center gap-6 text-sm text-[color:var(--muted)] lg:flex">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="transition hover:text-[color:var(--foreground)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] p-1">
            <Link
              href="/en"
              className={`rounded-full px-2.5 py-2 text-xs transition md:px-3 md:text-sm ${
                locale === "en"
                  ? "bg-[color:var(--panel-strong)] text-[color:var(--foreground)]"
                  : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              }`}
            >
              EN
            </Link>
            <Link
              href="/pt"
              className={`rounded-full px-2.5 py-2 text-xs transition md:px-3 md:text-sm ${
                locale === "pt"
                  ? "bg-[color:var(--panel-strong)] text-[color:var(--foreground)]"
                  : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              }`}
            >
              PT
            </Link>
          </div>
          <ThemeToggle lightLabel={content.lightLabel} darkLabel={content.darkLabel} />
        </div>
      </Container>
    </header>
  );
}
