import {
  PSYCHOLOGIST_NAME,
  CRP,
  BIO_PARAGRAPHS,
  DIFFERENTIALS,
  EXPERIENCE,
  WHATSAPP_URL,
} from "@/site-config";

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Sobre
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Quem é Sandra
          </h2>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full" />
        </div>

        {/* Bio + Differentials */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Bio text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                🧠
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg text-slate-800">
                  {PSYCHOLOGIST_NAME}
                </h3>
                <p className="text-sm text-brand-600 font-medium">{CRP}</p>
              </div>
            </div>

            <div className="space-y-4">
              {BIO_PARAGRAPHS.map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-[15px]">
                  {para}
                </p>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-all shadow-md hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Entrar em Contato
            </a>
          </div>

          {/* Differentials */}
          <div className="space-y-4">
            {DIFFERENTIALS.map((diff) => (
              <div
                key={diff.title}
                className="flex gap-4 p-4 bg-brand-50/60 hover:bg-brand-50 rounded-2xl border border-brand-100/80 transition-colors"
              >
                <div className="w-11 h-11 min-w-11 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-brand-100">
                  {diff.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">
                    {diff.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="font-serif text-2xl font-semibold text-slate-800 mb-8 text-center">
            Trajetória Profissional
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-cream-soft to-white rounded-2xl p-5 border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all"
              >
                <div className="text-xs font-bold text-brand-500 uppercase tracking-wider mb-2">
                  {exp.period}
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1 leading-snug">
                  {exp.role}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed">{exp.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
