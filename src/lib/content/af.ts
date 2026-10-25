/* Afrikaans bron van waarheid vir elke gebruikergerigte string.
   Duitse en Franse woordeboeke in de.ts / fr.ts moet hierdie vorm bevredig.
   Stemreëls (BRAND-GUIDE afdeling 7): geen em strepies, geen verbode woorde,
   N$ geldeenheid, +264 telefoonformaat. Nie uitgevind nie. */

import type { Activity, GalleryPhoto, Testimonial, Tour } from "./shared";
import { company } from "./shared";

export const af = {
  code: "af",
  label: "Afrikaans",
  ogLocale: "af_NA",
  quoteMarks: { open: "\u201C", close: "\u201D" },

  meta: {
    home: {
      title: "Liger Tours Namibia | Gidsgeleide Namibiese Toere vanaf Windhoek",
      description:
        "Plaaslik besit toernemaatskappy in Windhoek. Gidsgeleide Namibiese toere na Sossusvlei, Etosha, Swakopmund en die Kalahari, beplan rondom u datum en groep.",
    },
    tours: {
      title: "Namibiese Toere: Duine, Wildlewe, Kus",
      description:
        "Ses gidsgeleide Namibiese toere vanaf Windhoek: kenmerkende duin- en safariroetes, suidelike canyonreise, kulturele roetes en 'n 24-dagse ontdekkingskringloop.",
    },
    activities: {
      title: "Dagaktiwiteite rondom Windhoek",
      description:
        "Wildritte, townshipbesoeke, San-geleide wandelinge, kookklasse, Spitzkoppe-wandelings en sterregazing rondom Windhoek, met plaaslike gidse.",
    },
    about: {
      title: "Oor Liger Tours Namibia",
      description:
        "Liger Tours Namibia is 'n plaaslik besit, NTB geregistreerde toermaatskappy in Windhoek. Leer die span ken, ons sending en die waardes agter elke gidsgeleide roete.",
    },
    gallery: {
      title: "Galery: Namibiese Beelde",
      description:
        "Duine, wildlewe en lodges van Liger Tours Namibia reise: Sossusvlei kleipanne, Kalahari sand, Etosha wildlewe en die akkommodasie waar u oornag.",
    },
    contact: {
      title: "Kontak en Navrae",
      description:
        "Beplan u Namibiese toer: bel +264 81 472 2552, WhatsApp of e-pos info@ligertoursnamibia.com. Ons antwoord binne een werksdag.",
    },
    brand: {
      title: "Handelsmerk: Kleure, Tipe en Logo Reëls",
      description:
        "Die Liger Tours Namibia handelsmerkstelsel: kleure uit die logo-kuns, die drie tipes, logo-gebruiksreëls en die handtekeninggrafiese elemente.",
    },
    privacy: {
      title: "Privaatheidsbeleid",
      description:
        "Hoe Liger Tours Namibia u persoonlike inligting versamel, gebruik en beskerm wanneer u navraag doen of 'n toer boek.",
    },
    terms: {
      title: "Voorwaarde van Diens",
      description:
        "Boekingsvoorwaardes vir Liger Tours Namibia toere: kwotasies, betalings in N$, kansellasies, versekering en aanspreeklikheid.",
    },
  },

  a11y: {
    skip: "Gaan na hoofinhoud",
    languages: "Wissel taal",
    languageDock: "Taalopsies",
    menuOpen: "Open kieslys",
    menuClose: "Sluit kieslys",
    homeLink: "Liger Tours Namibia: tuis",
    prevSlide: "Vorige getuenis",
    nextSlide: "Volgende getuenis",
    goToSlide: "Gaan na getuenis {n} van 3",
    lightboxOpen: "Open beeld: {alt}",
    lightboxPrev: "Vorige beeld",
    lightboxNext: "Volgende beeld",
    lightboxClose: "Sluit",
  },

  nav: [
    { href: "/tours", label: "Toere" },
    { href: "/activities", label: "Aktiwiteite" },
    { href: "/about", label: "Oor" },
    { href: "/gallery", label: "Galery" },
    { href: "/contact", label: "Kontak" },
  ],

  search: {
    label: "Soek die webtuiste",
    placeholder: "Soek toere, aktiwiteite, plekke",
    noResults: "Niks pas nie. Probeer 'n plek of 'n woord soos duine.",
    clear: "Maak soek skoon",
    pages: "Bladsye",
    tours: "Toere",
    activities: "Aktiwiteite",
    resultAria: "Soekresultaat: {name}",
  },

  langDock: {
    open: "Kies 'n taal",
    heading: "Taal",
    current: "Huidig",
  },

  header: { planTrip: "Beplan my reis", whatsapp: "WhatsApp ons nou" },

  footer: {
    blurb:
      "Plaaslik besit toernemaatskappy gebaseer in Windhoek, geregistreer by die Namibiese Toerisme-raad. Gidsgeleide toere regoor Namibië: woestyn, kus, canyon en wildlewe.",
    explore: "Verken",
    contactHeading: "Kontak",
    whatsappLabel: "WhatsApp",
    rights: "Alle regte voorbehou.",
    registered: company.registered as string,
    privacy: "Privaatheidsbeleid",
    terms: "Voorwaardes",
    brandLink: "Handelsmerk",
    credit: "Gemaak deur Tangison Studio",
  },

  hero: {
    kicker: "Gidsgelei deur plaaslikes",
    title: "Namibië, ongedwingd.",
    lead: "Plaaslik besit, Windhoek gebaseer. Klein groep gidsgeleide toere van die rooi duine van Sossusvlei tot die wildlewe van Etosha, beplan rondom u datum en u tempo.",
    primaryCta: "Beplan my reis",
    secondaryCta: "Sien die toere",
    imageAlt:
      "Oop safarivoertuig wat twee gaste oor rooi Namib-sand dra by goue ure, duinskadu wat agter dit strek",
  },

  home: {
  intro: {
      eyebrow: "Plaaslik besit, NTB geregistreer",
      h2: "Die beste manier om Namibia te sien, is met mense wat dit tuis noem.",
      p1: "Liger Tours Namibia is 'n Windhoek toermaatskappy gebou op egte plaaslike kennis. Van wildritte net buite die hoofstad tot meerdaagse reise dwarsdeur die land se woestyne, kuslyne en wildreservate, is elke roete ontwerp om u die regte Namibia te wys, teen 'n tempo wat u laat inkom.",
      p2: "As 'n maatskappy geregistreer by die Namibia Tourism Board, beplan ons elke reis rondom die mense wat dit bespreek: pare, gesinne, groepe en enkelreisigers, elkeen met 'n roete, tempo en reisstyl wat by hulle pas.",
      cta: "Meer oor ons",
      imageAlt:
        "'n Kudde van antilope wat oor groen savanne met verspreide akasiabome wei",
    },
    stats: {
      ariaLabel: "Liger Tours in syfers",
      items: [
        { value: 7, suffix: "", label: "Kenmerkende roetes" },
        { value: 12, suffix: "", label: "Geduide ervarings" },
        { value: 100, suffix: "%", label: "Plaaslik besit" },
        { label: "Land, diep bekend", raw: "NTB" },
      ],
    },
    tours: {
      eyebrow: "Waarheen ons gaan",
      h2: "Kenmerkende toere, gevorm rondom u.",
      cta: "Sien alle roetes",
      ariaLabel: "Kenmerkende toere",
    },
    pinned: {
      quote: "Vyfhonderd jaar ou bome. 'n Duisend meter duine. Jou oggend.",
      imageAlt:
        "Dooie akasiabome wat op die wit klei van Deadvlei staan, omring deur indrukwekkende rooi duine onder 'n diepblou hemel",
      ariaLabel: "Die Namib-landskap",
    },
    why: {
      eyebrow: "Why Liger Tours",
      h2: "Wat die verskil maak.",
      ariaLabel: "Waarom met ons reis",
      items: [
        {
          n: "1",
          title: "Plaaslike kundigheid",
          body: "Gidse wat Namibië se geskiedenis, wild, kulture en die stille hoeke ken wat die meeste reisskema's oorslaan.",
        },
        {
          n: "2",
          title: "Outentieke ervarings",
          body: "Bosmense-wandelinge, tradisionele kookklasse, township-toere: egte ontmoetings, gereël met respek.",
        },
        {
          n: "3",
          title: "Persoonlike diens",
          body: "Elke toer word op maat gemaak vir pare, gesinne, groepe en enkelreisigers, vanaf die eerste navraag tot die finale afset.",
        },
        {
          n: "4",
          title: "Gemak en veiligheid",
          body: "Gemak en veiligheid is die hoogste prioriteit deur elke reis, nie opsionele bykomstighede nie.",
        },
        {
          n: "5",
          title: "Geregistreerde operateur",
          body: "Geregistreer by die Namibia Tourism Board (NTB) en gehou aan professionele standaards by elke stap.",
        },
      ],
    },
    activities: {
      eyebrow: "Daguitstappies en ervarings",
      h2: "Kort op tyd? Begin hier.",
      cta: "Bekyk alle ervarings",
      ariaLabel: "Aktiwiteite",
    },
    stay: {
      eyebrow: "Waar u oornag",
      h2: "Lodges en kampe gekies soos ons vir ons familie sou kies.",
      p: "Van houtlodges op Kalahari-duine tot rietdakchalets bo die rivierbeddens, is elke stop op 'n Liger-toer 'n plek wat ons self oorgebly het en aan ons familie sou aanbeveel. Gemak waar dit tel, karakter oral, en plekke gekies vir die uitsig waarmee u wakker word.",
      cta: "Sien die roetes",
      imageAlt1:
        "Ry van rietdakchalets op pale langs 'n rooi rotsheuwel, gesien van onder af middags",
      imageAlt2:
        "Houtlodge-kabin met 'n groen dak wat op rooi Kalahari-sand staan onder 'n helderblou hemel",
    },
    testimonials: {
      eyebrow: "Gaste se woorde",
      h2: "Wat ons gaste sê.",
      ariaLabel: "Wat ons gaste sê",
    },
    cta: {
      h2: "Klaar wanneer u klaar is.",
      script: "Vertel ons u datums. Ons sal die reis rondom hulle bou.",
      primaryCta: "Beplan my reis",
      whatsappCta: "WhatsApp ons nou",
    },
  },

  toursPage: {
    eyebrow: "Toere",
    title: "Kies u Namibia.",
    pageHeaderAlt:
      "Rooi duine wat bo 'n groen en gruisvlak onder 'n skoon hemel in die Namib-woesteryn styg",
    lead: "Elke roete begin en eindig in Windhoek en is gevorm rondom u datums en groep. Duurde word bevestig met u by navraag, dus is niks op hierdie blad 'n raai nie.",
    multiDay: "Meerdaagse roetes",
    longHaul: "Die lang reis",
    customTitle: "Nie van hulle reg nie?",
    customBody:
      "Vertel ons wat u wil sien en hoe lank u het. Ons bou maatgemaakte roetes elke week.",
    notSureH2: "Nadat u nog nie seker watter roete nie?",
    notSureLead:
      "Stuur ons u datums en belangstellings. Ons sal reageer met 'n eerlike aanbeveling, selfs as dit 'n korter reis is as wat u gevra het.",
    planCta: "Beplan my reis",
    whatsappCta: "WhatsApp ons nou",
    enquireAria: "Navraag",
  },

  tourDetail: {
    route: "Roete",
    duration: "Duur",
    confirmedAtEnquiry: "Bevestig by navraag",
    groupSize: "Grootte van groep",
    groupSizeValue: "Slegs u groep",
    departs: "Vertrek",
    departsValue: "Windhoek, op u datums",
    theRoute: "Die roete",
    dayByDay: "Dag vir dag",
    dayByDayLead:
      "Die presiese dagplan word bevestig met u by navraag en gevorm rondom u datums. Hierdie is die stopplekke wat nooit verander nie.",
    included: "Inbegrepe",
    notIncluded: "Nie inbegrepe nie",
    includedItems: [
      "Plaaslike gids en bestuurder vir die hele roete",
      "Park- en bewaringsfooi op die reisskema",
      "Oornagting op die roete, vir u gereserveer",
      "Alle roetetransport vanaf en terug na Windhoek",
    ],
    notIncludedItems: [
      "Internasionale vlugte na en van Namibia",
      "Reisversekering (vereis voor vertrek)",
      "Persoonlike besteding, drankies en aandenkings",
      "Opsionele aktiwiteite nie op die roete gelys nie",
    ],
    priceNote:
      "Pryse hang af van u groepsgrootte, seisoen en oornagtingskeuses, dus ons sit elke toer individueel in N$ uiteen. Stuur die navraagvorm en u sal 'n volledige sit, met niks verborge, gewoonlik binne een werksdag hê.",
    enquiryTitle: "Navraag oor hierdie toer",
    enquiryLead:
      "Vertel ons u datums en groep. Ons reageer met 'n persoonlike sit en 'n eerlike mening oor tydskedule.",
    whatsappCta: "Verkeer WhatsApp? Stuur ons 'n boodskap nou",
        viewTour: "Bekyk die toer",
    moreTours: "Ander roetes wat u dalk sal leuk vind",
    viewTourAria: "Bekyk die toer: {name}",
    touristType: "Klein groepsgeduide toer",
    enquireAria: "Navraag oor hierdie toer",
  },

  activitiesPage: {
    eyebrow: "Aktiwiteite",
    title: "Maak een dag tel.",
    pageHeaderAlt:
      "Gemsbok-oryx wat op 'n grasryk heuwel in warm goue aandlig staan",
    lead: "Dag ervarings wat u alleen kan boek of by enige toer kan voeg. Hierdie alles loop met plaaslike gidse, in klein groepe, tye van die dag wat sin maak vir die lig en die wild.",
    addToTrip: "Voeg dit by my reis",
    addH2: "Voeg enige van hierdie by u toer.",
    addLead:
      "Die meeste gaste boek een of twee dag ervarings rondom 'n langer roete. Vertel ons wat u aandag getrek het en ons sal dit in die plan pas.",
    planCta: "Beplan my reis",
    whatsappCta: "WhatsApp ons nou",
    addAria: "Voeg 'n aktiwiteit by u toer",
  },
  aboutPage: {
    eyebrow: "Oor ons",
    title: "Lokaal, en daarop trots.",
    pageHeaderAlt:
      "Ry van rietdakhuise op palings onder 'n rooi heuwelkant onder 'n helder hemel",
    storyEyebrow: "Ons storie",
    storyH2: "Deur mense gebou wat met hierdie land grootgeword het.",
    story: [
      "Liger Tours Namibia is 'n plaaslik besit toermaatskappy wat in Windhoek gebaseer is, gebou op 'n eenvoudige idee: die beste manier om Namibia te sien is met mense wat dit hulle tuis noem. Die maatskappy is deur 'n Omgewingswetenskapse afgestudeerde gestig wie se bewondering vir natuur en volhouende reis elke roete vorm, van 'n oggendwildrit buite die hoofstad tot 'n meerdaagse reis deur die land.",
      "As 'n maatskappy by die Namibia Toerisme Raad (NTB) geregistreer, hou Liger Tours Namiba homself aan professionele standaards by elke stap van 'n reis. Toere word rondom die gaste wat boek beplan: pare, gesinne, groepe en alleenreisigers kry almal 'n roete, tempo en styl van reis wat by hulle pas, met gemak en veiligheid as prioriteite behandel eerder as ekstras.",
      "Elke toer wys die landskappe, wildlewe en kulture van Namibia terwyl verantwoordelike en volhouende toerisme bevorder word. Dit beteken plaaslike gidse, egte kulturele ontmoetings wat met respek gereël word, en roetes wat die plekke wat gaste besoek net laat soos hulle dit gevind het.",
    ],
    missionEyebrow: "Ons sending",
    mission:
      "Om hoëgehalte toere te verskaf wat reisigers met die landskappe, wildlewe en mense van Namibia verbind terwyl verantwoordelike en volhouende toerisme bevorder word.",
    visionEyebrow: "Ons visie",
    vision:
      "Om een van Namibia se mees betroubare en inspirerende toermaatskappye te word deur uitsonderlike reiservaringe te lewer wat die land se natuurlike wonders, ryk kulture en warm gasvryheid vertoon.",
    valuesEyebrow: "Wat ons anders maak",
    valuesH2: "Vyf dinge wat ons nie opgee nie.",
    values: [
      {
        title: "Plaaslike kundigheid",
        body: "Ons gidse het uitgebreide kennis van Namibia se geskiedenis, wildlewe, kulture en stil hoeke wat die meeste roetes oorslaan.",
      },
      {
        title: "Egte ervarings",
        body: "Van San wandelinge en tradisionele kookklasse tot township toere en woesty avonture, ons konsentreer ons op egte kulturele ontmoetings.",
      },
      {
        title: "Persoonlike diens",
        body: "Ons pas ons toere aan om by pare, gesinne, groepe en alleenreisigers te pas, van die eerste navraag tot die finale afsetting.",
      },
      {
        title: "Gemak en veiligheid",
        body: "Uw gemak en veiligheid is ons hoogste prioriteite deur die hele reis, in die voertuig en by elke stop.",
      },
      {
        title: "Passie vir Namibia",
        body: "Wy is toegewy om die skoonheid en uniekheid van ons land met besoekers van oral oor die wêreld te deel.",
      },
    ],
    panel: "Geregistreer by die Namibia Toerisme Raad en gebaseer in Windhoek.",
    planCta: "Beplan my reis",
    storyImageAlt:
      "Liger Tours gaste saam rondom die Kreefstroppad paaiteken op rooi woestygrond",
    moments: {
      eyebrow: "Van ons reise",
      h2: "Egte oomblikke, van die pad.",
      lead: "Gaste by die Kreefstroppad, 'n Atlantiese strandwandeling, 'n stop waar die woesty die snelweg kruis: foto's van Liger reise, nie 'n voorraadbiblioteek nie.",
      alt1:
        "Vier gaste wat 'n wye Atlantiesestrand loop, een wat kniel om voetspore in die sand te fotografeer",
      alt2:
        "Vragmotors wat in 'n lyn by 'n woesty paaistand onder 'n luifel geparkeer is",
      alt3:
        "Verweerde houtgeboue wat stadig deur vorderende woesty sand begrawe word",
    },
  },

  galleryPage: {
    eyebrow: "Galery",
    title: "Die land, ongeëditeer.",
    pageHeaderAlt:
      "Kaal dooie akasiebome op ligte kleipan met 'n indrukwekkende rooi duin agterin",
    lead: "Foto's van ons reise, presies soos hulle van die kamera af gekom is. Kies enige prent om dit oop te maak, dan beweeg met die pylvleksleutels en sluit met Escape.",
    seeH2: "Beter in persoon.",
    seeLead: "Elke foto hier is op 'n Liger roete geneem. Kom en neem u eie.",
    planCta: "Beplan my reis",
    whatsappCta: "WhatsApp ons nou",
    seeAria: "Sien dit self",
    photos: [
      {
        src: "/imagery/crops/safari-vehicle-red-sand-1x1.webp",
        alt: "Oop safari voertuig met twee gaste wat oor rooi sand by goue ure ry",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-1x1.webp",
        alt: "Gemsbok of gemsbok met lang reguit horings wat op 'n grasryk heuwel in goue lig staan",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
        alt: "Enkele dooie kameeldoringboom op die wit kleipan, 'n rooi duin wat agterin styg",
        tall: true,
      },
      {
        src: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
        alt: "'n Kokerboom silhoeët teen die son in 'n diep blou hemel",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-16x9.webp",
        alt: "Dooie akasiebome op 'n wit kleipan onder rooi duine en 'n diep blou hemel",
      },
      {
        src: "/imagery/crops/elephants-etosha-waterhole-1x1.webp",
        alt: "Olifante wat by 'n modderige watergat in Etosha Nasionale Park drink",
      },
      {
        src: "/imagery/crops/giraffes-walking-savanna-1x1.webp",
        alt: "Drie giraffes wat in 'n lyn verby groen akasiebome loop",
      },
      {
        src: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
        alt: "Hout lodge kabin met 'n groen dak op 'n rooi sandduin onder 'n blou hemel",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-warm-light-1x1.webp",
        alt: "Kaal dooie bome op ligte klei met 'n rooi duin wat agterin styg",
      },
      {
        src: "/imagery/crops/tropic-capricorn-group-16x9.webp",
        alt: "Toergaste saam rondom die Kreefstroppad paaiteken op rooi woestygrond",
      },
      {
        src: "/imagery/crops/quiver-tree-forest-dusk-16x9.webp",
        alt: "Kokerbome silhoeët teen 'n oranje skemerryk",
      },
      {
        src: "/imagery/crops/coast-beach-group-4x5.webp",
        alt: "Vier gaste wat 'n wye Atlantiesestrand loop, een wat kniel om voetspore in die sand te fotografeer",
        tall: true,
      },
      {
        src: "/imagery/crops/red-dunes-valley-plain-16x9.webp",
        alt: "Rooi duine wat bo 'n groen en gravaalvlakte styg onder 'n helder hemel",
      },
      {
        src: "/imagery/crops/thatched-chalets-hillside-1x1.webp",
        alt: "Ry van rietdakhuise op palings onder 'n rooi heuwelkant",
        tall: true,
      },
      {
        src: "/imagery/crops/flamingos-walvis-bay-1x1.webp",
        alt: "Flamingo's wat deur die vlak blou water van Walvisbaai lagune stap",
      },
      {
        src: "/imagery/crops/rhino-and-ostrich-grassland-1x1.webp",
        alt: "'n Renoster wat in groen gras wei met 'n volstruis langs hom",
      },
      {
        src: "/imagery/crops/dunes-sunburst-pan-16x9.webp",
        alt: "Die son wat oor duine bo 'n dun laagie water op die sand bars",
      },
      {
        src: "/imagery/crops/fish-river-canyon-view-16x9.webp",
        alt: "Visrivierkloof wat deur laaiende rotswande in aandlig kronkel",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-16x9.webp",
        alt: "Gemsbok of gemsbok op 'n grasryk heuwel in goue aandlig",
      },
      {
        src: "/imagery/crops/overland-road-stop-16x9.webp",
        alt: "Vragmotors wat in 'n lyn by 'n woesty paaistand onder 'n luifel geparkeer is",
      },
      {
        src: "/imagery/crops/namib-night-sky-4x5.webp",
        alt: "Die Melkweg wat oor donker woesty duine snor",
        tall: true,
      },
      {
        src: "/imagery/crops/spitzkoppe-granite-peaks-1x1.webp",
        alt: "Gebalanseerde graniet klip van die Spitzkoppe bo die woestyvloer",
      },
      {
        src: "/imagery/crops/deadvlei-grove-16x9.webp",
        alt: "'n Grove van dooie kameeldoringbome op die wit kleipan onder rooi duine",
      },
      {
        src: "/imagery/crops/safari-vehicle-red-sand-16x9.webp",
        alt: "Safari spore oor rooi sand by goue ure",
      },
      {
        src: "/imagery/crops/sand-buried-ruins-16x9.webp",
        alt: "Verweerde houtgeboue wat stadig deur vorderende woesty sand begrawe word",
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
        alt: "Dooie akasiebome en rooi duine onder 'n diep blou hemel",
        tall: true,
      },
    ] as GalleryPhoto[],
  },
  contactPage: {
    eyebrow: "Kontak",
    title: "Sê vir ons u datums.",
    pageHeaderAlt:
      "Oop safarivoertuig wat rooi sand oorsteek tyd goue ure met duinskate agter",
    formH2: "Stuur \'n navraag",
    formLead:
      "Hoe meer u ons vertel, hoe beter is die eerste antwoord. Datumte, groepsgrootte, die plekke wat u al weet u wil hê: almal help ons om terug te kom met iets werklik in plaas van \'n brosjure.",
    panelH2: "Kontak ons direk",
    phone: "Telefoon",
    whatsapp: "WhatsApp",
    chatWithUs: "Chat met ons",
    email: "Epos",
    whereWeAre: "Waar ons is",
    hours: "Ure",
    mapCta: "Open die kaart",
    seasonH2: "Die beste maande word vroeg volgeboek.",
    seasonLead:
      "Mei tot Oktober is hoogsaison in Namibië, en die beste lodges rondom Etosha en Sossusvlei maande vooraf vul. Hoe vroër u navraag, hoe beter die reis wat ons kan bou.",
    seasonAria: "Plan vooruit",
  },

  form: {
    name: "Naam *",
    nameError: "Vertel ons asseblief u naam.",
    email: "Epos *",
    emailError: "Gebruik asseblief \'n geldige eposadres sodat ons kan antwoord.",
    phone: "Telefoon of WhatsApp",
    phonePlaceholder: "+264 ...",
    groupSize: "Groepsgrootte",
    groupSizePlaceholder: "2 volwassenes",
    dates: "Reisdatums",
    datesPlaceholder: "Rondom 5 tot 18 Julie 2027",
    message: "U boodskap *",
    messageError:
      "Voeg asseblief \'n paar besonderhede oor u reis by (10 karakters of meer).",
    messagePlaceholder:
      "Vertel ons waarheen u wil gaan, hoe lank u het en wat u wil sien.",
    submit: "Stuur my navraag",
    sending: "Besig om te stuur...",
    successTitle: "Dankie, u navraag is ontvang.",
    successBody: `Ons beantwoord elke navraag persoonlik, gewoonlik binne een werksdag. As u datums naby is, WhatsApp ons op ${company.phone} en ons sal dit dadelik oppak.`,
    whatsappCta: "WhatsApp ons",
    generalError:
      "Iets het verkeerd gegaan met die stuur van u navraag. Probeer weer, of kontak ons op WhatsApp.",
  },

  notFound: {
    title: "Nie gevind nie",
    h1: "Hierdie spoor gaan nêrens heen nie.",
    lead: "Die bladsy wat u soek het verskuif of het nooit bestaan nie. Die roetes hieronder lei almal na goeie plekke.",
    back: "Terug na die begin",
    viewTours: "Bekyk toere",
  },

  errorPage: {
    h1: "Iets het aan ons kant gebreek.",
    lead: "Soos enige goeie safari-voertuig, sal die bladsy binnekort herstel word. Probeer weer, en as dit voortduur, WhatsApp ons en ons sal dit met die hand regstel.",
    tryAgain: "Probeer weer",
    back: "Terug na die begin",
    whatsapp: "WhatsApp ons",
  },

  brandPage: {
    eyebrow: "Handelsmerk",
    title: "Die Liger-handelsmerk, op een bladsy.",
    pageHeaderAlt:
      "Dooie akasiabome op \'n wit kleipan onder rooi duine en \'n diepblou hemel",
    logoH2: "Logo",
    logoBody:
      "Een logo, slegs voorsien van variante. Die volle lockup sit nooit in \'n boks, skyfie of sirkel nie, word nooit herskaker, gestrek of herstyl nie, en kom nooit op \'n drukkie foto sonder \'n aandag-oërlag nie. Skramplek rondom die logo is een derde van die boomkroonhoogte. Onder 140px breed, skakel oor na die woordmerk of ikoonlêer.",
    onLight: "Op ligte agtergronde",
    onDark: "Op donker agtergronde",
    mono: "Mono-variante",
    coloursH2: "Kleur",
    coloursBody:
      "Elke waarde is uit die logo-kunswerk geneem: die rooi van die lettertipes en sonsopkoms, die olyfgroen van die akasia, en die byna-swarte nag vir donker afdelings. Rooi is die handelsmerk; komponente gebruik die semantiese tokens, nie rou heks nie.",
    swatch: "Kleurstaal",
    colourName: "Token",
    colourHex: "Heks",
    colourUse: "Gebruik",
    colourUseBg: "Standaard bladsyagtergrond",
    colourUseAlt: "Alternatiewe afdelings",
    colourUseTint: "Kenmerkepanele, boogagtergronde",
    colourUseBorder: "Rande, skeidings",
    colourUseDiscs: "Skyfskotte, boogomlysting, dekoratief",
    colourUseDeco: "Slegs dekoratief",
    colourUseDisplay: "Slegs groot vertoon-tekst",
    colourUseBrand: "Knoppies, skakels, opschrifte-aksent",
    colourUseHover: "Muisoor, sterk panele",
    colourUseInk: "Liggaam-tekst",
    colourUseNight: "Donker afdelings, voetskrif",
    colourUseAcacia: "Boomkleur in logo, fokusring op ligte agtergrond",
    colourUseSunrise: "Slegs klein aksente op donker agtergrond, fokusring",
    typeH2: "Tipegrafie",
    typeBody:
      "Drie families, almal vrye lisensies, selfgegasheer met font-display swap. Twee rolle op die skerm op dieselfde tyd is die norm; die skrif is gereserveer sodat sy impak bly.",
    typeRows: [
      {
        label: "H1 / held: Kaushan Script",
        sample: "Namibië, ongedwongen.",
        note: "Borskrif wat die logo-lettertipe naboewe. Slegs groot groottes, sinhoofletter, nooit vet of hoofletters nie.",
      },
      {
        label: "Opskrifte en UI: Archivo",
        sample: "Woestyn, kus, canyon en wild.",
        note: "Veranderende breedte en gewig. Breed en swaar vir impak. Slegs hoofletters vir wenkbroue, etikette en knoppies.",
      },
      {
        label: "Liggaam: Schibsted Grotesk",
        sample:
          "Eenvoudige sinne wat werklike plekke, werklike duur en wat die gaswerklik doen, noem. Links uitgelê, genadige reghoogte, niks kleiner as 14px nie.",
        note: "Normaal vir lees, semi-vet vir nadruk. Maksimum 62 karakters per lyn.",
      },
    ],
    devicesH2: "Handtekening-elemente",
    devicesBody:
      "Vier herhalende elemente dra die identiteit: boog-gemaskeerde foto\'s met \'n dun verskuiwende omlysting, oorvleuelende skyfskotte wat agter foto\'s kyk (nie meer as twee per aansig nie), gekurwe duinskeidings gekleur soos die volgende afdeling, en die opschrift-lockup van \'n Archivo-kicker bo een fraseskrif.",
    deviceCaptions: ["Boogmasker, 4:5", "Skyfskotte, maks 2", "Duinskeiding", "Opschrift-lockup"],
    lockupKicker: "Gedryf deur plaaslikes",
    lockupScript: "Namibië, ongedwongen.",
    creditsH2: "Foto-krediete",
    creditsBody:
      "Klientfotos word aangevul deur vrygelisensieerde beelde: Wikimedia Commons (CC BY-SA, CC0), Pexels en Unsplash. Volledige erkenning vir elke beeld word in die projeklisensielog gehou; Commons-bladsye dra die volledige krediete.",
  },
  privacy: {
    title: "Privaatheidsbeleid",
    lastUpdated: "Laas bygewerk: Oktober 2026",
    legalEyebrow: "Regtelik",
    sections: [
      {
        h: "Wie ons is",
        p: [
          `Liger Tours Namibia is 'n plaasgebaseerde toeroperateur in Windhoek, Namibië, geregistreer by die Namibiese Toereraad. U kan ons kontak by ${company.email} of ${company.phone} vir enigiets wat verband hou met hierdie beleid.`,
        ],
      },
      {
        h: "Wat ons versamel",
        p: [
          "Wanneer u 'n navraag deur hierdie webwerf stuur, versamel ons die besonderhede wat u kies om aan ons te gee: u naam, e-posadres,foonnommer, reisdatums, groepsgrootte en die inhoud van u boodskap. Ons gebruik hierdie slegs om op u navraag te reageer en die reis wat u gevra het, te beplan.",
          "Soos die meeste webwerwe, hou ons gasheerplatform standaard tegniese logboeke soos IP-adres, tipe blaaier en besoekte bladsye vir sekuriteit- en prestasiebewaking.",
        ],
      },
      {
        h: "Hoe ons u inligting gebruik",
        p: [
          "Ons gebruik u navraag besonderhede om op u te reageer, kwotasies voor te berei en, as u voortgaan, u boekings te bestuur. Ons verkoop nie u inligting nie, en ons deel dit nie met derde partye nie, behalwe die diensverskaffers wat direk by die lewering van u reis betrokke is (soos lodges en afdelingsvennote) nadat u geboek het, of waar Namibiese wetgewing dit vereis.",
          "Navraag besonderhede word net so lank bewaar as wat nodig is om u navraag en enige gevolglike boekings te hanteer, waarna dit verwyder word.",
        ],
      },
      {
        h: "Derde party dienste",
        p: [
          "Hierdie webwerf word op Vercel gehuisves agter Cloudflare dienste. U navraagvorminligting word in ons beveiligde boekingsdatabasis gestoor. WhatsApp skakels open WhatsApp, wat deur sy eie privaatheidsbeleid bedryf word. Ons plaas geen advertensie-opsporingsinstrumente op hierdie webwerf nie.",
        ],
      },
      {
        h: "U regte",
        p: [
          "U kan ons op enige tyd vra om te bevestig watter persoonlike besonderhede ons oor u besit, dit te korrigeer, of te verwyder. Stuur ons 'n e-pos en ons sal die versoek binne 'n redelike tyd uitvoer. As u 'n klagte het oor hoe u inligting hanteer word, kontak ons eerste sodat ons dit regstel.",
        ],
      },
      {
        h: "Koekies",
        p: [
          "Hierdie webwerf gebruik slegs koekies of plaaslike berging wat strikt noodsaaklik is vir die funksionering van die webwerf en vir anoniem verkeersstatistiek. Daar is geen advertensie- of kros-sit opsporingskoekies nie. U kan koekies in u blaaier blokkeer en die webwerf sal steeds werk.",
        ],
      },
      {
        h: "Veranderinge aan hierdie beleid",
        p: [
          "As ons hierdie beleid verander, sal ons die nuwe weergave op hierdie bladsy publiseer met 'n bygewerk datum. Die weergave op hierdie bladsy is die een wat van toepassing is.",
        ],
      },
    ],
  },

  terms: {
    title: "Voorwaardes van diens",
    lastUpdated: "Laas bygewerk: Oktober 2026",
    legalEyebrow: "Regtelik",
    sections: [
      {
        h: "Hierdie voorwaardes",
        p: [
          `Hierdie voorwaardes is van toepassing wanneer u navraag doen of 'n toer by Liger Tours Namibia ("ons", "ons") boek, 'n toeroperateur in Windhoek, Namibië en geregistreer by die Namibiese Toereraad. Deur 'n boekingsbevestiging te bevestig, aanvaar u hierdie voorwaardes.`,
        ],
      },
      {
        h: "Navrae en kwotasies",
        p: [
          "Elke toer op hierdie webwerf word individueel in Namibiese dollar (N$) aangebied omdat pryse afhang van u groepsgrootte, reiseseisoen en akkommodasiekeuses. 'n Kwotasie is 14 dae geldig vanaf die datum dit gestuur is, tensy anders vermeld. 'n Boeking word eers bevestig nadat ons u ondertekende bevestiging en die aanbetaling soos beskryf in die kwotasie ontvang het.",
        ],
      },
      {
        h: "Betalinge",
        p: [
          `'n Aanbetaling word vereis om u datums te verseker, met die balans wat voor vertrek betaal word soos uiteengesit in u kwotasie. Alle betalings word in Namibiese dollar (N$) aangebied en ingevorder, tensy anders skriftlik ooreengekom is. Bank besonderhede verskyn slegs op amptelike kwotasies en rekenings; behandel enige versoek om na 'n ander rekening te betaal as verdag en bel ons op ${company.phone}.`,
        ],
      },
      {
        h: "Veranderinge en kansellasies deur u",
        p: [
          "As u datums moet verander of kanselleer, skryf ons so vroeg moontlik aan. Ons sal altyd probeer om u datums sonder koste te skuif waar lodges dit toelaat. Kansellasiekostes volg die skema in u kwotasie en weerspieël die streng kansellasievoorwaardes van die lodges en parke in Namibië, waarom reisverseuring vir elke gas nodig is.",
        ],
      },
      {
        h: "Veranderinge deur ons",
        p: [
          "Namibië is 'n wilde land: paaie spoel weg, riviere oorstroom en diere beweeg. Ons mag 'n roete vir weer, paaie, parke besluite of veiligheid aanpas. Enige verandering van gelyke of beter waarde word sonder koste gemaak. As 'n beduidende komponent nie gelewer kan word nie, sal ons 'n regverdige alternatief of 'n terugbetaling van daardie komponent bied.",
        ],
      },
      {
        h: "Verseuring, gesondheid en dokumente",
        p: [
          "Omvattende reisverseuring wat mediese koste, evakuering en kansellasie dek, is op alle toere vereis en moet voor vertrek gereël word. U is verantwoordelik vir 'n geldige paspoort, enige benodigde visums en aanbevole entstowwe. Malaria voorkeure is van toepassing in noordelike Namibië; neem advies by 'n reiskliniek voor u reis.",
        ],
      },
      {
        h: "Aanspreeklikheid",
        p: [
          "Ons neem redelike versorging in die beplanning en uitvoering van ons toere en geregistreerde verskaffers deur die loop van die reis gebruik. U neem deel aan wildritte, wandelritte en aktiwiteite op eie risiko en moet die instruksies van u gids te alle tye volg. Ons aanspreeklikheid is beperk tot die mate wat deur Namibiese wetgewing toegelaat word en is altyd onderhewig aan die verseuringsvereiste hierbo.",
        ],
      },
      {
        h: "Klagte en toepaslike wetgewing",
        p: [
          "As iets nie reg is nie, sê dit vir u gids onmiddellik sodat dit ter plaatse reggemaak kan word, en sê dit ons daarna skriftelik. Hierdie voorwaardes word gereguleer deur die wette van die Republiek van Namibië, en die howe van Namibië het jurisdiksie oor enige geskil.",
        ],
      },
    ],
  },

  testimonials: [
    {
      quote:
        "Ons roete was perfek aangepas by ons belangstellings. ons het gehou dat die span beide die ikoniese attraksies en die stil hoeke wat die meeste toeriste mis, aanbeveel het. Die diens was professioneel, vriendelik en betroubaar van begin tot einde.",
      name: "David en Emma T.",
      country: "Verenigde Koninkryk",
    },
    {
      quote:
        "Van die oomblik dat ons ons navraag gedoen het, het ons ons waardeer gevoel. Kommunikasie was vinnig, die beplanning was glad, en ons vakansie het elke verwagting oortref. Ons kan nie wag om terug te keer na Namibië met Liger Tours Namibia nie!",
      name: "Michael R.",
      country: "Duitsland",
    },
    {
      quote:
        "Ons reis na Namibië was indrukwekkend, en Liger Tours Namibia het elke moment spesiaal gemaak. Die roete is deeglik beplan, die aanbevelings was uitstekend, en alles het glad verloop van begin tot einde. Ons het die persoonlike aandag en warm gasvryheid gedurende ons reis waardeer. Ons sal Liger Tours Namibia sekerlik aan ons vriende en familie in Frankryk aanbeveel.",
      name: "Sophie L.",
      country: "Frankryk",
    },
  ] as Testimonial[],
  tours: [
    {
      slug: "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha",
      name: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe en Etosha",
      metaTitle: "Signature Namibia Safari Roete",
      route: "Windhoek na Sossusvlei na Swakopmund na Spitzkoppe na Etosha",
      eyebrow: "Signature toer",
      blurb:
        "Ons signature Namibia-reis wat woestynduine, kusstreke, granietpieke en uitsonderlike wildbelewing kombineer.",
      description: [
        "Dit is die roete waarom ons die maatskappy gestig het. Dit koppel die vier landskappe wat Namibia definieer: die rooi duine van Sossusvlei, die Atlantiese kus by Swakopmund, die granietpieke van Spitzkoppe en die wildryke vlaktes van Etosha Nasionale Park.",
        "U begin en eindig in Windhoek, dus is daar geen terugspoor nie en geen verloredae nie. Tussen die hoofpunte kruis die roete van die mees indrukwekkende landskappe in die land, met u gids wat die bestuur, die parkpoorte en die beplanning hanteer terwyl u die landskap buite die venster sien verander.",
      ],
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Ope safarivoertuig met twee gaste wat oor rooi sand ry tydens goue ure",
      highlights: [
        "Klim die duine by Sossusvlei in die vroeë oggendlig",
        "Wandel die strate en waterkant van Swakopmund aan die Atlantiese kus",
        "Sien die granietpieke van Spitzkoppe wat uit die woestyn opstyg",
        "Wildbesigtig deur Etosha Nasionale Park, een van Afrika se grootste reservate",
      ],
    },
    {
      slug: "sossusvlei-and-swakopmund",
      name: "Sossusvlei en Swakopmund Toer",
      metaTitle: "Sossusvlei en Swakopmund Toer",
      route: "Windhoek na Sossusvlei na Swakopmund",
      eyebrow: "Kort reisplan",
      blurb:
        "Ideesel vir reisigers wat Namibia ikoniese duine en kuservaringe in ’n korter reisplan wil hê.",
      description: [
        "Kort tyd? Hierdie roete koppel die twee meesversoekte bestemmings in Namibia: die duine by Sossusvlei en die kusstad Swakopmund. Dit is ontwerp vir reisigers wat die ikoniese plekke wil sien sonder om ’n volle twee weeks op te gee.",
        "U kry steeds die vroeë oggendtoegang tot die duine, die Deadvlei kleipan, en ’n volle smaak van Swakopmund se mengsel van see lug, Duitse argitektuur en avontuuraktiwiteite, almal op ’n gemaklike tempo vanaf Windhoek.",
      ],
      image: "/imagery/crops/deadvlei-lone-tree-4x5.webp",
      alt: "’n Enkele dooie kameeldoringboom op die wit kleipan, met ’n rooi duine agterin",
      highlights: [
        "Vroeë oggend by die Sossusvlei-duine en Deadvlei kleipan",
        "Gaub en Kuiseb kloofpasse op die pad na die kus",
        "’n Volle dag om Swakopmund en sy kuslyn te geniet",
        "Kort reisplan wat pas in ’n lang naweek plus reisdae",
      ],
    },
    {
      slug: "etosha-and-waterberg",
      name: "Etosha Nasionale Park en Waterberg Toer",
      metaTitle: "Etosha en Waterberg Toer",
      route: "Windhoek na Etosha na Waterberg",
      eyebrow: "Wildfokus",
      blurb:
        "Verken Etosha se beroemde wild en die skoonheid van die Waterberg-plato.",
      description: [
        "Gebou rondom wildbesigtig, spandeer hierdie toer sy dae by Etosha Nasionale Park, waar olifante, leeue, kameelperde, gemsbokke en renmense by die watergate langs die soutpan saamkom.",
        "Die roete eindig by die Waterberg-plato, ’n rooi sandsteen-tafelberg met wandelpaaie en uitsigpunte. Dit is ’n rustiger afsluiting na die vroeë begin van die Etosha wildritte en ’n geleentheid om die park se oostelike bosveld van bo af te sien.",
      ],
      image: "/imagery/crops/rhino-etosha-grass-4x5.webp",
      alt: "’n Renmense wat in goue gras wei met akasiabome agter hom",
      highlights: [
        "Volle wildritte deur Etosha Nasionale Park met ’n plaaslike gids",
        "Waterbesigtiging by Okaukuejo en die park se beroemde kampe",
        "Waterberg-plato uitsigpunte en wandelpaaie",
        "Goeie kans op sien van olifante, renmense, kameelperde en groot katte",
      ],
    },
    {
      slug: "kalahari-quiver-tree-fish-river-canyon",
      name: "Kalahari, Kokerboomwoud en Visrivier Canyon",
      metaTitle: "Kalahari en Visrivier Canyon",
      route: "Windhoek na Kalahari na Keetmanshoop na Visrivier Canyon",
      eyebrow: "Suid-Namibia",
      blurb:
        "Reis deur die rooi sand van die Kalahari en sien die dramatiese landskappe van suidelike Namibia.",
      description: [
        "Suid-Namibia is ’n studie in skaal. Die roete loop van die rooi sand van die Kalahari na die Kokerboomwoud naby Keetmanshoop, dan suid na die Visrivier Canyon, een van die grootste kanjons op die vasteland.",
        "Dae hier is oor lig en stilte eerder as ’n lys van aktiwiteite: sonsopkoms oor die duine, kokerbome wat in die skemering silhouet vorm, en die canyonrand tye van die dag wanneer sy kleure minuut vir minuut verander.",
      ],
      image: "/imagery/crops/quiver-tree-sun-silhouette-4x5.webp",
      alt: "’n Kokerboom wat teen die son in ’n diepblou lug gesilhouetteer is",
      highlights: [
        "Rooi Kalahari sand en woestyngasverblyf",
        "Die Kokerboomwoud by Keetmanshoop, beste tydens goue ure",
        "Visrivier Canyon: een van die grootste kanjons ter wêreld",
        "Groot suidelike hemel uitstekende sterrekyk",
      ],
    },
    {
      slug: "swakopmund-damaraland-owamboland-etosha",
      name: "Swakopmund, Damaraland, Ovamboland en Etosha",
      metaTitle: "Damaraland, Ovamboland, Etosha",
      route: "Swakopmund na Damaraland na Ovamboland na Etosha",
      eyebrow: "Kultuur en wild",
      blurb:
        "Ontdek Namibia se diverse kulture, antieke rotse landskappe en wêreldklas wildbesigtiging.",
      description: [
        "Hierdie roete loop deur die land se kulturele hartland. Vanaf die kus by Swakopmund beweeg dit na Damaraland, waar wild wat aan die woestyn aangepas is tussen rotse uitsteeksels beweeg en antieke rotse kuns eeue van mens teenwoordigmerk.",
        "Noord van Damaraland gaan die roete deur Ovamboland, tuis van die grootste gemeenskappe in Namibia en ’n leefwyse wat meeste besoekers nooit sien nie, voordat dit eindig met die wild van Etosha Nasionale Park.",
      ],
      image: "/imagery/crops/rock-gorge-closeup-4x5.webp",
      alt: "Hoë verweerde rotswande van ’n woestynek wat bo-uittens teen die lug sluit",
      highlights: [
        "Damaraland rotse landskappe en antieke rotse kuns",
        "Ovambo kulturele besoekte weg van die standaard toeriste roete",
        "Woestyn-aangepaste wild in ’n ruwe omgewing",
        "Etosha Nasionale Park wildbesigtiging om die reis af te sluit",
      ],
    },
    {
      slug: "windhoek-sossusvlei-swakopmund-brandberg",
      name: "Windhoek, Sossusvlei, Swakopmund en Brandberg",
      metaTitle: "Sossusvlei, Kus, Brandberg",
      route: "Windhoek na Sossusvlei na Swakopmund na Brandberg",
      eyebrow: "Woestyn en kus",
      blurb:
        "’n Volmaakte mengsel van woestynskoonheid, Atlantiese kus avonture en die majestueuse Brandberg Berg.",
      description: [
        "’n Gebalanseerde lus wat die woestyn en die kus kombineer met ’n stop by Brandberg, Namibia se hoogste berg en tuiste van die beroemde Wit Dame rotse kunspaneel.",
        "Die reisvolgorde hou langritte kort en plaas u by die duine vir sonsopkoms en aan die kus vir die namiddag seebries, met u gids wat die tempo aanpas om by u groep te pas.",
      ],
      image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
      alt: "Rooi duine wat bo ’n groen en gruisvlakte onder ’n helder hemel styg",
      highlights: [
        "Sossusvlei duine en die Namib woestynslandskap",
        "Swakopmund kus: see lug, seekos en avontuuraktiwiteite",
        "Brandberg, Namibia se hoogste berg, en sy rotse kuns",
        "’n Lusroete met herhaalde dele",
      ],
    },
    {
      slug: "24-days-namibia-discovery",
      name: "24 Dae Namibia Ontdekkingstoer",
      metaTitle: "24 Dae Namibia Ontdekking",
      route: "Volle land seirkus vanaf Windhoek",
      eyebrow: "24 dae",
      blurb:
        "Die volle Namibia seirkus: elke streek, elke hoogtepunt, by ’n tempo wat u toelaat om dit werklik te ervaar.",
      description: [
        "Ons langste toer is die volledige Namibia ontdekkingsreis: die suide se kanjons en die Kalahari, die duinveld van Sossusvlei, die Skeletkus en Swakopmund, Damaraland se rotse landskappe, die kulture van die noorde en die wild van Etosha, almal in een deurlopende reis.",
        "Veertig dae is doelbewus ongedwing. Daar is tyd vir die oggendwildrit en die namiddag kulturele besoek, vir die omweg wanneer u gids weet van ’n uitsigpunt wat die ekstra kilometer werd is, en vir rusdae tussen die lang dele.",
        "Die presise dag-tot-dag plan word gevorm rondom u reisdata en belangstellings wanneer u navraag doen, dus kontak ons vroeg: hierdie toer beloon beplanning.",
      ],
      image: "/imagery/crops/thatched-chalets-hillside-4x5.webp",
      alt: "Ry van rietdak chalets op palings onder ’n rooi rotshelling",
      highlights: [
        "Elke groot streek van Namibia in een deurlopende roete",
        "Ongedwingde tempo met rusdae ingebou tussen lang dele",
        "Kultuur, kus, woestyn en wild sonder om enige van hulle te haas",
        "Reisplan gevorm rondom u data en belangstellings",
      ],
    },
  ] as Tour[],
  activities: [
    {
      slug: "game-drive",
      name: "Wildrit",
      duration: "3 tot 4 ure",
      location: "Buite Windhoek",
      description:
        "Erva Namibië wildlewe net buite Windhoek. Geniet 'n gelei safari waar u giraffes, sebras, antilopes en ander inheemse diere in hul natuurlike habitat kan ontmoet.",
      image: "/imagery/crops/giraffes-walking-savanna-4x5.webp",
      alt: "Drie giraffes wat in 'n lyn loop tussen groen akasiabome op die savanne",
    },
    {
      slug: "city-and-township-tour",
      name: "Stad en Township-toer",
      duration: "2 tot 3 ure",
      location: "Windhoek",
      description:
        "Ontdek die hart van Windhoek. Verken historiese landmerke, plaaslike markte, lewendige townships en ervaar alledaagse lewe in Namibië se hoofstad.",
      image: "/imagery/crops/windhoek-christuskirche-4x5.webp",
      alt: "Historiese Christuskirche-kerk in sentrale Windhoek met sy houtspits teen die hemel",
    },
    {
      slug: "bar-hopping-windhoek-by-night",
      name: "Kroegspring: Windhoek by Nag",
      duration: "Oondertoeslag",
      location: "Windhoek",
      description:
        "Erva Windhoek se naglewe met besoek aan gewilde plaaslike kroeke en vermaakplekke. Tref plaaslikes, geniet goeie musiek en ontdek die stad ná die sonsondergang.",
      image: "/imagery/crops/sundowner-drinks-sunset-4x5.webp",
      alt: "Koue drankies op 'n tafel in die warm gloed van 'n Namibiese sonondergang",
    },
    {
      slug: "taste-namibia-cooking-class",
      name: "Probeer Namibië: Tradisionele Kookklas",
      duration: "2 tot 3 ure",
      location: "Windhoek",
      description:
        "Leer hoe om outentieke Namibiese geregte voor te berei met tradisione bestanddele en kookmetodes. 'n Praktiese kulturele ervaring vir kosliefhebbers.",
      image: "/imagery/crops/campfire-cooking-pot-4x5.webp",
      alt: "Gietyster potjie pot wat oor gloeiende kooltjies op 'n oop vuur kook",
    },
    {
      slug: "bushmen-walk",
      name: "Stap in Antieke Wysheid: Die Bosmanskoolwandeling",
      duration: "3 ure",
      location: "Naby Windhoek",
      description:
        "Wand saam met San gidse en ontdek antieke oorlewensvaardighede, spoor-tegnieke, medisinale plante en die ryk erfenis van een van die wêreld se oudste kulture.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Gemsbok of kudu met lang reguit horings wat op 'n grasryk heuwel in goue lig staan",
    },
    {
      slug: "sunrise-desert-excursion",
      name: "Sonsopkoms Woestyekspedisie",
      duration: "Halfdag",
      location: "Namib-woestyne",
      description:
        "Kyk hoe die woestyne tot lewe kom terwyl die eerste strale van sonlig die duine in skakerings van goud en oranje verf. 'n Volmaakte ervaring vir fotograwe en naturliefhebbers.",
      image: "/imagery/crops/dunes-sunburst-pan-4x5.webp",
      alt: "Die son wat oor duine bo 'n dun laag water op die sand bars",
    },
    {
      slug: "photography-tour",
      name: "Fotografietoer",
      duration: "Vloeiend",
      location: "Op aanvraag",
      description:
        "Vang Namibië se mees ikoniese landskappe en wildlewe met gidslin van plaaslike kenners wat die beste uitsigpunte en ligtoestande ken.",
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Ope safarivoertuig met twee gaste wat oor rooi sand tyd goue ure ry",
    },
    {
      slug: "spitzkoppe-hiking",
      name: "Spitzkoppe Bergklimervaring",
      duration: "Halfdag",
      location: "Spitzkoppe",
      description:
        "Verken die dramatiese granietformasies van Spitzkoppe en genuit uitsigte oor die omliggende woestyne landskap.",
      image: "/imagery/crops/spitzkoppe-massif-4x5.webp",
      alt: "Die granietmassief van die Spitzkoppe wat bo die woestyne struikelbos uitsteek",
    },
    {
      slug: "swakopmund-coastal-adventure",
      name: "Swakopmund Kusavontuur",
      duration: "Volledige dag",
      location: "Swakopmund",
      description:
        "Genuit die unieke ontmoetpunt van die Atlantiese Oseaan en die Namib-woestyne met geleenthede vir besigtiging, strandwandelinge en plaaslike verkenning.",
      image: "/imagery/crops/walvis-bay-jetty-4x5.webp",
      alt: "'n Lang houtsteiger wat in stil Atlantiese water uitsteek, seilskepe in die baai vasgemeet",
    },
    {
      slug: "etosha-wildlife-safari",
      name: "Etosha Wildlewe Safari",
      duration: "Volledige dag",
      location: "Etosha Nasionale Park",
      description:
        "Spend 'n volle dag om Etosha Nasionale Park te verken, bekend vir sy ryk wildlewe en uitsonderlike wildkyk geleenthede.",
      image: "/imagery/crops/elephants-etosha-waterhole-4x5.webp",
      alt: "Olifante wat by 'n modderige watergat in Etosha Nasionale Park drink",
    },
    {
      slug: "stargazing-experience",
      name: "Sterrekykervaring",
      duration: "Oondertoeslag",
      location: "Op aanvraag",
      description:
        "Namibië is die tuiste van een van die donkerste hemels in die wêreld. Spandeer 'n oond onder 'n dak van sterre en leer oor die suidelike naghemel.",
      image: "/imagery/crops/namib-night-sky-4x5.webp",
      alt: "Die Melkweg wat bo donker woestyne duine snor",
    },
    {
      slug: "kalahari-cultural-experience",
      name: "Kalahari Kulturele Ervaring",
      duration: "Halfdag",
      location: "Kalahari",
      description:
        "Erva tradisionele Kalahari gasvryheid, verhalevertelling, musiek en plaaslike gewoontes terwyl u leer oor lewe in die woestyne.",
      image: "/imagery/crops/kalahari-red-sands-4x5.webp",
      alt: "Rooi Kalahari sandduine met skaarse woestyne gras onder 'n sagte naghemel",
    },
  ] as Activity[],
};
