/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  CONFIGURAÇÃO DO SITE — Sandra Benevento Bertelli
 *  Psicóloga / Consultora · CRP 06/15604-6
 * ═══════════════════════════════════════════════════════════════════════════
 */

// ─── Identificação Profissional (obrigatório CFP/CEPP) ─────────────────────

export const PSYCHOLOGIST_NAME = "Sandra Benevento Bertelli";
export const PSYCHOLOGIST_TITLE = "Psicóloga / Consultora";
export const CRP_REGIONAL = "06";
export const CRP_NUMBER = "15604-6";
export const CRP = `CRP ${CRP_REGIONAL}/${CRP_NUMBER}`;
export const PROFESSIONAL_IDENTITY = `${PSYCHOLOGIST_NAME} — Psicóloga — ${CRP}`;

// ─── Contato ───────────────────────────────────────────────────────────────

export const WHATSAPP_PHONE = "5511991578741";
export const WHATSAPP_DISPLAY = "(11) 99157-8741";
export const EMAIL = "sandra@sandrarbeneventto.com.br";

export const WHATSAPP_MESSAGE =
  "Olá, Sandra. Estou entrando em contato pelo site e gostaria de mais informações sobre o atendimento.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const LINKEDIN_URL =
  "https://br.linkedin.com/in/sandra-benevento-bertelli-58446329";

// ─── Endereço ──────────────────────────────────────────────────────────────

export const ADDRESS_STREET = "Rua Votorantim, 301";
export const ADDRESS_NEIGHBORHOOD = "Barcelona";
export const ADDRESS_CITY = "São Caetano do Sul — SP";
export const ADDRESS_CEP = "09550-300";
export const ADDRESS_FULL = `${ADDRESS_STREET} — ${ADDRESS_NEIGHBORHOOD} — ${ADDRESS_CITY} · CEP ${ADDRESS_CEP}`;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Votorantim+301+Barcelona+São+Caetano+do+Sul+SP";

// ─── Bio ───────────────────────────────────────────────────────────────────

export const TAGLINE =
  "O verdadeiro Desenvolvimento Humano está em viver de forma intensa cada etapa de nossa vida, buscando analisar plenamente";

export const BIO_PARAGRAPHS = [
  `Sandra Benevento Bertelli (${CRP}) é psicóloga, consultora e musicoterapeuta com mais de 45 anos de atuação na área da saúde mental, educação e desenvolvimento humano. Sua trajetória alia rigor acadêmico e profunda sensibilidade humana no cuidado de crianças, adolescentes, adultos e idosos.`,
  "Doutora em Psicologia Escolar e do Desenvolvimento Humano pelo Instituto de Psicologia da USP (IPUSP), com pós-doutorado na mesma instituição, é também Mestre em Psicologia da Saúde pelo Instituto Metodista, especialista em Rorschach pela Sociedade Rorschach de São Paulo e pós-graduada em Musicoterapia pela FMU.",
  "É autora de publicações de referência na área, incluindo o Jogo das Profissões (Pearson), Universitários em Pontes e O Idoso não quer Pijama. Atuou como professora e orientadora de pós-graduação na UNISA, USCS e UNIFESP. Fundadora da HARMONIA DA MENTE — Especializada em Saúde Mental e Comportamento Organizacional.",
] as const;

// ─── Formação Acadêmica ─────────────────────────────────────────────────────

export const EDUCATION = [
  {
    degree: "Pós-Doutorado em Psicologia",
    institution: "USP — Universidade de São Paulo",
    year: "2022 — 2024",
    icon: "🎓",
  },
  {
    degree: "Doutorado em Psicologia Escolar e do Desenvolvimento Humano",
    institution: "IPUSP — Instituto de Psicologia da USP",
    year: "2002 — 2007",
    icon: "🎓",
  },
  {
    degree: "Mestre em Psicologia da Saúde",
    institution: "Instituto Metodista de Ensino Superior",
    year: "1982 — 1987",
    focus: "Avaliação de Personalidade pelo Rorschach em gestantes",
    icon: "📜",
  },
  {
    degree: "Pós-Graduação em Musicoterapia",
    institution: "FMU — Centro Universitário das Faculdades Metropolitanas Unidas",
    year: "2007 — 2008",
    icon: "🎵",
  },
  {
    degree: "Graduação em Psicologia",
    institution: "UNISA — Universidade de Santo Amaro",
    year: "1975 — 1980",
    icon: "📚",
  },
  {
    degree: "Especialista em Rorschach",
    institution: "Sociedade Rorschach de São Paulo",
    year: "Desde 1981",
    icon: "🔬",
  },
  {
    degree: "Administração em RH",
    institution: "FGVPEC",
    year: "2001",
    icon: "🏢",
  },
  {
    degree: "Instrutora — Skillful Means Management Training",
    institution: "Skillful Means Center · Berkeley, CA, EUA",
    year: "2005",
    icon: "🌐",
  },
] as const;

