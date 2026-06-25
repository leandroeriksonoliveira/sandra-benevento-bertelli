import { useState } from "react";
import { SPECIALTIES, WHATSAPP_URL } from "@/site-config";

type ColorVariant = "brand" | "lavender" | "warm";

const colorMap: Record<ColorVariant, {
  bg: string;
  bgHover: string;
  border: string;
  icon: string;
  badge: string;
  tag: string;
}> = {
  brand: {
    bg: "bg-brand-50",
    bgHover: "hover:bg-brand-100/60",
    border: "border-brand-200",
    icon: "bg-brand-100 text-brand-700",
    badge: "bg-brand-500",
    tag: "bg-brand-100 text-brand-700",
  },
  lavender: {
    bg: "bg-lavender-50",
    bgHover: "hover:bg-lavender-100/60",
    border: "border-lavender-200",
    icon: "bg-lavender-100 text-lavender-700",
    badge: "bg-lavender-500",
    tag: "bg-lavender-100 text-lavender-700",
  },
  warm: {
    bg: "bg-warm-50",
    bgHover: "hover:bg-warm-100/60",
    border: "border-warm-200",
    icon: "bg-warm-100 text-warm-700",
    badge: "bg-warm-500",
    tag: "bg-warm-100 text-warm-700",
  },
};

export default function Specialties() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="especialidades"
      className="py-24 bg-gradient-to-b from-cream-soft to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Especialidades
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            Atendimento multidisciplinar, integrando psicologia clínica,
            organizacional e musicoterapia para cuidar de você em cada fase da vida.
          </p>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((spec) => {
            const color = colorMap[spec.color as ColorVariant];
            const isOpen = activeId === spec.id;

            return (
              <div
                key={spec.id}
                className={`rounded-3xl border p-6 cursor-pointer transition-all duration-200 ${color.bg} ${color.bgHover} ${color.border} ${
                  isOpen ? "shadow-md ring-2 ring-brand-300/50" : "shadow-sm hover:shadow-md"
                }`}
                onClick={() =>
                  setActiveId(isOpen ? null : spec.id)
                }
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-12 h-12 min-w-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${color.icon}`}
                  >
                    {spec.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif font-semibold text-slate-800 text-lg leading-tight">
                      {spec.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {spec.items.length} modalidades
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {spec.description}
                </p>

                {/* Items */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-2 mt-1 pt-4 border-t border-white/60">
                    {spec.items.map((item) => (
                      <span
                        key={item}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${color.tag}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Toggle hint */}
                <div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
                  <span
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  >
                    ▾
                  </span>
                  {isOpen ? "Ocultar" : "Ver modalidades"}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Dúvidas sobre qual modalidade é ideal para você?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-md hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Conversar com Sandra
          </a>
        </div>
      </div>
    </section>
  );
}
