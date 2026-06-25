import {
  PSYCHOLOGIST_NAME,
  CRP,
  EMAIL,
  WHATSAPP_DISPLAY,
  ADDRESS_FULL,
} from "@/site-config";

export default function PrivacyPolicy() {
  const year = new Date().getFullYear();

  return (
    <main className="pt-24 pb-16 min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12">
          <div className="mb-8">
            <span className="text-xs font-bold tracking-widest text-brand-500 uppercase">
              Legal
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-800 mt-2 mb-2">
              Política de Privacidade
            </h1>
            <p className="text-slate-500 text-sm">
              Última atualização: {year} · Conforme LGPD — Lei 13.709/2018
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-[15px] leading-relaxed space-y-6">
            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                1. Responsável pelo Tratamento
              </h2>
              <p className="text-slate-600">
                <strong>{PSYCHOLOGIST_NAME}</strong> — Psicóloga ({CRP}), responsável
                pelo tratamento dos dados pessoais coletados neste site.
              </p>
              <address className="not-italic text-slate-500 text-sm mt-2">
                {ADDRESS_FULL}
                <br />
                Tel: {WHATSAPP_DISPLAY}
                <br />
                E-mail:{" "}
                <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                  {EMAIL}
                </a>
              </address>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                2. Dados Coletados
              </h2>
              <p className="text-slate-600">
                Este site pode coletar os seguintes dados pessoais, exclusivamente
                fornecidos de forma voluntária pelo usuário:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
                <li>Nome completo</li>
                <li>Telefone / WhatsApp</li>
                <li>Endereço de e-mail</li>
                <li>Mensagem de contato</li>
              </ul>
              <p className="text-slate-500 text-sm mt-2">
                <strong>Dados sensíveis:</strong> Este site não solicita nem armazena dados
                de saúde, prontuários ou quaisquer informações clínicas. A comunicação inicial
                é realizada apenas para fins de agendamento.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                3. Finalidade e Base Legal
              </h2>
              <p className="text-slate-600">
                Os dados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
                <li>Responder a solicitações de contato e agendamento;</li>
                <li>Comunicação via WhatsApp ou e-mail, a pedido do usuário;</li>
                <li>Cumprimento de obrigações legais.</li>
              </ul>
              <p className="text-slate-600 mt-2">
                Base legal: consentimento do titular (art. 7º, I da LGPD) e legítimo
                interesse (art. 7º, IX da LGPD) para atendimento de contato pré-contratual.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                4. Compartilhamento de Dados
              </h2>
              <p className="text-slate-600">
                Os dados <strong>não são vendidos, cedidos ou compartilhados</strong> com
                terceiros, exceto quando exigido por lei ou autoridade competente. O uso do
                WhatsApp como canal de comunicação está sujeito à política de privacidade do
                Meta (WhatsApp Business).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                5. Cookies
              </h2>
              <p className="text-slate-600">
                Este site utiliza apenas cookies essenciais para o funcionamento técnico da
                página (preferências de consentimento). Não utilizamos cookies de rastreamento
                ou publicidade de terceiros sem consentimento prévio do usuário.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                6. Sigilo Profissional
              </h2>
              <p className="text-slate-600">
                O exercício da psicologia é regido pelo Código de Ética Profissional do
                Psicólogo (CFP). Todas as informações compartilhadas no contexto de
                atendimento psicológico são protegidas pelo sigilo profissional, conforme o
                art. 9º do Código de Ética do CFP. Este site não coleta nem armazena dados
                clínicos.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                7. Direitos do Titular
              </h2>
              <p className="text-slate-600">Você tem direito a:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
                <li>Confirmar a existência do tratamento e acessar seus dados;</li>
                <li>Solicitar correção de dados incompletos ou incorretos;</li>
                <li>Solicitar a exclusão dos seus dados;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Obter informações sobre compartilhamento de dados.</li>
              </ul>
              <p className="text-slate-600 mt-2">
                Para exercer seus direitos, entre em contato pelo e-mail{" "}
                <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                  {EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                8. Segurança
              </h2>
              <p className="text-slate-600">
                Este site utiliza HTTPS (protocolo seguro) para proteger a transmissão de
                dados. Adotamos medidas técnicas e organizacionais para proteger as
                informações contra acesso não autorizado.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-slate-800 mb-3">
                9. Contato e DPO
              </h2>
              <p className="text-slate-600">
                Para dúvidas, solicitações ou reclamações sobre o tratamento de dados:
              </p>
              <address className="not-italic text-slate-500 text-sm mt-2">
                {PSYCHOLOGIST_NAME} · {CRP}
                <br />
                E-mail:{" "}
                <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:underline">
                  {EMAIL}
                </a>
                <br />
                Tel: {WHATSAPP_DISPLAY}
              </address>
              <p className="text-slate-500 text-sm mt-2">
                Você também pode contatar a Autoridade Nacional de Proteção de Dados
                (ANPD) em{" "}
                <a
                  href="https://www.gov.br/anpd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  www.gov.br/anpd
                </a>
                .
              </p>
            </section>

            <div className="mt-8 p-4 bg-brand-50 rounded-xl border border-brand-100 text-xs text-slate-500 leading-relaxed">
              Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD —
              Lei 13.709/2018) e com o Código de Ética Profissional do Psicólogo (CFP/CEPP).
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
