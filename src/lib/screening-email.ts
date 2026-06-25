import { z } from "zod";
import {
  getOverallRecommendation,
  getSeverityLabel,
  getSubscaleLabel,
  getSubscaleSeverity,
  type DassSubscale,
} from "@/data/dass-21";
import { CLINIC_NAME, DOCTOR_NAME_FULL } from "@/site-config";

export const screeningSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo"),
  email: z.string().trim().email("Informe um e-mail válido"),
  phone: z.string().trim().min(10, "Informe telefone com DDD"),
  scores: z.object({
    depressao: z.number(),
    ansiedade: z.number(),
    estresse: z.number(),
  }),
});

export type ScreeningSubmission = z.infer<typeof screeningSubmissionSchema>;

const SUBSCALES: DassSubscale[] = ["depressao", "ansiedade", "estresse"];

function formatScoreRows(scores: ScreeningSubmission["scores"]) {
  return SUBSCALES.map((subscale) => {
    const score = scores[subscale];
    const severity = getSeverityLabel(getSubscaleSeverity(subscale, score));
    return `<tr>
      <td style="padding:8px 12px;border-bottom:1px solid #f0d4d4;">${getSubscaleLabel(subscale)}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #f0d4d4;font-weight:bold;">${score}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #f0d4d4;">${severity}</td>
    </tr>`;
  }).join("");
}

function buildEmailHtml(submission: ScreeningSubmission, forClinic: boolean) {
  const recommendation = getOverallRecommendation(submission.scores);
  const title = forClinic
    ? `Nova triagem DASS-21 — ${submission.name}`
    : `Seu resultado — Triagem DASS-21 | ${CLINIC_NAME}`;

  const intro = forClinic
    ? `<p style="margin:0 0 16px;">Um paciente concluiu a triagem DASS-21 no site.</p>
       <p style="margin:0 0 16px;"><strong>Nome:</strong> ${submission.name}<br/>
       <strong>E-mail:</strong> ${submission.email}<br/>
       <strong>Telefone:</strong> ${submission.phone}</p>`
    : `<p style="margin:0 0 16px;">Olá, <strong>${submission.name}</strong>.</p>
       <p style="margin:0 0 16px;">Segue o resumo da sua triagem DASS-21 realizada no site da ${DOCTOR_NAME_FULL}. Este resultado é informativo e não substitui avaliação clínica.</p>`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<body style="font-family:Arial,sans-serif;color:#4a4a4a;background:#fdf8f8;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;padding:24px;border:1px solid #f0d4d4;">
    <h1 style="margin:0 0 8px;font-size:20px;color:#4a4a4a;">${title}</h1>
    ${intro}
    <table style="width:100%;border-collapse:collapse;margin:16px 0;">
      <thead>
        <tr style="background:#fdf8f8;">
          <th style="padding:8px 12px;text-align:left;">Área</th>
          <th style="padding:8px 12px;text-align:left;">Pontuação</th>
          <th style="padding:8px 12px;text-align:left;">Nível</th>
        </tr>
      </thead>
      <tbody>${formatScoreRows(submission.scores)}</tbody>
    </table>
    <p style="margin:16px 0;padding:12px;background:#fdf8f8;border-radius:8px;line-height:1.5;">${recommendation}</p>
    <p style="margin:0;font-size:13px;color:#6b6b6b;">Em crise: CVV 188 (24h). ${CLINIC_NAME}.</p>
  </div>
</body>
</html>`;
}

async function sendResendEmail(payload: {
  apiKey: string;
  from: string;
  to: string[];
  subject: string;
  html: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${payload.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: payload.from,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Falha ao enviar e-mail");
  }

  return response.json();
}

export async function sendScreeningEmails(submission: ScreeningSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const clinicEmail = process.env.CLINIC_EMAIL;

  if (!apiKey || !from) {
    return {
      configured: false,
      patientEmailSent: false,
      clinicEmailSent: false,
      message: "Serviço de e-mail não configurado no servidor.",
    };
  }

  let patientEmailSent = false;
  let clinicEmailSent = false;

  await sendResendEmail({
    apiKey,
    from,
    to: [submission.email],
    subject: `Seu resultado — Triagem DASS-21 | ${CLINIC_NAME}`,
    html: buildEmailHtml(submission, false),
  });
  patientEmailSent = true;

  if (clinicEmail) {
    await sendResendEmail({
      apiKey,
      from,
      to: [clinicEmail],
      subject: `Nova triagem DASS-21 — ${submission.name}`,
      html: buildEmailHtml(submission, true),
    });
    clinicEmailSent = true;
  }

  return {
    configured: true,
    patientEmailSent,
    clinicEmailSent,
    message: patientEmailSent
      ? "Resultado enviado para o seu e-mail."
      : "Não foi possível enviar o e-mail.",
  };
}
