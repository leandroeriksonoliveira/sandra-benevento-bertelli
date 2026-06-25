import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  ADDRESS_STREET,
  ADDRESS_NEIGHBORHOOD,
  ADDRESS_CITY,
  ADDRESS_CEP,
  MAPS_URL,
  OFFICE_HOURS,
  CONTENT_DISCLAIMER,
  LINKEDIN_URL,
} from "@/site-config";

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    const text = `Olá, Sandra! Meu nome é ${name}. ${message ? message : "Gostaria de mais informações sobre o atendimento."} Telefone: ${phone}`;
    window.open(
      `https://wa.me/5511991578741?text=${encodeURIComponent(text)}`,
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest text-brand-500 uppercase mb-3">
            Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-[15px] leading-relaxed">
            Dê o primeiro passo em direção ao seu bem-estar. Entre em contato para
            agendar uma consulta ou tirar suas dúvidas.
          </p>
          <div className="w-16 h-1 bg-brand-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-xl text-slate-800 mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-green-50 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 min-w-11 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-green-700 mb-0.5">WhatsApp</div>
                  <div className="font-semibold text-slate-800">{WHATSAPP_DISPLAY}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Clique para conversar</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-start gap-4 p-4 bg-brand-50 rounded-2xl border border-brand-100 hover:border-brand-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 min-w-11 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                  <Mail size={18} className="text-brand-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-brand-600 mb-0.5">E-mail</div>
                  <div className="font-semibold text-slate-800 text-sm">{EMAIL}</div>
                </div>
              </a>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-warm-50 rounded-2xl border border-warm-100 hover:border-warm-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 min-w-11 bg-warm-100 rounded-xl flex items-center justify-center group-hover:bg-warm-200 transition-colors">
                  <MapPin size={18} className="text-warm-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-warm-600 mb-0.5">Endereço</div>
                  <div className="font-semibold text-slate-800 text-sm">
                    {ADDRESS_STREET}
                  </div>
                  <div className="text-xs text-slate-500">
                    {ADDRESS_NEIGHBORHOOD} · {ADDRESS_CITY} · CEP {ADDRESS_CEP}
                  </div>
                  <div className="inline-flex items-center gap-1 mt-1.5 text-xs text-warm-600 font-medium">
                    Ver no mapa <ExternalLink size={10} />
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-lavender-50 rounded-2xl border border-lavender-100">
                <div className="w-11 h-11 min-w-11 bg-lavender-100 rounded-xl flex items-center justify-center">
                  <Clock size={18} className="text-lavender-700" />
                </div>
                <div>
                  <div className="text-xs font-bold text-lavender-600 mb-0.5">
                    Horário
                  </div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    {OFFICE_HOURS}
                  </div>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 min-w-11 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-700">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-700 mb-0.5">LinkedIn</div>
                  <div className="text-sm text-slate-700">Sandra Benevento Bertelli</div>
                </div>
                <ExternalLink size={14} className="ml-auto text-blue-400" />
              </a>

              <a
                href={`tel:${WHATSAPP_DISPLAY.replace(/\D/g, "")}`}
                className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 min-w-11 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <Phone size={18} className="text-slate-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-0.5">Celular</div>
                  <div className="font-semibold text-slate-800">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick contact form */}
          <div>
            <h3 className="font-serif font-semibold text-xl text-slate-800 mb-6">
              Envie uma Mensagem
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center h-72 text-center bg-brand-50 rounded-3xl border border-brand-100 p-8">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-serif font-semibold text-xl text-slate-800 mb-2">
                  Mensagem Enviada!
                </h4>
                <p className="text-slate-500 text-sm">
                  Você foi direcionado para o WhatsApp. Sandra entrará em contato em breve.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setPhone("");
                    setMessage("");
                    setAgreed(false);
                  }}
                  className="mt-6 text-sm text-brand-600 hover:text-brand-700 font-medium underline"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleWhatsApp}
                className="bg-gradient-to-br from-brand-50/80 to-white rounded-3xl border border-brand-100 p-6 space-y-4"
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Seu nome <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como prefere ser chamado(a)?"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    WhatsApp / Telefone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte brevemente o que você procura..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none"
                  />
                </div>

                {/* LGPD consent */}
                <div className="flex items-start gap-3 bg-white/80 rounded-xl p-3 border border-slate-100">
                  <input
                    id="lgpd-consent"
                    type="checkbox"
                    required
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 w-4 h-4 accent-brand-500 cursor-pointer"
                  />
                  <label htmlFor="lgpd-consent" className="text-xs text-slate-500 cursor-pointer leading-relaxed">
                    Li e concordo com a{" "}
                    <a
                      href="/politica-de-privacidade"
                      className="text-brand-600 hover:underline font-medium"
                    >
                      Política de Privacidade
                    </a>
                    . Consinto com o uso dos meus dados pessoais para contato, conforme a LGPD (Lei
                    13.709/2018).
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!agreed || !name.trim()}
                  className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar pelo WhatsApp
                </button>
              </form>
            )}

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="font-semibold text-slate-600">Aviso importante:</span>{" "}
                {CONTENT_DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
