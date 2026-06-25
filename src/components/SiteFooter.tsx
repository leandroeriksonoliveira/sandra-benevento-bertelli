import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import logoSandra from "@/assets/logo-sandra.png";
import { PoweredByVeltro } from "@/components/PoweredByVeltro";
import {
  ADDRESS_CITY,
  ADDRESS_STREET,
  CITY,
  CLINIC_NAME,
  CONTENT_DISCLAIMER,
  DOCTOR_TAGLINE,
  EMAIL,
  LEGAL_FOOTER_NOTICE,
  LINKEDIN_URL,
  OFFICE_HOURS,
  PRIVACY_POLICY_PATH,
  PROFESSIONAL_IDENTIFICATION,
  STATE,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--color-ink)] text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <p className="text-center text-xs leading-relaxed text-white/60 sm:text-left">
            <strong className="text-white/80">Aviso:</strong> {CONTENT_DISCLAIMER}
          </p>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-white/50 sm:text-left">
            {LEGAL_FOOTER_NOTICE}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-3 lg:px-8">
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="inline-block rounded-xl bg-white/95 px-3 py-2 shadow-sm">
                <img
                  src={logoSandra}
                  alt={`Logo ${CLINIC_NAME}`}
                  width={200}
                  height={80}
                  className="h-11 w-auto object-contain sm:h-12"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {DOCTOR_TAGLINE}. Psicologia em {CITY} — {STATE}.
            </p>
            <p className="mt-3 text-sm font-medium text-white/80">{PROFESSIONAL_IDENTIFICATION}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-lime-soft)]">
              Consultório
            </h4>
            <div className="mt-4 flex items-start gap-3 text-sm text-white/80">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-lime-soft)]" />
              <div>
                <p>{ADDRESS_STREET}</p>
                <p className="mt-1">{ADDRESS_CITY}</p>
                <p className="mt-2 text-white/60">{OFFICE_HOURS}</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[color:var(--color-lime-soft)]">
              Contato e legal
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[color:var(--color-lime-soft)]"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[color:var(--color-lime-soft)]"
                >
                  <Mail className="h-4 w-4" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-[color:var(--color-lime-soft)]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <Link
                  to={PRIVACY_POLICY_PATH}
                  className="text-white/80 transition-colors hover:text-[color:var(--color-lime-soft)]"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
            <p>
              © {new Date().getFullYear()} {CLINIC_NAME}. Todos os direitos reservados.
            </p>
            <p>{PROFESSIONAL_IDENTIFICATION}</p>
          </div>
          <PoweredByVeltro className="pb-5" />
        </div>
      </div>
    </footer>
  );
}
