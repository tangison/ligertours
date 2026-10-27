/* Dictionnaire français : traduction complète de tous les textes visibles.
   Vouvoiement. Pas de tirets cadratins, devise N$, format +264. */

import type { Activity, GalleryPhoto, Testimonial, Tour } from "./shared";
import { company } from "./shared";

export const fr = {
  code: "fr",
  label: "Français",
  ogLocale: "fr_FR",
  quoteMarks: { open: "«\u00A0", close: "\u00A0»" },

  meta: {
    home: {
      title: "Liger Tours Namibia | Circuits guidés en Namibie",
      description:
        "Opérateur local namibien. Circuits guidés en groupe : Sossusvlei, Etosha, Swakopmund, Kalahari. Planifiés selon vos dates et votre groupe.",
    },
    tours: {
      title: "Circuits en Namibie : dunes, faune, côte",
      description:
        "Sept circuits guidés en Namibie : dunes et safari, canyons du sud, routes culturelles et un circuit découverte de 24 jours.",
    },
    activities: {
      title: "Activités à la journée en Namibie",
      description:
        "Safaris photo, Sandwich Harbour en 4x4, townships, marches avec les San, cours de cuisine, Spitzkoppe et ciel étoilé, avec des guides locaux.",
    },
    about: {
      title: "À propos de Liger Tours Namibia",
      description:
        "Liger Tours Namibia est une agence locale enregistrée auprès du NTB. L'équipe, la mission et les valeurs derrière chaque itinéraire.",
    },
    gallery: {
      title: "Galerie : la Namibie en images",
      description:
        "Dunes, faune et lodges des voyages Liger Tours : plaines d'argile du Sossusvlei, sables du Kalahari, faune d'Etosha et hébergements.",
    },
    contact: {
      title: "Contact et demandes",
      description:
        "Planifiez votre voyage en Namibie : téléphone +264 81 472 2552, WhatsApp ou info@ligertours.com. Réponse en un jour ouvré.",
    },
    brand: {
      title: "Marque : couleurs, typographie, logo",
      description:
        "Le système de marque Liger Tours Namibia : couleurs issues du logo, les trois typographies, règles d'usage du logo et éléments graphiques signature.",
    },
    privacy: {
      title: "Politique de confidentialité",
      description:
        "Comment Liger Tours Namibia collecte, utilise et protège vos données personnelles lors d'une demande ou d'une réservation.",
    },
    terms: {
      title: "Conditions générales",
      description:
        "Conditions de réservation des circuits Liger Tours Namibia : devis, paiements en N$, annulations, assurance et responsabilité.",
    },
    faq: {
      title: "Questions fréquentes",
      description:
        "Réponses claires sur les groupes, la réservation, les prix en N$, les véhicules, l'assurance et la meilleure saison pour un circuit en Namibie.",
    },
    disclaimer: {
      title: "Avertissement",
      description:
        "Comment les informations du site s'appliquent à votre demande, votre devis et votre circuit, et les limites de notre responsabilité.",
    },
    accessibility: {
      title: "Accessibilité",
      description:
        "Notre engagement d'accessibilité pour ce site et nos circuits, les limites connues et comment nous envoyer vos remarques.",
    },
  },

  a11y: {
    skip: "Aller au contenu principal",
    languages: "Changer de langue",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    languageDock: "Options de langue",
    homeLink: "Liger Tours Namibia : accueil",
    prevSlide: "Témoignage précédent",
    nextSlide: "Témoignage suivant",
    goToSlide: "Aller au témoignage {n} sur 3",
    lightboxOpen: "Ouvrir l'image : {alt}",
    lightboxPrev: "Image précédente",
    lightboxNext: "Image suivante",
    lightboxClose: "Fermer",
  },

  nav: [
    { href: "/tours", label: "Circuits" },
    { href: "/activities", label: "Activités" },
    { href: "/about", label: "À propos" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ],

  search: {
    label: "Rechercher sur le site",
    placeholder: "Rechercher circuits, activités, lieux",
    noResults: "Aucun résultat. Essayez un lieu ou un mot comme dunes.",
    clear: "Effacer la recherche",
    pages: "Pages",
    tours: "Circuits",
    activities: "Activités",
    resultAria: "Résultat de recherche : {name}",
  },

  langDock: {
    open: "Choisir une langue",
    heading: "Langue",
    current: "Actuelle",
  },

  header: { planTrip: "Planifier mon voyage", whatsapp: "Écrivez-nous sur WhatsApp" },

  footer: {
    blurb:
      "Opérateur touristique local namibien, enregistré auprès de la Namibia Tourism Board. Circuits guidés en groupe à travers la Namibie : désert, côte, canyon et faune.",
    explore: "Explorer",
    contactHeading: "Contact",
    whatsappLabel: "WhatsApp",
    rights: "Tous droits réservés.",
    registered: "Enregistré auprès de la Namibia Tourism Board (NTB)",
    privacy: "Confidentialité",
    terms: "Conditions",
    faq: "FAQ",
    disclaimer: "Avertissement",
    accessibility: "Accessibilité",
    brandLink: "Marque",
    credit: "Made by Tangison Studio",
  },

  hero: {
    kicker: "Guidé par des locaux",
    title: "La Namibie, sans hâte.",
    lead: "Agence locale enregistrée au NTB. Circuits guidés en groupe, des dunes rouges du Sossusvlei à la faune d'Etosha, planifiés selon vos dates et votre rythme.",
    primaryCta: "Planifier mon voyage",
    secondaryCta: "Voir les circuits",
    imageAlt:
      "Véhicule safari ouvert transportant deux voyageurs sur le sable rouge de la Namib à l'heure dorée, ombres de dunes derrière",
  },

  home: {
    intro: {
      eyebrow: "Agence locale, enregistrée NTB",
      h2: "Voyagez avec ceux qui vivent ici.",
      p1: "Liger Tours Namibia est une agence locale bâtie sur une vraie connaissance du terrain. Des safaris aux portes de la capitale aux voyages de plusieurs jours à travers les déserts, les côtes et les réserves du pays, chaque itinéraire est pensé pour vous montrer la vraie Namibie, à un rythme qui vous laisse le temps de la savourer.",
      p2: "En tant qu'agence enregistrée auprès de la Namibia Tourism Board, nous planifions chaque voyage autour des personnes qui le réservent : couples, familles, voyageurs solos et groupes de toute taille, de deux personnes à cinquante et plus, chacun avec un itinéraire, un rythme et un style de voyage qui lui convient.",
      cta: "En savoir plus",
      imageAlt:
        "Une harde d'antilopes paissant dans la savane verte parmi des acacias épars",
    },
    stats: {
      ariaLabel: "Liger Tours en chiffres",
      items: [
        { value: 7, suffix: "", label: "Itinéraires signature" },
        { value: 13, suffix: "", label: "Expériences guidées" },
        { value: 100, suffix: "%", label: "Capital local" },
        { label: "Opérateur certifié", raw: "NTB" },
      ],
    },
    tours: {
      eyebrow: "Où nous allons",
      h2: "Circuits signature, dessinés pour vous.",
      cta: "Voir tous les itinéraires",
      ariaLabel: "Circuits signature",
    },
    pinned: {
      quote: "Arbres anciens. Dunes géantes.",
      sub: "Votre matin.",
      imageAlt:
        "Acacias morts sur l'argile blanche de Deadvlei, entourés de dunes rouges immenses sous un ciel bleu profond",
      ariaLabel: "Le paysage du Namib",
    },
    why: {
      eyebrow: "Pourquoi Liger Tours",
      h2: "Ce qui fait la différence.",
      ariaLabel: "Pourquoi voyager avec nous",
      items: [
        {
          n: "1",
          title: "Expertise locale",
          body: "Des guides qui connaissent l'histoire, la faune, les cultures de la Namibie et les coins tranquilles que la plupart des itinéraires ignorent.",
        },
        {
          n: "2",
          title: "Expériences authentiques",
          body: "Marches avec les San, cours de cuisine traditionnelle, visites de townships : des rencontres vraies, organisées avec respect.",
        },
        {
          n: "3",
          title: "Service personnalisé",
          body: "Chaque circuit est adapté aux couples, familles, groupes et voyageurs solos, de la première demande au retour.",
        },
        {
          n: "4",
          title: "Confort et sécurité",
          body: "Le confort et la sécurité sont des priorités à chaque étape du voyage, pas des options.",
        },
        {
          n: "5",
          title: "Opérateur enregistré",
          body: "Enregistré auprès de la Namibia Tourism Board (NTB) et tenu à des standards professionnels à chaque étape.",
        },
      ],
    },
    activities: {
      eyebrow: "Excursions et expériences",
      h2: "Peu de temps ? Commencez ici.",
      cta: "Voir toutes les expériences",
      ariaLabel: "Activités",
    },
    stay: {
      eyebrow: "Où vous dormez",
      h2: "Des lodges choisis comme pour famille.",
      p: "Des lodges en bois sur les dunes du Kalahari aux chalets de chaume au-dessus des lits de rivière, chaque étape d'un circuit Liger est un lieu où nous avons dormi nous-mêmes et que nous recommanderions à notre famille. Du confort là où il compte, du caractère partout, et des emplacements choisis pour la vue du réveil.",
      cta: "Voir les itinéraires",
      imageAlt1:
        "Rangée de chalets à toit de chaume sur pilotis le long d'une colline rouge rocailleuse, vus de dessous",
      imageAlt2:
        "Cabane lodge en bois au toit vert posée sur le sable rouge du Kalahari sous un ciel dégagé",
    },
    testimonials: {
      eyebrow: "Ils en parlent",
      h2: "Ce que disent nos voyageurs.",
      ariaLabel: "Ce que disent nos voyageurs",
    },
    faq: {
      eyebrow: "Bon à savoir",
      h2: "Ce que les voyageurs demandent.",
      ariaLabel: "Questions fréquentes",
      moreLink: "Plus de réponses sur la page FAQ",
      items: [
        {
          q: "Organisez-vous des circuits pour grands groupes ?",
          a: "Oui. Liger Tours encadre des circuits guidés en groupe de toute taille, de deux voyageurs à des groupes de cinquante personnes et plus. Indiquez-nous vos effectifs : nous construisons l'itinéraire, le rythme et les véhicules autour.",
        },
        {
          q: "Où commencent les circuits ?",
          a: "Chaque itinéraire commence et finit à Windhoek, au centre du pays et point d'arrivée de la plupart des vols. Nous confirmons les détails de prise en charge avant votre voyage.",
        },
        {
          q: "Combien coûte un circuit ?",
          a: "Chaque circuit est chiffré individuellement en dollars namibiens (N$), car le prix dépend de la taille du groupe, de la saison et des hébergements choisis. Envoyez une demande : vous recevez un devis complet, généralement sous un jour ouvré.",
        },
        {
          q: "Quelle est la meilleure période pour visiter la Namibie ?",
          a: "De mai à octobre, c'est la haute saison : matins frais, ciel dégagé et meilleure observation de la faune dans l'Etosha. C'est aussi la période où les meilleurs lodges se remplissent en premier, écrivez-nous donc le plus tôt possible.",
        },
        {
          q: "Êtes-vous un opérateur enregistré ?",
          a: "Oui. Liger Tours Namibia est une agence locale enregistrée auprès de la Namibia Tourism Board (NTB), qui nous impose des standards professionnels à chaque étape de votre voyage.",
        },
        {
          q: "Pouvez-vous créer un itinéraire sur mesure ?",
          a: "Oui, chaque semaine. Dites-nous ce que vous voulez voir et le temps dont vous disposez, et nous construisons l'itinéraire autour, même s'il est plus court que les circuits de ce site.",
        },
      ],
    },
    cta: {
      h2: "Prêts quand vous l'êtes.",
      script: "Donnez-nous vos dates. Nous construirons le voyage autour.",
      primaryCta: "Planifier mon voyage",
      whatsappCta: "Écrivez-nous sur WhatsApp",
    },
  },

  toursPage: {
    eyebrow: "Circuits",
    title: "Choisissez votre Namibie.",
    pageHeaderAlt:
      "Dunes rouges dominant une plaine verte et graveleuse sous un ciel dégagé dans le désert du Namib",
    lead: "Chaque itinéraire commence et finit à Windhoek et s'adapte à vos dates et à votre groupe. Les durées sont confirmées avec vous à la demande : rien sur cette page n'est deviné.",
    multiDay: "Itinéraires de plusieurs jours",
    longHaul: "Le grand voyage",
    customTitle: "Aucun ne vous convient tout à fait ?",
    customBody:
      "Dites-nous ce que vous voulez voir et le temps dont vous disposez. Nous créons des itinéraires sur mesure chaque semaine.",
    notSureH2: "Pas encore sûr de l'itinéraire ?",
    notSureLead:
      "Envoyez-nous vos dates et vos envies. Nous répondrons avec une recommandation honnête, même si c'est un voyage plus court que prévu.",
    planCta: "Planifier mon voyage",
    whatsappCta: "Écrivez-nous sur WhatsApp",
    enquireAria: "Demander un devis",
  },

  tourDetail: {
    route: "Itinéraire",
    duration: "Durée",
    confirmedAtEnquiry: "Confirmée à la demande",
    groupSize: "Taille du groupe",
    groupSizeValue: "Votre groupe uniquement",
    departs: "Départ",
    departsValue: "Windhoek, à vos dates",
    theRoute: "L'itinéraire",
    dayByDay: "Jour par jour",
    dayByDayLead:
      "Le programme précis est confirmé avec vous à la demande et adapté à vos dates. Ces étapes ne changent jamais.",
    included: "Inclus",
    notIncluded: "Non inclus",
    includedItems: [
      "Guide et chauffeur locaux pour tout l'itinéraire",
      "Frais des parcs et réserves prévus au programme",
      "Hébergements de l'itinéraire, réservés pour vous",
      "Tous les transferts de l'itinéraire depuis et vers Windhoek",
    ],
    notIncludedItems: [
      "Vols internationaux vers et depuis la Namibie",
      "Assurance voyage (obligatoire avant le départ)",
      "Dépenses personnelles, boissons et souvenirs",
      "Activités optionnelles non prévues à l'itinéraire",
    ],
    priceNote:
      "Les prix dépendent de la taille de votre groupe, de la saison et des hébergements choisis, c'est pourquoi chaque circuit est chiffré individuellement en N$. Envoyez le formulaire de demande et vous recevrez un devis complet, sans frais cachés, généralement en un jour ouvré.",
    enquiryTitle: "Demander ce circuit",
    enquiryLead:
      "Indiquez-nous vos dates et votre groupe. Nous répondons avec un devis personnalisé et un avis honnête sur le calendrier.",
    whatsappCta: "Plutôt WhatsApp ? Écrivez-nous maintenant",
        viewTour: "Voir le circuit",
    moreTours: "D'autres itinéraires qui pourraient vous plaire",
    viewTourAria: "Voir le circuit : {name}",
    touristType: "Circuit guidé en groupe",
    enquireAria: "Demander ce circuit",
  },

  activitiesPage: {
    eyebrow: "Activités",
    title: "Donnez du sens à une journée.",
    pageHeaderAlt:
      "Oryx gemsbok sur une crête herbeuse dans la lumière dorée du soir",
    lead: "Des expériences à la journée, à réserver seules ou à ajouter à n'importe quel circuit. Tout se déroule avec des guides locaux, pour des groupes de toute taille, aux heures qui ont du sens pour la lumière et les animaux.",
    addToTrip: "Ajouter à mon voyage",
    addH2: "Ajoutez l'une de ces expériences à votre circuit.",
    addLead:
      "La plupart des voyageurs réservent une ou deux expériences à la journée autour d'un circuit plus long. Dites-nous ce qui vous a séduit et nous l'intégrerons au programme.",
    planCta: "Planifier mon voyage",
    whatsappCta: "Écrivez-nous sur WhatsApp",
    addAria: "Ajouter une activité à votre circuit",
  },

  aboutPage: {
    eyebrow: "À propos",
    title: "Local, et fier de l'être.",
    pageHeaderAlt:
      "Rangée de chalets à toit de chaume sur pilotis sous une colline rouge rocailleuse au ciel dégagé",
    storyEyebrow: "Notre histoire",
    storyH2: "Construite par des gens qui ont grandi avec cette terre.",
    story: [
      "Liger Tours Namibia est une agence locale bâtie sur une idée simple : la meilleure façon de voir la Namibie, c'est avec ceux qui l'appellent chez eux. L'agence a été fondée par un diplômé en sciences de l'environnement dont le respect de la nature et du voyage durable façonne chaque itinéraire, du safari matinal aux portes de la capitale au voyage de plusieurs jours à travers le pays.",
      "En tant qu'agence enregistrée auprès de la Namibia Tourism Board (NTB), Liger Tours Namibia s'impose des standards professionnels à chaque étape. Les circuits sont planifiés autour des voyageurs qui les réservent : couples, familles, groupes et voyageurs solos reçoivent chacun un itinéraire, un rythme et un style de voyage qui leur conviennent, le confort et la sécurité étant traités comme des priorités, pas comme des extras.",
      "Chaque circuit met en valeur les paysages, la faune et les cultures de la Namibie tout en promouvant un tourisme responsable et durable. Cela signifie des guides locaux, des rencontres culturelles vraies organisées avec respect, et des itinéraires qui laissent chaque lieu tel qu'ils l'ont trouvé.",
    ],
    missionEyebrow: "Notre mission",
    mission:
      "Proposer des voyages de qualité qui relient les voyageurs aux paysages, à la faune et aux habitants de la Namibie, tout en promouvant un tourisme responsable et durable.",
    visionEyebrow: "Notre vision",
    vision:
      "Devenir l'une des agences les plus fiables et inspirantes de Namibie, en offrant des expériences exceptionnelles qui révèlent les merveilles naturelles, les cultures riches et l'hospitalité chaleureuse du pays.",
    valuesEyebrow: "Ce qui nous distingue",
    valuesH2: "Cinq choses que nous ne négocions pas.",
    values: [
      {
        title: "Expertise locale",
        body: "Nos guides connaissent en profondeur l'histoire, la faune, les cultures de la Namibie et les coins tranquilles que la plupart des itinéraires ignorent.",
      },
      {
        title: "Expériences authentiques",
        body: "Des marches avec les San aux cours de cuisine traditionnelle, des townships aux aventures dans le désert : nous privilégions les rencontres culturelles vraies.",
      },
      {
        title: "Service personnalisé",
        body: "Nous adaptons nos circuits aux couples, familles, groupes et voyageurs solos, de la première demande au retour.",
      },
      {
        title: "Confort et sécurité",
        body: "Votre confort et votre sécurité sont nos priorités absolues tout au long du voyage, dans le véhicule comme à chaque arrêt.",
      },
      {
        title: "Passion pour la Namibie",
        body: "Nous sommes déterminés à partager la beauté et le caractère unique de notre pays avec des visiteurs du monde entier.",
      },
    ],
    panel:
      "Enregistré auprès de la Namibia Tourism Board, au service de groupes dans toute la Namibie.",
    planCta: "Planifier mon voyage",
    storyImageAlt:
      "Clients de Liger Tours réunis au panneau du tropique du Capricorne sur un sol désertique rouge",
    moments: {
      eyebrow: "De nos voyages",
      h2: "Des moments réels, pris sur la route.",
      lead: "Clients au tropique du Capricorne, une marche sur la plage atlantique, un arrêt où le désert rejoint la route : des photographies de voyages Liger, pas une banque d'images.",
      alt1:
        "Quatre clients sur une large plage atlantique, l'un accroupi pour photographier des empreintes dans le sable",
      alt2:
        "Camions alignés à un arrêt routier du désert sous un auvent",
      alt3:
        "Bâtiments en bois vieillis lentement ensevelis par le sable du désert",
    },
  },

  galleryPage: {
    eyebrow: "Galerie",
    title: "Le pays, sans retouche.",
    pageHeaderAlt:
      "Acacias morts sur une plaine d'argile pâle avec une immense dune rouge derrière",
    lead: "Des photographies de nos voyages, utilisées exactement comme elles sont sorties de l'appareil. Sélectionnez une image pour l'ouvrir, naviguez avec les flèches et fermez avec Échap.",
    seeH2: "Encore mieux en vrai.",
    seeLead:
      "Chaque photographie ici a été prise sur un itinéraire Liger. Venez prendre les vôtres.",
    planCta: "Planifier mon voyage",
    whatsappCta: "Écrivez-nous sur WhatsApp",
    seeAria: "Voir par vous-même",
    photos: [
      {
        src: "/imagery/crops/safari-vehicle-red-sand-1x1.webp",
        alt: "Véhicule safari ouvert avec deux voyageurs sur le sable rouge à l'heure dorée",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-1x1.webp",
        alt: "Oryx gemsbok aux longues cornes droites sur une crête herbeuse dans la lumière dorée",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
        alt: "Un arbre mort solitaire sur la plaine d'argile blanche, une dune rouge se dressant derrière",
        tall: true,
      },
      {
        src: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
        alt: "Un quivrier en silhouette contre le soleil dans un ciel bleu profond",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-16x9.webp",
        alt: "Acacias morts sur une plaine d'argile blanche sous des dunes rouges et un ciel bleu profond",
      },
      {
        src: "/imagery/crops/elephants-etosha-waterhole-1x1.webp",
        alt: "Éléphants buvant à une mare d'Etosha National Park",
      },
      {
        src: "/imagery/crops/giraffes-walking-savanna-1x1.webp",
        alt: "Trois girafes marchant en file entre des acacias verts",
      },
      {
        src: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
        alt: "Cabane lodge en bois au toit vert sur une dune de sable rouge sous un ciel bleu",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-warm-light-1x1.webp",
        alt: "Arbres morts nus sur l'argile pâle avec une dune rouge derrière",
      },
      {
        src: "/imagery/crops/tropic-capricorn-group-16x9.webp",
        alt: "Clients de Liger Tours réunis au panneau du tropique du Capricorne sur un sol désertique rouge",
      },
      {
        src: "/imagery/crops/quiver-tree-forest-dusk-16x9.webp",
        alt: "Quivriers en silhouette contre un ciel de crépuscule orangé",
      },
      {
        src: "/imagery/crops/coast-beach-group-4x5.webp",
        alt: "Quatre clients sur une large plage atlantique, l'un accroupi pour photographier des empreintes dans le sable",
        tall: true,
      },
      {
        src: "/imagery/crops/red-dunes-valley-plain-16x9.webp",
        alt: "Dunes rouges dominant une plaine verte et graveleuse sous un ciel dégagé",
      },
      {
        src: "/imagery/crops/thatched-chalets-hillside-1x1.webp",
        alt: "Rangée de chalets à toit de chaume sur pilotis sous une colline rouge rocailleuse",
        tall: true,
      },
      {
        src: "/imagery/crops/flamingos-walvis-bay-1x1.webp",
        alt: "Flamants roses pataugeant dans l'eau bleu peu profonde de la lagune de Walvis Bay",
      },
      {
        src: "/imagery/crops/sandwich-harbour-ocean-dunes-16x9.webp",
        alt: "Les dunes du Namib plongeant droit dans les vagues de l'Atlantique à Sandwich Harbour",
      },
      {
        src: "/imagery/crops/rhino-and-ostrich-grassland-1x1.webp",
        alt: "Un rhinocéros broutant dans l'herbe verte avec une autruche à côté",
      },
      {
        src: "/imagery/crops/dunes-sunburst-pan-16x9.webp",
        alt: "Le soleil perce au-dessus des dunes, au-dessus d'une fine pellicule d'eau sur le sable",
      },
      {
        src: "/imagery/crops/fish-river-canyon-view-16x9.webp",
        alt: "Fish River Canyon serpentant entre des parois rocheuses stratifiées au soir",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-16x9.webp",
        alt: "Oryx gemsbok sur une crête herbeuse dans la lumière dorée du soir",
      },
      {
        src: "/imagery/crops/overland-road-stop-16x9.webp",
        alt: "Camions alignés à un arrêt routier du désert sous un auvent",
      },
      {
        src: "/imagery/crops/namib-night-sky-4x5.webp",
        alt: "La Voie lactée en arche au-dessus des dunes sombres du désert la nuit",
        tall: true,
      },
      {
        src: "/imagery/crops/spitzkoppe-granite-peaks-1x1.webp",
        alt: "Bloc de granit en équilibre du Spitzkoppe au-dessus de la plaine du désert",
      },
      {
        src: "/imagery/crops/deadvlei-grove-16x9.webp",
        alt: "Un bosquet d'arbres morts sur la plaine d'argile blanche sous les dunes rouges",
      },
      {
        src: "/imagery/crops/safari-vehicle-red-sand-16x9.webp",
        alt: "Traces de safari sur le sable rouge à l'heure dorée",
      },
      {
        src: "/imagery/crops/sand-buried-ruins-16x9.webp",
        alt: "Bâtiments en bois vieillis lentement ensevelis par le sable du désert",
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
        alt: "Acacias morts et dunes rouges sous un ciel bleu profond",
        tall: true,
      },
    ] as GalleryPhoto[],
  },

  contactPage: {
    eyebrow: "Contact",
    title: "Donnez-nous vos dates.",
    pageHeaderAlt:
      "Véhicule safari ouvert traversant le sable rouge à l'heure dorée, ombres de dunes derrière",
    formH2: "Envoyer une demande",
    formLead:
      "Plus vous nous en dites, meilleure sera la première réponse. Dates, taille du groupe, lieux que vous savez déjà vouloir voir : tout nous aide à répondre avec du concret plutôt qu'avec une brochure.",
    panelH2: "Contact direct",
    phone: "Téléphone",
    whatsapp: "WhatsApp",
    chatWithUs: "Discutez avec nous",
    email: "E-mail",
    whereWeAre: "Où nous trouver",
    hours: "Horaires",
    mapCta: "Ouvrir la carte",
    seasonH2: "Les meilleurs mois se réservent tôt.",
    seasonLead:
      "De mai à octobre, c'est la haute saison en Namibie et les meilleurs lodges autour d'Etosha et du Sossusvlei se remplissent des mois à l'avance. Plus tôt vous demandez, meilleur sera le voyage que nous pourrons construire.",
    seasonAria: "Anticiper",
  },

  form: {
    name: "Nom *",
    nameError: "Dites-nous votre nom.",
    email: "E-mail *",
    emailError:
      "Indiquez une adresse e-mail valide pour que nous puissions répondre.",
    phone: "Téléphone ou WhatsApp",
    phonePlaceholder: "+264 ...",
    groupSize: "Taille du groupe",
    groupSizePlaceholder: "2 adultes",
    dates: "Dates de voyage",
    datesPlaceholder: "Autour du 5 au 18 juillet 2027",
    message: "Votre message *",
    messageError:
      "Ajoutez quelques détails sur votre voyage (10 caractères ou plus).",
    messagePlaceholder:
      "Dites-nous où vous voulez aller, pour combien de temps et ce que vous voulez voir.",
    submit: "Envoyer ma demande",
    sending: "Envoi en cours...",
    successTitle: "Merci, votre demande est bien envoyée.",
    successBody: `Nous répondons personnellement à chaque demande, généralement en un jour ouvré. Si vos dates approchent, écrivez-nous sur WhatsApp au ${company.phone} et nous nous en occupons immédiatement.`,
    whatsappCta: "Écrivez-nous sur WhatsApp",
    generalError:
      "Une erreur est survenue lors de l'envoi. Réessayez, ou contactez-nous sur WhatsApp.",
  },

  notFound: {
    title: "Page introuvable",
    h1: "Cette piste ne mène nulle part.",
    lead: "La page que vous cherchez a été déplacée ou n'a jamais existé. Les routes ci-dessous mènent toutes à quelque chose de beau.",
    back: "Retour à l'accueil",
    viewTours: "Voir les circuits",
  },

  errorPage: {
    h1: "Quelque chose a cassé chez nous.",
    lead: "Comme tout bon véhicule de safari, la page sera réparée sous peu. Réessayez, et si cela persiste, écrivez-nous sur WhatsApp et nous le réglons à la main.",
    tryAgain: "Réessayer",
    back: "Retour à l'accueil",
    whatsapp: "Écrivez-nous sur WhatsApp",
  },

  brandPage: {
    eyebrow: "Marque",
    title: "La marque Liger, sur une page.",
    pageHeaderAlt:
      "Acacias morts sur une plaine d'argile blanche sous des dunes rouges et un ciel bleu profond",
    logoH2: "Logo",
    logoBody:
      "Un seul logo, uniquement les variantes fournies. Le logo complet ne se pose jamais dans une boîte, une pastille ou un cercle, n'est jamais recoloré, étiré ou restylé, et ne se pose jamais sur une photo chargée sans voile crépusculaire. La zone de respiration autour du logo égale un tiers de la hauteur de la couronne de l'arbre. En dessous de 140px de large, passer au wordmark ou à l'icône.",
    onLight: "Sur fonds clairs",
    onDark: "Sur fonds sombres",
    mono: "Variantes mono",
    coloursH2: "Couleurs",
    coloursBody:
      "Chaque valeur est prélevée directement sur le logo : le rose des lettres et du lever de soleil, l'olive de l'acacia, le presque noir nocturne pour les sections sombres. Le rose est la marque ; les composants utilisent les tokens sémantiques, jamais les hex bruts.",
    swatch: "Échantillon",
    colourName: "Jeton",
    colourHex: "Hex",
    colourUse: "Usage",
    colourUseBg: "Fond de page par défaut",
    colourUseAlt: "Sections alternées",
    colourUseTint: "Panneaux vedettes, fonds d'arcades",
    colourUseBorder: "Bordures, séparateurs",
    colourUseDiscs: "Disques solaires, contour d'arcade, décoration",
    colourUseDeco: "Décoratif uniquement",
    colourUseDisplay: "Texte d'affichage large uniquement",
    colourUseBrand: "Boutons, liens, accents de titres",
    colourUseHover: "Survol, panneaux soutenus",
    colourUseInk: "Texte courant",
    colourUseNight: "Sections sombres, pied de page",
    colourUseAcacia: "Couleur de l'arbre du logo, anneau de focus sur clair",
    colourUseSunrise: "Petits accents sur sombre, anneau de focus",
    typeH2: "Typographie",
    typeBody:
      "Trois familles, toutes sous licence libre, auto-hébergées avec font-display swap. Deux rôles à l'écran en même temps, c'est la norme ; la script reste réservée pour garder son impact.",
    typeRows: [
      {
        label: "H1 / héros : Kaushan Script",
        sample: "La Namibie, sans hâte.",
        note: "Écriture manuelle faisant écho aux lettres du logo. Grandes tailles uniquement, casse de phrase, jamais gras ni en capitales.",
      },
      {
        label: "Titres et interface : Archivo",
        sample: "Désert, côte, canyon et faune.",
        note: "Largeur et graisse variables. Large et gras pour l'impact. Capitales uniquement pour les surtitres, libellés et boutons.",
      },
      {
        label: "Texte courant : Schibsted Grotesk",
        sample:
          "Des phrases simples qui nomment des lieux réels, des durées réelles et ce que le voyageur fait vraiment. Aligné à gauche, interligne généreux, rien sous 14px.",
        note: "Regular pour la lecture, semibold pour l'accent. 62 caractères par ligne au maximum.",
      },
    ],
    devicesH2: "Éléments signature",
    devicesBody:
      "Quatre éléments récurrents portent l'identité : les photos en arcade avec un fin contour décalé, les disques solaires qui se chevauchent derrière les photos (jamais plus de deux par écran), les lignes de dunes courbes à la couleur de la section suivante, et le bloc titre associant un surtitre Archivo à une phrase manuscrite.",
    deviceCaptions: ["Masque arcade, 4:5", "Disques solaires, max 2", "Ligne de dunes", "Bloc titre"],
    lockupKicker: "Guidé par des locaux",
    lockupScript: "La Namibie, sans hâte.",
    creditsH2: "Crédits photo",
    creditsBody:
      "Les photos du client sont complétées par des images sous licence libre : Wikimedia Commons (CC BY-SA, CC0), Pexels et Unsplash. L'attribution complète de chaque image figure dans le journal de licences du projet ; les pages des fichiers Commons portent les crédits intégraux.",
  },

  privacy: {
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : octobre 2026",
    legalEyebrow: "Mentions légales",
    sections: [
      {
        h: "Qui nous sommes",
        p: [
          `Liger Tours Namibia est un opérateur touristique local basé à Windhoek, en Namibie, enregistré auprès de la Namibia Tourism Board. Pour toute question relative à cette politique, écrivez à ${company.email} ou appelez le ${company.phone}.`,
        ],
      },
      {
        h: "Ce que nous collectons",
        p: [
          "Lorsque vous envoyez une demande via ce site, nous collectons les informations que vous choisissez de nous donner : nom, adresse e-mail, numéro de téléphone, dates de voyage, taille du groupe et contenu de votre message. Nous les utilisons uniquement pour répondre à votre demande et planifier le voyage demandé.",
          "Comme la plupart des sites, notre plateforme d'hébergement conserve des journaux techniques standards (adresse IP, type de navigateur, pages visitées) pour la sécurité et la performance.",
        ],
      },
      {
        h: "Comment nous utilisons vos informations",
        p: [
          "Nous utilisons les détails de votre demande pour vous répondre, préparer des devis et, si vous poursuivez, gérer votre réservation. Nous ne vendons pas vos informations et ne les partageons pas avec des tiers, sauf avec les prestataires directement impliqués dans votre voyage (lodges et partenaires d'activités) une fois réservé, ou lorsque la loi namibienne l'exige.",
          "Les détails des demandes sont conservés le temps nécessaire au traitement de la demande et de l'éventuelle réservation, puis supprimés.",
        ],
      },
      {
        h: "Services tiers",
        p: [
          "Ce site est hébergé sur Vercel derrière des services Cloudflare. Votre formulaire est enregistré dans notre base de données sécurisée. Les liens WhatsApp ouvrent WhatsApp, régi par sa propre politique de confidentialité. Nous n'utilisons aucun traceur publicitaire sur ce site.",
        ],
      },
      {
        h: "Vos droits",
        p: [
          "Vous pouvez nous demander à tout moment de confirmer les données personnelles que nous détenons, de les corriger ou de les supprimer. Écrivez-nous et nous traiterons la demande dans un délai raisonnable. En cas de réclamation sur le traitement de vos données, contactez-nous d'abord afin de corriger le tir.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "Ce site n'utilise que des cookies ou le stockage local strictement nécessaires à son fonctionnement et à des statistiques anonymisées. Aucun cookie publicitaire ni de suivi inter-sites. Vous pouvez bloquer les cookies dans votre navigateur, le site continue de fonctionner.",
        ],
      },
      {
        h: "Modification de cette politique",
        p: [
          "En cas de modification, la nouvelle version sera publiée sur cette page avec une date mise à jour. La version présente sur cette page est celle qui s'applique.",
        ],
      },
    ],
  },

  terms: {
    title: "Conditions générales",
    lastUpdated: "Dernière mise à jour : octobre 2026",
    legalEyebrow: "Mentions légales",
    sections: [
      {
        h: "Ces conditions",
        p: [
          `Ces conditions s'appliquent lorsque vous demandez ou réservez un circuit auprès de Liger Tours Namibia (« nous »), opérateur touristique basé à Windhoek, en Namibie, et enregistré auprès de la Namibia Tourism Board. En confirmant une réservation, vous acceptez ces conditions.`,
        ],
      },
      {
        h: "Demandes et devis",
        p: [
          "Chaque circuit de ce site est chiffré individuellement en dollars namibiens (N$), car les prix dépendent de la taille du groupe, de la saison et des hébergements choisis. Un devis est valable 14 jours à compter de son envoi, sauf mention contraire. Une réservation n'est confirmée qu'à réception de votre confirmation signée et de l'acompte décrit dans le devis.",
        ],
      },
      {
        h: "Paiements",
        p: [
          `Un acompte est nécessaire pour bloquer vos dates, le solde étant réglé avant le départ selon les modalités du devis. Tous les paiements sont libellés et encaissés en dollars namibiens (N$) sauf accord écrit contraire. Les coordonnées bancaires n'apparaissent que sur les devis et factures officiels ; considérez toute demande de paiement vers un autre compte comme suspecte et appelez-nous au ${company.phone}.`,
        ],
      },
      {
        h: "Modifications et annulations de votre part",
        p: [
          "Si vous devez changer de dates ou annuler, écrivez-nous le plus tôt possible. Nous décalons vos dates sans frais dès que les lodges le permettent. Les frais d'annulation suivent le barème de votre devis et reflètent les conditions strictes d'annulation des lodges et parcs namibiens, c'est pourquoi une assurance voyage est obligatoire pour chaque voyageur.",
        ],
      },
      {
        h: "Modifications de notre part",
        p: [
          "La Namibie est un pays sauvage : les pistes s'effacent, les rivières débordent et les animaux se déplacent. Nous pouvons ajuster un itinéraire pour la météo, l'état des routes, les décisions des parcs ou la sécurité. Toute modification de valeur égale ou supérieure se fait sans frais. Si un élément majeur ne peut être fourni, nous proposons une alternative équitable ou le remboursement de cet élément.",
        ],
      },
      {
        h: "Assurance, santé et documents",
        p: [
          "Une assurance voyage complète couvrant les frais médicaux, l'évacuation et l'annulation est obligatoire sur tous les circuits et doit être souscrite avant le départ. Vous êtes responsable de la validité de votre passeport, des visas éventuels et des vaccinations recommandées. Des précautions contre le paludisme s'appliquent dans le nord de la Namibie ; prenez conseil auprès d'un centre de médecine des voyages avant de partir.",
        ],
      },
      {
        h: "Responsabilité",
        p: [
          "Nous prenons toutes les précautions raisonnables dans la planification et la conduite de nos circuits et travaillons exclusivement avec des prestataires enregistrés. Vous participez aux safaris, marches et activités à vos propres risques et devez suivre en permanence les consignes de votre guide. Notre responsabilité est limitée dans les limites permises par la loi namibienne et reste soumise à l'obligation d'assurance ci-dessus.",
        ],
      },
      {
        h: "Réclamations et droit applicable",
        p: [
          "Si quelque chose ne va pas, dites-le immédiatement à votre guide afin que cela soit réglé sur place, puis informez-nous par écrit. Ces conditions sont régies par les lois de la République de Namibie, et les tribunaux namibiens ont compétence sur tout litige.",
        ],
      },
    ],
  },

  faqPage: {
    eyebrow: "Bon à savoir",
    title: "Questions, réponses.",
    pageHeaderAlt:
      "Dunes rouges dominant une plaine verte et graveleuse sous un ciel dégagé dans le désert du Namib",
    band1Alt:
      "Véhicule safari ouvert transportant des invités sur le sable rouge namibien à l'heure dorée",
    band2Alt:
      "Acacias morts sur l'argile blanche de Deadvlei dans la lumière douce du matin",
    band3Alt:
      "Quiver tree en silhouette face au soleil dans le crépuscule namibien",
    lead: "Les questions que posent nos voyageurs avant de réserver, auxquelles nous répondons honnêtement. Il en manque une ? Écrivez-nous sur WhatsApp et elle rejoint cette page.",
    groups: [
      {
        h: "Réservation et préparation",
        items: [
          {
            q: "Organisez-vous des circuits pour grands groupes ?",
            a: "Oui. Liger Tours encadre des circuits guidés en groupe de toute taille, de deux voyageurs à des groupes de cinquante personnes et plus. Indiquez-nous vos effectifs : nous construisons l'itinéraire, le rythme et les véhicules autour.",
          },
          {
            q: "Comment réserver un circuit ?",
            a: "Envoyez le formulaire de demande ou écrivez-nous sur WhatsApp avec vos dates, la taille de votre groupe et les lieux que vous voulez voir. Vous recevez un devis complet en dollars namibiens, généralement sous un jour ouvré, et vos dates sont garanties par l'acompte indiqué dans ce devis.",
          },
          {
            q: "Combien coûte un circuit ?",
            a: "Chaque circuit est chiffré individuellement en dollars namibiens (N$), car le prix dépend de la taille du groupe, de la saison et des hébergements choisis. Envoyez une demande : vous recevez un devis complet, sans rien de caché, généralement sous un jour ouvré.",
          },
          {
            q: "Pouvez-vous créer un itinéraire sur mesure ?",
            a: "Oui, chaque semaine. Dites-nous ce que vous voulez voir et le temps dont vous disposez, et nous construisons l'itinéraire autour, même s'il est plus court que les circuits de ce site.",
          },
        ],
      },
      {
        h: "Sur la route",
        items: [
          {
            q: "Où commencent les circuits ?",
            a: "Chaque itinéraire commence et finit à Windhoek, au centre du pays et point d'arrivée de la plupart des vols. Nous confirmons les détails de prise en charge avant votre voyage.",
          },
          {
            q: "Qu'inclut le prix ?",
            a: "Votre devis couvre votre guide et chauffeur locaux, les hébergements de l'itinéraire réservés pour vous, les droits d'entrée des parcs et conservatoires prévus, et l'ensemble des transports depuis Windhoek et retour. Les vols internationaux, l'assurance voyage, les dépenses personnelles et les activités optionnelles ne sont pas inclus.",
          },
          {
            q: "Quels véhicules utilisez-vous ?",
            a: "Nous adaptons le véhicule à la taille de votre groupe et à votre itinéraire, et chaque véhicule est entretenu pour les longues pistes de gravier et de sable de Namibie. L'équipement exact de votre voyage est confirmé dans votre devis, avant tout paiement.",
          },
          {
            q: "Que dois-je emporter ?",
            a: "En Namibie, les couches de vêtements comptent le plus : matins froids sur les dunes, midi chaud sur la route. Prévoyez une protection solaire, des chaussures de marche fermées, un appareil photo ou des jumelles, et vos médicaments. Votre devis et les notes avant départ détaillent le nécessaire pour votre itinéraire et votre saison.",
          },
        ],
      },
      {
        h: "Questions pratiques",
        items: [
          {
            q: "Quelle est la meilleure période pour visiter la Namibie ?",
            a: "De mai à octobre, c'est la haute saison : matins frais, ciel dégagé et meilleure observation de la faune dans l'Etosha. C'est aussi la période où les meilleurs lodges se remplissent en premier, écrivez-nous donc le plus tôt possible.",
          },
          {
            q: "Ai-je besoin d'une assurance voyage ?",
            a: "Oui. Une assurance voyage complète couvrant les frais médicaux, l'évacuation et l'annulation est obligatoire sur tous les voyages Liger Tours et doit être souscrite avant le départ. Les lodges et parcs namibiens appliquent des conditions d'annulation strictes : l'assurance vous protège autant que nous.",
          },
          {
            q: "Êtes-vous un opérateur enregistré ?",
            a: "Oui. Liger Tours Namibia est une agence locale enregistrée auprès de la Namibia Tourism Board (NTB), qui nous impose des standards professionnels à chaque étape de votre voyage.",
          },
          {
            q: "Comment se passent les paiements ?",
            a: `Un acompte garantit vos dates, le solde étant dû avant le départ comme indiqué dans votre devis. Tout est chiffré et encaissé en dollars namibiens (N$). Les coordonnées bancaires ne figurent que sur nos devis et factures officiels ; si quelqu'un vous demande de payer sur un autre compte, appelez-nous d'abord au ${company.phone}.`,
          },
        ],
      },
    ],
    ctaH2: "Encore indécis ?",
    ctaScript: "Donnez-nous vos dates. Nous construirons le voyage autour.",
    ctaLead:
      "Envoyez une demande et recevez un devis complet en N$, généralement sous un jour ouvré. Sans pression, sans engagement.",
    ctaPrimary: "Planifier mon voyage",
    ctaWhatsapp: "Écrivez-nous sur WhatsApp",
  },

  disclaimer: {
    title: "Avertissement",
    lastUpdated: "Dernière mise à jour : octobre 2026",
    legalEyebrow: "Mentions légales",
    sections: [
      {
        h: "Objet de cette page",
        p: [
          `Les informations de ce site sont publiées par Liger Tours Namibia, un opérateur touristique local enregistré auprès de la Namibia Tourism Board, pour vous aider à préparer un voyage avec nous. Elles décrivent nos circuits, nos activités et notre façon de travailler de bonne foi. Ce qui engage les deux parties, ce sont le devis que nous vous envoyons, ces conditions et votre confirmation de réservation. Si un élément de cette page semble contredire votre devis, contactez-nous au ${company.phone} et nous corrigerons.`,
        ],
      },
      {
        h: "Itinéraires et images",
        p: [
          "La Namibie est un pays sauvage où les conditions changent : les routes s'effritent, les rivières débordent, les animaux se déplacent et certains lodges ferment ponctuellement pour entretien. Nous ajustons les itinéraires selon la météo, l'état des routes, les décisions des parcs et la sécurité, et tout changement de valeur égale ou supérieure est offert. Durées et programmes sont confirmés avec vous à la demande : vous réservez exactement ce que vous obtenez.",
          "Les photographies de ce site montrent des lieux réels de nos itinéraires et des moments réels de nos voyages, mais les points de vue exacts, les observations de faune et la lumière ne peuvent être garantis. La faune est sauvage et aucune observation n'est promise.",
        ],
      },
      {
        h: "Devis et tarifs",
        p: [
          "Le contenu de ce site est informatif, pas une offre. Chaque circuit est chiffré individuellement en dollars namibiens (N$), car le prix dépend de la taille du groupe, de la saison et des hébergements choisis. Un devis est valable 14 jours à compter de son envoi sauf mention contraire, et c'est lui qui fixe votre acompte, votre solde et votre barème d'annulation.",
        ],
      },
      {
        h: "Sécurité en circuit",
        p: [
          "Vous participez aux safaris, marches, ascensions de dunes et autres activités à vos propres risques et devez suivre en permanence les consignes de votre guide. Nous prenons toutes les précautions raisonnables dans la planification et la conduite de nos circuits et travaillons avec des prestataires enregistrés dans toute la Namibie.",
        ],
      },
      {
        h: "Liens vers d'autres sites",
        p: [
          "Ce site renvoie vers des services que nous utilisons et recommandons, comme WhatsApp ou des outils cartographiques. Ces sites ont leurs propres conditions et politiques de confidentialité, et nous ne sommes pas responsables de leur contenu ou de leur comportement.",
        ],
      },
      {
        h: "Responsabilité et droit applicable",
        p: [
          "Notre responsabilité est limitée dans les limites permises par les lois de la République de Namibie et reste toujours soumise à l'obligation d'assurance voyage de nos conditions générales. Ces conditions sont régies par les lois de la République de Namibie, et les tribunaux namibiens ont compétence sur tout litige.",
        ],
      },
    ],
  },

  accessibility: {
    title: "Accessibilité",
    lastUpdated: "Dernière mise à jour : octobre 2026",
    legalEyebrow: "Voyage inclusif",
    sections: [
      {
        h: "Notre engagement",
        p: [
          "Tout le monde devrait pouvoir préparer un voyage en Namibie avec nous, sur n'importe quel appareil et avec n'importe quelles capacités. Ce site vise les Web Content Accessibility Guidelines (WCAG) 2.1 niveau AA, et nos circuits sont construits autour des voyageurs qui les réservent, quels que soient leurs besoins.",
        ],
      },
      {
        h: "Comment ce site est construit",
        p: [
          "Le site utilise du HTML sémantique, de vrais titres et des repères labellisés pour que les lecteurs d'écran puissent le parcourir. Chaque élément interactif fonctionne au clavier, le focus est toujours visible et un lien d'évitement mène directement au contenu. Les images portent un texte alternatif descriptif, les contrastes respectent les ratios AA et toutes les animations respectent le réglage de réduction de mouvement de votre appareil.",
          "Le contenu est disponible en anglais, allemand, français, afrikaans et portugais, et le sélecteur de langue vous garde sur la page que vous lisez.",
        ],
      },
      {
        h: "Limites connues",
        p: [
          "Nous sommes honnêtes sur ce que nous ne contrôlons pas. Le lien carte ouvre Google Maps, dont l'accessibilité dépend de Google. Si un point de ce site vous est difficile à utiliser, dites-le-nous et nous le corrigerons : les problèmes d'accessibilité sont traités comme des bugs urgents, pas comme des demandes de fonctionnalités.",
        ],
      },
      {
        h: "L'accessibilité en circuit",
        p: [
          "Les espaces sauvages namibiens ne sont pas toujours plats ni pavés, et certaines activités comme les marches sur dunes ou les crêtes de canyon demandent une mobilité correcte. Signalez-nous tout besoin de mobilité, alimentaire ou médical à la demande, et nous façonnerons l'itinéraire, le rythme et les hébergements autour, en vous disant honnêtement quand une activité n'est pas adaptée.",
        ],
      },
      {
        h: "Vos remarques",
        p: [
          `Si quelque chose sur ce site ou en circuit vous est difficile d'accès, écrivez à ${company.email}, appelez le ${company.phone} ou envoyez-nous un message WhatsApp. Nous répondons sous un jour ouvré et nous chercherons la solution avec vous.`,
        ],
      },
    ],
  },

  testimonials: [
    {
      quote:
        "Notre itinéraire était parfaitement adapté à nos centres d'intérêt. Nous avons adoré que l'équipe recommande à la fois les sites emblématiques et les coins tranquilles que la plupart des touristes manquent. Le service était professionnel, chaleureux et fiable du début à la fin.",
      name: "David et Emma T.",
      country: "Royaume-Uni",
    },
    {
      quote:
        "Dès notre demande de devis, nous nous sommes sentis considérés. Les échanges ont été rapides, la planification fluide, et nos vacances ont dépassé toutes nos attentes. Nous avons déjà hâte de revenir en Namibie avec Liger Tours Namibia !",
      name: "Michael R.",
      country: "Allemagne",
    },
    {
      quote:
        "Notre voyage en Namibie était spectaculaire, et Liger Tours Namibia a rendu chaque moment spécial. L'itinéraire était réfléchi, les recommandations excellentes, et tout s'est déroulé sans accroc du début à la fin. Nous avons apprécié l'attention personnelle et l'hospitalité chaleureuse tout au long du voyage. Nous recommanderons sans hésiter Liger Tours Namibia à nos amis et notre famille en France.",
      name: "Sophie L.",
      country: "France",
    },
  ] as Testimonial[],

  tours: [
    {
      slug: "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha",
      name: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe et Etosha",
      metaTitle: "Circuit Namibie signature",
      route: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe, Etosha",
      eyebrow: "Circuit signature",
      blurb:
        "Notre grand itinéraire namibien mêlant dunes du désert, charme côtier, pics de granit et rencontres animalières exceptionnelles.",
      description: [
        "C'est l'itinéraire autour duquel l'agence a été construite. Il relie les quatre paysages qui définissent la Namibie : les dunes rouges du Sossusvlei, la côte atlantique à Swakopmund, les pics de granit du Spitzkoppe et les plaines riches en faune d'Etosha National Park.",
        "Vous partez et revenez à Windhoek : aucun détour inutile, aucune journée perdue. Entre les grandes étapes, la route traverse certains des paysages les plus saisissants du pays, votre guide gérant la conduite, les portes des parcs et la logistique pendant que le paysage défile à la fenêtre.",
      ],
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Véhicule safari ouvert avec deux voyageurs sur le sable rouge à l'heure dorée",
      highlights: [
        "Grimper les dunes du Sossusvlei à la lumière du petit matin",
        "Flâner dans les rues et la front de mer de Swakopmund sur la côte atlantique",
        "Voir les pics de granit du Spitzkoppe surgir du désert",
        "Observer la faune d'Etosha National Park, l'une des grandes réserves d'Afrique",
      ],
    },
    {
      slug: "sossusvlei-and-swakopmund",
      name: "Circuit Sossusvlei et Swakopmund",
      metaTitle: "Circuit Sossusvlei et Swakopmund",
      route: "Windhoek, Sossusvlei, Swakopmund",
      eyebrow: "Itinéraire court",
      blurb:
        "Idéal pour découvrir les dunes emblématiques de la Namibie et la côte dans un itinéraire plus court.",
      description: [
        "Peu de temps ? Cet itinéraire associe les deux étapes les plus demandées de Namibie : les dunes du Sossusvlei et la ville côtière de Swakopmund. Il est pensé pour les voyageurs qui veulent l'essentiel sans consacrer deux semaines complètes.",
        "Vous bénéficiez malgré tout de l'accès aux dunes au lever du jour, de la plaine d'argile Deadvlei et d'une vraie découverte de Swakopmund, entre air marin, architecture allemande et activités d'aventure, le tout à un rythme tranquille depuis Windhoek.",
      ],
      image: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
      alt: "Un arbre mort solitaire sur la plaine d'argile blanche, une dune rouge se dressant derrière",
      highlights: [
        "Petit matin aux dunes du Sossusvlei et sur la plaine de Deadvlei",
        "Les cols de Gaub et Kuiseb sur la route de la côte",
        "Une journée entière pour Swakopmund et son littoral",
        "Itinéraire court qui tient dans un long week-end avec les transferts",
      ],
    },
    {
      slug: "etosha-and-waterberg",
      name: "Circuit Etosha et Waterberg",
      metaTitle: "Circuit Etosha et Waterberg",
      route: "Windhoek, Etosha, Waterberg",
      eyebrow: "Cap sur la faune",
      blurb:
        "Découvrez la faune célèbre d'Etosha et la beauté des paysages du plateau du Waterberg.",
      description: [
        "Conçu autour de l'observation des animaux, ce circuit passe ses journées dans Etosha National Park, où éléphants, lions, girafes, oryx et rhinocéros se retrouvent aux points d'eau de la grande plaine salée.",
        "Le voyage se referme sur le plateau du Waterberg, une montagne tabulaire de grès rouge aux sentiers et belvédères. Une fin plus douce après les réveils matinaux des safaris d'Etosha et l'occasion de voir le bushveld oriental du parc d'en haut.",
      ],
      image: "/imagery/crops/rhino-etosha-grass-4x5.webp",
      alt: "Un rhinocéros paissant dans l'herbe dorée, des acacias derrière lui",
      highlights: [
        "Des safaris complets dans Etosha National Park avec un guide local",
        "Observation aux points d'eau d'Okaukuejo et des camps célèbres du parc",
        "Belvédères et sentiers du plateau du Waterberg",
        "Belles chances d'éléphants, rhinocéros, girafes et grands félins",
      ],
    },
    {
      slug: "kalahari-quiver-tree-fish-river-canyon",
      name: "Kalahari, forêt de quivriers et Fish River Canyon",
      metaTitle: "Kalahari et Fish River Canyon",
      route: "Windhoek, Kalahari, Keetmanshoop, Fish River Canyon",
      eyebrow: "Sud namibien",
      blurb:
        "Voyagez sur les sables rouges du Kalahari et découvrez les paysages spectaculaires du sud de la Namibie.",
      description: [
        "Le sud namibien est une leçon d'échelle. La route court des sables rouges du Kalahari à la forêt de quivriers près de Keetmanshoop, puis descend vers le Fish River Canyon, l'un des plus grands canyons du continent.",
        "Ici, les journées parlent de lumière et de silence plutôt que de liste à cocher : lever de soleil sur les dunes, quivriers en silhouette au crépuscule, et la rive du canyon aux heures où ses couleurs changent minute après minute.",
      ],
      image: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
      alt: "Un quivrier en silhouette contre le soleil dans un ciel bleu profond",
      highlights: [
        "Sables rouges du Kalahari et séjours en lodges du désert",
        "La forêt de quivriers de Keetmanshoop, superbe à l'heure dorée",
        "Fish River Canyon : l'un des plus grands canyons du monde",
        "Les grands ciels du sud et un ciel étoilé remarquable",
      ],
    },
    {
      slug: "swakopmund-damaraland-owamboland-etosha",
      name: "Swakopmund, Damaraland, Owamboland et Etosha",
      metaTitle: "Damaraland, Owamboland, Etosha",
      route: "Swakopmund, Damaraland, Owamboland, Etosha",
      eyebrow: "Culture et faune",
      blurb:
        "Découvrez les cultures variées de la Namibie, ses paysages rocheux millénaires et une observation animalière de classe mondiale.",
      description: [
        "Cet itinéraire traverse le cœur culturel du pays. Depuis la côte à Swakopmund, il entre dans le Damaraland, où la faune adaptée au désert circule entre les inselbergs et où l'art rupestre atteste des siècles de présence humaine.",
        "Au nord du Damaraland, la route passe par l'Owamboland, où vivent les plus grandes communautés de Namibie et un mode de vie que la plupart des visiteurs ne voient jamais, avant de conclure par la faune d'Etosha National Park.",
      ],
      image: "/imagery/crops/rock-gorge-closeup-4x5.webp",
      alt: "De hautes parois rocheuses usées d'une gorge désertique se refermant vers le ciel",
      highlights: [
        "Paysages rocheux du Damaraland et art rupestre ancestral",
        "Visites culturelles en Owamboland, loin des circuits standards",
        "Faune adaptée au désert dans un cadre minéral",
        "Observation animalière à Etosha National Park pour finir",
      ],
    },
    {
      slug: "windhoek-sossusvlei-swakopmund-brandberg",
      name: "Windhoek, Sossusvlei, Swakopmund et Brandberg",
      metaTitle: "Sossusvlei, côte, Brandberg",
      route: "Windhoek, Sossusvlei, Swakopmund, Brandberg",
      eyebrow: "Désert et côte",
      blurb:
        "Un juste équilibre entre paysages désertiques, aventures atlantiques et le majestueux Brandberg.",
      description: [
        "Une boucle équilibrée qui combine le désert et la côte avec une étape au Brandberg, point culminant de la Namibie et abri du célèbre panneau rupestre de la Dame blanche.",
        "L'ordre du voyage garde les longues étapes courtes et vous place aux dunes pour le lever du soleil et sur la côte pour la brise de l'après-midi, votre guide ajustant le rythme à votre groupe.",
      ],
      image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
      alt: "Dunes rouges dominant une plaine verte et graveleuse sous un ciel dégagé",
      highlights: [
        "Les dunes du Sossusvlei et le paysage du désert du Namib",
        "La côte de Swakopmund : air marin, fruits de mer et aventures",
        "Le Brandberg, plus haut sommet de Namibie, et son art rupestre",
        "Une boucle sans tronçon répété",
      ],
    },
    {
      slug: "24-days-namibia-discovery",
      name: "Circuit découverte de la Namibie en 24 jours",
      metaTitle: "Namibie en 24 jours",
      route: "Grand tour du pays depuis Windhoek",
      eyebrow: "24 jours",
      blurb:
        "Le grand tour de la Namibie : chaque région, chaque temps fort, à un rythme qui permet de vraiment les vivre.",
      description: [
        "Notre plus long circuit est la découverte complète de la Namibie : les canyons du sud et le Kalahari, les champs de dunes du Sossusvlei, la Côte des Squelettes et Swakopmund, les paysages rocheux du Damaraland, les cultures du nord et la faune d'Etosha, le tout en un seul voyage continu.",
        "Vingt-quatre jours, c'est voulu : sans hâte. Il y a le temps du safari matinal et de la visite culturelle l'après-midi, du détour quand votre guide connaît un point de vue qui mérite les kilomètres, et des journées de repos entre les longues étapes.",
        "Le programme jour par jour s'ajuste à vos dates et à vos envies au moment de la demande, parlez-nous-en tôt : ce circuit récompense l'anticipation.",
      ],
      image: "/imagery/crops/thatched-chalets-hillside-4x5.webp",
      alt: "Rangée de chalets à toit de chaume sur pilotis sous une colline rouge rocailleuse",
      highlights: [
        "Toutes les grandes régions de Namibie en un seul itinéraire",
        "Rythme délibérément calme avec des jours de repos entre les étapes",
        "Culture, côte, désert et faune sans rien brusquer",
        "Programme façonné autour de vos dates et de vos envies",
      ],
    },
  ] as Tour[],

  activities: [
    {
      slug: "game-drive",
      name: "Safari photo",
      duration: "3 à 4 heures",
      location: "Autour de Windhoek",
      description:
        "Découvrez la faune namibienne aux portes de Windhoek. Profitez d'un safari guidé où vous croiserez peut-être girafes, zèbres, antilopes et autres animaux locaux dans leur habitat naturel.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Oryx gemsbok aux longues cornes droites sur une crête herbeuse dans la lumière dorée",
    },
    {
      slug: "city-and-township-tour",
      name: "Visite de la ville et des townships",
      duration: "2 à 3 heures",
      location: "Windhoek",
      description:
        "Découvrez le cœur de Windhoek. Explorez les monuments historiques, les marchés locaux, les townships animés et vivez le quotidien de la capitale namibienne.",
      image: "/imagery/crops/windhoek-christuskirche-4x5.webp",
      alt: "Église historique Christuskirche au centre de Windhoek avec sa flèche de bois devant le ciel",
    },
    {
      slug: "bar-hopping-windhoek-by-night",
      name: "Bar hopping : Windhoek la nuit",
      duration: "Soirée",
      location: "Windhoek",
      description:
        "Vivez la vie nocturne de Windhoek en visitant des bars locaux populaires et des lieux de divertissement. Rencontrez les habitants, profitez de la musique et découvrez la ville après le coucher du soleil.",
      image: "/imagery/crops/sundowner-drinks-sunset-4x5.webp",
      alt: "Boissons fraîches sur une table dans la lumière chaude d'un coucher de soleil namibien",
    },
    {
      slug: "taste-namibia-cooking-class",
      name: "Taste Namibia : cours de cuisine traditionnelle",
      duration: "2 à 3 heures",
      location: "Windhoek",
      description:
        "Apprenez à préparer de vrais plats namibiens avec des ingrédients et des techniques traditionnels. Une expérience culturelle pratique pour les gourmands.",
      image: "/imagery/crops/campfire-cooking-pot-4x5.webp",
      alt: "Marmite en fonte potjie mijotant sur les braises d'un feu de bois",
    },
    {
      slug: "bushmen-walk",
      name: "Sagesse ancestrale : la marche avec les San",
      duration: "3 heures",
      location: "Près de Windhoek",
      description:
        "Marchez aux côtés de guides San et découvrez des techniques de survie millénaires, la lecture des traces, les plantes médicinales et le riche patrimoine de l'une des plus vieilles cultures du monde.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Oryx gemsbok aux longues cornes droites sur une crête herbeuse dans la lumière dorée",
    },
    {
      slug: "sunrise-desert-excursion",
      name: "Excursion au lever du soleil dans le désert",
      duration: "Demi-journée",
      location: "Désert du Namib",
      description:
        "Regardez le désert s'éveiller quand les premiers rayons peignent les dunes d'or et d'orange. Une expérience parfaite pour les photographes et les amoureux de la nature.",
      image: "/imagery/crops/dunes-sunburst-pan-4x5.webp",
      alt: "Le soleil perce au-dessus des dunes, au-dessus d'une fine pellicule d'eau sur le sable",
    },
    {
      slug: "photography-tour",
      name: "Circuit photo",
      duration: "Flexible",
      location: "Sur demande",
      description:
        "Capturez les paysages et la faune les plus emblématiques de la Namibie avec l'aide d'experts locaux qui connaissent les meilleurs points de vue et les meilleures lumières.",
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Véhicule safari ouvert avec deux voyageurs sur le sable rouge à l'heure dorée",
    },
    {
      slug: "spitzkoppe-hiking",
      name: "Randonnée au Spitzkoppe",
      duration: "Demi-journée",
      location: "Spitzkoppe",
      description:
        "Explorez les formations de granit spectaculaires du Spitzkoppe et profitez de vues vastes sur le désert alentour.",
      image: "/imagery/crops/spitzkoppe-massif-4x5.webp",
      alt: "Le massif de granit du Spitzkoppe s'élevant au-dessus de la brousse désertique",
    },
    {
      slug: "swakopmund-coastal-adventure",
      name: "Aventure côtière à Swakopmund",
      duration: "Journée",
      location: "Swakopmund",
      description:
        "Profitez de la rencontre unique entre l'Atlantique et le désert du Namib, avec visites, promenades sur la plage et découvertes locales.",
      image: "/imagery/crops/walvis-bay-jetty-4x5.webp",
      alt: "Une longue jetée de bois s'avance dans les eaux calmes de l'Atlantique, des voiliers amarrés dans la baie",
    },
    {
      slug: "sandwich-harbour-4x4",
      name: "Sandwich Harbour : là où l'océan rencontre le désert",
      duration: "Demi-journée",
      location: "Walvis Bay",
      description:
        "Roulez au sud de Walvis Bay et regardez les dunes du Namib plonger droit dans l'Atlantique. Cette zone humide protégée du parc Namib-Naukluft attire flamants et pélicans dans sa lagune, et le seul accès se fait en 4x4 sur le sable mou, votre guide lisant les marées.",
      image: "/imagery/crops/sandwich-harbour-ocean-dunes-4x5.webp",
      alt: "Les dunes du Namib plongeant droit dans les vagues de l'Atlantique à Sandwich Harbour",
    },
    {
      slug: "etosha-wildlife-safari",
      name: "Safari faune à Etosha",
      duration: "Journée",
      location: "Etosha National Park",
      description:
        "Passez une journée entière dans Etosha National Park, célèbre pour son abondance d'animaux et ses observations exceptionnelles.",
      image: "/imagery/crops/elephants-etosha-waterhole-4x5.webp",
      alt: "Éléphants buvant à une mare d'Etosha National Park",
    },
    {
      slug: "stargazing-experience",
      name: "Soirée observation des étoiles",
      duration: "Soirée",
      location: "Sur demande",
      description:
        "La Namibie abrite certains des ciels les plus noirs du monde. Passez une soirée sous un dais d'étoiles et découvrez le ciel austral.",
      image: "/imagery/crops/namib-night-sky-4x5.webp",
      alt: "La Voie lactée en arche au-dessus des dunes sombres du désert la nuit",
    },
    {
      slug: "kalahari-cultural-experience",
      name: "Expérience culturelle du Kalahari",
      duration: "Demi-journée",
      location: "Kalahari",
      description:
        "Vivez l'hospitalité traditionnelle du Kalahari : récits, musique, coutumes locales et découverte de la vie dans le désert.",
      image: "/imagery/crops/kalahari-red-sands-4x5.webp",
      alt: "Dunes de sable rouge du Kalahari avec quelques herbes du désert sous un ciel du soir doux",
    },
  ] as Activity[],
};
