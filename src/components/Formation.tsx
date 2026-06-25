import { EDUCATION, PSYCHOLOGIST_NAME, CRP } from "@/site-config";

export default function Formation() {
  return (
    <section id="formacao" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Formação
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Trajetória Acadêmica
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            Uma trajetória de aprendizado contínuo, que une excelência acadêmica em
            instituições de referência nacional e internacional com a prática clínica
            aprofundada.
          </p>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full mt-4" />
        </div>

        {/* Two-column grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 bg-gradient-to-br from-brand-50/80 to-white rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 min-w-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-brand-100 group-hover:bg-brand-50 transition-colors">
                {edu.icon}
              </div>
              <div>
                <div className="text-xs font-bold text-brand-500 mb-1">{edu.year}</div>
                <h3 className="font-semibold text-slate-800 text-sm leading-snug mb-0.5">
                  {edu.degree}
                </h3>
                <p className="text-slate-500 text-xs">{edu.institution}</p>
                {"focus" in edu && (
                  <p className="text-slate-400 text-xs mt-1 italic">
                    {edu.focus as string}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Professional identity badge */}
        <div className="mt-12 bg-gradient-to-r from-brand-600 to-brand-700 rounded-3xl p-8 text-white text-center">
          <p className="text-sm font-medium text-brand-200 mb-2">
            Registro Profissional
          </p>
          <p className="font-serif text-2xl font-bold mb-1">{PSYCHOLOGIST_NAME}</p>
          <p className="text-brand-100 font-medium">Psicóloga · {CRP}</p>
          <div className="mt-4 text-xs text-brand-200 max-w-lg mx-auto leading-relaxed">
            Publicidade em conformidade com o Código de Ética e Normas para o
            Exercício Profissional da Psicologia (CEPP/CFP) e Resolução CFP Nº 9/2024.
          </div>
        </div>
      </div>
    </section>
  );
}
