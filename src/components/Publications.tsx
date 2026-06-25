import { ExternalLink } from "lucide-react";
import { PUBLICATIONS } from "@/site-config";

const TYPE_COLORS: Record<string, string> = {
  Livro: "bg-brand-100 text-brand-700",
  Instrumento: "bg-lavender-100 text-lavender-700",
  "E-book": "bg-warm-100 text-warm-700",
};

export default function Publications() {
  return (
    <section
      id="publicacoes"
      className="py-24 bg-gradient-to-b from-cream-soft to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Obras
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Publicações
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            Autora de livros, instrumentos e e-books que se tornaram referência na
            psicologia brasileira — cobrindo orientação vocacional, avaliação de
            personalidade, saúde do idoso e gestão hospitalar.
          </p>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-slate-100 hover:border-brand-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
            >
              {/* Color bar */}
              <div
                className={`h-1.5 ${
                  i % 3 === 0
                    ? "bg-gradient-to-r from-brand-400 to-brand-300"
                    : i % 3 === 1
                    ? "bg-gradient-to-r from-lavender-400 to-lavender-300"
                    : "bg-gradient-to-r from-warm-400 to-warm-300"
                }`}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Type badge + Year */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      TYPE_COLORS[pub.type] ?? "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {pub.type}
                  </span>
                  <span className="text-xs text-slate-400">{pub.year}</span>
                </div>

                {/* Book icon */}
                <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                  📖
                </div>

                {/* Title and subtitle */}
                <h3 className="font-serif font-semibold text-slate-800 text-base leading-snug mb-2">
                  {pub.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">
                  {pub.subtitle}
                </p>

                <div className="mt-auto">
                  <p className="text-xs text-slate-400 font-medium">{pub.publisher}</p>

                  {"url" in pub && pub.url && (
                    <a
                      href={pub.url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      Ver publicação
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
