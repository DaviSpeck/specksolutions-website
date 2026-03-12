"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import {
  Activity,
  Boxes,
  Cloud,
  Container as ContainerIcon,
  Database,
  Gauge,
  Globe,
  Layers3,
  Network,
  Radar,
  ScanSearch,
  Server,
  ShieldCheck,
  Smartphone,
  Bell,
  LockKeyhole,
  MessageCircle,
} from "lucide-react";

import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const technologies = [
  { name: "Golang", icon: Server },
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: Boxes },
  { name: "NestJS", icon: Layers3 },
  { name: "Fastify", icon: Gauge },
  { name: "React", icon: Globe },
  { name: "Next.js", icon: Globe },
  { name: "React Native", icon: Smartphone },
  { name: "Expo", icon: Smartphone },
  { name: "EC2", icon: Server },
  { name: "Lambda", icon: Radar },
  { name: "SQS", icon: Network },
  { name: "EventBridge", icon: Radar },
  { name: "ElastiCache", icon: Activity },
  { name: "RDS", icon: Database },
  { name: "DynamoDB", icon: Database },
  { name: "VPC", icon: Network },
  { name: "CloudFront", icon: Globe },
  { name: "Cloudflare", icon: Cloud },
  { name: "S3", icon: Cloud },
  { name: "WAF", icon: ShieldCheck },
  { name: "MongoDB", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Redis", icon: Activity },
  { name: "Bull", icon: Network },
  { name: "Docker", icon: ContainerIcon },
  { name: "Kubernetes", icon: Boxes },
  { name: "Datadog", icon: Activity },
  { name: "New Relic", icon: ScanSearch },
  { name: "Firebase", icon: Bell },
  { name: "Supabase", icon: Database },
  { name: "Push Notifications", icon: Bell },
  { name: "Biometrics", icon: LockKeyhole },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Pixels / CAPI", icon: Radar },
  { name: "Fingerprinting", icon: ShieldCheck },
];

const technologyGroups = [
  {
    title: "Linguagens e backend",
    summary: "Go, Node.js, TypeScript, NestJS e Fastify.",
    items: technologies.slice(0, 5),
  },
  {
    title: "Frontend e mobile",
    summary: "React, Next.js, React Native, Expo e integrações mobile.",
    items: technologies.slice(5, 9),
  },
  {
    title: "Cloud e AWS",
    summary:
      "EC2, Lambda, SQS, EventBridge, VPC, CloudFront, Cloudflare, S3 e WAF.",
    items: technologies.slice(9, 21),
  },
  {
    title: "Dados e filas",
    summary: "MongoDB, PostgreSQL, MySQL, Redis, Bull e ElastiCache.",
    items: [technologies[13], ...technologies.slice(21, 26)],
  },
  {
    title: "Observabilidade e integrações",
    summary: "Datadog, New Relic, Firebase, Supabase e integrações críticas.",
    items: technologies.slice(26),
  },
] as const;

const technologyCopy = {
  en: {
    centerLabel: ["Technical", "ecosystem"],
    mobileIntro:
      "Technologies organized by context to reduce page height and improve scanning on mobile.",
    groups: [
      {
        title: "Languages and backend",
        summary: "Go, Node.js, TypeScript, NestJS, and Fastify.",
      },
      {
        title: "Frontend and mobile",
        summary: "React, Next.js, React Native, Expo, and mobile integrations.",
      },
      {
        title: "Cloud and AWS",
        summary:
          "EC2, Lambda, SQS, EventBridge, VPC, CloudFront, Cloudflare, S3, and WAF.",
      },
      {
        title: "Data and queues",
        summary: "MongoDB, PostgreSQL, MySQL, Redis, Bull, and ElastiCache.",
      },
      {
        title: "Observability and integrations",
        summary:
          "Datadog, New Relic, Firebase, Supabase, and critical integrations.",
      },
    ],
  },
  pt: {
    centerLabel: ["Ecossistema", "Técnico"],
    mobileIntro:
      "Tecnologias organizadas por contexto para reduzir a altura da seção e facilitar a leitura no mobile.",
    groups: [
      {
        title: "Linguagens e backend",
        summary: "Go, Node.js, TypeScript, NestJS e Fastify.",
      },
      {
        title: "Frontend e mobile",
        summary: "React, Next.js, React Native, Expo e integrações mobile.",
      },
      {
        title: "Cloud e AWS",
        summary:
          "EC2, Lambda, SQS, EventBridge, VPC, CloudFront, Cloudflare, S3 e WAF.",
      },
      {
        title: "Dados e filas",
        summary: "MongoDB, PostgreSQL, MySQL, Redis, Bull e ElastiCache.",
      },
      {
        title: "Observabilidade e integrações",
        summary:
          "Datadog, New Relic, Firebase, Supabase e integrações críticas.",
      },
    ],
  },
} as const;

const orbitRings = [
  {
    size: 292,
    duration: 48,
    direction: "normal" as const,
    startAngle: 10,
    tilt: -12,
    items: technologies.slice(0, 5),
  },
  {
    size: 388,
    duration: 62,
    direction: "reverse" as const,
    startAngle: 16,
    tilt: 10,
    items: technologies.slice(5, 12),
  },
  {
    size: 480,
    duration: 78,
    direction: "normal" as const,
    startAngle: 4,
    tilt: -6,
    items: technologies.slice(12, 19),
  },
  {
    size: 568,
    duration: 92,
    direction: "reverse" as const,
    startAngle: 14,
    tilt: 8,
    items: technologies.slice(19, 26),
  },
  {
    size: 650,
    duration: 94,
    direction: "normal" as const,
    startAngle: 20,
    tilt: 14,
    items: technologies.slice(26),
  },
] as const;

type TechnologySectionProps = {
  locale: Locale;
};

