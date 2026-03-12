import type { Locale } from "@/lib/i18n";

type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

export const siteContent: Record<
  Locale,
  {
    htmlLang: string;
    metadataTitle: string;
    metadataDescription: string;
    nav: { href: string; label: string }[];
    lightLabel: string;
    darkLabel: string;
    hero: {
      badge: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      positioningLabel: string;
      metrics: string[];
      signals: string[];
    };
    about: SectionCopy & { cards: { title: string; text: string }[] };
    expertise: SectionCopy & { items: { title: string; text: string }[] };
    projects: SectionCopy & {
      systemLabel: string;
      challengeLabel: string;
      items: { name: string; summary: string; challenges: string[] }[];
    };
    technology: SectionCopy;
    products: SectionCopy & {
      intro: string;
      items: { name: string; status: string; description: string; cta: string; href?: string }[];
    };
    contact: SectionCopy & {
      items: { title: string; label: string }[];
    };
    footer: string;
  }
> = {
  en: {
    htmlLang: "en",
    metadataTitle: "Speck Tech Solutions | Software Architecture and Scalable Systems",
    metadataDescription:
      "Technology consulting for software architecture, scalable systems, payment platforms, SaaS products, and complex digital operations.",
    nav: [
      { href: "#projects", label: "Projects" },
      { href: "#about", label: "Capabilities" },
      { href: "#expertise", label: "Specialties" },
      { href: "#products", label: "Products" },
      { href: "#contact", label: "Contact" }
    ],
    lightLabel: "Light theme",
    darkLabel: "Dark theme",
    hero: {
      badge: "Technology Consulting Company",
      title: "Software architecture for complex platforms that need scale and technical leadership.",
      description:
        "Speck Tech Solutions helps companies redesign critical systems, structure scalable SaaS and payment platforms, and make senior architectural decisions with production constraints in mind.",
      primaryCta: "Schedule technical conversation",
      secondaryCta: "View projects",
      positioningLabel: "When to hire",
      metrics: [
        "Your product has outgrown the current architecture and needs clearer boundaries, ownership, and evolution paths",
        "You operate payments, financial flows, or critical integrations where reliability directly impacts revenue",
        "You need senior technical leadership to accelerate decisions without compromising long-term platform quality"
      ],
      signals: ["Software architecture", "Scalable systems", "Technical leadership"]
    },
    about: {
      eyebrow: "Engineering Capabilities",
      title: "Senior engineering support for teams operating with architectural complexity and real production pressure.",
      description:
        "The work combines technical leadership, system design, and implementation depth so companies can move critical platforms forward with less architectural risk.",
      cards: [
        {
          title: "Architecture with execution depth",
          text: "System design decisions are translated into backend, integration, cloud, and operational structures that remain viable under growth."
        },
        {
          title: "Technical direction for critical domains",
          text: "The focus is on transaction-heavy, regulated, and integration-rich products where architecture mistakes generate compounding operational cost."
        },
        {
          title: "End-to-end platform thinking",
          text: "From services and queues to web, mobile, observability, and cloud infrastructure, decisions are made with the full platform lifecycle in view."
        }
      ]
    },
    expertise: {
      eyebrow: "Specialties",
      title: "Specialties shaped by systems where scalability, reliability, and complexity are non-negotiable.",
      description:
        "Each specialty is tied to architectural impact: reducing platform fragility, enabling scale, and sustaining product evolution under real operational load.",
      items: [
        {
          title: "Software Architecture",
          text: "Architecture decisions that reduce coupling, clarify service boundaries, and keep the platform evolvable as new business flows appear."
        },
        {
          title: "Scalable Systems",
          text: "Backend and infrastructure designed for traffic bursts, async workloads, queue orchestration, and sustained production growth."
        },
        {
          title: "Payment Platforms",
          text: "Checkout, multi-acquirer, orchestration, anti-abuse, telemetry, and failure handling for revenue-critical transaction flows."
        },
        {
          title: "SaaS Platforms",
          text: "Multi-team SaaS foundations with tenant strategy, subscription logic, access control, and room for continuous feature expansion."
        },
        {
          title: "Financial Platforms",
          text: "Calculation engines, sensitive data flows, and dependable processing pipelines for platforms where precision and consistency matter."
        },
        {
          title: "System Integrations",
          text: "Integration layers that stay maintainable across payment providers, commerce tools, notification systems, authentication, and partner APIs."
        },
        {
          title: "Multi-tenant Architecture",
          text: "Shared platforms with tenant isolation, extensibility, and operational clarity across distinct business units or customer contexts."
        },
        {
          title: "Access Control and Identity",
          text: "Authentication and authorization models built for sensitive operations, segmented permissions, and complex account lifecycle rules."
        },
        {
          title: "Native Device Features",
          text: "Mobile journeys that depend on biometrics, push, deep links, and device capabilities without compromising platform consistency."
        },
        {
          title: "Observability and Reliability",
          text: "Tracing, alerts, and operational visibility that shorten incident response time and improve confidence under continuous load."
        },
        {
          title: "Tracking and Attribution",
          text: "Attribution pipelines with server-side events, advanced pixels, fingerprinting, and commerce-oriented conversion tracking."
        }
      ]
    },
    projects: {
      eyebrow: "Selected Projects",
      title: "Experience shaped by systems that need scale, reliability, and architectural discipline.",
      description:
        "The focus is on complex software domains with real operational constraints, not hypothetical case studies. The examples below reflect the type of engineering challenges Speck Tech Solutions is built to handle.",
      systemLabel: "Real-world system",
      challengeLabel: "Key challenges",
      items: [
        {
          name: "Checkout and Commerce Ecosystem",
          summary:
            "A checkout and digital commerce ecosystem where the work involves acting as Tech Lead across technical refinement, software architecture decisions, and solution evolution for the broader platform.",
          challenges: [
            "Leading technical refinement and solution decisions for a commerce platform with critical operational flows and continuous product evolution",
            "Architecting checkout, payment, and post-purchase flows with reliability, anti-abuse controls, and support for operational scale",
            "Coordinating integrations, telemetry, queue-backed processing, and ecosystem-level technical decisions across commerce operations"
          ]
        },
        {
          name: "Financial Planning Ecosystem",
          summary:
            "A financial planning ecosystem spanning a B2C mobile application, advisor platforms for B2B and B2C operations, and a microservices architecture where the work evolved from full-stack delivery to tech leadership and solution architecture consulting.",
          challenges: [
            "Designing a product architecture that connects end users, advisors, and financial planning workflows across mobile and web experiences",
            "Supporting complex and long-running financial calculations with enough technical robustness to keep projections, recommendations, and lifecycle flows dependable",
            "Operating a microservices structure with more than eight APIs, MongoDB, multi-tenant design, and real-time advisor interactions through WebSocket-based suggestions"
          ]
        }
      ]
    },
    technology: {
      eyebrow: "Technology Stack",
      title: "Production stack across backend, web, mobile, data, and infrastructure.",
      description:
        "Technologies used in real production systems across backend services, SaaS products, mobile apps, cloud infrastructure, observability, and data-heavy flows."
    },
    products: {
      eyebrow: "Products",
      title: "A root domain built to support both consulting and future software products.",
      description:
        "The institutional website establishes the company today while leaving clear room for a broader product ecosystem on subdomains such as future platform launches.",
      intro:
        "Product initiatives will be introduced progressively while keeping the root domain focused on institutional clarity, technical credibility, and consulting positioning.",
      items: [
        {
          name: "Nexo",
          status: "Available",
          description:
            "Turns technical inputs into clear executive documents, helping teams organize context, evidence, risks, and decisions in a more objective format.",
          cta: "Visit product",
          href: "https://nexo.speck-solutions.com.br"
        },
        {
          name: "ShieldKit",
          status: "Coming soon",
          description:
            "A lightweight protection layer for websites, designed to add controlled access and security checks through a simple integration, with full details reserved for launch.",
          cta: "Coming soon"
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Discuss your platform, architecture, or next product stage.",
      description:
        "Speck Tech Solutions supports companies that need senior-level engineering perspective to design, modernize, or scale critical software systems in high-impact product contexts.",
      items: [
        { title: "Email", label: "contact@speck-solutions.com.br" },
        { title: "WhatsApp", label: "Start a conversation" }
      ]
    },
    footer: "Software architecture and scalable technology consulting."
  },
  pt: {
    htmlLang: "pt-BR",
    metadataTitle: "Speck Tech Solutions | Arquitetura de Software e Sistemas Escaláveis",
    metadataDescription:
      "Consultoria em tecnologia para arquitetura de software, sistemas escaláveis, plataformas de pagamento, SaaS e operações digitais complexas.",
    nav: [
      { href: "#projects", label: "Projetos" },
      { href: "#about", label: "Capacidades" },
      { href: "#expertise", label: "Especialidades" },
      { href: "#products", label: "Produtos" },
      { href: "#contact", label: "Contato" }
    ],
    lightLabel: "Tema claro",
    darkLabel: "Tema escuro",
    hero: {
      badge: "Consultoria em Tecnologia",
      title: "Arquitetura de software para plataformas complexas que exigem escala e liderança técnica.",
      description:
        "A Speck Tech Solutions apoia empresas que precisam redesenhar sistemas críticos, estruturar plataformas SaaS e de pagamento, e tomar decisões arquiteturais seniores com foco em produção.",
      primaryCta: "Agendar conversa técnica",
      secondaryCta: "Ver projetos",
      positioningLabel: "Quando contratar",
      metrics: [
        "Quando o produto superou a arquitetura atual e precisa de limites mais claros, escalabilidade e direção técnica",
        "Quando pagamentos, fluxos financeiros ou integrações críticas afetam receita e exigem confiabilidade real",
        "Quando a empresa precisa acelerar decisões de engenharia sem acumular dívida arquitetural"
      ],
      signals: ["Arquitetura de software", "Sistemas escaláveis", "Liderança técnica"]
    },
    about: {
      eyebrow: "Capacidades de Engenharia",
      title: "Suporte sênior para times que operam com complexidade arquitetural e pressão real de produção.",
      description:
        "O trabalho combina liderança técnica, desenho de sistemas e profundidade de implementação para mover plataformas críticas com menos risco arquitetural.",
      cards: [
        {
          title: "Arquitetura com profundidade de execução",
          text: "Decisões de arquitetura se traduzem em backend, integrações, cloud e operação preparados para sustentar crescimento sem improviso técnico."
        },
        {
          title: "Direção técnica para domínios críticos",
          text: "O foco está em produtos transacionais, regulados e altamente integrados, onde erros de arquitetura geram custo operacional recorrente."
        },
        {
          title: "Visão ponta a ponta de plataforma",
          text: "De serviços, filas e integrações até web, mobile, observabilidade e infraestrutura cloud, as decisões consideram todo o ciclo de vida do produto."
        }
      ]
    },
    expertise: {
      eyebrow: "Especialidades",
      title: "Especialidades moldadas por sistemas onde escalabilidade, confiabilidade e complexidade são inegociáveis.",
      description:
        "Cada especialidade está ligada a impacto arquitetural: reduzir fragilidade da plataforma, habilitar escala e sustentar evolução contínua sob carga real.",
      items: [
        {
          title: "Arquitetura de Software",
          text: "Decisões arquiteturais que reduzem acoplamento, clarificam limites entre serviços e mantêm espaço para evolução do produto."
        },
        {
          title: "Sistemas Escaláveis",
          text: "Backend e infraestrutura preparados para picos de tráfego, cargas assíncronas, filas e crescimento contínuo em produção."
        },
        {
          title: "Plataformas de Pagamento",
          text: "Checkout, multiadquirência, telemetria, controles antiabuso e orquestração transacional em fluxos críticos para receita."
        },
        {
          title: "Plataformas SaaS",
          text: "Bases SaaS para múltiplos times, assinatura, controle de acesso e expansão contínua de funcionalidades sem perder consistência."
        },
        {
          title: "Plataformas Financeiras",
          text: "Motores de cálculo, dados sensíveis e pipelines confiáveis para plataformas onde precisão e consistência operacional são mandatórias."
        },
        {
          title: "Integrações de Sistemas",
          text: "Camadas de integração sustentáveis entre pagamentos, commerce, faturamento, notificações, autenticação e APIs de parceiros."
        },
        {
          title: "Arquitetura Multi-tenant",
          text: "Plataformas compartilhadas com isolamento entre tenants, extensibilidade e clareza operacional para diferentes contextos de negócio."
        },
        {
          title: "Controle de Acesso e Identidade",
          text: "Modelos de autenticação e autorização para operações sensíveis, permissões segmentadas e ciclos de vida complexos de conta."
        },
        {
          title: "Funcionalidades Nativas de Dispositivo",
          text: "Jornadas mobile que dependem de biometria, push, deep links e capacidades nativas sem comprometer a consistência da plataforma."
        },
        {
          title: "Observabilidade e Confiabilidade",
          text: "Tracing, alertas e visibilidade operacional para reduzir tempo de resposta a incidentes e aumentar previsibilidade sob carga."
        },
        {
          title: "Tracking e Atribuição",
          text: "Pipelines de atribuição com eventos server-side, pixels avançados, fingerprinting e tracking orientado a aquisição e conversão."
        }
      ]
    },
    projects: {
      eyebrow: "Projetos Selecionados",
      title: "Experiência moldada por sistemas que exigem escala, confiabilidade e disciplina arquitetural.",
      description:
        "O foco está em domínios complexos com restrições operacionais reais, e não em estudos de caso hipotéticos. Os exemplos abaixo refletem o tipo de desafio de engenharia que a Speck Tech Solutions está preparada para enfrentar.",
      systemLabel: "Sistema real",
      challengeLabel: "Principais desafios",
      items: [
        {
          name: "Ecossistema de Checkout e Comércio",
          summary:
            "Um ecossistema de checkout e comércio digital em que a atuação envolve liderança técnica, refinamento de demandas, decisões de arquitetura de software e evolução das soluções do ecossistema.",
          challenges: [
            "Condução do refinamento técnico e das decisões de solução em uma plataforma comercial com fluxos críticos e evolução contínua do produto",
            "Arquitetura de checkout, pagamentos e jornadas de pós-compra com foco em confiabilidade, controles antiabuso e sustentação operacional em escala",
            "Orquestração de integrações, telemetria, processamento com filas e decisões técnicas distribuídas ao longo de todo o ecossistema comercial"
          ]
        },
        {
          name: "Ecossistema de Planejamento Financeiro",
          summary:
            "Um ecossistema de planejamento financeiro que combina aplicativo B2C em React Native, plataformas para assessores em contextos B2B e B2C e uma arquitetura de microsserviços em que a atuação evoluiu de full stack para liderança técnica e consultoria em arquitetura de soluções e software.",
          challenges: [
            "Conectar jornadas de usuários finais e assessores em uma arquitetura que sustenta acompanhamento financeiro, manipulação de projeto e sugestões em tempo real",
            "Sustentar cálculos financeiros complexos e longos com robustez técnica suficiente para manter projeções, objetivos e recomendações consistentes",
            "Operar uma estrutura de microsserviços com mais de oito APIs, MongoDB, multi-tenant e comunicação em tempo real via WebSocket"
          ]
        }
      ]
    },
    technology: {
      eyebrow: "Stack Tecnológica",
      title: "Stack real de produção em backend, web, mobile, dados e infraestrutura.",
      description:
        "Tecnologias utilizadas em sistemas reais de produção, de serviços backend e produtos SaaS até mobile, cloud, observabilidade e fluxos intensivos em dados."
    },
    products: {
      eyebrow: "Produtos",
      title: "Um domínio raiz preparado para suportar consultoria e futuros produtos digitais.",
      description:
        "O site institucional posiciona a empresa hoje e mantém espaço claro para um ecossistema maior de produtos em subdomínios.",
      intro:
        "As iniciativas de produto serão apresentadas de forma progressiva, mantendo o domínio principal focado em clareza institucional, credibilidade técnica e posicionamento consultivo.",
      items: [
        {
          name: "Nexo",
          status: "Disponível",
          description:
            "Transforma insumos técnicos em documentos executivos claros, ajudando o time a organizar contexto, evidências, riscos e decisões de forma objetiva.",
          cta: "Acessar produto",
          href: "https://nexo.speck-solutions.com.br"
        },
        {
          name: "ShieldKit",
          status: "Em breve",
          description:
            "Uma camada leve de proteção para websites, pensada para adicionar controle de acesso e verificações de segurança com integração simples, enquanto os detalhes completos ficam para o lançamento.",
          cta: "Em breve"
        }
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Converse sobre sua plataforma, arquitetura ou próxima etapa de produto.",
      description:
        "A Speck Tech Solutions apoia empresas que precisam de visão técnica sênior para desenhar, modernizar ou escalar sistemas críticos em produtos com impacto real de negócio.",
      items: [
        { title: "Email", label: "contact@speck-solutions.com.br" },
        { title: "WhatsApp", label: "Iniciar conversa" }
      ]
    },
    footer: "Consultoria em arquitetura de software e sistemas escaláveis."
  }
};
