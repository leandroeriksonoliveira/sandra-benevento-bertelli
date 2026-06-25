/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DO SITE — Sandra Benevento Bertelli
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── Contato ───────────────────────────────────────────────────────────────

export const WHATSAPP_PHONE = "5511991578741";

export const WHATSAPP_DISPLAY = "(11) 99157-8741";

export const PHONE_DISPLAY = "(11) 99157-8741";

export const EMAIL = "sandra@sandrarbeneventto.com.br";

export const WHATSAPP_MESSAGE =
  "Olá, Dra. Sandra. Estou entrando em contato pelo site e gostaria de mais informações sobre atendimento.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const LINKEDIN_URL =
  "https://br.linkedin.com/in/sandra-benevento-bertelli-58446329";

export const PRIVACY_EMAIL = EMAIL;

export const VELTRO_DIGITAL_NAME = "Veltro Digital";
export const VELTRO_DIGITAL_URL = "https://www.veltrodigital.com.br";

// ─── Consultório e profissional ─────────────────────────────────────────────

export const CLINIC_NAME = "Sandra Benevento Bertelli — Psicologia";
export const DOCTOR_NAME = "Dra. Sandra Benevento Bertelli";
export const DOCTOR_NAME_FULL = "Sandra Benevento Bertelli";
export const DOCTOR_TITLE = "Psicóloga / Consultora";
/** Formato CFP: Psicólogo(a), Nome, CRP-XX/XXXXX */
export const CRP = "CRP-06/15604-6";
export const PROFESSIONAL_IDENTIFICATION = `Psicóloga, ${DOCTOR_NAME_FULL}, ${CRP}`;
export const DOCTOR_TAGLINE =
  "Psicoterapia · Orientação Vocacional · Musicoterapia · Psicologia Organizacional";
export const CITY = "São Caetano do Sul";
export const NEIGHBORHOOD = "Barcelona";
export const STATE = "SP";

export const UNIVERSITY =
  "Doutora em Psicologia Escolar e do Desenvolvimento Humano pelo IPUSP/USP";

/** Formações complementares — não confundir com especialidades reconhecidas pelo CFP */
export const FORMATIONS = [
  "Psicologia Escolar e do Desenvolvimento Humano (Doutorado — IPUSP)",
  "Psicologia da Saúde (Mestrado — IMES)",
  "Musicoterapia (Pós-graduação — FMU)",
  "Avaliação de Personalidade — Rorschach (Sociedade Rorschach de SP)",
  "Administração em RH (FGV)",
] as const;

export const ADDRESS_STREET = "Rua Votorantim, 301";
export const ADDRESS_NEIGHBORHOOD = "Barcelona";
export const ADDRESS_CITY = `${CITY} — ${STATE}`;
export const ADDRESS_CEP = "09550-300";
export const ADDRESS_FULL = `${ADDRESS_STREET}, ${ADDRESS_NEIGHBORHOOD}, ${ADDRESS_CITY}, CEP ${ADDRESS_CEP}`;
export const ADDRESS_NOTE = "Atendimento com hora marcada · Presencial e online";
export const OFFICE_HOURS =
  "Segunda a sexta, em horário comercial (mediante agendamento prévio)";

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Votorantim+301+Barcelona+São+Caetano+do+Sul+SP";

export const BIO_PARAGRAPHS = [
  `${PROFESSIONAL_IDENTIFICATION} é psicóloga, musicoterapeuta, professora e autora. Doutora em Psicologia Escolar e do Desenvolvimento Humano pelo IPUSP (2007), com pós-doutorado em Psicologia pela USP (2022–2024). Mestre em Psicologia da Saúde pelo Instituto Metodista de Ensino Superior (1987), pós-graduada em Musicoterapia pela FMU e graduada em Psicologia pela Universidade de Santo Amaro (1979).`,
  "Com mais de 40 anos de experiência, atua em psicoterapia de linha analítica, orientação vocacional e profissional, musicoterapia, psicologia organizacional e avaliação de personalidade. É autora do Jogo das Profissões e de obras como Universitários em Pontes, O Idoso não quer Pijama e Gestão de Pessoas em Administração Hospitalar.",
  "Atualmente é Head de Psicologia na Gubi Educação, docente e consultora em saúde mental e comportamento organizacional. Sua abordagem integra ciência, experiência clínica e compromisso com o desenvolvimento humano em todas as fases da vida.",
] as const;

export const PROFESSIONAL_EXPERIENCE = [
  {
    area: "Psicoterapia Clínica",
    focus: "Crianças, adolescentes, adultos, casais e famílias",
    period: "Mais de 40 anos de prática",
  },
  {
    area: "Orientação Vocacional e Profissional",
    focus: "Escolas, universidades e consultório",
    period: "Autora do Jogo das Profissões",
  },
  {
    area: "Psicologia Organizacional",
    focus: "Empresas, treinamentos e avaliação de potencial",
    period: "Há mais de 25 anos",
  },
  {
    area: "Docência e Pesquisa",
    focus: "USP, UNISA, USCS, UNIFESP",
    period: "Professora e orientadora de pós-graduação",
  },
] as const;