export function TechnologySection({ locale }: TechnologySectionProps) {
  const content = siteContent[locale].technology;
  const orbitItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const localizedTechnology = technologyCopy[locale];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId = 0;

    const animate = (time: number) => {
      orbitRings.forEach((ring, ringIndex) => {
        const direction = ring.direction === "reverse" ? -1 : 1;
        const angularVelocity = (Math.PI * 2) / (ring.duration * 1000);
        const baseRotation = time * angularVelocity * direction;

        ring.items.forEach((_, itemIndex) => {
          const refIndex =
            orbitRings
              .slice(0, ringIndex)
              .reduce(
                (total, currentRing) => total + currentRing.items.length,
                0,
              ) + itemIndex;
          const node = orbitItemRefs.current[refIndex];

          if (!node) {
            return;
          }

          const angle =
            (ring.startAngle * Math.PI) / 180 +
            (Math.PI * 2 * itemIndex) / ring.items.length +
            baseRotation;
          const radius = ring.size / 2 + ((itemIndex % 2) - 0.5) * 6;
          const tilt = (ring.tilt * Math.PI) / 180;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * 0.82;
          const rotatedX = x * Math.cos(tilt) - y * Math.sin(tilt);
          const rotatedY = x * Math.sin(tilt) + y * Math.cos(tilt);
          const chipScale = 1 - ringIndex * 0.03;

          node.style.transform = `translate(-50%, -50%) translate(${rotatedX}px, ${rotatedY}px) scale(${chipScale})`;
          node.style.opacity = `${0.96 - ringIndex * 0.04}`;
        });
      });

      frameId = window.requestAnimationFrame(animate);
    };

    if (!mediaQuery.matches) {
      frameId = window.requestAnimationFrame(animate);
    }

    const handleChange = () => {
      if (mediaQuery.matches) {
        window.cancelAnimationFrame(frameId);
      } else {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      window.cancelAnimationFrame(frameId);
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  let orbitItemIndex = 0;

  return (
    <section className="py-16 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-10">
          <div className="relative hidden h-[54rem] overflow-hidden rounded-[2.5rem] border border-[color:var(--line)] bg-[radial-gradient(circle_at_center,var(--panel-highlight),transparent_58%)] lg:block">
            <div className="orbit-stars absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-soft),transparent_48%)]" />
            <div className="absolute left-1/2 top-1/2 z-20 flex h-30 w-30 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--line)] bg-[radial-gradient(circle_at_center,var(--panel-highlight),var(--panel-strong)_70%)] px-5 text-center shadow-[0_0_90px_var(--shadow)]">
              <span className="text-sm font-semibold leading-6 text-[color:var(--foreground)]">
                {localizedTechnology.centerLabel[0]}
                <br />
                {localizedTechnology.centerLabel[1]}
              </span>
            </div>

            {orbitRings.map((ring, ringIndex) => (
              <div
                key={ringIndex}
                className={`orbit-ring absolute left-1/2 top-1/2 rounded-full border border-[color:var(--line)]/70 ${
                  ring.direction === "reverse" ? "orbit-ring-reverse" : ""
                }`}
                style={
                  {
                    width: `${ring.size}px`,
                    height: `${ring.size}px`,
                    transform: "translate(-50%, -50%)",
                    opacity: 0.94 - ringIndex * 0.04,
                  } satisfies CSSProperties
                }
              >
                <div className="absolute inset-6 rounded-full border border-dashed border-[color:var(--line)]/40" />
                {ring.items.map((technology) => {
                  const Icon = technology.icon;
                  const chipWidth = technology.name.length > 10 ? 162 : 138;
                  const currentIndex = orbitItemIndex++;

                  return (
                    <div
                      key={technology.name}
                      className="absolute left-1/2 top-1/2"
                      ref={(node) => {
                        orbitItemRefs.current[currentIndex] = node;
                      }}
                      style={
                        {
                          transform: "translate(-50%, -50%)",
                        } satisfies CSSProperties
                      }
                    >
                      <div
                        className="interactive-chip flex items-center gap-2.5 rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] px-3.5 py-2.5 text-[13px] font-medium text-[color:var(--soft-foreground)] shadow-[0_18px_40px_var(--shadow)]"
                        style={
                          {
                            minWidth: `${chipWidth}px`,
                          } satisfies CSSProperties
                        }
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] text-[color:var(--foreground)]">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span>{technology.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="space-y-3 lg:hidden">
            <div className="rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel)] px-4 py-4 text-sm leading-7 text-[color:var(--muted)]">
              {localizedTechnology.mobileIntro}
            </div>
            {technologyGroups.map((group, groupIndex) => (
              <details
                key={
                  localizedTechnology.groups[groupIndex]?.title ?? group.title
                }
                className="group rounded-[1.5rem] border border-[color:var(--line)] bg-[color:var(--panel-strong)]"
                open={groupIndex === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-4 py-4">
                  <div>
                    <p className="text-sm font-medium text-[color:var(--foreground)]">
                      {localizedTechnology.groups[groupIndex]?.title ??
                        group.title}
                    </p>
                    <p className="mt-1 text-xs leading-6 text-[color:var(--muted)]">
                      {localizedTechnology.groups[groupIndex]?.summary ??
                        group.summary}
                    </p>
                  </div>
                  <span className="mt-1 text-lg leading-none text-[color:var(--muted)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-[color:var(--line)] px-4 py-4">
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((technology) => {
                      const Icon = technology.icon;

                      return (
                        <div
                          key={technology.name}
                          className="interactive-chip flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--panel)] px-3 py-2 text-xs font-medium text-[color:var(--soft-foreground)]"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--panel-strong)] text-[color:var(--foreground)]">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <span>{technology.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
