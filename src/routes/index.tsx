import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import {
  Menu,
  X,
  MessageCircle,
  Linkedin,
  Mail,
  MapPin,
  Brain,
  Compass,
  Music,
  Users,
  Building2,
  GraduationCap,
  School,
  Heart,
  ExternalLink,
  Target,
  BookOpen,
  Award,
  Sparkles,
  Baby,
  UserCircle,
} from "lucide-react";
import sandraHero from "@/assets/sandra-benevento-hero.png";
import logoSandra from "@/assets/logo-sandra.png";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  LINKEDIN_URL,
  CLINIC_NAME,
  DOCTOR_NAME,
  DOCTOR_NAME_FULL,
  DOCTOR_TITLE,
  DOCTOR_TAGLINE,
  CITY,
  STATE,
  ADDRESS_STREET,
  ADDRESS_NEIGHBORHOOD,
  ADDRESS_CITY,
  ADDRESS_CEP,
  ADDRESS_NOTE,
  MAPS_URL,
  BIO_PARAGRAPHS,
  PROFESSIONAL_EXPERIENCE,
  SERVICE_AREAS,
  DIFFERENTIALS,
  PUBLICATIONS,
  SITE_TITLE,
  SITE_DESCRIPTION,
  STAT_YEARS,
  STAT_PUBLICATIONS,
  STAT_AREAS,
  CRP,
  UNIVERSITY,
  FORMATIONS,
  PROFESSIONAL_IDENTIFICATION,
  PRIVACY_POLICY_PATH,
  OFFICE_HOURS,
  CONTENT_DISCLAIMER,
  SCHEDULE_EVALUATION_TEXT,
  SCHEDULE_EVALUATION_TITLE,
  QUOTE,
  ONLINE_THERAPY_NOTICE,
} from "@/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Psicóloga", href: "#psicologa" },
  { label: "Formação", href: "#formacao" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Publicações", href: "#publicacoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const AREA_ICONS = [Baby, UserCircle, Heart, Building2, GraduationCap, School, Sparkles] as const;
const DIFF_ICONS = [Award, BookOpen, Target, Heart] as const;

function WhatsAppButton({
  children,
  size = "md",
  className = "",
  compact = false,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  compact?: boolean;
}) {
  const sizes = compact
    ? { sm: "px-2.5 py-1 text-[11px]", md: "px-3 py-1.5 text-xs", lg: "px-6 py-3 text-sm" }
    : { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-base sm:text-lg" };
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[color:var(--color-whatsapp)] font-semibold text-white shadow-lg shadow-[color:var(--color-whatsapp)]/30 transition-all duration-300 hover:scale-105 hover:bg-[color:var(--color-whatsapp-dark)] hover:shadow-xl ${sizes[size]} ${className}`}
    >
      <MessageCircle className={compact ? "h-3.5 w-3.5" : "h-5 w-5"} />
      {children}
    </a>
  );
}

function LinkedInButton({
  size = "sm",
  className = "",
  compact = false,
}: {
  size?: "sm" | "md";
  className?: string;
  compact?: boolean;
}) {
  const sizes = compact
    ? { sm: "px-2.5 py-1 text-[11px]", md: "px-4 py-2 text-sm" }
    : { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base" };
  return (
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full border border-[color:var(--color-ink)]/10 bg-white font-semibold text-[color:var(--color-ink)] transition-all duration-300 hover:border-[color:var(--color-lime)] hover:text-[color:var(--color-lime)] ${sizes[size]} ${className}`}
    >
      <Linkedin className={compact ? "h-3.5 w-3.5" : "h-5 w-5"} />
      LinkedIn
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 min-h-[var(--header-height)] border-b border-[color:var(--color-ink)]/5 bg-[color:var(--color-cream)]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="shrink-0">
          <img
            src={logoSandra}
            alt={`Logo ${CLINIC_NAME}`}
            width={200}
            height={80}
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
          <div className="flex items-center gap-1.5 xl:gap-2">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-semibold text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-lime)]/10 hover:text-[color:var(--color-lime)] lg:text-[15px] xl:px-3"
              >
                {l.label}
              </a>
            ))}
            <LinkedInButton size="sm" compact className="ml-2" />
            <WhatsAppButton size="sm" compact className="ml-1">
              WhatsApp
            </WhatsAppButton>
          </div>
        </nav>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-3 lg:hidden">
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 rounded-lg border border-[color:var(--color-ink)]/10 bg-white/90 p-2 text-[color:var(--color-ink)] shadow-sm"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--color-ink)]/10 bg-[color:var(--color-cream)]/98 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-[color:var(--color-ink-soft)] hover:bg-[color:var(--color-lime)]/10 hover:text-[color:var(--color-lime)]"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <LinkedInButton size="md" className="w-full" />
              <WhatsAppButton size="sm" className="w-full">
                Entrar em contato
              </WhatsAppButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[color:var(--color-cream)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-lime)]/8 via-transparent to-[color:var(--color-sage)]/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-8 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-10">
        <div className="relative z-10 order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-lime)]/40 bg-[color:var(--color-lime)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-ink)]">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-lime)]" />
            {DOCTOR_TITLE} · {CITY}
          </span>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-[color:var(--color-ink)] sm:text-5xl lg:text-[3.25rem]">
            {DOCTOR_NAME}
          </h1>
          <p className="mt-2 text-base font-medium text-[color:var(--color-lime)] sm:text-lg">
            {PROFESSIONAL_IDENTIFICATION}
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-[color:var(--color-ink-soft)]/85">
            {DOCTOR_TAGLINE}. Atendimento presencial em {CITY} — {STATE} e online.
          </p>
          <blockquote className="mt-4 border-l-4 border-[color:var(--color-warm)] pl-5 font-serif text-base italic leading-relaxed text-[color:var(--color-ink-soft)]/80 sm:text-lg">
            &ldquo;{QUOTE}&rdquo;
          </blockquote>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton size="lg">Entrar em contato</WhatsAppButton>
            <LinkedInButton size="md" />
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 border-l-4 border-[color:var(--color-lime)] pl-5">
            <div>
              <p className="text-2xl font-extrabold text-[color:var(--color-ink)]">{STAT_YEARS}</p>
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">Anos de experiência</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[color:var(--color-ink)]">{STAT_AREAS}</p>
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">Áreas de atuação</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[color:var(--color-ink)]">{STAT_PUBLICATIONS}</p>
              <p className="text-xs uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">Publicações</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[color:var(--color-lime)]/15 blur-2xl" />
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-[color:var(--color-ink)]/5 bg-white shadow-2xl lg:max-w-none">
            <img
              src={sandraHero}
              alt={`${DOCTOR_NAME_FULL}, psicóloga em ${CITY}`}
              width={800}
              height={800}
              className="aspect-square w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Specialist() {
  return (
    <section id="psicologa" className="bg-white py-10 lg:py-14">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 lg:grid-cols-[auto_1fr] lg:gap-10 lg:px-8">
        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[color:var(--color-lime)] to-[color:var(--color-sage)]" />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <img
              src={sandraHero}
              alt={`${DOCTOR_NAME_FULL}, psicóloga em ${CITY}`}
              width={800}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="min-w-0">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            A Psicóloga
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-[color:var(--color-ink)] sm:text-4xl lg:text-5xl">
            {DOCTOR_NAME_FULL}
            <span className="mt-1 block text-xl font-sans font-medium text-[color:var(--color-ink-soft)]/70 sm:text-2xl">
              {PROFESSIONAL_IDENTIFICATION}
            </span>
          </h2>
          <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]/70">{UNIVERSITY}</p>
          <p className="mt-4 text-base font-semibold text-[color:var(--color-lime)]">{DOCTOR_TAGLINE}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {FORMATIONS.slice(0, 4).map((spec) => (
              <li
                key={spec}
                className="rounded-full border border-[color:var(--color-lime)]/30 bg-[color:var(--color-lime)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-ink)]"
              >
                {spec.split("(")[0].trim()}
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)]/85 sm:text-lg">
            {BIO_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton size="md">Entrar em contato</WhatsAppButton>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-lime)]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Formation() {
  return (
    <section id="formacao" className="bg-[color:var(--color-cream)] py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            Formação e Experiência
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
            Trajetória profissional
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            Formação acadêmica verificável e mais de quatro décadas de atuação em psicologia.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATIONS.map((formation) => (
            <div
              key={formation}
              className="rounded-2xl border border-[color:var(--color-lime)]/20 bg-white p-5 transition-all hover:border-[color:var(--color-lime)] hover:shadow-lg"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--color-lime)]/15 text-[color:var(--color-lime)]">
                <GraduationCap className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-[color:var(--color-ink)]">
                {formation}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PROFESSIONAL_EXPERIENCE.map(({ area, focus, period }) => (
            <div
              key={area}
              className="relative overflow-hidden rounded-2xl border border-[color:var(--color-lime)]/20 bg-white p-6 transition-all hover:border-[color:var(--color-lime)] hover:shadow-lg"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[color:var(--color-lime)] to-[color:var(--color-sage)]" />
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-lime-soft)]">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--color-lime)]">
                    {focus}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-[color:var(--color-ink)]">{area}</h3>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]/70">{period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            Áreas de Atuação
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl lg:text-5xl">
            Como posso ajudar
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            Visão geral informativa dos serviços. Para saber o que se aplica ao seu caso, entre em
            contato com a psicóloga.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_AREAS.map(({ title, items }, i) => {
            const Icon = AREA_ICONS[i] ?? Compass;
            return (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--color-lime)]/15 bg-[color:var(--color-cream)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-lime)] hover:shadow-xl hover:shadow-[color:var(--color-lime)]/10"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[color:var(--color-lime)] to-[color:var(--color-sage)]" />
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--color-ink)] text-[color:var(--color-lime-soft)] transition-colors group-hover:bg-[color:var(--color-lime)] group-hover:text-white">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[color:var(--color-ink)]">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/75"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-lime)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-[color:var(--color-lime)]/30 bg-[color:var(--color-lime)]/10 px-5 py-4 text-center text-sm text-[color:var(--color-ink)]">
          {CONTENT_DISCLAIMER}
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[color:var(--color-ink-soft)]/60">
          {ONLINE_THERAPY_NOTICE}
        </p>
      </div>
    </section>
  );
}

