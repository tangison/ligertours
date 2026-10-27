/* Deutsches Wörterbuch: vollständige Übersetzung aller nutzergerichteten Texte.
   Anrede: Sie. Keine Gedankenstriche, N$ Währung, +264 Telefonformat.
   Namibische Fachbegriffe (Köcherbaum, Pirsch) wo gebräuchlich. */

import type { Activity, GalleryPhoto, Testimonial, Tour } from "./shared";
import { company } from "./shared";

export const de = {
  code: "de",
  label: "Deutsch",
  ogLocale: "de_DE",
  quoteMarks: { open: "\u201E", close: "\u201C" },

  meta: {
    home: {
      title: "Liger Tours Namibia | Geführte Touren durch Namibia",
      description:
        "Familiengeführter namibischer Veranstalter. Geführte Gruppenreisen: Sossusvlei, Etosha, Swakopmund, Kalahari. Planung nach Ihren Terminen und Ihrer Gruppe.",
    },
    tours: {
      title: "Namibia Touren: Dünen, Tierwelt, Küste",
      description:
        "Sieben geführte Namibia Touren: Routen zu Dünen und Safari, Reisen in den Süden mit Canyon, Kulturrouten und eine 24-tägige Entdeckungsreise.",
    },
    activities: {
      title: "Tagesaktivitäten und Erlebnisse in Namibia",
      description:
        "Pirschfahrten, Sandwich Harbour im 4x4, Township-Touren, San-Wanderungen, Kochkurse, Wandern am Spitzkoppe und Sternenhimmel, mit lokalen Guides.",
    },
    about: {
      title: "Über Liger Tours Namibia",
      description:
        "Liger Tours Namibia ist ein familiengeführter, NTB registrierter Touranbieter. Team, Mission und die Werte hinter jeder Route.",
    },
    gallery: {
      title: "Galerie: Namibia in Bildern",
      description:
        "Dünen, Tierwelt und Lodges von Liger Tours Namibia Reisen: Tongruben des Sossusvlei, Kalahari Sand, Etosha Tierwelt und die Unterkünfte unterwegs.",
    },
    contact: {
      title: "Kontakt und Anfragen",
      description:
        "Planen Sie Ihre Namibia Reise: Telefon +264 81 472 2552, WhatsApp oder E-Mail an info@ligertours.com. Antwort innerhalb eines Werktags.",
    },
    brand: {
      title: "Marke: Farben, Schriften, Logoregeln",
      description:
        "Das Markensystem von Liger Tours Namibia: Farbwerte aus dem Logo, die drei Schriften, Regeln zur Logoverwendung und die grafischen Elemente.",
    },
    privacy: {
      title: "Datenschutzerklärung",
      description:
        "Wie Liger Tours Namibia Ihre persönlichen Daten bei einer Anfrage oder Buchung erhebt, nutzt und schützt.",
    },
    terms: {
      title: "Geschäftsbedingungen",
      description:
        "Buchungsbedingungen für Touren von Liger Tours Namibia: Angebote, Zahlung in N$, Stornierung, Versicherung und Haftung.",
    },
    faq: {
      title: "Häufige Fragen",
      description:
        "Klare Antworten zu Gruppengrößen, Buchung, Preisen in N$, Fahrzeugen, Versicherung und der besten Reisezeit für eine Namibia-Reise mit Liger Tours Namibia.",
    },
    disclaimer: {
      title: "Haftungsausschluss",
      description:
        "Wie die Angaben auf der Website von Liger Tours Namibia zu Ihrer Anfrage, Ihrem Angebot und Ihrer Tour passen und wo unsere Haftungsgrenzen liegen.",
    },
    accessibility: {
      title: "Barrierefreiheit",
      description:
        "Unser Barrierefreiheitsversprechen für diese Website und unsere Touren: was wir gebaut haben, bekannte Grenzen und wie Sie uns Feedback geben.",
    },
  },

  a11y: {
    skip: "Zum Hauptinhalt springen",
    languages: "Sprache wechseln",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    languageDock: "Sprachoptionen",
    homeLink: "Liger Tours Namibia: Startseite",
    prevSlide: "Vorheriges Gästestimme-Zitat",
    nextSlide: "Nächstes Gästestimme-Zitat",
    goToSlide: "Zu Zitat {n} von 3 springen",
    lightboxOpen: "Bild öffnen: {alt}",
    lightboxPrev: "Vorheriges Bild",
    lightboxNext: "Nächstes Bild",
    lightboxClose: "Schließen",
  },

  nav: [
    { href: "/tours", label: "Touren" },
    { href: "/activities", label: "Aktivitäten" },
    { href: "/about", label: "Über uns" },
    { href: "/gallery", label: "Galerie" },
    { href: "/contact", label: "Kontakt" },
  ],

  search: {
    label: "Die Website durchsuchen",
    placeholder: "Touren, Aktivitäten, Orte suchen",
    noResults: "Keine Treffer. Versuchen Sie einen Ort oder ein Wort wie Dünen.",
    clear: "Suche löschen",
    pages: "Seiten",
    tours: "Touren",
    activities: "Aktivitäten",
    resultAria: "Suchergebnis: {name}",
  },

  langDock: {
    open: "Sprache wählen",
    heading: "Sprache",
    current: "Aktuell",
  },

  header: { planTrip: "Reise planen", whatsapp: "Jetzt per WhatsApp schreiben" },

  footer: {
    blurb:
      "Familiengeführter namibischer Touranbieter, registriert bei der Namibia Tourism Board. Geführte Gruppenreisen durch Namibia: Wüste, Küste, Canyon und Tierwelt.",
    explore: "Entdecken",
    contactHeading: "Kontakt",
    whatsappLabel: "WhatsApp",
    rights: "Alle Rechte vorbehalten.",
    registered: "Registriert bei der Namibia Tourism Board (NTB)",
    privacy: "Datenschutzerklärung",
    terms: "AGB",
    faq: "FAQ",
    disclaimer: "Haftungsausschluss",
    accessibility: "Barrierefreiheit",
    brandLink: "Marke",
    credit: "Made by Tangison Studio",
  },

  hero: {
    kicker: "Geführt von Einheimischen",
    title: "Namibia, ohne Eile.",
    lead: "Familiengeführt und NTB registriert. Geführte Gruppenreisen von den roten Dünen des Sossusvlei bis zur Tierwelt des Etosha, geplant nach Ihren Terminen und Ihrem Tempo.",
    primaryCta: "Reise planen",
    secondaryCta: "Touren ansehen",
    imageAlt:
      "Offenes Safarifahrzeug mit zwei Gästen fährt über roten Sand der Namib im warmen Abendlicht, Dünenschatten dahinter",
  },

  home: {
    intro: {
      eyebrow: "Lokal geführt, NTB registriert",
      h2: "Mit Menschen, die hier zuhause sind.",
      p1: "Liger Tours Namibia ist ein familiengeführtes namibisches Reiseunternehmen, gebaut auf echtem lokalen Wissen. Von der Pirschfahrt direkt vor der Hauptstadt bis zur mehrtägigen Reise durch Wüsten, Küsten und Schutzgebiete: Jede Route zeigt Ihnen das echte Namibia, in einem Tempo, in dem Sie es auch wirklich aufnehmen.",
      p2: "Als bei der Namibia Tourism Board registriertes Unternehmen planen wir jede Reise rund um die Menschen, die sie buchen: Paare, Familien, Alleinreisende und Gruppen jeder Größe, von zwei Personen bis über fünfzig hinaus, jede mit einer Route, einem Tempo und einem Reisestil, der passt.",
      cta: "Mehr über uns",
      imageAlt:
        "Eine Herde Antilopen weidet auf grüner Savanne zwischen verstreuten Akazien",
    },
    stats: {
      ariaLabel: "Liger Tours in Zahlen",
      items: [
        { value: 7, suffix: "", label: "Signature-Routen" },
        { value: 13, suffix: "", label: "Geführte Erlebnisse" },
        { value: 100, suffix: "%", label: "Lokal geführt" },
        { label: "Zertifizierter Veranstalter", raw: "NTB" },
      ],
    },
    tours: {
      eyebrow: "Wohin wir fahren",
      h2: "Signature-Touren, zugeschnitten auf Sie.",
      cta: "Alle Routen ansehen",
      ariaLabel: "Signature-Touren",
    },
    pinned: {
      quote: "Uralte Bäume. Hohe Dünen.",
      sub: "Euer Morgen.",
      imageAlt:
        "Tote Akazienbäume auf weißem Tonboden des Deadvlei, umgeben von hohen roten Dünen unter tiefblauem Himmel",
      ariaLabel: "Die Landschaft des Namib",
    },
    why: {
      eyebrow: "Warum Liger Tours",
      h2: "Was den Unterschied macht.",
      ariaLabel: "Warum Sie mit uns reisen",
      items: [
        {
          n: "1",
          title: "Lokale Expertise",
          body: "Guides, die Namibias Geschichte, Tierwelt, Kulturen und die stillen Ecken kennen, die die meisten Reisepläne überspringen.",
        },
        {
          n: "2",
          title: "Echte Erlebnisse",
          body: "Wanderungen mit den San, traditionelle Kochkurse, Township-Touren: echte Begegnungen, mit Respekt arrangiert.",
        },
        {
          n: "3",
          title: "Persönlicher Service",
          body: "Jede Tour ist zugeschnitten auf Paare, Familien, Gruppen und Alleinreisende, von der ersten Anfrage bis zur Rückkehr.",
        },
        {
          n: "4",
          title: "Komfort und Sicherheit",
          body: "Komfort und Sicherheit stehen auf jeder Etappe an erster Stelle und sind keine Extras.",
        },
        {
          n: "5",
          title: "Registrierter Veranstalter",
          body: "Registriert bei der Namibia Tourism Board (NTB) und auf jedem Schritt an professionelle Standards gebunden.",
        },
      ],
    },
    activities: {
      eyebrow: "Tagesausflüge und Erlebnisse",
      h2: "Nur wenig Zeit? Hier starten.",
      cta: "Alle Erlebnisse ansehen",
      ariaLabel: "Aktivitäten",
    },
    stay: {
      eyebrow: "Wo Sie übernachten",
      h2: "Unterkünfte, gewählt wie für Familie.",
      p: "Von Holz Lodges auf Kalahari Dünen bis zu Strohdach Chalets über dem Flussbett: Jede Station einer Liger Reise ist ein Ort, an dem wir selbst übernachtet haben und den wir der eigenen Familie empfehlen würden. Komfort, wo er zählt, Charakter überall, und Lagen, die man wegen des Ausblicks wählt, in dem man aufwacht.",
      cta: "Routen ansehen",
      imageAlt1:
        "Reihe von Strohdach Chalets auf Stelzen entlang eines felsigen roten Hügels, von unten gesehen",
      imageAlt2:
        "Holz Lodge Kabine mit grünem Dach auf rotem Kalahari Sand unter klarem blauem Himmel",
    },
    testimonials: {
      eyebrow: "Gästestimmen",
      h2: "Was unsere Gäste sagen.",
      ariaLabel: "Was unsere Gäste sagen",
    },
    faq: {
      eyebrow: "Gut zu wissen",
      h2: "Was Gäste vor der Buchung fragen.",
      ariaLabel: "Häufige Fragen",
      moreLink: "Mehr Antworten auf der FAQ-Seite",
      items: [
        {
          q: "Fahren Sie auch Touren für große Gruppen?",
          a: "Ja. Liger Tours führt Gruppenreisen in jeder Größe durch, von zwei Reisenden bis zu Gruppen von fünfzig und mehr. Nennen Sie uns Ihre Teilnehmerzahl, und wir bauen Route, Tempo und Fahrzeuge darum herum.",
        },
        {
          q: "Wo starten die Touren?",
          a: "Jede Route beginnt und endet in Windhoek, im Zentrum des Landes und Ankunftsort der meisten Flüge. Die Abholdetails bestätigen wir Ihnen vor der Reise.",
        },
        {
          q: "Was kostet eine Tour?",
          a: "Jede Tour wird individuell in Namibia-Dollar (N$) angeboten, weil der Preis von Ihrer Gruppengröße, der Reisezeit und der Unterkunftswahl abhängt. Senden Sie eine Anfrage, und Sie erhalten in der Regel innerhalb eines Werktags ein vollständiges Angebot.",
        },
        {
          q: "Wann ist die beste Reisezeit für Namibia?",
          a: "Mai bis Oktober ist Hochsaison, mit kühlen Morgenden, klarem Himmel und der besten Tierbeobachtung im Etosha. In dieser Zeit sind die besten Lodges zuerst ausgebucht, fragen Sie also früh an.",
        },
        {
          q: "Sind Sie ein registrierter Veranstalter?",
          a: "Ja. Liger Tours Namibia ist familiengeführt und bei der Namibia Tourism Board (NTB) registriert, was uns auf jedem Schritt Ihrer Reise zu professionellen Standards verpflichtet.",
        },
        {
          q: "Können Sie eine individuelle Route bauen?",
          a: "Ja, jede Woche. Sagen Sie uns, was Sie sehen möchten und wie viel Zeit Sie haben, und wir bauen die Route darum herum, auch wenn sie kürzer ist als die Touren auf dieser Seite.",
        },
      ],
    },
    cta: {
      h2: "Bereit, wenn Sie es sind.",
      script: "Nennen Sie uns Ihre Termine. Wir bauen die Reise darum herum.",
      primaryCta: "Reise planen",
      whatsappCta: "Jetzt per WhatsApp schreiben",
    },
  },

  toursPage: {
    eyebrow: "Touren",
    title: "Wählen Sie Ihr Namibia.",
    pageHeaderAlt:
      "Rote Dünen über einer grünen Schotterebene unter klarem Himmel in der Namibwüste",
    lead: "Jede Route beginnt und endet in Windhoek und wird nach Ihren Terminen und Ihrer Gruppe geformt. Die Dauer wird mit Ihnen bei der Anfrage bestätigt, nichts auf dieser Seite ist geraten.",
    multiDay: "Mehrtägige Routen",
    longHaul: "Die große Reise",
    customTitle: "Nichts ganz passend dabei?",
    customBody:
      "Sagen Sie uns, was Sie sehen möchten und wie viel Zeit Sie haben. Wir bauen jede Woche individuelle Routen.",
    notSureH2: "Noch unsicher, welche Route?",
    notSureLead:
      "Schicken Sie uns Ihre Termine und Interessen. Wir antworten mit einer ehrlichen Empfehlung, auch wenn die Reise kürzer ausfällt als ursprünglich gedacht.",
    planCta: "Reise planen",
    whatsappCta: "Jetzt per WhatsApp schreiben",
    enquireAria: "Anfragen",
  },

  tourDetail: {
    route: "Strecke",
    duration: "Dauer",
    confirmedAtEnquiry: "Wird bei der Anfrage bestätigt",
    groupSize: "Gruppengröße",
    groupSizeValue: "Nur Ihre Gruppe",
    departs: "Abfahrt",
    departsValue: "Windhoek, zu Ihren Terminen",
    theRoute: "Die Route",
    dayByDay: "Tag für Tag",
    dayByDayLead:
      "Der genaue Tagesplan wird mit Ihnen bei der Anfrage bestätigt und nach Ihren Terminen geformt. Diese Stationen ändern sich nie.",
    included: "Enthalten",
    notIncluded: "Nicht enthalten",
    includedItems: [
      "Lokaler Guide und Fahrer für die gesamte Route",
      "Eintrittsgebühren für Parks und Schutzgebiete laut Route",
      "Unterkünfte entlang der Route, von uns gebucht",
      "Sämtliche Fahrtstrecken ab Windhoek und zurück",
    ],
    notIncludedItems: [
      "Internationale Flüge nach und von Namibia",
      "Reiseversicherung (vor der Abreise erforderlich)",
      "Persönliche Ausgaben, Getränke und Souvenirs",
      "Optionale Aktivitäten, die nicht in der Route stehen",
    ],
    priceNote:
      "Die Preise hängen von Ihrer Gruppengröße, der Reisezeit und der Unterkunftswahl ab, deshalb kalkulieren wir jede Tour einzeln in N$. Senden Sie das Anfrageformular und Sie erhalten in der Regel innerhalb eines Werktags ein vollständiges Angebot ohne versteckte Kosten.",
    enquiryTitle: "Zu dieser Tour anfragen",
    enquiryLead:
      "Nennen Sie uns Termine und Gruppe. Wir antworten mit einem persönlichen Angebot und einer ehrlichen Einschätzung der Planung.",
    whatsappCta: "Lieber WhatsApp? Schreiben Sie uns jetzt",
        viewTour: "Tour ansehen",
    moreTours: "Weitere Routen, die Ihnen gefallen könnten",
    viewTourAria: "Tour ansehen: {name}",
    touristType: "Geführte Gruppenreise",
    enquireAria: "Diese Tour anfragen",
  },

  activitiesPage: {
    eyebrow: "Aktivitäten",
    title: "Machen Sie aus einem Tag ein Erlebnis.",
    pageHeaderAlt:
      "Gemsbok Oryx auf einem Graskamm im warmen goldenen Abendlicht",
    lead: "Tageserlebnisse, die Sie einzeln buchen oder zu jeder Tour hinzufügen können. Alles läuft mit lokalen Guides, für Gruppen jeder Größe und zu Tageszeiten, die Sinn ergeben: für das Licht und für die Tiere.",
    addToTrip: "In meine Reise aufnehmen",
    addH2: "Fügen Sie davon beliebiges zu Ihrer Tour hinzu.",
    addLead:
      "Die meisten Gäste buchen ein oder zwei Tageserlebnisse rund um eine längere Route. Sagen Sie uns, was Ihr Interesse geweckt hat, und wir bauen es ein.",
    planCta: "Reise planen",
    whatsappCta: "Jetzt per WhatsApp schreiben",
    addAria: "Aktivität zur Tour hinzufügen",
  },

  aboutPage: {
    eyebrow: "Über uns",
    title: "Lokal, und stolz darauf.",
    pageHeaderAlt:
      "Reihe von Strohdach Chalets auf Stelzen unter einem felsigen roten Hügel bei klarem Himmel",
    storyEyebrow: "Unsere Geschichte",
    storyH2: "Von Menschen, die mit diesem Land aufgewachsen sind.",
    story: [
      "Liger Tours Namibia ist ein familiengeführtes Reiseunternehmen, gebaut auf einer einfachen Idee: Die beste Art, Namibia zu sehen, ist mit Menschen, die es ihr Zuhause nennen. Gegründet wurde das Unternehmen von einem Umweltwissenschaftler, dessen Wertschätzung für Natur und nachhaltiges Reisen jede Reise prägt, von der Pirschfahrt am Morgen vor der Hauptstadt bis zur mehrtägigen Reise durchs ganze Land.",
      "Als bei der Namibia Tourism Board (NTB) registriertes Unternehmen hält Liger Tours Namibia auf jedem Schritt einer Reise professionelle Standards ein. Touren werden rund um die Gäste geplant, die sie buchen: Paare, Familien, Gruppen und Alleinreisende erhalten jede eine Route, ein Tempo und einen Reisestil, der passt, mit Komfort und Sicherheit als Priorität und nicht als Extra.",
      "Jede Tour zeigt die Landschaften, die Tierwelt und die Kulturen Namibias und fördert zugleich einen verantwortungsvollen, nachhaltigen Tourismus. Das heißt: lokale Guides, echte kulturelle Begegnungen mit Respekt arrangiert, und Reisepläne, die jeden Ort so hinterlassen, wie sie ihn vorgefunden haben.",
    ],
    missionEyebrow: "Unsere Mission",
    mission:
      "Hochwertige Reisen anbieten, die Reisende mit den Landschaften, der Tierwelt und den Menschen Namibias verbinden und zugleich einen verantwortungsvollen, nachhaltigen Tourismus fördern.",
    visionEyebrow: "Unsere Vision",
    vision:
      "Eines der vertrauenswürdigsten und inspirierendsten Reiseunternehmen Namibias werden, durch außergewöhnliche Reisen, die die natürlichen Wunder, die reichen Kulturen und die warme Gastfreundschaft des Landes zeigen.",
    valuesEyebrow: "Was uns auszeichnet",
    valuesH2: "Fünf Dinge, die wir nicht verhandeln.",
    values: [
      {
        title: "Lokale Expertise",
        body: "Unsere Guides kennen Namibias Geschichte, Tierwelt, Kulturen und die stillen Ecken, die die meisten Reisepläne überspringen.",
      },
      {
        title: "Echte Erlebnisse",
        body: "Von Wanderungen mit den San über traditionelle Kochkurse bis zu Township-Touren und Wüstenabenteuern: Wir konzentrieren uns auf echte kulturelle Begegnungen.",
      },
      {
        title: "Persönlicher Service",
        body: "Wir passen unsere Touren an Paare, Familien, Gruppen und Alleinreisende an, von der ersten Anfrage bis zur Rückkehr.",
      },
      {
        title: "Komfort und Sicherheit",
        body: "Ihr Komfort und Ihre Sicherheit sind unsere oberste Priorität während der gesamten Reise, im Fahrzeug und an jedem Stopp.",
      },
      {
        title: "Leidenschaft für Namibia",
        body: "Wir sind entschlossen, die Schönheit und Einzigartigkeit unseres Landes mit Besuchern aus aller Welt zu teilen.",
      },
    ],
    panel:
      "Registriert bei der Namibia Tourism Board, mit geführten Gruppenreisen in ganz Namibia.",
    planCta: "Reise planen",
    storyImageAlt:
      "Gäste von Liger Tours versammelt am Schild am Wendekreis des Steinbocks auf rotem Wüstenboden",
    moments: {
      eyebrow: "Von unseren Reisen",
      h2: "Echte Momente, von der Straße.",
      lead: "Gäste am Wendekreis des Steinbocks, ein Strandspaziergang am Atlantik, ein Stopp, wo die Wüste auf die Fernstraße trifft: Fotografien von Liger-Reisen, keine Stockbilder.",
      alt1:
        "Vier Gäste auf einem weiten Atlantikstrand, eine Person hockt, um Abdrücke im Sand zu fotografieren",
      alt2:
        "Lastwagen in einer Reihe an einem Wüstenrastplatz unter einem Dach",
      alt3:
        "Verwitterte Holzbauten, langsam vom vordringenden Wüstensand begraben",
    },
  },

  galleryPage: {
    eyebrow: "Galerie",
    title: "Das Land, wie es ist.",
    pageHeaderAlt:
      "Tote Akazienbäume auf hellem Tonboden, dahinter eine hohe rote Düne",
    lead: "Fotografien von unseren Reisen, genau so, wie sie aus der Kamera kamen. Wählen Sie ein Bild, um es zu öffnen, navigieren Sie mit den Pfeiltasten und schließen Sie mit Escape.",
    seeH2: "In echt noch schöner.",
    seeLead:
      "Jedes Foto hier entstand auf einer Liger Route. Kommen Sie und machen Sie Ihre eigenen.",
    planCta: "Reise planen",
    whatsappCta: "Jetzt per WhatsApp schreiben",
    seeAria: "Selbst erleben",
    photos: [
      {
        src: "/imagery/crops/safari-vehicle-red-sand-1x1.webp",
        alt: "Offenes Safarifahrzeug mit zwei Gästen über roten Sand im Abendlicht",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-1x1.webp",
        alt: "Gemsbok Oryx mit langen geraden Hörnern auf einem Graskamm im goldenen Licht",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
        alt: "Ein einzelner toter Kameldornbaum auf der weißen Tonpfanne, dahinter eine rote Düne",
        tall: true,
      },
      {
        src: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
        alt: "Ein Köcherbaum als Silhouette gegen die Sonne in tiefblauem Himmel",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-16x9.webp",
        alt: "Tote Akazienbäume auf weißem Tonboden unter roten Dünen und tiefblauem Himmel",
      },
      {
        src: "/imagery/crops/elephants-etosha-waterhole-1x1.webp",
        alt: "Elefanten trinken an einem Wasserloch im Etosha-Nationalpark",
      },
      {
        src: "/imagery/crops/giraffes-walking-savanna-1x1.webp",
        alt: "Drei Giraffen gehen hintereinander zwischen grünen Akazien",
      },
      {
        src: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
        alt: "Holz Lodge Kabine mit grünem Dach auf roter Sanddüne unter blauem Himmel",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-warm-light-1x1.webp",
        alt: "Kahle tote Bäume auf hellem Ton, dahinter eine rote Düne",
      },
      {
        src: "/imagery/crops/tropic-capricorn-group-16x9.webp",
        alt: "Reisegruppe am Schild am Wendekreis des Steinbocks auf rotem Wüstenboden",
      },
      {
        src: "/imagery/crops/quiver-tree-forest-dusk-16x9.webp",
        alt: "Köcherbäume als Silhouetten vor einem orangen Abendhimmel",
      },
      {
        src: "/imagery/crops/coast-beach-group-4x5.webp",
        alt: "Vier Gäste auf einem weiten Atlantikstrand, eine Person hockt, um Abdrücke im Sand zu fotografieren",
        tall: true,
      },
      {
        src: "/imagery/crops/red-dunes-valley-plain-16x9.webp",
        alt: "Rote Dünen über einer grünen Schotterebene unter klarem Himmel",
      },
      {
        src: "/imagery/crops/thatched-chalets-hillside-1x1.webp",
        alt: "Reihe von Strohdach Chalets auf Stelzen unter einem felsigen roten Hügel",
        tall: true,
      },
      {
        src: "/imagery/crops/flamingos-walvis-bay-1x1.webp",
        alt: "Flamingos wateten durch das flache blaue Wasser der Lagune von Walvis Bay",
      },
      {
        src: "/imagery/crops/sandwich-harbour-ocean-dunes-16x9.webp",
        alt: "Die Dünen des Namib laufen am Sandwich Harbour direkt in die Brandung des Atlantiks",
      },
      {
        src: "/imagery/crops/rhino-and-ostrich-grassland-1x1.webp",
        alt: "Ein Nashorn grast im grünen Gras, daneben ein Strauß",
      },
      {
        src: "/imagery/crops/dunes-sunburst-pan-16x9.webp",
        alt: "Die Sonne bricht über Dünen hervor, über einer dünnen Wasserschicht auf dem Sand",
      },
      {
        src: "/imagery/crops/fish-river-canyon-view-16x9.webp",
        alt: "Der Fish River Canyon windet sich zwischen geschichteten Felswänden im Abendlicht",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-16x9.webp",
        alt: "Gemsbok Oryx auf einem Graskamm im goldenen Abendlicht",
      },
      {
        src: "/imagery/crops/overland-road-stop-16x9.webp",
        alt: "Lastwagen in einer Reihe an einem Wüstenrastplatz unter einem Dach",
      },
      {
        src: "/imagery/crops/namib-night-sky-4x5.webp",
        alt: "Die Milchstraße spannt sich über dunkle Wüstendünen bei Nacht",
        tall: true,
      },
      {
        src: "/imagery/crops/spitzkoppe-granite-peaks-1x1.webp",
        alt: "Balancierter Granitblock des Spitzkoppe über dem Wüstenboden",
      },
      {
        src: "/imagery/crops/deadvlei-grove-16x9.webp",
        alt: "Ein Hain toter Kameldornbäume auf der weißen Tonpfanne unter roten Dünen",
      },
      {
        src: "/imagery/crops/safari-vehicle-red-sand-16x9.webp",
        alt: "Safarspuren über rotem Sand im Abendlicht",
      },
      {
        src: "/imagery/crops/sand-buried-ruins-16x9.webp",
        alt: "Verwitterte Holzbauten, langsam vom vordringenden Wüstensand begraben",
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
        alt: "Tote Akazienbäume und rote Dünen unter tiefblauem Himmel",
        tall: true,
      },
    ] as GalleryPhoto[],
  },

  contactPage: {
    eyebrow: "Kontakt",
    title: "Nennen Sie uns Ihre Termine.",
    pageHeaderAlt:
      "Offenes Safarifahrzeug über rotem Sand im Abendlicht, Dünenschatten dahinter",
    formH2: "Anfrage senden",
    formLead:
      "Je mehr Sie uns erzählen, desto besser fällt die erste Antwort aus. Termine, Gruppengröße, die Orte, die Sie bereits kennen: All das hilft uns, mit etwas Konkretem zu antworten statt mit einem Prospekt.",
    panelH2: "Direkter Kontakt",
    phone: "Telefon",
    whatsapp: "WhatsApp",
    chatWithUs: "Schreiben Sie uns",
    email: "E-Mail",
    whereWeAre: "Hier finden Sie uns",
    hours: "Öffnungszeiten",
    mapCta: "Karte öffnen",
    seasonH2: "Die besten Monate sind früh ausgebucht.",
    seasonLead:
      "Mai bis Oktober ist Hochsaison in Namibia, und die besten Lodges rund um Etosha und Sossusvlei sind Monate im Voraus voll. Je früher Sie anfragen, desto besser wird die Reise, die wir für Sie bauen.",
    seasonAria: "Frühzeitig planen",
  },

  form: {
    name: "Name *",
    nameError: "Bitte nennen Sie uns Ihren Namen.",
    email: "E-Mail *",
    emailError:
      "Bitte verwenden Sie eine gültige E-Mail Adresse, damit wir antworten können.",
    phone: "Telefon oder WhatsApp",
    phonePlaceholder: "+264 ...",
    groupSize: "Gruppengröße",
    groupSizePlaceholder: "2 Erwachsene",
    dates: "Reisetermine",
    datesPlaceholder: "Etwa 5. bis 18. Juli 2027",
    message: "Ihre Nachricht *",
    messageError:
      "Bitte beschreiben Sie Ihre Reise kurz (mindestens 10 Zeichen).",
    messagePlaceholder:
      "Sagen Sie uns, wohin Sie möchten, wie lange Sie Zeit haben und was Sie sehen möchten.",
    submit: "Anfrage senden",
    sending: "Wird gesendet...",
    successTitle: "Danke, Ihre Anfrage ist eingegangen.",
    successBody: `Wir beantworten jede Anfrage persönlich, in der Regel innerhalb eines Werktags. Wenn Ihre Termine nah sind, schreiben Sie uns auf WhatsApp unter ${company.phone}, dann kümmern wir uns sofort darum.`,
    whatsappCta: "Auf WhatsApp schreiben",
    generalError:
      "Beim Senden Ihrer Anfrage ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder erreichen Sie uns auf WhatsApp.",
  },

  notFound: {
    title: "Seite nicht gefunden",
    h1: "Diese Piste führt nirgendwohin.",
    lead: "Die gesuchte Seite wurde verschoben oder hat nie existiert. Die Routen unten führen alle irgendwohin Schönes.",
    back: "Zurück zum Anfang",
    viewTours: "Touren ansehen",
  },

  errorPage: {
    h1: "Bei uns hat etwas versagt.",
    lead: "Wie jedes gute Safarifahrzeug ist die Seite gleich wieder repariert. Versuchen Sie es erneut, oder schreiben Sie uns auf WhatsApp, dann kümmern wir uns persönlich darum.",
    tryAgain: "Erneut versuchen",
    back: "Zurück zum Anfang",
    whatsapp: "Auf WhatsApp schreiben",
  },

  brandPage: {
    eyebrow: "Marke",
    title: "Die Liger Marke, auf einer Seite.",
    pageHeaderAlt:
      "Tote Akazienbäume auf weißem Tonboden unter roten Dünen und tiefblauem Himmel",
    logoH2: "Logo",
    logoBody:
      "Ein Logo, nur mitgelieferte Varianten. Das vollständige Logo steht nie in Box, Chip oder Kreis, wird nie umgefärbt, gestreckt oder umgestaltet und landet nie ohne Dämmerungs-Overlay auf einem detailreichen Foto. Freiraum um das Logo entspricht einem Drittel der Kronenhöhe des Baums. Unter 140px Breite auf Wordmark oder Icon wechseln.",
    onLight: "Auf hellen Hintergründen",
    onDark: "Auf dunklen Hintergründen",
    mono: "Mono Varianten",
    coloursH2: "Farben",
    coloursBody:
      "Jeder Farbwert ist direkt aus dem Logo genommen: das Rose von Schrift und Sonnenaufgang, das Oliv der Akazie, das fast schwarze Nacht für dunkle Sektionen. Rose ist die Marke; Komponenten nutzen die semantischen Tokens, nie rohe Hexwerte.",
    swatch: "Farbfeld",
    colourName: "Token",
    colourHex: "Hex",
    colourUse: "Verwendung",
    colourUseBg: "Standardseitenhintergrund",
    colourUseAlt: "Alternative Sektionen",
    colourUseTint: "Feature-Panels, Bogenhintergründe",
    colourUseBorder: "Rahmen, Trennlinien",
    colourUseDiscs: "Sonnenscheiben, Bogenlinie, Deko",
    colourUseDeco: "Nur dekorativ",
    colourUseDisplay: "Nur große Displaytexte",
    colourUseBrand: "Buttons, Links, Überschriftenakzente",
    colourUseHover: "Hover, kräftige Panels",
    colourUseInk: "Fließtext",
    colourUseNight: "Dunkle Sektionen, Footer",
    colourUseAcacia: "Logobaumfarbe, Fokusring auf Hell",
    colourUseSunrise: "Winzige Akzente auf Dunkel, Fokusring",
    typeH2: "Schriften",
    typeBody:
      "Drei Familien, alle frei lizenziert, selbst gehostet mit font-display swap. Zwei Rollen gleichzeitig auf dem Bildschirm sind die Norm; die Handschrift bleibt reserviert, damit sie ihre Wirkung behält.",
    typeRows: [
      {
        label: "H1 / Hero: Kaushan Script",
        sample: "Namibia, ohne Eile.",
        note: "Handschrift im Stil des Logos. Nur große Größen, Satzanfang groß, nie fett oder in Großbuchstaben.",
      },
      {
        label: "Überschriften und Oberfläche: Archivo",
        sample: "Wüste, Küste, Canyon und Tierwelt.",
        note: "Variable Breite und Stärke. Breit und schwer für Wirkung. Großbuchstaben nur für Eyebrows, Labels und Buttons.",
      },
      {
        label: "Fließtext: Schibsted Grotesk",
        sample:
          "Klare Sätze mit echten Orten, echten Dauern und dem, was Gäste wirklich tun. Linksbündig, großzügige Zeilenhöhe, nichts unter 14px.",
        note: "Regular zum Lesen, Semibold zur Betonung. Höchstens 62 Zeichen pro Zeile.",
      },
    ],
    devicesH2: "Signaturelemente",
    devicesBody:
      "Vier wiederkehrende Elemente tragen die Identität: fotos im Bogen mit feiner versetzter Linie, sich überlagernde Sonnenscheiben hinter Fotos (höchstens zwei pro Bildschirmseite), gebogene Dünenübergänge in der Farbe der nächsten Sektion, und das Headline Lockup aus Archivo Eyebrow über einer Handschriftzeile.",
    deviceCaptions: ["Bogenmaske, 4:5", "Sonnenscheiben, max. 2", "Dünenübergang", "Headline Lockup"],
    lockupKicker: "Geführt von Einheimischen",
    lockupScript: "Namibia, ohne Eile.",
    creditsH2: "Bildnachweise",
    creditsBody:
      "Kundeneigene Fotos werden durch frei lizenzierte Bilder ergänzt: Wikimedia Commons (CC BY-SA, CC0), Pexels und Unsplash. Die vollständige Zuschreibung jedes Bildes liegt im Projekt License Log; die Commons Dateiseiten tragen die vollständigen Credits.",
  },

  privacy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: Oktober 2026",
    legalEyebrow: "Rechtliches",
    sections: [
      {
        h: "Wer wir sind",
        p: [
          `Liger Tours Namibia ist ein familiengeführter Touranbieter mit Sitz in Windhoek, Namibia, registriert bei der Namibia Tourism Board. Sie erreichen uns zu allen Fragen rund um diese Erklärung unter ${company.email} oder ${company.phone}.`,
        ],
      },
      {
        h: "Welche Daten wir erheben",
        p: [
          "Wenn Sie über diese Website eine Anfrage senden, erheben wir die Angaben, die Sie uns freiwillig mitteilen: Ihren Namen, Ihre E-Mail Adresse, Telefonnummer, Reisetermine, Gruppengröße und den Inhalt Ihrer Nachricht. Wir verwenden diese ausschließlich, um auf Ihre Anfrage zu antworten und die gewünschte Reise zu planen.",
          "Wie die meisten Websites speichert unsere Hosting Plattform Standard-Protokolle wie IP Adresse, Browsertyp und besuchte Seiten, für Sicherheit und Leistung.",
        ],
      },
      {
        h: "Wie wir Ihre Daten verwenden",
        p: [
          "Wir verwenden Ihre Anfragedaten, um zu antworten, Angebote vorzubereiten und nach Ihrer Buchung die Reise zu betreuen. Wir verkaufen Ihre Daten nicht und geben sie nicht an Dritte weiter, außer an Dienstleister, die direkt an Ihrer Reise beteiligt sind (etwa Lodges und Aktivitätspartner), oder soweit namibisches Recht es verlangt.",
          "Anfragedaten werden nur so lange aufbewahrt, wie für die Bearbeitung der Anfrage und einer daraus folgenden Buchung nötig, danach gelöscht.",
        ],
      },
      {
        h: "Drittanbieter",
        p: [
          "Diese Website wird auf Vercel hinter Cloudflare Diensten betrieben. Ihre Formularanfrage wird in unserer gesicherten Buchungsdatenbank gespeichert. WhatsApp Links öffnen WhatsApp mit eigener Datenschutzerklärung. Wir betreiben keine Werbe-Tracker auf dieser Website.",
        ],
      },
      {
        h: "Ihre Rechte",
        p: [
          "Sie können jederzeit von uns verlangen zu bestätigen, welche persönlichen Daten wir über Sie speichern, sie korrigieren oder löschen lassen. Schreiben Sie uns eine E-Mail, und wir gehen der Anfrage innerhalb angemessener Frist nach. Bei Beschwerden zum Umgang mit Ihren Daten wenden Sie sich bitte zuerst an uns, damit wir es richtig machen können.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "Diese Website verwendet nur Cookies oder lokalen Speicher, die für den Betrieb und für anonyme Statistiken nötig sind. Es gibt keine Werbe- oder Tracking Cookies. Sie können Cookies im Browser blockieren, die Website funktioniert weiterhin.",
        ],
      },
      {
        h: "Änderungen dieser Erklärung",
        p: [
          "Wenn wir diese Erklärung ändern, veröffentlichen wir die neue Fassung mit aktualisiertem Datum auf dieser Seite. Die Fassung auf dieser Seite ist die gültige.",
        ],
      },
    ],
  },

  terms: {
    title: "Geschäftsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: Oktober 2026",
    legalEyebrow: "Rechtliches",
    sections: [
      {
        h: "Diese Bedingungen",
        p: [
          `Diese Bedingungen gelten, wenn Sie eine Tour bei Liger Tours Namibia („wir“) anfragen oder buchen, ein Reiseunternehmen mit Sitz in Windhoek, Namibia, registriert bei der Namibia Tourism Board. Mit der Bestätigung einer Buchung akzeptieren Sie diese Bedingungen.`,
        ],
      },
      {
        h: "Anfragen und Angebote",
        p: [
          "Jede Tour auf dieser Website wird einzeln in Namibia Dollar (N$) kalkuliert, weil die Preise von Ihrer Gruppengröße, der Reisezeit und der Unterkunftswahl abhängen. Ein Angebot gilt 14 Tage ab Versanddatum, sofern nicht anders angegeben. Eine Buchung ist erst bestätigt, wenn wir Ihre unterschriebene Bestätigung und die im Angebot beschriebene Anzahlung erhalten haben.",
        ],
      },
      {
        h: "Zahlungen",
        p: [
          `Eine Anzahlung sichert Ihre Termine, der Restbetrag wird wie im Angebot beschrieben vor der Abreise fällig. Alle Zahlungen werden in Namibia Dollar (N$) berechnet, sofern nicht schriftlich anders vereinbart. Bankdaten erscheinen ausschließlich auf offiziellen Angeboten und Rechnungen; betrachten Sie jede Aufforderung, auf ein anderes Konto zu zahlen, als verdächtig und rufen Sie uns unter ${company.phone} an.`,
        ],
      },
      {
        h: "Änderungen und Stornierung durch Sie",
        p: [
          "Wenn Sie Termine ändern oder stornieren müssen, schreiben Sie uns so früh wie möglich. Wir verschieben Ihre Termine jederzeit kostenlos, wo die Lodges es erlauben. Stornogebühren folgen dem Plan in Ihrem Angebot und spiegeln die strengen Stornobedingungen der Lodges und Parks Namibias, weshalb für jeden Gast eine Reiseversicherung vorgeschrieben ist.",
        ],
      },
      {
        h: "Änderungen durch uns",
        p: [
          "Namibia ist ein wildes Land: Wege waschen weg, Flüsse treten über, Tiere wandern. Wir dürfen den Reiseplan an Wetter, Straßenverhältnisse, Parkentscheidungen oder Sicherheit anpassen. Jede Änderung von gleichem oder besserem Wert ist kostenlos. Fällt ein wesentlicher Bestandteil aus, bieten wir eine faire Alternative oder Rückerstattung dieses Bestandteils.",
        ],
      },
      {
        h: "Versicherung, Gesundheit und Dokumente",
        p: [
          "Eine umfassende Reiseversicherung mit Krankenleistungen, Evakuierung und Storno ist auf allen Touren vorgeschrieben und vor der Abreise abzuschließen. Sie sind für einen gültigen Pass, benötigte Visa und empfohlene Impfungen verantwortlich. In Nordnamibia ist Malaria-Vorsorge empfohlen; lassen Sie sich vor der Reise an einer reisemedizinischen Beratungsstelle beraten.",
        ],
      },
      {
        h: "Haftung",
        p: [
          "Wir planen und führen unsere Touren mit aller gebotenen Sorgfalt und arbeiten durchweg mit registrierten Anbietern. Pirschfahrten, Wanderungen und Aktivitäten nehmen Sie auf eigenes Risiko teil und befolgen jederzeit die Anweisungen Ihres Guides. Unsere Haftung ist im Rahmen des namibischen Rechts begrenzt und unterliegt stets der oben genannten Versicherungspflicht.",
        ],
      },
      {
        h: "Beschwerden und anwendbares Recht",
        p: [
          "Wenn etwas nicht stimmt, sagen Sie es sofort Ihrem Guide, damit es vor Ort behoben werden kann, und teilen Sie es uns danach schriftlich mit. Diese Bedingungen unterliegen dem Recht der Republik Namibia; namibische Gerichte haben Gerichtsbarkeit über Streitfälle.",
        ],
      },
    ],
  },

  faqPage: {
    eyebrow: "Gut zu wissen",
    title: "Fragen, beantwortet.",
    pageHeaderAlt:
      "Rote Dünen über einer grünen Kiesebene unter klarem Himmel in der Namibwüste",
    band1Alt:
      "Offenes Safari-Fahrzeug mit Gästen über rotem Namib-Sand in der goldenen Stunde",
    band2Alt:
      "Tote Akazien auf dem weißen Tonboden des Deadvlei im warmen Morgenlicht",
    band3Alt:
      "Köcherbaum als Silhouette gegen die Sonne in der namibischen Abenddämmerung",
    lead: "Die Fragen, die Gäste vor der Buchung stellen, ehrlich beantwortet. Fehlt Ihre? Schreiben Sie uns per WhatsApp, und sie wird Teil dieser Seite.",
    groups: [
      {
        h: "Buchung und Planung",
        items: [
          {
            q: "Fahren Sie auch Touren für große Gruppen?",
            a: "Ja. Liger Tours führt Gruppenreisen in jeder Größe durch, von zwei Reisenden bis zu Gruppen von fünfzig und mehr. Nennen Sie uns Ihre Teilnehmerzahl, und wir bauen Route, Tempo und Fahrzeuge darum herum.",
          },
          {
            q: "Wie buche ich eine Tour?",
            a: "Senden Sie das Anfrageformular oder schreiben Sie uns per WhatsApp mit Ihren Terminen, Ihrer Gruppengröße und den Orten, die Sie sehen möchten. Sie erhalten in der Regel innerhalb eines Werktags ein vollständiges Angebot in Namibia-Dollar, und Ihre Termine werden mit der im Angebot genannten Anzahlung gesichert.",
          },
          {
            q: "Was kostet eine Tour?",
            a: "Jede Tour wird individuell in Namibia-Dollar (N$) angeboten, weil der Preis von Ihrer Gruppengröße, der Reisezeit und Ihrer Unterkunftswahl abhängt. Senden Sie eine Anfrage, und Sie erhalten in der Regel innerhalb eines Werktags ein vollständiges Angebot ohne versteckte Kosten.",
          },
          {
            q: "Können Sie eine eigene Route bauen?",
            a: "Ja, jede Woche. Sagen Sie uns, was Sie sehen möchten und wie viel Zeit Sie haben, und wir bauen die Route darum herum, auch wenn sie kürzer ist als die Touren auf dieser Website.",
          },
        ],
      },
      {
        h: "Unterwegs",
        items: [
          {
            q: "Wo starten Ihre Touren?",
            a: "Jede Route beginnt und endet in Windhoek, dem Mittelpunkt des Landes und Ankunftsort der meisten Flüge. Die Abholdetails bestätigen wir Ihnen vor der Reise.",
          },
          {
            q: "Was ist im Preis enthalten?",
            a: "Ihr Angebot umfasst Ihren lokalen Guide und Fahrer, die für Sie gebuchte Unterkunft entlang der Route, Park- und Schutzgebietsgebühren der Reiseroute sowie die gesamte Beförderung ab Windhoek und zurück. Internationale Flüge, Reiseversicherung, persönliche Ausgaben und optionale Aktivitäten sind nicht enthalten.",
          },
          {
            q: "Welche Fahrzeuge nutzen Sie?",
            a: "Wir passen das Fahrzeug an Ihre Gruppengröße und Route an, und jedes Fahrzeug wird für Namibias lange Schotter- und Sandstraßen gewartet. Die genaue Ausstattung Ihrer Reise wird im Angebot bestätigt, bevor Sie etwas zahlen.",
          },
          {
            q: "Was soll ich einpacken?",
            a: "In Namibia zählen Schichten: kalte Morgen an den Dünen, heiße Mittage auf der Straße. Bringen Sie Sonnenschutz, geschlossene Wanderschuhe, eine Kamera oder ein Fernglas und Ihre Medikamente mit. Ihr Angebot und die Hinweise vor Abreise enthalten die Details für Ihre Route und Reisezeit.",
          },
        ],
      },
      {
        h: "Praktisches",
        items: [
          {
            q: "Wann ist die beste Reisezeit für Namibia?",
            a: "Mai bis Oktober ist Hochsaison, mit kühlen Morgen, klarem Himmel und der besten Tierbeobachtung im Etosha. In dieser Zeit sind die besten Lodges zuerst ausgebucht, fragen Sie also so früh wie möglich an.",
          },
          {
            q: "Brauche ich eine Reiseversicherung?",
            a: "Ja. Eine umfassende Reiseversicherung mit medizinischen Kosten, Evakuierung und Stornierung ist für alle Liger-Tours-Reisen vorgeschrieben und muss vor der Abreise abgeschlossen sein. Lodges und Parks in Namibia wenden strenge Stornierungsbedingungen an, deshalb schützt die Versicherung Sie genauso wie uns.",
          },
          {
            q: "Sind Sie ein registrierter Reiseveranstalter?",
            a: "Ja. Liger Tours Namibia ist familiengeführt und bei der Namibia Tourism Board (NTB) registriert, die uns bei jedem Schritt Ihrer Reise professionelle Standards abverlangt.",
          },
          {
            q: "Wie funktionieren Zahlungen?",
            a: `Eine Anzahlung sichert Ihre Termine, der Restbetrag ist vor der Abreise fällig, wie in Ihrem Angebot beschrieben. Alles wird in Namibia-Dollar (N$) angeboten und abgerechnet. Bankdaten erscheinen nur auf unseren offiziellen Angeboten und Rechnungen; wenn jemand Sie bittet, auf ein anderes Konto zu zahlen, rufen Sie uns zuerst unter ${company.phone} an.`,
          },
        ],
      },
    ],
    ctaH2: "Noch am Überlegen?",
    ctaScript: "Nennen Sie uns Ihre Termine. Wir bauen die Reise darum herum.",
    ctaLead:
      "Senden Sie eine Anfrage und erhalten Sie ein vollständiges Angebot in N$, in der Regel innerhalb eines Werktags. Ohne Druck, ohne Verpflichtung.",
    ctaPrimary: "Meine Reise planen",
    ctaWhatsapp: "Jetzt per WhatsApp schreiben",
  },

  disclaimer: {
    title: "Haftungsausschluss",
    lastUpdated: "Zuletzt aktualisiert: Oktober 2026",
    legalEyebrow: "Rechtliches",
    sections: [
      {
        h: "Worum es auf dieser Seite geht",
        p: [
          `Die Informationen auf dieser Website veröffentlicht Liger Tours Namibia, ein familiengeführter und bei der Namibia Tourism Board registrierter Reiseveranstalter, damit Sie Ihre Reise mit uns planen können. Sie beschreiben unsere Routen, Aktivitäten und unsere Arbeitsweise nach bestem Wissen. Verbindlich sind das Angebot, das wir Ihnen senden, diese Bedingungen und Ihre Buchungsbestätigung. Wenn Angaben auf dieser Seite mit Ihrem Angebot scheinen zu kollidieren, kontaktieren Sie uns unter ${company.phone}, und wir korrigieren es.`,
        ],
      },
      {
        h: "Routen, Reiserouten und Bilder",
        p: [
          "Namibia ist ein wildes Land und die Bedingungen ändern sich: Straßen werden weggespült, Flüsse treten über die Ufer, Tiere wandern, und Lodges schließen gelegentlich für Wartungsarbeiten. Wir passen Reiserouten wegen Wetter, Straßenverhältnissen, Parkentscheidungen und Sicherheit an, und jede Änderung von gleichem oder besserem Wert ist kostenfrei. Dauer und Tagespläne werden mit Ihnen bei der Anfrage bestätigt, damit Sie genau das buchen, was Sie bekommen.",
          "Fotografien auf dieser Website zeigen echte Orte unserer Routen und echte Momente unserer Reisen, aber genaue Aussichtspunkte, Tierbeobachtungen und Licht können nicht garantiert werden. Wildtiere sind wild, und Sichtungen werden nie versprochen.",
        ],
      },
      {
        h: "Angebote und Preise",
        p: [
          "Inhalte auf dieser Website sind Informationen, kein Angebot. Jede Tour wird individuell in Namibia-Dollar (N$) angeboten, weil der Preis von Gruppengröße, Reisezeit und Unterkunftswahl abhängt. Ein Angebot gilt 14 Tage ab Versanddatum, sofern nicht anders angegeben, und es ist das Angebot, das Anzahlung, Restbetrag und Stornierungsplan festlegt.",
        ],
      },
      {
        h: "Sicherheit auf Tour",
        p: [
          "Sie nehmen an Pirschfahrten, Wanderungen, Dünenbesteigungen und anderen Aktivitäten auf eigene Gefahr teil und müssen den Anweisungen Ihres Guides jederzeit folgen. Wir treffen bei Planung und Durchführung unserer Touren alle angemessenen Vorsichtsmaßnahmen und arbeiten mit registrierten Anbietern in ganz Namibia zusammen.",
        ],
      },
      {
        h: "Links zu anderen Websites",
        p: [
          "Diese Website verlinkt auf Dienste, die wir nutzen und empfehlen, etwa WhatsApp und Kartenwerkzeuge. Diese Websites haben eigene Bedingungen und Datenschutzrichtlinien, und wir sind nicht für deren Inhalt oder Verhalten verantwortlich.",
        ],
      },
      {
        h: "Haftung und anwendbares Recht",
        p: [
          "Unsere Haftung ist im Umfang beschränkt, wie es das Recht der Republik Namibia zulässt, und unterliegt stets der Reiseversicherungs-Pflicht aus unseren Geschäftsbedingungen. Es gilt das Recht der Republik Namibia; namibische Gerichte haben Gerichtsbarkeit über Streitfälle.",
        ],
      },
    ],
  },

  accessibility: {
    title: "Barrierefreiheit",
    lastUpdated: "Zuletzt aktualisiert: Oktober 2026",
    legalEyebrow: "Inklusives Reisen",
    sections: [
      {
        h: "Unser Versprechen",
        p: [
          "Jeder soll mit uns eine Namibia-Reise planen können, auf jedem Gerät und mit jeder Fähigkeit. Diese Website zielt auf die Web Content Accessibility Guidelines (WCAG) 2.1 Stufe AA ab, und unsere Touren werden um die Gäste geplant, die sie buchen, ganz gleich welche Bedürfnisse sie haben.",
        ],
      },
      {
        h: "Wie diese Website gebaut ist",
        p: [
          "Die Website nutzt semantisches HTML, echte Überschriften und beschriftete Landmarks, damit Screenreader sie navigieren können. Jedes interaktive Element funktioniert mit der Tastatur, der Fokus ist immer sichtbar, und ein Skip-Link führt direkt zum Inhalt. Bilder tragen beschreibenden Alternativtext, Farbkontraste erfüllen AA-Verhältnisse, und alle Bewegungen respektieren die Einstellung für reduzierte Bewegung Ihres Geräts.",
          "Inhalte sind auf Englisch, Deutsch, Französisch, Afrikaans und Portugiesisch verfügbar, und der Sprachwechsel hält Sie auf der Seite, die Sie gerade lesen.",
        ],
      },
      {
        h: "Bekannte Grenzen",
        p: [
          "Wir sind ehrlich dazu, was wir nicht kontrollieren. Der Kartenlink öffnet Google Maps, dessen Barrierefreiheit Google verwaltet. Wenn Ihnen auf dieser Website etwas schwerfällt, sagen Sie es uns, und wir beheben es: Barrierefreiheitsprobleme behandeln wir als dringende Fehler, nicht als Funktionswünsche.",
        ],
      },
      {
        h: "Barrierefreiheit auf Tour",
        p: [
          "Namibias wilde Landschaften sind nicht immer flach oder befestigt, und manche Aktivitäten wie Dünenwanderungen und Canyonrand-Wanderungen brauchen ein gewisses Maß an Beweglichkeit. Nennen Sie uns bei der Anfrage etwaige Mobilitäts-, Ernährungs- oder medizinische Bedürfnisse, und wir formen Route, Tempo und Unterkunft darum herum und sagen Ihnen ehrlich, wo eine Aktivität nicht passt.",
        ],
      },
      {
        h: "Feedback",
        p: [
          `Wenn Ihnen etwas auf dieser Website oder auf Tour schwerfällt, schreiben Sie an ${company.email}, rufen Sie ${company.phone} an oder senden Sie uns eine WhatsApp-Nachricht. Wir antworten innerhalb eines Werktags und arbeiten mit Ihnen an einer Lösung.`,
        ],
      },
    ],
  },

  testimonials: [
    {
      quote:
        "Unsere Reiseroute war perfekt auf unsere Interessen zugeschnitten. Wir schätzten es sehr, dass das Team sowohl die berühmten Ziele als auch die stillen Ecken empfahl, die die meisten Touristen verpassen. Der Service war von Anfang bis Ende professionell, freundlich und verlässlich.",
      name: "David und Emma T.",
      country: "Großbritannien",
    },
    {
      quote:
        "Von der ersten Anfrage an fühlten wir uns wertgeschätzt. Die Kommunikation war schnell, die Planung reibungslos, und unser Urlaub übertraf jede Erwartung. Wir können es kaum erwarten, mit Liger Tours Namibia nach Namibia zurückzukehren!",
      name: "Michael R.",
      country: "Deutschland",
    },
    {
      quote:
        "Unsere Namibia Reise war spektakulär, und Liger Tours Namibia machte jeden Moment besonders. Der Reiseplan war durchdacht, die Empfehlungen ausgezeichnet, und alles lief von Beginn an reibungslos. Wir schätzten die persönliche Aufmerksamkeit und die warme Gastfreundschaft auf der ganzen Reise. Wir werden Liger Tours Namibia Freunden und Familie in Frankreich mit Sicherheit weiterempfehlen.",
      name: "Sophie L.",
      country: "Frankreich",
    },
  ] as Testimonial[],

  tours: [
    {
      slug: "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha",
      name: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe und Etosha",
      metaTitle: "Signature Namibia Safari Route",
      route: "Windhoek nach Sossusvlei nach Swakopmund nach Spitzkoppe nach Etosha",
      eyebrow: "Signature Tour",
      blurb:
        "Unsere Signature Reise durch Namibia: Wüstendünen, Küstenflair, Granitgipfel und herausragende Tiererlebnisse.",
      description: [
        "Das ist die Route, um die wir das Unternehmen gebaut haben. Sie verbindet die vier Landschaften, die Namibia definieren: die roten Dünen des Sossusvlei, die Atlantikküste bei Swakopmund, die Granitgipfel des Spitzkoppe und die tierreichen Ebenen des Etosha-Nationalparks.",
        "Sie starten und enden in Windhoek, ohne Rückwege und ohne verlorene Tage. Zwischen den großen Stationen überquert die Route einige der eindrucksvollsten Landschaften des Landes, während Ihr Guide das Fahren, die Parktore und die Planung übernimmt und Sie der Landschaft am Fenster zusehen.",
      ],
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Offenes Safarifahrzeug mit zwei Gästen über roten Sand im Abendlicht",
      highlights: [
        "Die Dünen des Sossusvlei im frühen Morgenlicht besteigen",
        "Durch die Straßen und die Waterfront von Swakopmund an der Atlantikküste bummeln",
        "Die Granitgipfel des Spitzkoppe aus der Wüste ragen sehen",
        "Tierbeobachtung im Etosha-Nationalpark, eines der großen Schutzgebiete Afrikas",
      ],
    },
    {
      slug: "sossusvlei-and-swakopmund",
      name: "Sossusvlei und Swakopmund Tour",
      metaTitle: "Sossusvlei und Swakopmund Tour",
      route: "Windhoek nach Sossusvlei nach Swakopmund",
      eyebrow: "Kurze Route",
      blurb:
        "Ideal für Reisende, die Namibias berühmte Dünen und Küstenerlebnisse in kurzer Route erleben möchten.",
      description: [
        "Wenig Zeit? Diese Route verbindet die zwei meistgewünschten Stationen Namibias: die Dünen des Sossusvlei und die Küstenstadt Swakopmund. Sie ist für Reisende gebaut, die die Highlights wollen, ohne zwei volle Wochen zu investieren.",
        "Früher Zutritt zu den Dünen, die Tongrube Deadvlei und ein ganzer Vormittag in Swakopmunds Mix aus Meeresluft, deutscher Architektur und Abenteueraktivitäten sind ebenso drin, alles in ruhigem Tempo ab Windhoek.",
      ],
      image: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
      alt: "Ein einzelner toter Kameldornbaum auf der weißen Tonpfanne, dahinter eine rote Düne",
      highlights: [
        "Frühmorgen an den Dünen des Sossusvlei und der Tongrube Deadvlei",
        "Die Canyon Pässe von Gaub und Kuiseb auf der Fahrt zur Küste",
        "Ein ganzer Tag für Swakopmund und seine Küste",
        "Kurze Route, passend für ein verlängertes Wochenende plus Anreise",
      ],
    },
    {
      slug: "etosha-and-waterberg",
      name: "Etosha-Nationalpark und Waterberg Tour",
      metaTitle: "Etosha und Waterberg Tour",
      route: "Windhoek nach Etosha nach Waterberg",
      eyebrow: "Tierwelt im Fokus",
      blurb:
        "Erleben Sie die berühmte Tierwelt des Etosha und die Landschaft des Waterberg Plateaus.",
      description: [
        "Diese Tour ist um die Tierbeobachtung gebaut und verbringt ihre Tage im Etosha-Nationalpark, wo Elefant, Löwe, Giraffe, Gemsbok und Nashorn an den Wasserlöchern der Salzpfanne zusammenkommen.",
        "Den Abschluss bildet das Waterberg Plateau, ein roter Sandsteintafelberg mit Wanderwegen und Aussichtspunkten. Ein ruhigerer Ausklang nach den frühen Pirschfahrten und eine Chance, den östlichen Buschveld des Parks von oben zu sehen.",
      ],
      image: "/imagery/crops/rhino-etosha-grass-4x5.webp",
      alt: "Ein Nashorn weidet im goldenen Gras, Akazien dahinter",
      highlights: [
        "Ganze Pirschfahrten durch den Etosha-Nationalpark mit lokalem Guide",
        "Wasserloch-Beobachtungen am Okaukuejo und den berühmten Camps des Parks",
        "Aussichtspunkte und Wanderwege am Waterberg Plateau",
        "Gute Chancen auf Elefant, Nashorn, Giraffe und Großkatzen",
      ],
    },
    {
      slug: "kalahari-quiver-tree-fish-river-canyon",
      name: "Kalahari, Köcherbaumwald und Fish River Canyon",
      metaTitle: "Kalahari und Fish River Canyon",
      route: "Windhoek nach Kalahari nach Keetmanshoop nach Fish River Canyon",
      eyebrow: "Südnamibia",
      blurb:
        "Reise durch die roten Sande der Kalahari und die dramatischen Landschaften Südnamibias.",
      description: [
        "Südnamibia ist eine Studie in Weite. Die Route führt von den roten Sanden der Kalahari zum Köcherbaumwald bei Keetmanshoop, dann nach Süden zum Fish River Canyon, einem der größten Canyons des Kontinents.",
        "Hier geht es um Licht und Stille statt um Ablaken: Sonnenaufgang über den Dünen, Köcherbäume als Silhouetten in der Dämmerung und der Canyonrand zu den Tageszeiten, in denen seine Farben Minute für Minute wechseln.",
      ],
      image: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
      alt: "Ein Köcherbaum als Silhouette gegen die Sonne in tiefblauem Himmel",
      highlights: [
        "Rote Kalahari Sande und Aufenthalte in Wüstenlodges",
        "Der Köcherbaumwald bei Keetmanshoop, am schönsten zur goldenen Stunde",
        "Fish River Canyon: einer der größten Canyons der Welt",
        "Große Südhimmel mit hervorragendem Sternenhimmel",
      ],
    },
    {
      slug: "swakopmund-damaraland-owamboland-etosha",
      name: "Swakopmund, Damaraland, Owamboland und Etosha",
      metaTitle: "Damaraland, Owamboland, Etosha",
      route: "Swakopmund nach Damaraland nach Owamboland nach Etosha",
      eyebrow: "Kultur und Tierwelt",
      blurb:
        "Entdecken Sie Namibias vielfältige Kulturen, alte Felslandschaften und Tierbeobachtung auf Weltniveau.",
      description: [
        "Diese Route führt durch das kulturelle Herzland des Landes. Von der Küste bei Swakopmund geht es ins Damaraland, wo an die Wüste angepasste Tiere zwischen Felsformationen wechseln und uralte Felskunst Jahrhunderte menschlicher Anwesenheit bezeugt.",
        "Nördlich des Damaraland durchquert die Route Owamboland, Heimat der größten Gemeinschaften Namibias und einer Lebensweise, die die meisten Besucher nie sehen, bevor die Tierwelt des Etosha-Nationalparks die Reise beschließt.",
      ],
      image: "/imagery/crops/rock-gorge-closeup-4x5.webp",
      alt: "Hohe verwitterte Felswände einer Wüstenschlucht, die sich oben vor dem Himmel zusammenschließen",
      highlights: [
        "Felslandschaften und uralte Felskunst im Damaraland",
        "Owambo Kulturbesuche abseits der üblichen Touristenroute",
        "An die Wüste angepasste Tierwelt in rauer Kulisse",
        "Tierbeobachtung im Etosha-Nationalpark zum Abschluss",
      ],
    },
    {
      slug: "windhoek-sossusvlei-swakopmund-brandberg",
      name: "Windhoek, Sossusvlei, Swakopmund und Brandberg",
      metaTitle: "Sossusvlei, Küste, Brandberg",
      route: "Windhoek nach Sossusvlei nach Swakopmund nach Brandberg",
      eyebrow: "Wüste und Küste",
      blurb:
        "Eine ausgewogene Mischung aus Wüstenlandschaft, Atlantikküste und dem majestätischen Brandberg.",
      description: [
        "Eine ausgewogene Runde, die Wüste und Küste verbindet mit einem Stopp am Brandberg, Namibias höchstem Berg und Heimat der berühmten Felskunst der White Lady.",
        "Die Reihenfolge hält die langen Fahretappen kurz, bringt Sie zum Sonnenaufgang an die Dünen und am Nachmittag in die Seebraise der Küste, während Ihr Guide das Tempo Ihrer Gruppe anpasst.",
      ],
      image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
      alt: "Rote Dünen über einer grünen Schotterebene unter klarem Himmel",
      highlights: [
        "Dünen des Sossusvlei und die Landschaft der Namibwüste",
        "Küste bei Swakopmund: Meeresluft, Meeresfrüchte und Abenteuer",
        "Brandberg, Namibias höchster Berg, und seine Felskunst",
        "Eine Runde ohne doppelte Etappen",
      ],
    },
    {
      slug: "24-days-namibia-discovery",
      name: "24 Tage Namibia Entdeckungsreise",
      metaTitle: "24 Tage Namibia Entdeckungsreise",
      route: "Komplette Landesrunde ab Windhoek",
      eyebrow: "24 Tage",
      blurb:
        "Die komplette Namibia Runde: jede Region, jedes Highlight, in einem Tempo, in dem Sie alles wirklich erleben.",
      description: [
        "Unsere längste Tour ist die komplette Namibia Entdeckung: die Canyons des Südens und die Kalahari, die Dünenfelder des Sossusvlei, Skelettküste und Swakopmund, die Felslandschaften des Damaraland, die Kulturen des Nordens und die Tierwelt des Etosha, alles in einer durchgehenden Reise.",
        "Vierundzwanzig Tage sind bewusst ohne Eile geplant. Zeit für die Pirschfahrt am Morgen und den Kulturbesuch am Nachmittag, für den Umweg, wenn Ihr Guide einen Aussichtspunkt kennt, der die Extrameilometer wert ist, und für Ruhetage zwischen den langen Etappen.",
        "Der genaue Tagesplan wird bei der Anfrage nach Ihren Reiseterminen und Interessen geformt, also sprechen Sie früh mit uns: Diese Tour belohnt Planung.",
      ],
      image: "/imagery/crops/thatched-chalets-hillside-4x5.webp",
      alt: "Reihe von Strohdach Chalets auf Stelzen unter einem felsigen roten Hügel",
      highlights: [
        "Jede große Region Namibias in einer durchgehenden Route",
        "Bewusst entspanntes Tempo mit Ruhetagen zwischen langen Etappen",
        "Kultur, Küste, Wüste und Tierwelt, ohne etwas zu überstürzen",
        "Reiseplan nach Ihren Terminen und Interessen",
      ],
    },
  ] as Tour[],

  activities: [
    {
      slug: "game-drive",
      name: "Game Drive",
      duration: "3 bis 4 Stunden",
      location: "Außerhalb Windhoeks",
      description:
        "Erleben Sie Namibias Tierwelt direkt vor Windhoek. Genießen Sie eine geführte Pirschfahrt, bei der Sie Giraffen, Zebras, Antilopen und andere heimische Tiere in ihrem Lebensraum begegnen können.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Gemsbok Oryx mit langen geraden Hörnern auf einem Graskamm im goldenen Licht",
    },
    {
      slug: "city-and-township-tour",
      name: "Stadt- und Township-Tour",
      duration: "2 bis 3 Stunden",
      location: "Windhoek",
      description:
        "Entdecken Sie das Herz Windhoeks. Ergründen Sie historische Wahrzeichen, lokale Märkte und lebendige Townships und erleben Sie den Alltag in Namibias Hauptstadt.",
      image: "/imagery/crops/windhoek-christuskirche-4x5.webp",
      alt: "Historische Christuskirche im Zentrum von Windhoek mit ihrem markanten Holzturm vor dem Himmel",
    },
    {
      slug: "bar-hopping-windhoek-by-night",
      name: "Barhopping: Windhoek bei Nacht",
      duration: "Abendtour",
      location: "Windhoek",
      description:
        "Erleben Sie Windhoeks Nachtleben mit Besuchen in beliebten lokalen Bars und Unterhaltungsorten. Treffen Sie Einheimische, genießen Sie gute Musik und entdecken Sie die Stadt nach Sonnenuntergang.",
      image: "/imagery/crops/sundowner-drinks-sunset-4x5.webp",
      alt: "Kalte Getränke auf einem Tisch im warmen Licht eines namibischen Sonnenuntergangs",
    },
    {
      slug: "taste-namibia-cooking-class",
      name: "Taste Namibia: Traditioneller Kochkurs",
      duration: "2 bis 3 Stunden",
      location: "Windhoek",
      description:
        "Lernen Sie authentische namibische Gerichte mit traditionellen Zutaten und Garmethoden zuzubereiten. Ein praktisches Kulturerlebnis für Feinschmecker.",
      image: "/imagery/crops/campfire-cooking-pot-4x5.webp",
      alt: "Gusseiserner Potjie Topf schmort über glühender Kohle auf offenem Feuer",
    },
    {
      slug: "bushmen-walk",
      name: "Altes Wissen erleben: Die San-Wanderung",
      duration: "3 Stunden",
      location: "Nahe Windhoek",
      description:
        "Gehen Sie mit San Guides und entdecken Sie alte Überlebenstechniken, Spurenlesen, Heilpflanzen und das reiche Erbe einer der ältesten Kulturen der Welt.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Gemsbok Oryx mit langen geraden Hörnern auf einem Graskamm im goldenen Licht",
    },
    {
      slug: "sunrise-desert-excursion",
      name: "Sonnenaufgang in der Wüste",
      duration: "Halber Tag",
      location: "Namibwüste",
      description:
        "Erleben Sie, wie die Wüste erwacht, wenn die ersten Sonnenstrahlen die Dünen in Gold und Orange tauchen. Ein perfektes Erlebnis für Fotografen und Naturliebhaber.",
      image: "/imagery/crops/dunes-sunburst-pan-4x5.webp",
      alt: "Die Sonne bricht über Dünen hervor, über einer dünnen Wasserschicht auf dem Sand",
    },
    {
      slug: "photography-tour",
      name: "Fototour",
      duration: "Flexibel",
      location: "Auf Anfrage",
      description:
        "Halten Sie Namibias berühmteste Landschaften und Tiere fest, begleitet von lokalen Experten, die die besten Aussichtspunkte und Lichtverhältnisse kennen.",
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Offenes Safarifahrzeug mit zwei Gästen über roten Sand im Abendlicht",
    },
    {
      slug: "spitzkoppe-hiking",
      name: "Spitzkoppe Wandererlebnis",
      duration: "Halber Tag",
      location: "Spitzkoppe",
      description:
        "Erkunden Sie die dramatischen Granitformationen des Spitzkoppe und genießen Sie weite Blicke über die umgebende Wüstenlandschaft.",
      image: "/imagery/crops/spitzkoppe-massif-4x5.webp",
      alt: "Das Granitmassiv der Spitzkoppe erhebt sich über den Wüstenbusch",
    },
    {
      slug: "swakopmund-coastal-adventure",
      name: "Swakopmund Küstenabenteuer",
      duration: "Ganzer Tag",
      location: "Swakopmund",
      description:
        "Genießen Sie die einzigartige Begegnung von Atlantik und Namibwüste mit Möglichkeiten zu Besichtigungen, Strandspaziergängen und lokalen Entdeckungen.",
      image: "/imagery/crops/walvis-bay-jetty-4x5.webp",
      alt: "Ein langer Holzsteg reicht in ruhiges Atlantikwasser, Segelboote liegen in der Bucht",
    },
    {
      slug: "sandwich-harbour-4x4",
      name: "Sandwich Harbour: Wo der Ozean auf die Wüste trifft",
      duration: "Halber Tag",
      location: "Walvis Bay",
      description:
        "Fahren Sie von Walvis Bay aus nach Süden und sehen Sie, wie die Dünen des Namib direkt in den Atlantik laufen. Dieses geschützte Feuchtgebiet im Namib-Naukluft-Park zieht Flamingos und Pelikane in seine Lagune, und der einzige Zugang ist im 4x4 über weichen Sand, während Ihr Guide die Gezeiten im Blick behält.",
      image: "/imagery/crops/sandwich-harbour-ocean-dunes-4x5.webp",
      alt: "Die Dünen des Namib laufen am Sandwich Harbour direkt in die Brandung des Atlantiks",
    },
    {
      slug: "etosha-wildlife-safari",
      name: "Etosha Wildtier-Safari",
      duration: "Ganzer Tag",
      location: "Etosha-Nationalpark",
      description:
        "Verbringen Sie einen ganzen Tag im Etosha-Nationalpark, berühmt für seine reiche Tierwelt und herausragende Möglichkeiten zur Tierbeobachtung.",
      image: "/imagery/crops/elephants-etosha-waterhole-4x5.webp",
      alt: "Elefanten trinken an einem Wasserloch im Etosha-Nationalpark",
    },
    {
      slug: "stargazing-experience",
      name: "Sternenhimmel-Erlebnis",
      duration: "Abend",
      location: "Auf Anfrage",
      description:
        "Namibia gehört zu den dunkelsten Himmeln der Welt. Verbringen Sie einen Abend unter einem Teppich von Sternen und lernen Sie den südlichen Nachthimmel kennen.",
      image: "/imagery/crops/namib-night-sky-4x5.webp",
      alt: "Die Milchstraße spannt sich über dunkle Wüstendünen bei Nacht",
    },
    {
      slug: "kalahari-cultural-experience",
      name: "Kalahari Kulturerlebnis",
      duration: "Halber Tag",
      location: "Kalahari",
      description:
        "Erleben Sie traditionelle Kalahari Gastfreundschaft, Geschichten, Musik und lokale Bräuche und lernen Sie das Leben in der Wüste kennen.",
      image: "/imagery/crops/kalahari-red-sands-4x5.webp",
      alt: "Rote Kalahari Dünen mit spärlichem Wüstengras unter weichem Abendhimmel",
    },
  ] as Activity[],
};