// ─── Especialidades / Áreas de Atuação ────────────────────────────────────

export const SPECIALTIES = [
  {
    id: "criancas",
    title: "Crianças",
    icon: "🧸",
    color: "warm",
    items: [
      "Psicodiagnóstico",
      "Psicoterapia de linha analítica",
      "Musicoterapia",
    ],
    description:
      "Acolhimento terapêutico para crianças, com abordagem analítica e recursos lúdicos, incluindo a musicoterapia como ferramenta de expressão e desenvolvimento.",
  },
  {
    id: "adolescentes",
    title: "Adolescentes",
    icon: "🌱",
    color: "brand",
    items: [
      "Psicoterapia Breve de linha analítica",
      "Orientação Vocacional e Profissional",
    ],
    description:
      "Suporte psicoterapêutico e orientação vocacional para adolescentes em fase de construção de identidade e escolha profissional.",
  },
  {
    id: "adultos",
    title: "Adultos",
    icon: "🧠",
    color: "lavender",
    items: [
      "Psicoterapia",
      "Reorientação de Carreira — Coach",
      "Psicoterapia de Casal",
      "Psicoterapia Familiar",
    ],
    description:
      "Atendimento psicoterapêutico individual, de casal e familiar, além de reorientação de carreira para adultos em diferentes momentos da vida.",
  },
  {
    id: "empresas",
    title: "Empresas",
    icon: "🏢",
    color: "warm",
    items: [
      "Treinamento e Desenvolvimento",
      "Saúde e Stress do Trabalhador",
      "Desenvolvimento de Equipes e Liderança",
      "Avaliação de Potencial",
    ],
    description:
      "Consultoria organizacional com foco em saúde mental no trabalho, desenvolvimento de lideranças, equipes de alta performance e avaliação de potencial.",
  },
  {
    id: "idosos",
    title: "3ª Idade",
    icon: "🌻",
    color: "brand",
    items: [
      "Musicoterapia",
      "Biodança",
      "Atividades culturais e de atualização",
      "Workshops de vivências",
    ],
    description:
      "Programas especializados para promover envelhecimento ativo, bem-estar emocional e qualidade de vida na terceira idade.",
  },
  {
    id: "universidades",
    title: "Educação",
    icon: "🎓",
    color: "lavender",
    items: [
      "Prevenção e Aconselhamento Psicológico",
      "Combate à Evasão Universitária",
      "Orientação Vocacional em Escolas",
      "Palestras e Workshops",
    ],
    description:
      "Programas institucionais para universidades e escolas, com foco em orientação profissional, prevenção e acolhimento psicológico estudantil.",
  },
] as const;

// ─── Experiência Profissional ───────────────────────────────────────────────

export const EXPERIENCE = [
  {
    role: "Fundadora e Responsável Técnica",
    org: "HARMONIA DA MENTE — Saúde Mental e Comportamento Organizacional",
    period: "2020 — Presente",
  },
  {
    role: "Head de Psicologia",
    org: "Gubi Educação",
    period: "2021 — Presente",
  },
  {
    role: "Psicóloga",
    org: "FAUSCS — Fundação da Universidade Municipal de São Caetano do Sul",
    period: "2022 — Presente",
  },
  {
    role: "Professora Doutora",
    org: "USCS — Universidade Municipal de São Caetano do Sul",
    period: "2020 — 2022",
  },
  {
    role: "Orientadora de Pós-Graduação em Gestão Pública",
    org: "UNIFESP — Universidade Federal de São Paulo",
    period: "2019",
  },
  {
    role: "Professora Titular de Psicologia e Medicina",
    org: "UNISA — Universidade de Santo Amaro",
    period: "2002 — 2015 (13 anos)",
  },
] as const;