export const SERVICE_AREAS = [
  {
    title: "Crianças",
    items: ["Psicodiagnóstico", "Psicoterapia de linha analítica", "Musicoterapia"],
  },
  {
    title: "Adolescentes",
    items: [
      "Psicoterapia breve de linha analítica",
      "Orientação vocacional e profissional",
    ],
  },
  {
    title: "Adultos",
    items: [
      "Psicoterapia",
      "Reorientação de carreira",
      "Psicoterapia de casal",
      "Psicoterapia familiar",
    ],
  },
  {
    title: "Empresas",
    items: [
      "Treinamento e desenvolvimento",
      "Saúde e estresse do trabalhador",
      "Comunicação e liderança",
      "Avaliação de potencial",
    ],
  },
  {
    title: "Universidades",
    items: [
      "Programas de prevenção à evasão universitária",
      "Aconselhamento psicológico",
    ],
  },
  {
    title: "Escolas do Ensino Médio",
    items: [
      "Gincana com o Jogo das Profissões",
      "Orientação vocacional e profissional",
      "Palestras para pais e familiares",
    ],
  },
  {
    title: "Terceira Idade",
    items: [
      "Musicoterapia e biodança",
      "Projeto Vivendo a Cultura",
      "Palestras e workshops de atualização",
    ],
  },
] as const;

export const PUBLICATIONS = [
  {
    title: "Avaliação Psicológica na Área da Personalidade",
    outlet: "Freitas Bastos Editora",
    year: "2025",
    url: "https://www.storytel.com/br/books/avaliação-psicológica-na-área-da-personalidade-testes-gráficos-projetivos-testes-projetivos-e-testes-projetivos-mais-elaborados-11430396",
  },
  {
    title: "Universitários em Pontes — A problemática da evasão universitária",
    outlet: "Pearson Editora",
    year: "Publicação acadêmica",
    url: LINKEDIN_URL,
  },
  {
    title: "Jogo das Profissões — Manual",
    outlet: "Pearson Editora",
    year: "Ferramenta de orientação vocacional",
    url: "https://www.livrariadopsicologo.com.br/produto/jogo-das-profissoes--manual,ber076.html",
  },
  {
    title: "O Idoso não quer Pijama",
    outlet: "Qualitymark Editora",
    year: "Maturidade ativa e envelhecimento",
    url: LINKEDIN_URL,
  },
  {
    title: "Gestão de Pessoas em Administração Hospitalar",
    outlet: "Qualitymark Editora",
    year: "2004",
    url: LINKEDIN_URL,
  },
] as const;

export const DIFFERENTIALS = [
  {
    title: "Trajetória consolidada",
    desc: "Mais de 40 anos de atuação em psicologia clínica, organizacional e educacional.",
  },
  {
    title: "Formação de excelência",
    desc: "Doutorado e pós-doutorado pela USP, com publicações e pesquisa acadêmica.",
  },
  {
    title: "Autora e criadora",
    desc: "Criadora do Jogo das Profissões e de obras referência em orientação vocacional.",
  },
  {
    title: "Atendimento integral",
    desc: "Da infância à terceira idade, do consultório às organizações — cuidado em todas as fases.",
  },
] as const;

export const CONTENT_DISCLAIMER =
  "Os textos deste site têm caráter exclusivamente informativo e educativo. Não substituem consulta, avaliação ou atendimento psicológico individualizado. Cada pessoa é única — entre em contato para agendar uma avaliação com a psicóloga.";

export const ONLINE_THERAPY_NOTICE =
  "O atendimento online (telepsicologia) segue as diretrizes da Resolução CFP nº 09/2024 sobre o uso de Tecnologias Digitais da Informação e da Comunicação (TDICs) na psicologia, com plataforma segura e sigilo profissional.";

export const LEGAL_FOOTER_NOTICE = `Publicidade profissional em conformidade com o Código de Ética Profissional do Psicólogo (CEPP). ${PROFESSIONAL_IDENTIFICATION}.`;

export const SCHEDULE_EVALUATION_TITLE = "Entre em contato";

export const SCHEDULE_EVALUATION_TEXT = `Agende uma conversa com ${PROFESSIONAL_IDENTIFICATION} pelo WhatsApp ou e-mail. A profissional irá compreender sua necessidade e indicar o melhor caminho de atendimento.`;

export const QUOTE =
  "O verdadeiro Desenvolvimento Humano está em viver de forma intensa cada etapa de nossa vida, buscando analisar plenamente.";

export const PRIVACY_POLICY_PATH = "/privacidade";

// ─── SEO ────────────────────────────────────────────────────────────────────

export const SITE_TITLE = `${PROFESSIONAL_IDENTIFICATION} · ${CITY}`;

export const SITE_DESCRIPTION = `${DOCTOR_TAGLINE}. Atendimento psicológico com ${PROFESSIONAL_IDENTIFICATION} em ${CITY} — presencial e online.`;

export const OG_DESCRIPTION = `Atendimento psicológico com ${PROFESSIONAL_IDENTIFICATION}. Psicoterapia, orientação vocacional e consultoria em ${CITY}.`;

export const STAT_YEARS = "40+";
export const STAT_PUBLICATIONS = "5+";
export const STAT_AREAS = "7";
