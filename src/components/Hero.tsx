import { ChevronDown } from "lucide-react";
import {
  PSYCHOLOGIST_NAME,
  PSYCHOLOGIST_TITLE,
  CRP,
  TAGLINE,
  WHATSAPP_URL,
  LINKEDIN_URL,
} from "@/site-config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-cream to-lavender-50" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(123,158,139,0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(193,168,188,0.25) 0%, transparent 50%),
                            radial-gradient(circle at 60% 80%, rgba(201,186,167,0.2) 0%, transparent 40%)`,
        }}
      />

      {/* Organic shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-lavender-100/40 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-100/50 rounded-full blur-3xl -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-warm-100/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-brand-200 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-700 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              Atendimento Presencial · São Caetano do Sul
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-3">
              {PSYCHOLOGIST_NAME.split(" ")[0]}
              <br />
              <span className="text-brand-600">
                {PSYCHOLOGIST_NAME.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <p className="text-brand-600 font-semibold text-lg mb-1">
              {PSYCHOLOGIST_TITLE}
            </p>
            <p className="text-slate-500 text-sm font-medium mb-6">{CRP}</p>

            <blockquote className="border-l-4 border-brand-300 pl-4 mb-8">
              <p className="font-serif italic text-slate-600 text-lg leading-relaxed">
                "{TAGLINE}"
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar pelo WhatsApp
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-brand-50 text-brand-700 font-semibold rounded-xl border border-brand-200 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs text-slate-600 border border-slate-100">
                <span className="text-brand-500">🎓</span>
                Doutora — USP
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs text-slate-600 border border-slate-100">
                <span>🎵</span>
                Musicoterapeuta
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs text-slate-600 border border-slate-100">
                <span>📚</span>
                Autora Publicada
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 rounded-full px-3 py-1.5 text-xs text-slate-600 border border-slate-100">
                <span>🔬</span>
                Especialista Rorschach
              </div>
            </div>
          </div>

          {/* Photo / Visual element */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Main photo container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem]">
                {/* Background decorative card */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-200 to-lavender-200 rounded-[2.5rem] rotate-3 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-tl from-warm-200 to-brand-100 rounded-[2.5rem] -rotate-2 opacity-40" />

                {/* Photo / Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-100 to-brand-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex items-end justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 mx-auto mb-4 bg-brand-300/50 rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16 text-brand-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                      </div>
                      <p className="text-brand-700 font-serif font-semibold text-xl">{PSYCHOLOGIST_NAME.split(" ")[0]}</p>
                      <p className="text-brand-600 text-sm mt-1">{CRP}</p>
                    </div>
                  </div>
                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-300/30 to-transparent" />
                </div>

                {/* Floating tag */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-brand-100">
                  <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center text-lg">
                    🧠
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-700">+45 anos</div>
                    <div className="text-xs text-slate-500">de experiência</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-lavender-100">
                  <div className="w-8 h-8 bg-lavender-100 rounded-full flex items-center justify-center text-lg">
                    📚
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-700">Autora</div>
                    <div className="text-xs text-slate-500">de 5 obras</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12 md:mt-16">
          <button
            onClick={() => {
              document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-brand-500 hover:text-brand-700 transition-colors"
            aria-label="Rolar para baixo"
          >
            <span className="text-xs font-medium tracking-widest uppercase">
              Conheça mais
            </span>
            <ChevronDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
