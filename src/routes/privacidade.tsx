import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoSandra from "@/assets/logo-sandra.png";
import { SiteFooter } from "@/components/SiteFooter";
import {
  CLINIC_NAME,
  CONTENT_DISCLAIMER,
  DOCTOR_NAME_FULL,
  EMAIL,
  ONLINE_THERAPY_NOTICE,
  PRIVACY_EMAIL,
  PROFESSIONAL_IDENTIFICATION,
  SITE_TITLE,
  WHATSAPP_DISPLAY,
} from "@/site-config";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: `Política de Privacidade | ${SITE_TITLE}` },
      {
        name: "description",
        content:
          "Política de Privacidade e tratamento de dados pessoais conforme a LGPD (Lei 13.709/2018).",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[color:var(--color-cream)] font-sans text-[color:var(--color-ink)] antialiased">
      <header className="border-b border-[color:var(--color-ink)]/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <Link to="/" className="inline-flex items-center">
            <img
              src={logoSandra}
              alt={`Logo ${CLINIC_NAME}`}
              width={200}
              height={80}
              className="h-9 w-auto object-contain sm:h-10"
            />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-lime)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
        <h1 className="text-3xl font-extrabold tracking-tight text-[color:var(--color-ink)] sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-2 text-sm text-[color:var(--color-ink-soft)]/70">
          Última atualização: junho de 2026 · Lei nº 13.709/2018 (LGPD)
        </p>

        <div className="prose prose-neutral mt-8 max-w-none space-y-8 text-base leading-relaxed text-[color:var(--color-ink-soft)]/90">
          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">1. Controladora dos dados</h2>
            <p className="mt-3">
              A controladora dos dados pessoais tratados neste site é{" "}
              <strong>{PROFESSIONAL_IDENTIFICATION}</strong>, responsável pelo consultório{" "}
              <strong>{CLINIC_NAME}</strong>.
            </p>
            <p className="mt-3">
              Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato pelo
              e-mail{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold text-[color:var(--color-lime)]">
                {PRIVACY_EMAIL}
              </a>{" "}
              ou pelo WhatsApp {WHATSAPP_DISPLAY}.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">2. Dados coletados</h2>
            <p className="mt-3">Podemos tratar os seguintes dados, conforme sua interação com o site:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Nome, e-mail e telefone — quando você entra em contato pelo WhatsApp ou e-mail</li>
              <li>Dados de navegação — cookies essenciais e, se aceitos, cookies de análise</li>
              <li>Preferências de consentimento — registro da sua escolha sobre cookies</li>
            </ul>
            <p className="mt-3">
              Este site <strong>não</strong> coleta dados de saúde por formulários online. Informações
              clínicas são tratadas exclusivamente no contexto do atendimento psicológico presencial ou
              por telepsicologia, com sigilo profissional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">3. Finalidade do tratamento</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Responder solicitações de contato e agendamento</li>
              <li>Prestar informações sobre os serviços oferecidos</li>
              <li>Cumprir obrigações legais e regulatórias do exercício profissional</li>
              <li>Garantir a segurança e o funcionamento do site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">4. Base legal (LGPD)</h2>
            <p className="mt-3">
              O tratamento de dados pessoais baseia-se no consentimento (Art. 7º, I), na execução de
              contrato ou procedimentos preliminares (Art. 7º, V) e no legítimo interesse para
              comunicação profissional (Art. 7º, IX), conforme aplicável.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">5. Compartilhamento</h2>
            <p className="mt-3">
              Seus dados não são vendidos nem compartilhados com terceiros para fins comerciais. Podem
              ser compartilhados apenas quando necessário para cumprimento de obrigação legal ou ordem
              judicial, ou com prestadores de serviço essenciais (hospedagem do site), sob contrato de
              confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">6. Seus direitos</h2>
            <p className="mt-3">Você pode solicitar, a qualquer momento:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Confirmação da existência de tratamento e acesso aos dados</li>
              <li>Correção de dados incompletos ou desatualizados</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários</li>
              <li>Revogação do consentimento</li>
              <li>Informação sobre compartilhamento com terceiros</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">7. Cookies</h2>
            <p className="mt-3">
              Utilizamos cookies essenciais para o funcionamento do site. Cookies não essenciais só são
              ativados com seu consentimento explícito, por meio do banner exibido na primeira visita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">8. Sigilo profissional</h2>
            <p className="mt-3">
              {DOCTOR_NAME_FULL}, na qualidade de psicóloga registrada no CRP, observa o sigilo
              profissional previsto no Código de Ética Profissional do Psicólogo (CEPP), independentemente
              do meio de atendimento.
            </p>
            <p className="mt-3">{ONLINE_THERAPY_NOTICE}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[color:var(--color-ink)]">9. Segurança</h2>
            <p className="mt-3">
              Este site utiliza conexão HTTPS (certificado SSL) para proteger a transmissão de dados.
              Adotamos medidas técnicas e organizacionais adequadas à natureza dos dados tratados.
            </p>
          </section>

          <section className="rounded-xl border border-[color:var(--color-lime)]/30 bg-[color:var(--color-lime)]/10 px-5 py-4">
            <p className="text-sm font-medium text-[color:var(--color-ink)]">{CONTENT_DISCLAIMER}</p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