function Publications() {
  return (
    <section id="publicacoes" className="bg-[color:var(--color-cream)] py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            Publicações
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
            Livros e obras
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            Autora de obras de referência em orientação vocacional, psicologia organizacional e
            desenvolvimento humano.
          </p>
        </div>
        <ul className="mt-8 space-y-3">
          {PUBLICATIONS.map(({ title, outlet, year, url }) => (
            <li key={title}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-[color:var(--color-lime)]/15 bg-white p-5 transition-all hover:border-[color:var(--color-lime)] hover:shadow-lg sm:items-center"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--color-lime)]/15 text-[color:var(--color-lime)]">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-[color:var(--color-ink)] group-hover:text-[color:var(--color-lime)]">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--color-ink-soft)]/60">
                    {outlet} · {year}
                  </p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[color:var(--color-lime)] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="bg-[color:var(--color-ink)] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-lime-soft)]">
            Diferenciais
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Por que escolher
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map(({ title, desc }, i) => {
            const Icon = DIFF_ICONS[i] ?? Target;
            return (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-[color:var(--color-lime)]/40 hover:bg-white/10"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[color:var(--color-lime)] text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="bg-[color:var(--color-cream)] py-10 lg:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-ink-soft)]/60">
            Contato
          </span>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
            {SCHEDULE_EVALUATION_TITLE}
          </h2>
          <p className="mt-4 text-base text-[color:var(--color-ink-soft)]/70">
            {SCHEDULE_EVALUATION_TEXT}
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--color-lime)]/15 bg-white p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[color:var(--color-ink)]">
              <MapPin className="h-5 w-5 text-[color:var(--color-lime)]" />
              Consultório
            </h3>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/85">
              <p className="font-medium text-[color:var(--color-ink)]">{ADDRESS_STREET}</p>
              <p>{ADDRESS_NEIGHBORHOOD}</p>
              <p>{ADDRESS_CITY}</p>
              <p>CEP {ADDRESS_CEP}</p>
              <p className="pt-2 text-[color:var(--color-ink-soft)]/60">{ADDRESS_NOTE}</p>
              <p className="text-[color:var(--color-ink-soft)]/60">{OFFICE_HOURS}</p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-lime)]"
            >
              Ver localização
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-lime)]/15 bg-white p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-[color:var(--color-ink)]">
              <Users className="h-5 w-5 text-[color:var(--color-lime)]" />
              Contato direto
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--color-ink-soft)]/85">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-[color:var(--color-lime)]" />
                <span>
                  <span className="font-medium text-[color:var(--color-ink)]">WhatsApp:</span>{" "}
                  {WHATSAPP_DISPLAY}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[color:var(--color-lime)]" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-medium text-[color:var(--color-ink)] underline-offset-2 hover:text-[color:var(--color-lime)] hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-[color:var(--color-lime)]" />
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[color:var(--color-ink)] underline-offset-2 hover:text-[color:var(--color-lime)] hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-ink)]">Profissional:</span>{" "}
                {PROFESSIONAL_IDENTIFICATION}
              </li>
              <li>
                <Link
                  to={PRIVACY_POLICY_PATH}
                  className="font-medium text-[color:var(--color-ink)] underline-offset-2 hover:text-[color:var(--color-lime)] hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppButton size="md">Entrar em contato</WhatsAppButton>
              <LinkedInButton size="md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entrar em contato pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-whatsapp)] text-white shadow-2xl shadow-[color:var(--color-whatsapp)]/40 transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-[color:var(--color-cream)] font-sans text-[color:var(--color-ink)] antialiased">
      <Header />
      <main>
        <Hero />
        <Specialist />
        <Formation />
        <ServiceAreas />
        <Publications />
        <Differentials />
        <Contact />
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}
