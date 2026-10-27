/* Dicionário português (pt-PT) para cada string visível ao usuário.
   A forma é verificada contra Dict = typeof en em tempo de compilação.
   Regras de voz (BRAND-GUIDE secção 7): sem travessões, sem palavras proibidas,
   moeda N$, formato de telefone +264. Nada inventado. */

import type { Activity, GalleryPhoto, Testimonial, Tour } from "./shared";
import { company } from "./shared";

export const pt = {
  code: "pt",
  label: "Português",
  ogLocale: "en_NA",
  quoteMarks: { open: "\u201C", close: "\u201D" },

  meta: {
    home: {
      title: "Liger Tours Namibia | Excursões Guiadas pela Namíbia",
      description:
        "Operadora de turismo local namibiana. Excursões guiadas em grupo para Sossusvlei, Etosha, Swakopmund e o Kalahari, planejadas em torno das suas datas e do seu grupo.",
    },
    tours: {
      title: "Excursões e Safáris na Namíbia",
      description:
        "Sete excursões guiadas pela Namíbia: rotas clássicas de dunas e safári, viagens aos cânions do sul, rotas culturais e um circuito de descoberta de 24 dias.",
    },
    activities: {
      title: "Atividades de um Dia na Namíbia",
      description:
        "Safaris fotográficos, Sandwich Harbour de 4x4, tours de township, caminhadas com os San e observação de estrelas, com guias locais.",
    },
    about: {
      title: "Sobre a Liger Tours Namibia",
      description:
        "A Liger Tours Namibia é uma empresa de excursões local e registada na NTB. Conheça a equipa, a nossa missão e os valores por trás de cada rota guiada.",
    },
    gallery: {
      title: "Galeria: a Namíbia em Imagens",
      description:
        "Dunas, fauna e alojamentos das viagens da Liger Tours: planos de argila de Sossusvlei, areias do Kalahari, fauna de Etosha e onde pernoita.",
    },
    contact: {
      title: "Contacto e Pedidos",
      description:
        "Planeie a sua excursão na Namíbia: telefone +264 81 472 2552, WhatsApp ou email info@ligertours.com. Respondemos dentro de um dia útil.",
    },
    brand: {
      title: "Marca: Cores, Tipografia e Regras de Logo",
      description:
        "O sistema de marca da Liger Tours Namibia: tokens de cor da arte do logo, as três tipografias, regras de utilização do logo e os dispositivos gráficos de assinatura.",
    },
    privacy: {
      title: "Política de Privacidade",
      description:
        "Como a Liger Tours Namibia recolhe, utiliza e protege as suas informações pessoais quando faz um pedido ou reserva uma excursão.",
    },
    terms: {
      title: "Termos de Serviço",
      description:
        "Termos de reserva para as excursões da Liger Tours Namibia: orçamentos, pagamentos em N$, cancelamentos, seguros e responsabilidade.",
    },
    faq: {
      title: "Perguntas Frequentes",
      description:
        "Respostas diretas sobre tamanhos de grupo, reservas, preços em N$, veículos, seguros e a melhor estação para conhecer a Namíbia.",
    },
    disclaimer: {
      title: "Aviso Legal",
      description:
        "Como as informações do site da Liger Tours Namibia se aplicam ao seu pedido, orçamento e excursão, e os limites da nossa responsabilidade.",
    },
    accessibility: {
      title: "Acessibilidade",
      description:
        "O nosso compromisso de acessibilidade para este site e as nossas excursões: o que construímos, limites conhecidos e como nos enviar comentários.",
    },
  },

  a11y: {
    skip: "Saltar para o conteúdo principal",
    languages: "Mudar idioma",
    languageDock: "Opções de idioma",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    homeLink: "Liger Tours Namibia: início",
    prevSlide: "Testemunho anterior",
    nextSlide: "Testemunho seguinte",
    goToSlide: "Ir para o testemunho {n} de 3",
    lightboxOpen: "Abrir imagem: {alt}",
    lightboxPrev: "Imagem anterior",
    lightboxNext: "Imagem seguinte",
    lightboxClose: "Fechar",
  },

  nav: [
    { href: "/tours", label: "Excursões" },
    { href: "/activities", label: "Atividades" },
    { href: "/about", label: "Sobre" },
    { href: "/gallery", label: "Galeria" },
    { href: "/contact", label: "Contacto" },
  ],

  search: {
    label: "Pesquisar no site",
    placeholder: "Pesquisar excursões, atividades, locais",
    noResults: "Nada encontrado. Tente um local ou uma palavra como dunas.",
    clear: "Limpar pesquisa",
    pages: "Páginas",
    tours: "Excursões",
    activities: "Atividades",
    resultAria: "Resultado da pesquisa: {name}",
  },

  langDock: {
    open: "Escolher um idioma",
    heading: "Idioma",
    current: "Atual",
  },

  header: { planTrip: "Planejar a minha viagem", whatsapp: "Contacte-nos por WhatsApp" },

  footer: {
    blurb:
      "Operadora de turismo local namibiana, registada na Namibia Tourism Board. Excursões guiadas em grupo por toda a Namíbia: deserto, costa, cânion e vida selvagem.",
    explore: "Explorar",
    contactHeading: "Contacto",
    whatsappLabel: "WhatsApp",
    rights: "Todos os direitos reservados.",
    registered: company.registered as string,
    privacy: "Política de privacidade",
    terms: "Termos",
    faq: "Perguntas frequentes",
    disclaimer: "Aviso legal",
    accessibility: "Acessibilidade",
    brandLink: "Marca",
    credit: "Desenvolvido por Tangison Studio",
  },

  hero: {
    kicker: "Guiados por locais",
    title: "Namíbia, sem pressa.",
    lead: "Empresa local e registada na NTB. Excursões guiadas em grupo desde as dunas vermelhas de Sossusvlei até à vida selvagem de Etosha, planejadas em torno das suas datas e do seu ritmo.",
    primaryCta: "Planejar a minha viagem",
    secondaryCta: "Ver as excursões",
    imageAlt:
      "Veículo aberto de safari a transportar dois hóspedes pela areia vermelha do Namib ao pôr do sol, com as sombras das dunas a estenderem-se atrás",
  },

  home: {
  intro: {
      eyebrow: "Empresa local, registada na NTB",
      h2: "Com quem chama a Namíbia de casa.",
      p1: "A Liger Tours Namíbia é uma empresa de excursões local construída com um conhecimento genuíno do terreno. Desde safáris perto da capital até jornadas de vários dias pelo deserto, costas e reservas de vida selvagem do país, cada rota é desenhada para mostrar a Namíbia real, num ritmo que lhe permite absorvê-la de facto.",
      p2: "Enquanto empresa registada na Namibia Tourism Board, planejamos cada viagem em função das pessoas que a reservam: casais, famílias, viajantes solteiros e grupos de qualquer dimensão, de duas pessoas a cinquenta ou mais, cada um com uma rota, ritmo e estilo de viagem que lhes é adequado.",
      cta: "Saber mais sobre nós",
      imageAlt:
        "Um rebanho de antílopes a pastar numa savana verde com árvores de acácia dispersas",
    },
    stats: {
      ariaLabel: "Liger Tours em números",
      items: [
        { value: 7, suffix: "", label: "Rotas principais" },
        { value: 13, suffix: "", label: "Experiências guiadas" },
        { value: 100, suffix: "%", label: "Empresa local" },
        { label: "País, conhecido em profundidade", raw: "NTB" },
      ],
    },
    tours: {
      eyebrow: "Onde vamos",
      h2: "Rotas principais, adaptadas a si.",
      cta: "Ver todas as rotas",
      ariaLabel: "Rotas principais",
    },
    pinned: {
      quote: "Árvores antigas. Dunas gigantes.",
      sub: "A sua manhã.",
      imageAlt:
        "Árvores de acácia mortas a erguer-se na argila branca de Deadvlei, rodeadas por dunas vermelhas altas sob um céu azul profundo",
      ariaLabel: "A paisagem do Namib",
    },
    why: {
      eyebrow: "Por quê Liger Tours",
      h2: "O que faz a diferença.",
      ariaLabel: "Porquê viajar connosco",
      items: [
        {
          n: "1",
          title: "Experiência local",
          body: "Guias que conhecem a história, a vida selvagem, as culturas e os cantos mais tranquilos da Namíbia, que a maioria dos itinerários ignora.",
        },
        {
          n: "2",
          title: "Experiências autênticas",
          body: "Passeios com os San, aulas de culinária tradicional, tours de township: encontros genuínos, organizados com respeito.",
        },
        {
          n: "3",
          title: "Serviço personalizado",
          body: "Cada excursão é adaptada a casais, famílias, grupos e viajantes solteiros, desde o primeiro contacto até à entrega final.",
        },
        {
          n: "4",
          title: "Conforto e segurança",
          body: "O conforto e a segurança são prioridades máximas em toda a viagem, não extras opcionais.",
        },
        {
          n: "5",
          title: "Operadora registada",
          body: "Registada na Namibia Tourism Board (NTB) e sujeita a padrões profissionais em cada passo.",
        },
      ],
    },
    activities: {
      eyebrow: "Excursões de um dia e experiências",
      h2: "Com pouco tempo? Comece aqui.",
      cta: "Explorar todas as experiências",
      ariaLabel: "Atividades",
    },
    stay: {
      eyebrow: "Onde vai ficar",
      h2: "Lodges que escolheríamos para família.",
      p: "Desde lodges de madeira nas dunas do Kalahari até bungalows de palha acima dos leitos de rio, cada paragem numa excursão da Liger é um lugar onde já ficámos e recomendaríamos à nossa família. Conforto onde é preciso, carácter em toda a parte e locais escolhidos pela vista com que acorda.",
      cta: "Ver as rotas",
      imageAlt1:
        "Fila de bungalows de palha sobre estacas ao longo de uma colina rochosa vermelha, vista de baixo ao meio-dia",
      imageAlt2:
        "Casa de lodge de madeira com telhado verde, erguida sobre a areja vermelha do Kalahari sob um céu azul claro",
    },
    testimonials: {
      eyebrow: "Palavras dos nossos hóspedes",
      h2: "O que os nossos hóspedes dizem.",
      ariaLabel: "O que os nossos hóspedes dizem",
    },
    faq: {
      eyebrow: "Bom saber",
      h2: "O que os hóspedes perguntam.",
      ariaLabel: "Perguntas frequentes",
      moreLink: "Mais respostas na página de perguntas frequentes",
      items: [
        {
          q: "Fazem excursões para grandes grupos?",
          a: "Sim. A Liger Tours conduz excursões guiadas em grupo de qualquer dimensão, de dois viajantes a grupos de cinquenta ou mais. Diga-nos o número de pessoas e nós construímos a rota, o ritmo e os veículos à volta.",
        },
        {
          q: "Onde começam as excursões?",
          a: "Cada rota começa e termina em Windhoek, no centro do país e ponto de chegada da maioria dos voos. Confirmamos os detalhes de recolha consigo antes da viagem.",
        },
        {
          q: "Quanto custa uma excursão?",
          a: "Cada excursão é orçamentada individualmente em dólares namibianos (N$), porque o preço depende da dimensão do grupo, da época e das escolhas de alojamento. Envie um pedido e receberá um orçamento completo, normalmente dentro de um dia útil.",
        },
        {
          q: "Qual é a melhor altura para visitar a Namíbia?",
          a: "De maio a outubro é a época alta, com manhãs frescas, céus limpos e a melhor observação de vida selvagem no Etosha. É também quando os melhores alojamentos esgotam primeiro, por isso contacte-nos o mais cedo possível.",
        },
        {
          q: "São uma operadora registada?",
          a: "Sim. A Liger Tours Namibia é local e está registada na Namibia Tourism Board (NTB), que nos mantém em padrões profissionais em cada etapa da sua viagem.",
        },
        {
          q: "Podem criar uma rota à medida?",
          a: "Sim, todas as semanas. Diga-nos o que quer ver e quanto tempo tem, e nós construímos a rota à volta disso, mesmo que seja mais curta do que as excursões deste site.",
        },
      ],
    },
    cta: {
      h2: "Quando estiver pronto.",
      script: "Diga-nos as suas datas. Construiremos a viagem em torno delas.",
      primaryCta: "Planejar a minha viagem",
      whatsappCta: "Contacte-nos agora no WhatsApp",
    },
  },

  toursPage: {
    eyebrow: "Excursões",
    title: "Escolha a sua Namíbia.",
    pageHeaderAlt:
      "Dunas vermelhas a erguer-se acima de uma planície verde e de seixos sob um céu limpo no deserto de Namib",
    lead: "Cada rota começa e termina em Windhoek e é adaptada às suas datas e grupo. As durações são confirmadas consigo no contacto inicial, por isso nada nesta página é uma estimativa.",
    multiDay: "Rotas de vários dias",
    longHaul: "A longa distância",
    customTitle: "Nenhuma delas é a certa?",
    customBody:
      "Diga-nos o que quer ver e quanto tempo tem. Construímos rotas personalizadas todas as semanas.",
    notSureH2: "Ainda não tem certeza de qual rota?",
    notSureLead:
      "Envie-nos as suas datas e os seus interesses. Responderemos com uma recomendação honesta, mesmo que seja uma viagem mais curta do que a que pediu.",
    planCta: "Planejar a minha viagem",
    whatsappCta: "Contacte-nos agora no WhatsApp",
    enquireAria: "Contactar",
  },

  tourDetail: {
    route: "Rota",
    duration: "Duração",
    confirmedAtEnquiry: "Confirmado no contacto inicial",
    groupSize: "Tamanho do grupo",
    groupSizeValue: "Apenas o seu grupo",
    departs: "Partida",
    departsValue: "Windhoek, nas suas datas",
    theRoute: "A rota",
    dayByDay: "Dia a dia",
    dayByDayLead:
      "O plano exato do dia é confirmado consigo no contacto inicial e adaptado às suas datas. Estes são os locais que nunca mudam.",
    included: "Incluído",
    notIncluded: "Não incluído",
    includedItems: [
      "Guia e motorista locais para toda a rota",
      "Taxas de parques e conservâncias no itinerário",
      "Alojamento na rota, reservado para si",
      "Toda a transporte da rota, de e para Windhoek",
    ],
    notIncludedItems: [
      "Voos internacionais para e da Namíbia",
      "Seguro de viagem (obrigatório antes da partida)",
      "Despesas pessoais, bebidas e souvenirs",
      "Atividades opcionais não listadas na rota",
    ],
    priceNote:
      "Os preços dependem do tamanho do seu grupo, da estação e das escolhas de alojamento, por isso cada excursão é cotada individualmente em N$. Preencha o formulário de contacto e receberá uma cotação completa, sem nada oculto, geralmente num dia útil.",
    enquiryTitle: "Contactar sobre esta excursão",
    enquiryLead:
      "Diga-nos as suas datas e o seu grupo. Responderemos com uma cotação personalizada e uma opinião honesta sobre o timing.",
    whatsappCta: "Prefere WhatsApp? Envie-nos uma mensagem agora",
        viewTour: "Ver a excursão",
    moreTours: "Outras rotas que pode gostar",
    viewTourAria: "Ver a excursão: {name}",
    touristType: "Excursão guiada em grupo",
    enquireAria: "Contactar sobre esta excursão",
  },

  activitiesPage: {
    eyebrow: "Atividades",
    title: "Faça de um dia especial.",
    pageHeaderAlt:
      "Oryx gemsbok a erguer-se numa crista relvada em luz dourada e quente do final da tarde",
    lead: "Experiências de um dia que pode reservar separadamente ou adicionar a qualquer excursão. Tudo aqui é realizado com guias locais, para grupos de qualquer dimensão, em horários que fazem sentido para a luz e a vida selvagem.",
    addToTrip: "Adicionar à minha viagem",
    addH2: "Adicione qualquer uma destas à sua excursão.",
    addLead:
      "A maioria dos hóspedes reserva uma ou duas experiências de um-day em torno de uma rota mais longa. Diga-nos o que lhe chamou a atenção e iremos integrá-la no plano.",
    planCta: "Planejar a minha viagem",
    whatsappCta: "Contacte-nos agora no WhatsApp",
    addAria: "Adicionar uma atividade à sua excursão",
  },
  aboutPage: {
    eyebrow: "Sobre nós",
    title: "Locais, e orgulhosos disso.",
    pageHeaderAlt:
      "Fila de cabanas de palafita sob uma colina rochosa vermelha sob um céu limpo",
    storyEyebrow: "A nossa história",
    storyH2: "Construída por pessoas que cresceram com esta terra.",
    story: [
      "A Liger Tours Namibia é uma empresa de turismo local, construída numa ideia simples: a melhor forma de ver a Namíbia é com pessoas que a consideram sua casa. A empresa foi fundada por um graduado em Ciências Ambientais cuja apreciação pela natureza e pelo turismo sustentável molda cada itinerário, desde um safári de manhã fora da capital até uma jornada de vários dias pelo país.",
      "Como empresa registada na Namibia Tourism Board (NTB), a Liger Tours Namibia mantém padrões profissionais em cada etapa da viagem. Os tours são planeados em torno dos hóspedes que os reservam: casais, famílias, grupos e viajantes solitários recebem uma rota, ritmo e estilo de viagem adequados a si, com o conforto e a segurança tratados como prioridades e não como extras.",
      "Cada tour exibe as paisagens, a vida selvagem e as culturas da Namíbia, promovendo um turismo responsável e sustentável. Isso significa guias locais, encontros culturais autênticos organizados com respeito, e itinerários que deixam os locais visitados pelos hóspedes como os encontraram.",
    ],
    missionEyebrow: "A nossa missão",
    mission:
      "Providenciar tours de alta qualidade que conectam os viajantes com as paisagens, a vida selvagem e as pessoas da Namíbia, promovendo um turismo responsável e sustentável.",
    visionEyebrow: "A nossa visão",
    vision:
      "Tornar-nos uma das empresas de turismo mais confiáveis e inspiradoras da Namíbia, proporcionando experiências de viagem excepcionais que exibem os maravilhosos naturais do país, as suas ricas culturas e a sua acolhedora hospitalidade.",
    valuesEyebrow: "O que nos diferencia",
    valuesH2: "Cinco coisas em que não comprometemos.",
    values: [
      {
        title: "Expertise local",
        body: "Os nossos guias possuem conhecimento aprofundado da história, vida selvagem, culturas e recantos silenciosos da Namíbia que a maioria dos itinerários ignora.",
      },
      {
        title: "Experiências autênticas",
        body: "Desde caminhadas com os San, aulas de culinária tradicional, tours de townships e aventuras no deserto, focamos-nos em encontros culturais genuínos.",
      },
      {
        title: "Serviço personalizado",
        body: "Adaptamos os nossos tours para casais, famílias, grupos e viajantes solitários, desde o primeiro contacto até à entrega final.",
      },
      {
        title: "Conforto e segurança",
        body: "O seu conforto e segurança são as nossas principais prioridades em toda a viagem, no veículo e em cada paragem.",
      },
      {
        title: "Paixão pela Namíbia",
        body: "Estamos comprometidos em partilhar a beleza e a singularidade do nosso país com visitantes de todo o mundo.",
      },
    ],
    panel: "Registada na Namibia Tourism Board e a conduzir grupos por toda a Namíbia.",
    planCta: "Planear a minha viagem",
    storyImageAlt:
      "Hóspedes da Liger Tours reunidos à volta do sinal rodoviário do Trópico de Capricórnio no solo desértico vermelho",
    moments: {
      eyebrow: "Das nossas viagens",
      h2: "Momentos reais, da estrada.",
      lead: "Hóspedes no Trópico de Capricórnio, uma caminhada na praia do Atlântico, uma paragem onde o deserto encontra a autoestrada: fotografias das viagens da Liger, não de uma biblioteca de imagens.",
      alt1:
        "Quatro hóspedes a caminhar numa praia do Atlântica ampla, um deles agachado para fotografar pegadas na areia",
      alt2:
        "Caminhões de carga estacionados em fila numa paragem de estrada desértica sob uma cobertura de toldo",
      alt3:
        "Edifícios de madeira desgastados a serem lentamente enterrados pela areia do deserto a avançar",
    },
  },

  galleryPage: {
    eyebrow: "Galeria",
    title: "O país, sem edições.",
    pageHeaderAlt:
      "Árvores de acácia mortas num leito de argila pálido, com uma enorme duna vermelha a erguer-se atrás",
    lead: "Fotografias das nossas viagens, usadas exatamente como saíram da câmara. Selecione qualquer imagem para a abrir, depois mova-se com as teclas de seta e feche com a tecla Escape.",
    seeH2: "Melhor na pessoa.",
    seeLead: "Cada fotografia aqui foi tirada numa rota da Liger. Venha e tire as suas próprias.",
    planCta: "Planear a minha viagem",
    whatsappCta: "Contacte-nos agora via WhatsApp",
    seeAria: "Veja por si mesmo",
    photos: [
      {
        src: "/imagery/crops/safari-vehicle-red-sand-1x1.webp",
        alt: "Veículo de safári aberto com dois hóspedes a conduzir sobre areia vermelha no momento dourado",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-1x1.webp",
        alt: "Oryx gemsbok com longos chifretes retos a estar de pé numa crista relvada em luz dourada",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
        alt: "Uma única árvore morta de acácia no leito de argila branca, uma duna vermelha a erguer-se atrás",
        tall: true,
      },
      {
        src: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
        alt: "Uma árvore de quiver em silhueta contra o sol num céu azul profundo",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-16x9.webp",
        alt: "Árvores de acácia mortas num leito de argila branca abaixo de dunas vermelhas e um céu azul profundo",
      },
      {
        src: "/imagery/crops/elephants-etosha-waterhole-1x1.webp",
        alt: "Elefantes a beber numa poça de água lamacenta no Parque Nacional Etosha",
      },
      {
        src: "/imagery/crops/giraffes-walking-savanna-1x1.webp",
        alt: "Três girafas a caminhar em fila passando por árvores de acácia verdes",
      },
      {
        src: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
        alt: "Casa de madeira de um lodge com telhado verde numa duna de areia vermelha sob um céu azul",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-warm-light-1x1.webp",
        alt: "Árvores mortas nuas sobre argila pálida com uma duna vermelha a erguer-se atrás",
      },
      {
        src: "/imagery/crops/tropic-capricorn-group-16x9.webp",
        alt: "Hóspedes de tour reunidos à volta do sinal rodoviário do Trópico de Capricórnio no solo desértico vermelho",
      },
      {
        src: "/imagery/crops/quiver-tree-forest-dusk-16x9.webp",
        alt: "Árvores de quiver em silhueta contra um céu alaranjado do crepúsculo",
      },
      {
        src: "/imagery/crops/coast-beach-group-4x5.webp",
        alt: "Quatro hóspedes a caminhar numa praia do Atlântica ampla, um deles agachado para fotografar pegadas na areia",
        tall: true,
      },
      {
        src: "/imagery/crops/red-dunes-valley-plain-16x9.webp",
        alt: "Dunas vermelhas a erguer-se acima de uma planície verde e de cascalho sob um céu limpo",
      },
      {
        src: "/imagery/crops/thatched-chalets-hillside-1x1.webp",
        alt: "Fila de cabanas de palafita abaixo de uma colina rochosa vermelha",
        tall: true,
      },
      {
        src: "/imagery/crops/flamingos-walvis-bay-1x1.webp",
        alt: "Flamingos a atravessar águas rasas e azuis da lagoa da Baía de Walvis",
      },
      {
        src: "/imagery/crops/sandwich-harbour-ocean-dunes-16x9.webp",
        alt: "As dunas do Namib a correrem diretas para as ondas do Atlântico no Sandwich Harbour",
      },
      {
        src: "/imagery/crops/rhino-and-ostrich-grassland-1x1.webp",
        alt: "Um rinoceronte a pastar na relva verde com um avestruz ao lado",
      },
      {
        src: "/imagery/crops/dunes-sunburst-pan-16x9.webp",
        alt: "O sol a romper sobre dunas acima de uma fina camada de água na areia",
      },
      {
        src: "/imagery/crops/fish-river-canyon-view-16x9.webp",
        alt: "O Rio Peixe a serpentear através de paredes de rochas em camadas na luz da tarde",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-16x9.webp",
        alt: "Oryx gemsbok numa crista relvada em luz dourada do final da tarde",
      },
      {
        src: "/imagery/crops/overland-road-stop-16x9.webp",
        alt: "Caminhões de carga estacionados em fila numa paragem de estrada desértica sob uma cobertura de toldo",
      },
      {
        src: "/imagery/crops/namib-night-sky-4x5.webp",
        alt: "A Via Láctea a arcar sobre dunas escuras do deserto durante a noite",
        tall: true,
      },
      {
        src: "/imagery/crops/spitzkoppe-granite-peaks-1x1.webp",
        alt: "Bolo de granito equilibrado do Spitzkoppe acima do solo do deserto",
      },
      {
        src: "/imagery/crops/deadvlei-grove-16x9.webp",
        alt: "Um bosque de árvores mortas de acácia no leito de argila branca abaixo de dunas vermelhas",
      },
      {
        src: "/imagery/crops/safari-vehicle-red-sand-16x9.webp",
        alt: "Pistas de safári na areia vermelha no momento dourado",
      },
      {
        src: "/imagery/crops/sand-buried-ruins-16x9.webp",
        alt: "Edifícios de madeira desgastados a serem lentamente enterrados pela areia do deserto a avançar",
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
        alt: "Árvores de acácia mortas e dunas vermelhas sob um céu azul profundo",
        tall: true,
      },
    ] as GalleryPhoto[],
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Diga-nos as suas datas.",
    pageHeaderAlt:
      "Veículo aberto de safári a atravessar areia vermelha ao pôr do sol com sombras de dunas atrás",
    formH2: "Envie um pedido",
    formLead:
      "Quanto mais nos disser, melhor será a primeira resposta. Datas, tamanho do grupo, os locais que já sabe que quer: tudo isto ajuda-nos a apresentar algo real em vez de um folheto.",
    panelH2: "Contacte-nos diretamente",
    phone: "Telefone",
    whatsapp: "WhatsApp",
    chatWithUs: "Converse connosco",
    email: "Email",
    whereWeAre: "Onde estamos",
    hours: "Horário",
    mapCta: "Abrir o mapa",
    seasonH2: "Os melhores meses enchem-se cedo.",
    seasonLead:
      "Maio a outubro é a alta época na Namíbia, e os melhores alojamentos em torno de Etosha e Sossusvlei enchem-se com meses de antecedência. Quanto mais cedo perguntar, melhor a viagem que conseguimos construir.",
    seasonAria: "Planeamento antecipado",
  },

  form: {
    name: "Nome *",
    nameError: "Por favor, diga-nos o seu nome.",
    email: "Email *",
    emailError: "Por favor, use um endereço de email válido para que possamos responder.",
    phone: "Telefone ou WhatsApp",
    phonePlaceholder: "+264 ...",
    groupSize: "Tamanho do grupo",
    groupSizePlaceholder: "2 adultos",
    dates: "Datas de viagem",
    datesPlaceholder: "Por volta de 5 a 18 de julho de 2027",
    message: "A sua mensagem *",
    messageError:
      "Por favor, adicione alguns detalhes sobre a sua viagem (10 caracteres ou mais).",
    messagePlaceholder:
      "Diga-nos para onde quer ir, quanto tempo tem e o que quer ver.",
    submit: "Enviar o meu pedido",
    sending: "A enviar...",
    successTitle: "Obrigado, o seu pedido foi recebido.",
    successBody: `Respondemos a cada pedido pessoalmente, geralmente num dia útil. Se as suas datas forem em breve, envie-nos uma mensagem no WhatsApp para ${company.phone} e daremos-lhe atenção imediata.`,
    whatsappCta: "Contacte-nos no WhatsApp",
    generalError:
      "Ocorreu um erro ao enviar o seu pedido. Tente novamente ou contacte-nos pelo WhatsApp.",
  },

  notFound: {
    title: "Página não encontrada",
    h1: "Este caminho não leva a lado nenhum.",
    lead: "A página que procurou foi movida ou nunca existiu. As rotas abaixo levam a bons destinos.",
    back: "Voltar ao início",
    viewTours: "Ver excursões",
  },

  errorPage: {
    h1: "Algo de errado aconteceu do nosso lado.",
    lead: "Como qualquer bom veículo de safári, a página será brevemente reparada. Tente novamente e se continuar a acontecer, envie-nos uma mensagem no WhatsApp e iremos resolver na mão.",
    tryAgain: "Tentar novamente",
    back: "Voltar ao início",
    whatsapp: "Contacte-nos no WhatsApp",
  },

  brandPage: {
    eyebrow: "Marca",
    title: "A marca Liger, numa só página.",
    pageHeaderAlt:
      "Árvores de acácia mortas numa planície de argila branca debaixo de dunas vermelhas e um céu azul profundo",
    logoH2: "Logótipo",
    logoBody:
      "Um único logótipo, apenas nas variantes fornecidas. A composição completa nunca está numa caixa, chip ou círculo, nunca é recolorida, esticada ou restilizada, e nunca é colocada sobre uma foto movida sem uma sobreposição de crepúsculo. O espaço em torno do logótipo equivale a um terço da altura da copa da árvore. Abaixo de 140px de largura, mude para a versão com apenas o nome ou o ícone.",
    onLight: "Sobre fundos claros",
    onDark: "Sobre fundos escuros",
    mono: "Variantes monocromáticas",
    coloursH2: "Cor",
    coloursBody:
      "Cada valor é extraído da arte do logótipo: a rosa da letra e do nascer do sol, o azeitona da acácia, o preto-noturno quase total para secções escuras. A rosa é a marca; os componentes usam os tokens semânticos, não os valores hex brutos.",
    swatch: "Amostra",
    colourName: "Token",
    colourHex: "Hex",
    colourUse: "Utilização",
    colourUseBg: "Fundo padrão da página",
    colourUseAlt: "Secções alternadas",
    colourUseTint: "Painéis de destaque, fundos de arco",
    colourUseBorder: "Bordas, divisórias",
    colourUseDiscs: "Discos solares, contorno de arco, decorativo",
    colourUseDeco: "Apenas decorativo",
    colourUseDisplay: "Apenas para texto grande de exibição",
    colourUseBrand: "Botões, ligações, acentos de títulos",
    colourUseHover: "Hover, painéis fortes",
    colourUseInk: "Texto do corpo",
    colourUseNight: "Secções escuras, rodapé",
    colourUseAcacia: "Cor da árvore do logótipo, anel de foco em fundos claros",
    colourUseSunrise: "Apenas pequenos acentos em fundos escuros, anel de foco",
    typeH2: "Tipografia",
    typeBody:
      "Três famílias, todas com licenças gratuitas, auto-hospedadas com font-display swap. Dois tipos de letra no ecrã ao mesmo tempo é o normal; o script é reservado para manter o seu impacto.",
    typeRows: [
      {
        label: "H1 / destaque: Kaushan Script",
        sample: "Namíbia, sem pressa.",
        note: "Letreiro de pincel que ecoa a letra do logótipo. Apenas em grandes tamanhos, maiúsculas só na primeira letra, nunca em negrito ou maiúsculas completas.",
      },
      {
        label: "Títulos e IU: Archivo",
        sample: "Deserto, costa, cânion e vida selvagem.",
        note: "Largura e peso variáveis. Largo e pesado para impacto. Maiúsculas completas apenas para sobretítulos, etiquetas e botões.",
      },
      {
        label: "Corpo: Schibsted Grotesk",
        sample:
          "Frases simples que nomeiam locais reais, durações reais e o que o hóspede realmente faz. Alinhado à esquerda, altura generosa de linha, nada menor que 14px.",
        note: "Regular para leitura, seminegrrito para ênfase. Máximo de 62 caracteres por linha.",
      },
    ],
    devicesH2: "Dispositivos de assinatura",
    devicesBody:
      "Quatro elementos repetidos carregam a identidade: fotos com máscara de arco e contorno fino, discos solares sobrepostos a espreitar por trás das fotos (nunca mais de dois por vista), divisórias de dunas curvas na cor da secção seguinte, e a composição de título de um kicker Archivo sobre uma frase de script.",
    deviceCaptions: ["Máscara de arco, 4:5", "Discos solares, máx. 2", "Divisor de duna", "Composição de título"],
    lockupKicker: "Guiado por locais",
    lockupScript: "Namíbia, sem pressa.",
    creditsH2: "Créditos da imagem",
    creditsBody:
      "As fotografias do cliente são complementadas por imagens licenciadas gratuitamente: Wikimedia Commons (CC BY-SA, CC0), Pexels e Unsplash. A atribuição completa de cada imagem é mantida no registo de licenças do projeto; as páginas de ficheiros do Commons contêm os créditos completos.",
  },
  privacy: {
    title: "Política de privacidade",
    lastUpdated: "Última atualização: Outubro de 2026",
    legalEyebrow: "Legal",
    sections: [
      {
        h: "Quem somos",
        p: [
          `A Liger Tours Namibia é uma operadora de turismo local sediada em Windhoek, Namíbia, registada na Namibia Tourism Board. Pode contactar-nos através de ${company.email} ou ${company.phone} para qualquer questão relacionada com esta política.`,
        ],
      },
      {
        h: "O que recolhemos",
        p: [
          "Quando envia uma consulta através deste website, recolhemos os detalhes que opta por nos fornecer: o seu nome, endereço de email, número de telefone, datas de viagem, tamanho do grupo e o conteúdo da sua mensagem. Utilizamos estes dados apenas para responder à sua consulta e para planear a viagem que solicitou.",
          "Como a maioria dos websites, a nossa plataforma de alojamento mantém registos técnicos padrão, como endereço de IP, tipo de navegador e páginas visitadas, para monitorização de segurança e desempenho.",
        ],
      },
      {
        h: "Como utilizamos a sua informação",
        p: [
          "Utilizamos os detalhes da sua consulta para lhe responder, preparar orçamentos e, se avançar, gerir a sua reserva. Não vendemos a sua informação e não a partilhamos com terceiros, exceto com os prestadores de serviços diretamente envolvidos na execução da sua viagem (como alojamentos e parceiros de atividades) após a confirmação da reserva, ou quando exigido pela lei da Namíbia.",
          "Os detalhes da consulta são mantidos apenas pelo tempo necessário para tratar da sua consulta e de qualquer reserva resultante, após o que são eliminados.",
        ],
      },
      {
        h: "Serviços de terceiros",
        p: [
          "Este website é alojado na Vercel, com os serviços da Cloudflare. A submissão do seu formulário de consulta é armazenada na nossa base de dados de reservas segura. Os links do WhatsApp abrem a aplicação WhatsApp, operada com a sua própria política de privacidade. Não utilizamos rastreadores publicitários neste site.",
        ],
      },
      {
        h: "Os seus direitos",
        p: [
          "Pode pedir-nos a qualquer momento para confirmar que dados pessoais detemos sobre si, corrigi-los ou eliminá-los. Envie-nos um email e agiremos sobre o pedido num período razoável. Se tiver uma queixa sobre a forma como a sua informação é tratada, por favor contacte-nos primeiro para que possamos resolver o problema.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "Este website utiliza apenas cookies ou armazenamento local estritamente necessários para o funcionamento do site e para estatísticas de tráfego anónimas. Não existem cookies de publicidade ou rastreamento entre sites. Pode bloquear cookies no seu navegador e o site continuará a funcionar.",
        ],
      },
      {
        h: "Alterações a esta política",
        p: [
          "Se alterarmos esta política, publicaremos a nova versão nesta página com uma data atualizada. A versão nesta página é a que se aplica.",
        ],
      },
    ],
  },

  terms: {
    title: "Termos de serviço",
    lastUpdated: "Última atualização: Outubro de 2026",
    legalEyebrow: "Legal",
    sections: [
      {
        h: "Estes termos",
        p: [
          `Estes termos aplicam-se quando consulta ou reserva uma viagem com a Liger Tours Namibia ("nós", "conosco"), uma operadora de turismo sediada em Windhoek, Namíbia e registada na Namibia Tourism Board. Ao confirmar uma reserva, aceita estes termos.`,
        ],
      },
      {
        h: "Consultas e orçamentos",
        p: [
          "Cada viagem neste website é orçada individualmente em dólares namibianos (N$) porque os preços dependem do tamanho do seu grupo, da época de viagem e das opções de alojamento. Um orçamento é válido por 14 dias a partir da data em que é enviado, a menos que se indique o contrário. Uma reserva só é confirmada após recebermos a sua confirmação assinada e o pagamento do sinal descrito no orçamento.",
        ],
      },
      {
        h: "Pagamentos",
        p: [
          `É exigido um sinal para garantir as suas datas, com o restante a ser pago antes da partida, tal como descrito no seu orçamento. Todos os pagamentos são orçados e cobrados em dólares namibianos (N$), salvo acordo escrito em contrário. Os dados bancários aparecem apenas em orçamentos e faturas oficiais; trate qualquer pedido para pagar para uma conta diferente como suspeito e ligue-nos para ${company.phone}.`,
        ],
      },
      {
        h: "Alterações e cancelamentos por si",
        p: [
          "Se precisar de alterar datas ou cancelar, contacte-nos o mais cedo possível. Tentaremos sempre mudar as suas datas sem custo quando os alojamentos o permitirem. As taxas de cancelamento seguem o cronograma no seu orçamento e refletem os termos de cancelamento rigorosos dos alojamentos e parques na Namíbia, razão pela qual o seguro de viagem é obrigatório para cada cliente.",
        ],
      },
      {
        h: "Alterações por nós",
        p: [
          "A Namíbia é um país selvagem: estradas são arrastadas, rios enchem e os animais movem-se. Podemos ajustar um itinerário por motivos meteorológicos, condições das estradas, decisões dos parques ou segurança. Qualquer alteração de valor igual ou superior é feita sem custo. Se um componente significativo não puder ser entregue, ofereceremos uma alternativa justa ou um reembolso desse componente.",
        ],
      },
      {
        h: "Seguro, saúde e documentos",
        p: [
          "É obrigatório um seguro de viagem abrangente que cubra custos médicos, evacuação e cancelamento em todas as viagens e deve ser organizado antes da partida. É da sua responsabilidade possuir um passaporte válido, quaisquer vistas necessários e as vacinas recomendadas. Precauções contra a malária aplicam-se no norte da Namíbia; consulte um clínico de viagem antes de viajar.",
        ],
      },
      {
        h: "Responsabilidade",
        p: [
          "Tomamos todos os cuidados razoáveis no planeamento e execução das nossas viagens e utilizamos prestadores registados em todo o percurso. Participa em safaris, caminhadas e atividades por sua conta e risco e deve seguir as instruções do guia em todos os momentos. A nossa responsabilidade está limitada ao permitido pela lei da Namíbia e está sempre sujeita ao requisito de seguro acima mencionado.",
        ],
      },
      {
        h: "Queixas e lei aplicável",
        p: [
          "Se algo não estiver correto, avise o seu guia imediatamente para que possa ser resolvido no local e informe-nos por escrito posteriormente. Estes termos são regidos pelas leis da República da Namíbia, e os tribunais da Namíbia têm jurisdição sobre qualquer disputa.",
        ],
      },
    ],
  },

  faqPage: {
    eyebrow: "Bom saber",
    title: "Perguntas, respondidas.",
    pageHeaderAlt:
      "Dunas vermelhas acima de uma planície verde e de cascalho sob um céu limpo no deserto do Namibe",
    band1Alt:
      "Veículo de safári aberto a transportar hóspedes pela areia vermelha da Namíbia à hora dourada",
    band2Alt:
      "Árvores de acácia mortas na argila branca de Deadvlei sob luz quente da manhã",
    band3Alt:
      "Árvore-de-alobre em silhueta contra o sol no crepúsculo namibiano",
    lead: "As perguntas que os nossos hóspedes fazem antes de reservar, respondidas com honestidade. Faltou a sua? Envie-nos um WhatsApp e ela passa a fazer parte desta página.",
    groups: [
      {
        h: "Reservas e planeamento",
        items: [
          {
            q: "Fazem excursões para grandes grupos?",
            a: "Sim. A Liger Tours conduz excursões guiadas em grupo de qualquer dimensão, de dois viajantes a grupos de cinquenta ou mais. Diga-nos o número de pessoas e nós construímos a rota, o ritmo e os veículos à volta.",
          },
          {
            q: "Como reservo uma excursão?",
            a: "Envie o formulário de pedido ou escreva-nos no WhatsApp com as suas datas, o tamanho do grupo e os lugares que quer ver. Recebe um orçamento completo em dólares namibianos, normalmente dentro de um dia útil, e as suas datas ficam garantidas com o sinal indicado nesse orçamento.",
          },
          {
            q: "Quanto custa uma excursão?",
            a: "Cada excursão é orçamentada individualmente em dólares namibianos (N$) porque o preço depende do tamanho do grupo, da estação e das escolhas de alojamento. Envie um pedido e receberá um orçamento completo, sem nada escondido, normalmente dentro de um dia útil.",
          },
          {
            q: "Podem criar uma rota personalizada?",
            a: "Sim, todas as semanas. Diga-nos o que quer ver e quanto tempo tem, e nós construímos a rota à volta disso, mesmo que seja mais curta do que as excursões deste site.",
          },
        ],
      },
      {
        h: "Na estrada",
        items: [
          {
            q: "Onde começam as excursões?",
            a: "Todas as rotas começam e terminam em Windhoek, o centro do país e o ponto de chegada da maioria dos voos. Confirmamos os detalhes do levantamento consigo antes de viajar.",
          },
          {
            q: "O que está incluído no preço?",
            a: "O seu orçamento cobre o guia e motorista locais, o alojamento da rota reservado para si, as taxas de parques e conservas do itinerário e todo o transporte desde Windhoek e de regresso. Voos internacionais, seguro de viagem, despesas pessoais e atividades opcionais não estão incluídos.",
          },
          {
            q: "Que veículos utilizam?",
            a: "Adaptamos o veículo ao tamanho do seu grupo e à sua rota, e cada veículo é mantido para as longas estradas de cascalho e areia da Namíbia. A configuração exata da sua viagem é confirmada no seu orçamento, antes de pagar qualquer coisa.",
          },
          {
            q: "O que devo levar na bagagem?",
            a: "Na Namíbia, as camadas de roupa são o mais importante: manhãs frias nas dunas, meio-dia quente na estrada. Traga proteção solar, calçado fechado para caminhar, uma máquina fotográfica ou binóculos e qualquer medicação de que precise. O seu orçamento e as notas pré-partida detalham o necessário para a sua rota e estação.",
          },
        ],
      },
      {
        h: "Questões práticas",
        items: [
          {
            q: "Qual é a melhor época para visitar a Namíbia?",
            a: "De maio a outubro é a alta estação, com manhãs frescas, céu limpo e a melhor observação de vida selvagem no Etosha. É também quando os melhores lodges esgotam primeiro, portanto envie o seu pedido o mais cedo possível.",
          },
          {
            q: "Preciso de seguro de viagem?",
            a: "Sim. Um seguro de viagem completo que cubra despesas médicas, evacuação e cancelamento é obrigatório em todas as viagens da Liger Tours e deve ser contratado antes da partida. Os lodges e parques da Namíbia aplicam condições de cancelamento rigorosas, por isso o seguro protege-o tanto como a nós.",
          },
          {
            q: "São uma operadora registada?",
            a: "Sim. A Liger Tours Namibia é uma empresa local registada na Namibia Tourism Board (NTB), que nos exige padrões profissionais em cada etapa da sua viagem.",
          },
          {
            q: "Como funcionam os pagamentos?",
            a: `Um sinal garante as suas datas, com o restante devido antes da partida conforme indicado no seu orçamento. Tudo é orçamentado e cobrado em dólares namibianos (N$). Os dados bancários aparecem apenas nos nossos orçamentos e faturas oficiais; se alguém lhe pedir para pagar para outra conta, ligue-nos primeiro para ${company.phone}.`,
          },
        ],
      },
    ],
    ctaH2: "Ainda a decidir?",
    ctaScript: "Diga-nos as suas datas. Construímos a viagem à volta delas.",
    ctaLead:
      "Envie um pedido e receba um orçamento completo em N$, normalmente dentro de um dia útil. Sem pressão, sem compromisso.",
    ctaPrimary: "Planear a minha viagem",
    ctaWhatsapp: "Fale connosco no WhatsApp",
  },

  disclaimer: {
    title: "Aviso Legal",
    lastUpdated: "Última atualização: outubro de 2026",
    legalEyebrow: "Legal",
    sections: [
      {
        h: "Sobre esta página",
        p: [
          `As informações neste site são publicadas pela Liger Tours Namibia, uma operadora de turismo local registada na Namibia Tourism Board, para o ajudar a planear uma viagem connosco. Descrevem as nossas rotas, atividades e a nossa forma de trabalhar com boa fé. Para tudo o que vincula qualquer uma das partes, contam o orçamento que lhe enviamos, estes termos e a sua confirmação de reserva. Se algo nesta página parecer contradizer o seu orçamento, contacte-nos para ${company.phone} e corrigiremos.`,
        ],
      },
      {
        h: "Rotas, itinerários e imagens",
        p: [
          "A Namíbia é um país selvagem e as condições mudam: estradas lavam-se, rios transbordam, animais movem-se e os lodges fecham ocasionalmente para manutenção. Ajustamos itinerários por causa do tempo, estado das estradas, decisões dos parques e segurança, e qualquer alteração de valor igual ou superior é feita sem custos. Durações e planos diários são confirmados consigo no pedido, para que reserve exatamente o que recebe.",
          "As fotografias deste site mostram lugares reais das nossas rotas e momentos reais das nossas viagens, mas pontos de vista exatos, avistamentos de vida selvagem e luz não podem ser garantidos. A vida selvagem é selvagem e avistamentos nunca são prometidos.",
        ],
      },
      {
        h: "Orçamentos e preços",
        p: [
          "O conteúdo deste site é informativo, não uma oferta. Cada excursão é orçamentada individualmente em dólares namibianos (N$) porque o preço depende do tamanho do grupo, da estação e das escolhas de alojamento. Um orçamento é válido por 14 dias a partir da data de envio, salvo indicação em contrário, e é o orçamento que define o seu sinal, saldo e calendário de cancelamento.",
        ],
      },
      {
        h: "Segurança em viagem",
        p: [
          "Participa em safaris, caminhadas, subidas de dunas e outras atividades por sua conta e risco e deve seguir as instruções do seu guia em todos os momentos. Tomamos todos os cuidados razoáveis no planeamento e execução das nossas viagens e trabalhamos com prestadores registados em toda a Namíbia.",
        ],
      },
      {
        h: "Ligações para outros sites",
        p: [
          "Este site liga a serviços que utilizamos e recomendamos, como o WhatsApp e ferramentas de mapas. Esses sites têm os seus próprios termos e políticas de privacidade, e não somos responsáveis pelo seu conteúdo ou comportamento.",
        ],
      },
      {
        h: "Responsabilidade e lei aplicável",
        p: [
          "A nossa responsabilidade é limitada ao permitido pelas leis da República da Namíbia e está sempre sujeita ao requisito de seguro de viagem dos nossos termos de serviço. Estes termos são regidos pelas leis da República da Namíbia, e os tribunais da Namíbia têm jurisdição sobre qualquer disputa.",
        ],
      },
    ],
  },

  accessibility: {
    title: "Acessibilidade",
    lastUpdated: "Última atualização: outubro de 2026",
    legalEyebrow: "Viagem inclusiva",
    sections: [
      {
        h: "O nosso compromisso",
        p: [
          "Todos deveriam poder planear uma viagem à Namíbia connosco, em qualquer dispositivo e com qualquer capacidade. Este site visa as Web Content Accessibility Guidelines (WCAG) 2.1 ao nível AA, e as nossas excursões são planeadas à volta dos hóspedes que as reservam, quaisquer que sejam as suas necessidades.",
        ],
      },
      {
        h: "Como este site é construído",
        p: [
          "O site utiliza HTML semântico, títulos reais e landmarks etiquetados para que os leitores de ecrã o possam navegar. Cada elemento interativo funciona com teclado, o foco está sempre visível e uma ligação de salto leva-o diretamente ao conteúdo. As imagens têm texto alternativo descritivo, o contraste de cores cumpre os rácios AA e todos os movimentos respeitam a definição de movimento reduzido do seu dispositivo.",
          "O conteúdo está disponível em inglês, alemão, francês, afrikaans e português, e o seletor de idioma mantém-no na página que está a ler.",
        ],
      },
      {
        h: "Limitações conhecidas",
        p: [
          "Somos honestos quanto ao que não controlamos. A ligação do mapa abre o Google Maps, cuja acessibilidade é gerida pela Google. Se algo neste site for difícil de utilizar, diga-nos e corrigiremos: problemas de acessibilidade são tratados como erros urgentes, não como pedidos de funcionalidades.",
        ],
      },
      {
        h: "Acessibilidade em viagem",
        p: [
          "Os espaços selvagens da Namíbia nem sempre são planos ou pavimentados, e algumas atividades como caminhadas nas dunas e nas bordas de cânions exigem uma mobilidade razoável. Diga-nos no pedido quaisquer necessidades de mobilidade, alimentares ou médicas e moldaremos a rota, o ritmo e o alojamento à volta delas, dizendo-lhe com honestidade quando uma atividade não é adequada.",
        ],
      },
      {
        h: "Comentários",
        p: [
          `Se algo neste site ou em viagem for difícil de utilizar, escreva para ${company.email}, ligue para ${company.phone} ou envie-nos um WhatsApp. Respondemos dentro de um dia útil e trabalharemos consigo numa solução.`,
        ],
      },
    ],
  },

  testimonials: [
    {
      quote:
        "O nosso itinerário foi perfeitamente adaptado aos nossos interesses. Gostámos que a equipa recomendou tanto as atrações icónicas como os cantos mais tranquilos que a maioria dos turistas não visita. O serviço foi profissional, amigável e fiável do início ao fim.",
      name: "David e Emma T.",
      country: "Reino Unido",
    },
    {
      quote:
        "Desde o momento em que fizemos a nossa consulta, sentimo-nos valorizados. A comunicação foi rápida, o planeamento foi tranquilo e as nossas férias excederam todas as expectativas. Mal podemos esperar para voltar à Namíbia com a Liger Tours Namibia!",
      name: "Michael R.",
      country: "Alemanha",
    },
    {
      quote:
        "A nossa viagem à Namíbia foi espetacular, e a Liger Tours Namibia tornou cada momento especial. O itinerário foi planeado com cuidado, as recomendações foram excelentes e tudo correu sem problemas do início ao fim. Agradecemos a atenção pessoal e a hospitalidade calorosa ao longo da nossa viagem. Recomendaremos definitivamente a Liger Tours Namibia aos nossos amigos e família em França.",
      name: "Sophie L.",
      country: "França",
    },
  ] as Testimonial[],
  tours: [
    {
      slug: "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha",
      name: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe e Etosha",
      metaTitle: "Roteiro de Safári Assinatura da Namíbia",
      route: "Windhoek para Sossusvlei para Swakopmund para Spitzkoppe para Etosha",
      eyebrow: "Tour assinatura",
      blurb:
        "A nossa viagem assinatura pela Namíbia que combina dunas do deserto, encanto costeiro, picos de granito e encontros com vida selvem excepcionais.",
      description: [
        "Este é o roteiro em torno do qual construímos a empresa. Liga os quatro paisagens que definem a Namíbia: as dunas vermelhas de Sossusvlei, a costa do Atlântico em Swakopmund, os picos de granito de Spitzkoppe e as planicies ricas em vida selvagem do Parque Nacional de Etosha.",
        "Começa e termina em Windhoek, sem voltagens nem dias perdidos. Entre os principais pontos de paragem, o roteiro atravessa algumas das paisagens mais impressionantes do país, com o seu guia a tratar da condução, dos portões do parque e do planeamento, enquanto você observa a paisagem a mudar pela janela.",
      ],
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Veículo de safário aberto com dois hóspedes a conduzir sobre areia vermelha no momento dourado",
      highlights: [
        "Subir às dunas de Sossusvlei com a luz da manhã",
        "Passear pelas ruas e pela zona ribeirinha de Swakopmund na costa do Atlântico",
        "Ver os picos de granito de Spitzkoppe a erguer-se do deserto",
        "Observação de vida selvagem no Parque Nacional de Etosha, uma das grandes reservas de África",
      ],
    },
    {
      slug: "sossusvlei-and-swakopmund",
      name: "Tour de Sossusvlei e Swakopmund",
      metaTitle: "Tour de Sossusvlei e Swakopmund",
      route: "Windhoek para Sossusvlei para Swakopmund",
      eyebrow: "Itinerário curto",
      blurb:
        "Ideal para viajantes que procuram as dunas icónicas e as experiências costeiras da Namíbia num itinerário mais curto.",
      description: [
        "Com pouco tempo? Este roteiro combina as duas paragens mais solicitadas na Namíbia: as dunas de Sossusvlei e a cidade costeira de Swakopmund. É concebido para viajantes que querem os ícones sem comprometerem duas semanas completas.",
        "Ainda terá acesso matinal às dunas, a pan de argila Deadvlei e um verdadeiro gosto da mistura de ar do oceano, arquitetura alemã e atividades de aventura de Swakopmund, tudo a um ritmo fácil a partir de Windhoek.",
      ],
      image: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
      alt: "Uma única árvore morta de espinheiro-camelo no pan de argila branca, com uma duna vermelha a erguer-se atrás",
      highlights: [
        "Manhã cedo nas dunas de Sossusvlei e no pan de argila Deadvlei",
        "Passagens dos cânions Gaub e Kuiseb na estrada para a costa",
        "Um dia completo para desfrutar de Swakopmund e da sua costa",
        "Itinerário curto que se encaixa num fim de semana longo mais dias de viagem",
      ],
    },
    {
      slug: "etosha-and-waterberg",
      name: "Tour do Parque Nacional de Etosha e Waterberg",
      metaTitle: "Tour de Etosha e Waterberg",
      route: "Windhoek para Etosha para Waterberg",
      eyebrow: "Foco na vida selvagem",
      blurb:
        "Explore a famosa vida selvagem de Etosha e a beleza paisagística do Planalto de Waterberg.",
      description: [
        "Concebido em torno da observação de vida selvagem, este tour passa os dias no Parque Nacional de Etosha, onde elefantes, leões, girafas, orixás e rinocerontes se reúnem nas lagoas ao longo do salar.",
        "O roteiro termina no Planalto de Waterberg, uma montanha de mesa de arenito vermelho com trilhos de caminhada e miradouros. É um final mais suave após os inícios cedo dos safári de observação de vida selvagem em Etosha e uma oportunidade para ver o bushveld oriental do parque de cima.",
      ],
      image: "/imagery/crops/rhino-etosha-grass-4x5.webp",
      alt: "Um rinoceronte a pastar em relva dourada com acácias atrás",
      highlights: [
        "Safári completo de observação de vida selvagem no Parque Nacional de Etosha com um guia local",
        "Observação de lagoas em Okaukuejo e nos famosos campos do parque",
        "Miradouros e trilhos de caminhada no Planalto de Waterberg",
        "Grandes probabilidades de avistamentos de elefante, rinoceronte, girafa e grandes felinos",
      ],
    },
    {
      slug: "kalahari-quiver-tree-fish-river-canyon",
      name: "Kalahari, Floresta de Árvores de Flecha e Canyon do Rio Fish",
      metaTitle: "Kalahari e Canyon do Rio Fish",
      route: "Windhoek para Kalahari para Keetmanshoop para Canyon do Rio Fish",
      eyebrow: "Namíbia do Sul",
      blurb:
        "Viaje pelas areias vermelhas do Kalahari e testemunhe as paisagens dramáticas do sul da Namíbia.",
      description: [
        "O sul da Namíbia é um estudo em escala. O roteiro corre das areias vermelhas do Kalahari para a Floresta de Árvores de Flecha perto de Keetmanshoop, depois para sul até ao Canyon do Rio Fish, um dos maiores cânions do continente.",
        "Os dias aqui são sobre luz e silêncio, não sobre listas de tarefas: nascer do sol sobre as dunas, silhuetas de árvores de flecha ao crepúsculo e a borda do canyon nos momentos do dia em que as suas cores mudam minuto a minuto.",
      ],
      image: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
      alt: "Uma árvore de flecha em silhueta contra o sol num céu azul profundo",
      highlights: [
        "Areias vermelhas do Kalahari e estadias em lodge no deserto",
        "A Floresta de Árvores de Flecha em Keetmanshoop, melhor no momento dourado",
        "Canyon do Rio Fish: um dos maiores cânions do mundo",
        "Grandes céus do sul com excelentes observações de estrelas",
      ],
    },
    {
      slug: "swakopmund-damaraland-owamboland-etosha",
      name: "Swakopmund, Damaralândia, Ovambolândia e Etosha",
      metaTitle: "Damaralândia, Ovambolândia, Etosha",
      route: "Swakopmund para Damaralândia para Ovambolândia para Etosha",
      eyebrow: "Cultura e vida selvagem",
      blurb:
        "Descubra as diversas culturas da Namíbia, as paisagens rochosas antigas e a observação de vida selvagem de classe mundial.",
      description: [
        "Este roteiro corre pelo coração cultural do país. Partindo da costa em Swakopmund, dirige-se para a Damaralândia, onde a vida selvagem adaptada ao deserto se move entre formações rochosas e arte rupestre antiga marca séculos de presença humana.",
        "A norte da Damaralândia, o roteiro passa pela Ovambolândia, lar das maiores comunidades da Namíbia e um modo de vida que a maioria dos visitantes nunca vê, antes de terminar com a vida selvagem do Parque Nacional de Etosha.",
      ],
      image: "/imagery/crops/rock-gorge-closeup-4x5.webp",
      alt: "Altas paredes rochosas gastas de um desfiladeiro desértico a fechar por cima contra o céu",
      highlights: [
        "Paisagens rochosas da Damaralândia e arte rupestre antiga",
        "Visitas culturais Owambo fora do roteiro turístico padrão",
        "Vida selvagem adaptada ao deserto num ambiente acidentado",
        "Observação de vida selvagem no Parque Nacional de Etosha para fechar a viagem",
      ],
    },
    {
      slug: "windhoek-sossusvlei-swakopmund-brandberg",
      name: "Windhoek, Sossusvlei, Swakopmund e Brandberg",
      metaTitle: "Sossusvlei, Costa, Brandberg",
      route: "Windhoek para Sossusvlei para Swakopmund para Brandberg",
      eyebrow: "Deserto e costa",
      blurb:
        "Uma mistura perfeita de paisagens desérticas, aventuras na costa do Atlântico e majestosa Montanha Brandberg.",
      description: [
        "Um circuito equilibrado que combina o deserto e a costa com uma paragem no Brandberg, a montanha mais alta da Namíbia e lar do famoso painel de arte rupestre 'Dama Branca'.",
        "A ordem da viagem mantém as longas viagens curtas e coloca-o nas dunas para o nascer do sol e na costa para a brisa marítinha da tarde, com o seu guia a ajustar o ritmo para adequar-se ao seu grupo.",
      ],
      image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
      alt: "Dunas vermelhas a erguer-se sobre uma planície verde e de cascalho sob um céu limpo",
      highlights: [
        "Dunas de Sossusvlei e a paisagem do deserto do Namibe",
        "Costa de Swakopmund: ar do oceano, frutos do mar e atividades de aventura",
        "Brandberg, a montanha mais alta da Namíbia, e a sua arte rupestre",
        "Um roteiro circular sem pernas repetidas",
      ],
    },
    {
      slug: "24-days-namibia-discovery",
      name: "Tour de Descoberta da Namíbia de 24 Dias",
      metaTitle: "Descoberta da Namíbia de 24 Dias",
      route: "Circuito completo pelo país a partir de Windhoek",
      eyebrow: "24 dias",
      blurb:
        "O circuito completo da Namíbia: todas as regiões, todos os pontos altos, num ritmo que permite realmente experienciá-los.",
      description: [
        "O nosso tour mais longo é a descoberta completa da Namíbia: os cânions do sul e o Kalahari, os campos de dunas de Sossusvlei, a Costa dos Esqueletos e Swakopmund, as paisagens rochosas da Damaralândia, as culturas do norte e a vida selvagem de Etosha, tudo numa única viagem contínua.",
        "Vinte e quatro dias é deliberadamente sem pressa. Há tempo para o safári de manhã e para a visita cultural da tarde, para a desvio quando o seu guia sabe que há um miradouro que vale a pena os quilómetros extra, e para dias de descanso entre as longas pernas.",
        "O plano exato dia a dia é moldado em torno das suas datas de viagem e interesses quando consulta, por isso fale connosco cedo: este tour recompensa o planeamento.",
      ],
      image: "/imagery/crops/thatched-chalets-hillside-4x5.webp",
      alt: "Fila de cabanas com telhado de palha sobre estacas abaixo de uma encosta rochosa e vermelha",
      highlights: [
        "Toda a região principal da Namíbia num único roteiro contínuo",
        "Ritmo sem pressa com dias de descanso incluídos entre as longas pernas",
        "Cultura, costa, deserto e vida selvagem sem pressa em nenhum deles",
        "Itinerário moldado em torno das suas datas e interesses",
      ],
    },
  ] as Tour[],
  activities: [
    {
      slug: "game-drive",
      name: "Safari",
      duration: "3 a 4 horas",
      location: "Fora de Windhoek",
      description:
        "Experimente a vida selvagem da Namibia perto de Windhoek. Desfrute de uma safaria guiada onde pode encontrar girafas, zebras, antílopes e outros animais nativos no seu habitat natural.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Oryx gemsbok com chifres longos e retos a ficar numa crista de erva em luz dourada",
    },
    {
      slug: "city-and-township-tour",
      name: "Tour da Cidade e do Township",
      duration: "2 a 3 horas",
      location: "Windhoek",
      description:
        "Descubra o coração de Windhoek. Explore marcos históricos, mercados locais, townships vibrantes e experiencie a vida quotidiana na capital da Namibia.",
      image: "/imagery/crops/windhoek-christuskirche-4x5.webp",
      alt: "Igreja histórica Christuskirche no centro de Windhoek com a sua torre de madeira contra o céu",
    },
    {
      slug: "bar-hopping-windhoek-by-night",
      name: "Tour de Bares: Windhoek à Noite",
      duration: "Tour nocturno",
      location: "Windhoek",
      description:
        "Experimente a vida nocturna de Windhoek com visitas a bares e locais de entretenimento populares. Conheça os locais, desfrute de boa música e descubra a cidade depois do pôr do sol.",
      image: "/imagery/crops/sundowner-drinks-sunset-4x5.webp",
      alt: "Bebidas geladas numa mesa no brilho quente de um pôr do sol na Namibia",
    },
    {
      slug: "taste-namibia-cooking-class",
      name: "Saborear a Namibia: Aula de Cozinha Tradicional",
      duration: "2 a 3 horas",
      location: "Windhoek",
      description:
        "Aprenda a preparar pratos autênticos da Namibia utilizando ingredientes e métodos de cozinha tradicionais. Uma experiência cultural prática para amantes da gastronomia.",
      image: "/imagery/crops/campfire-cooking-pot-4x5.webp",
      alt: "Panela de ferro a cozinhar sobre brasas a brilhar numa fogueira aberta",
    },
    {
      slug: "bushmen-walk",
      name: "Passo à Sabedoria Antiga: A Caminhada dos San",
      duration: "3 horas",
      location: "Perto de Windhoek",
      description:
        "Caminhe com guias San e descubra antigos conhecimentos de sobrevivência, técnicas de rastreio, plantas medicinais e o rico património de uma das culturas mais antigas do mundo.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Oryx gemsbok com chifres longos e retos a ficar numa crista de erva em luz dourada",
    },
    {
      slug: "sunrise-desert-excursion",
      name: "Excursão ao Deserto ao Amanhecer",
      duration: "Meio dia",
      location: "Deserto de Namib",
      description:
        "Veja o deserto ganhar vida à medida que os primeiros raios de sol pintam as dunas em tons de ouro e laranja. Uma experiência perfeita para fotógrafos e amantes da natureza.",
      image: "/imagery/crops/dunes-sunburst-pan-4x5.webp",
      alt: "O sol a surgir sobre dunas acima de uma fina camada de água na areia",
    },
    {
      slug: "photography-tour",
      name: "Tour de Fotografia",
      duration: "Flexível",
      location: "Sob consulta",
      description:
        "Capture as paisagens e a vida selvagem mais icónicas da Namibia com a orientação de especialistas locais que conhecem os melhores pontos de vista e condições de iluminação.",
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Veículo de safaria aberto com dois hóspedes a conduzir sobre areia vermelha no momento dourado",
    },
    {
      slug: "spitzkoppe-hiking",
      name: "Experiência de Caminhada no Spitzkoppe",
      duration: "Meio dia",
      location: "Spitzkoppe",
      description:
        "Explore as dramáticas formações graníticas do Spitzkoppe e desfrute de vistas panorâmicas sobre a paisagem desértica circundante.",
      image: "/imagery/crops/spitzkoppe-massif-4x5.webp",
      alt: "O maciço granítico do Spitzkoppe a erguer-se acima do mato do deserto",
    },
    {
      slug: "swakopmund-coastal-adventure",
      name: "Aventura Costeira de Swakopmund",
      duration: "Dia inteiro",
      location: "Swakopmund",
      description:
        "Desfrute do ponto de encontro único do Oceano Atlântico e do Deserto de Namib com oportunidades para turismo, caminhadas na praia e exploração local.",
      image: "/imagery/crops/walvis-bay-jetty-4x5.webp",
      alt: "Um cais de madeira longo a estender-se para dentro de águas calmas do Atlântico, barcos a vela atracados na baía",
    },
    {
      slug: "sandwich-harbour-4x4",
      name: "Sandwich Harbour: Onde o Oceano Encontra o Deserto",
      duration: "Meio dia",
      location: "Walvis Bay",
      description:
        "Conduza para sul a partir da Walvis Bay e veja as dunas do Namib correrem diretas para o Atlântico. Esta zona húmida protegida no Parque Namib-Naukluft atrai flamingos e pelicanos à sua lagoa, e o único acesso é de 4x4 sobre areia fofa, com o seu guia a ler as marés.",
      image: "/imagery/crops/sandwich-harbour-ocean-dunes-4x5.webp",
      alt: "As dunas do Namib a correrem diretas para as ondas do Atlântico no Sandwich Harbour",
    },
    {
      slug: "etosha-wildlife-safari",
      name: "Safari de Vida Selvagem de Etosha",
      duration: "Dia inteiro",
      location: "Parque Nacional de Etosha",
      description:
        "Passeie um dia inteiro explorando o Parque Nacional de Etosha, famoso pela sua abundância de vida selvagem e excelentes oportunidades de observação de animais.",
      image: "/imagery/crops/elephants-etosha-waterhole-4x5.webp",
      alt: "Elefantes a beber num poço de água lamacento no Parque Nacional de Etosha",
    },
    {
      slug: "stargazing-experience",
      name: "Experiência de Observação de Estrelas",
      duration: "Noite",
      location: "Sob consulta",
      description:
        "A Namibia é lar de alguns dos céus mais escuros do mundo. Passeie uma noite debaixo de um teto de estrelas e aprenda sobre o céu noturno do hemisfério sul.",
      image: "/imagery/crops/namib-night-sky-4x5.webp",
      alt: "A Via Láctea a arcar sobre dunas escuras do deserto à noite",
    },
    {
      slug: "kalahari-cultural-experience",
      name: "Experiência Cultural do Kalahari",
      duration: "Meio dia",
      location: "Kalahari",
      description:
        "Experimente a hospitalidade tradicional do Kalahari, contos de histórias, música e costumes locais enquanto aprende sobre a vida no deserto.",
      image: "/imagery/crops/kalahari-red-sands-4x5.webp",
      alt: "Dunas vermelhas do Kalahari com erva do deserto rara sob um céu suave de noite",
    },
  ] as Activity[],
};
