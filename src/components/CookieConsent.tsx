import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { PRIVACY_POLICY_PATH } from "@/site-config";

const STORAGE_KEY = "sandra-benevento-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "essential-only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-[color:var(--color-ink)]/10 bg-white p-5 shadow-2xl sm:inset-x-auto sm:bottom-6"
    >
      <p className="text-sm font-semibold text-[color:var(--color-ink)]">Cookies e privacidade</p>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-soft)]/85">
        Utilizamos cookies essenciais para o funcionamento do site. Ao continuar, você concorda com
        nossa{" "}
        <Link
          to={PRIVACY_POLICY_PATH}
          className="font-medium text-[color:var(--color-lime)] underline-offset-2 hover:underline"
        >
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={accept}
          className="rounded-full bg-[color:var(--color-ink)] px-4 py-2 text-xs font-semibold text-white"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={reject}
          className="rounded-full border border-[color:var(--color-ink)]/15 px-4 py-2 text-xs font-semibold text-[color:var(--color-ink-soft)]"
        >
          Apenas essenciais
        </button>
      </div>
    </div>
  );
}
