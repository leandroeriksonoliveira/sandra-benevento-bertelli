import { useState, useEffect } from "react";

const COOKIE_KEY = "sb_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-sm z-50 bg-white rounded-2xl shadow-2xl border border-slate-100 p-5"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="text-2xl">🍪</div>
        <div>
          <h3 className="font-semibold text-slate-800 text-sm mb-1">
            Este site usa cookies
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Utilizamos cookies essenciais para o funcionamento do site. Ao continuar
            navegando, você concorda com nossa{" "}
            <a
              href="/politica-de-privacidade"
              className="text-brand-600 hover:underline"
            >
              Política de Privacidade
            </a>{" "}
            e com o uso de cookies, conforme a LGPD (Lei 13.709/2018).
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-lg transition-colors"
        >
          Aceitar
        </button>
        <button
          onClick={decline}
          className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold rounded-lg transition-colors"
        >
          Recusar não essenciais
        </button>
      </div>
    </div>
  );
}