// ─── Publicações ───────────────────────────────────────────────────────────

export const PUBLICATIONS = [
  {
    title: "Avaliação Psicológica na Área da Personalidade",
    subtitle: "Testes Gráficos-Projetivos, Projetivos e Projetivos Elaborados",
    publisher: "Freitas Bastos",
    year: "2025",
    type: "Livro",
    url: "https://www.storytel.com/br/books/avalia%C3%A7%C3%A3o-psicol%C3%B3gica-na-%C3%A1rea-da-personalidade-testes-gr%C3%A1ficos-projetivos-testes-projetivos-e-testes-projetivos-mais-elaborados-11430396",
  },
  {
    title: "Jogo das Profissões — Manual",
    subtitle: "Ferramenta lúdica para Orientação Vocacional e Profissional",
    publisher: "Pearson / Casa do Psicólogo",
    year: "Publicado",
    type: "Instrumento",
    url: "https://www.livrariadopsicologo.com.br/produto/jogo-das-profissoes--manual,ber076.html",
  },
  {
    title: "Universitários em Pontes",
    subtitle: "A problemática da evasão no Ensino Superior",
    publisher: "Pearson",
    year: "Publicado",
    type: "Livro",
  },
  {
    title: "O Idoso não quer Pijama",
    subtitle: "Maturidade ativa — envelhecimento com qualidade de vida",
    publisher: "Qualitymark",
    year: "2007",
    type: "Livro",
  },
  {
    title: "Gestão de Pessoas em Administração Hospitalar",
    subtitle: "Cuidado e compaixão no ambiente de saúde",
    publisher: "Qualitymark",
    year: "2004",
    type: "Livro",
  },
] as const;

// ─── Diferenciais ─────────────────────────────────────────────────────────

export const DIFFERENTIALS = [
  {
    title: "Experiência de mais de 45 anos",
    desc: "Décadas de prática clínica, acadêmica e organizacional, com presença em instituições de referência nacional.",
    icon: "⭐",
  },
  {
    title: "Formação de alto nível",
    desc: "Doutorado e pós-doutorado pela USP, especialização em Rorschach e musicoterapia — formação multidisciplinar única.",
    icon: "🎓",
  },
  {
    title: "Abordagem humanizada e integrativa",
    desc: "Cuidado que une ciência psicológica, música e desenvolvimento humano para um atendimento verdadeiramente acolhedor.",
    icon: "💚",
  },
  {
    title: "Autora de referência nacional",
    desc: "Publicações reconhecidas em orientação vocacional, avaliação de personalidade e saúde do idoso.",
    icon: "📚",
  },
] as const;

// ─── Avisos Legais e Conformidade (CFP/CEPP · LGPD) ──────────────────────

export const CONTENT_DISCLAIMER =
  `O conteúdo deste site é exclusivamente informativo e educativo. Não substitui avaliação psicológica, consulta ou atendimento individualizado. Cada pessoa apresenta necessidades únicas — procure ${PSYCHOLOGIST_NAME}, Psicóloga (${CRP}).`;

export const LEGAL_FOOTER_NOTICE =
  `Publicidade em conformidade com o Código de Ética e Normas para o Exercício Profissional da Psicologia (CEPP/CFP) e Resolução CFP Nº 9/2024. ${PROFESSIONAL_IDENTITY}.`;

export const PRIVACY_POLICY_PATH = "/politica-de-privacidade";

export const OFFICE_HOURS =
  "Atendimento com hora marcada · Segunda a sexta, em horário comercial";

// ─── SEO ──────────────────────────────────────────────────────────────────

export const SITE_TITLE = `${PSYCHOLOGIST_NAME} | Psicóloga · ${CRP}`;

export const SITE_DESCRIPTION =
  `${PSYCHOLOGIST_NAME} — Psicóloga e Consultora com doutorado pela USP. ${CRP}. Psicoterapia, Orientação Vocacional, Avaliação Psicológica e Musicoterapia em São Caetano do Sul — SP.`;
