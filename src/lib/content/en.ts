/* English source of truth for every user-facing string.
   German and French dictionaries in de.ts / fr.ts must satisfy this shape.
   Voice rules (BRAND-GUIDE section 7): no em dashes, no banned words,
   N$ currency, +264 phone format. Nothing invented. */

import type { Activity, GalleryPhoto, Testimonial, Tour } from "./shared";
import { company } from "./shared";

export const en = {
  code: "en",
  label: "English",
  ogLocale: "en_NA",
  quoteMarks: { open: "\u201C", close: "\u201D" },

  meta: {
    home: {
      title: "Liger Tours Namibia | Guided Namibia Tours from Windhoek",
      description:
        "Locally owned tour operator in Windhoek. Guided Namibia tours to Sossusvlei, Etosha, Swakopmund and the Kalahari, planned around your dates and group.",
    },
    tours: {
      title: "Namibia Tours: Dunes, Wildlife, Coast",
      description:
        "Seven guided Namibia tours from Windhoek: signature dune and safari routes, southern canyon journeys, cultural routes and a 24-day discovery circuit.",
    },
    activities: {
      title: "Day Activities Around Windhoek",
      description:
        "Game drives, township tours, San-guided walks, cooking classes, Spitzkoppe hiking and stargazing around Windhoek, with local guides.",
    },
    about: {
      title: "About Liger Tours Namibia",
      description:
        "Liger Tours Namibia is a locally owned, NTB registered tour company in Windhoek. Meet the team, our mission and the values behind every guided route.",
    },
    gallery: {
      title: "Gallery: Namibia in Pictures",
      description:
        "Dunes, wildlife and lodges from Liger Tours Namibia trips: Sossusvlei clay pans, Kalahari sands, Etosha wildlife and the accommodation you sleep in.",
    },
    contact: {
      title: "Contact and Enquiries",
      description:
        "Plan your Namibia tour: phone +264 81 472 2552, WhatsApp or email info@ligertoursnamibia.com. We reply within one working day.",
    },
    brand: {
      title: "Brand: Colours, Type and Logo Rules",
      description:
        "The Liger Tours Namibia brand system: colour tokens from the logo artwork, the three typefaces, logo usage rules and the signature graphic devices.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How Liger Tours Namibia collects, uses and protects your personal information when you enquire about or book a tour.",
    },
    terms: {
      title: "Terms of Service",
      description:
        "Booking terms for Liger Tours Namibia tours: quotations, payments in N$, cancellations, insurance and liability.",
    },
  },

  a11y: {
    skip: "Skip to main content",
    languages: "Change language",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    homeLink: "Liger Tours Namibia: home",
    prevSlide: "Previous testimonial",
    nextSlide: "Next testimonial",
    goToSlide: "Go to testimonial {n} of 3",
    lightboxOpen: "Open image: {alt}",
    lightboxPrev: "Previous image",
    lightboxNext: "Next image",
    lightboxClose: "Close",
  },

  nav: [
    { href: "/tours", label: "Tours" },
    { href: "/activities", label: "Activities" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],

  header: { planTrip: "Plan my trip", whatsapp: "WhatsApp us now" },

  footer: {
    blurb:
      "Locally owned tour operator based in Windhoek, registered with the Namibia Tourism Board. Guided tours across Namibia: desert, coast, canyon and wildlife.",
    explore: "Explore",
    contactHeading: "Contact",
    whatsappLabel: "WhatsApp",
    rights: "All rights reserved.",
    registered: company.registered as string,
    privacy: "Privacy policy",
    terms: "Terms",
    brandLink: "Brand",
    credit: "Made by Tangison Studio",
  },

  hero: {
    kicker: "Guided by locals",
    title: "Namibia, unhurried.",
    lead: "Locally owned, Windhoek based. Small group guided tours from the red dunes of Sossusvlei to the wildlife of Etosha, planned around your dates and your pace.",
    primaryCta: "Plan my trip",
    secondaryCta: "See the tours",
    imageAlt:
      "Open safari vehicle carrying two guests across red Namib sand at golden hour, dune shadows stretching behind it",
  },

  home: {
    intro: {
      eyebrow: "Locally owned, NTB registered",
      h2: "The best way to see Namibia is with people who call it home.",
      p1: "Liger Tours Namibia is a Windhoek tour company built on genuine local knowledge. From game drives just outside the capital to multi-day journeys across the country's deserts, coastlines and wildlife reserves, every route is designed to show you the real Namibia, at a pace that lets you actually take it in.",
      p2: "As a company registered with the Namibia Tourism Board, we plan every trip around the people booking it: couples, families, groups and solo travellers, each with a route, pace and style of travel that suits them.",
      cta: "More about us",
      imageAlt:
        "Gemsbok oryx with long straight horns standing on a dry grass ridge, lit warm gold by the evening sun",
    },
    stats: {
      ariaLabel: "Liger Tours in numbers",
      items: [
        { value: 7, suffix: "", label: "Signature routes" },
        { value: 12, suffix: "", label: "Guided experiences" },
        { value: 100, suffix: "%", label: "Locally owned" },
        { label: "Country, known deeply", raw: "NTB" },
      ],
    },
    tours: {
      eyebrow: "Where we go",
      h2: "Signature tours, shaped around you.",
      cta: "See all routes",
      ariaLabel: "Signature tours",
    },
    pinned: {
      quote: "Five hundred year old trees. A thousand metre dunes. Your morning.",
      imageAlt:
        "Dead acacia trees standing on the white clay of Deadvlei, surrounded by towering red dunes under a deep blue sky",
      ariaLabel: "The Namib landscape",
    },
    why: {
      eyebrow: "Why Liger Tours",
      h2: "What makes the difference.",
      ariaLabel: "Why travel with us",
      items: [
        {
          n: "1",
          title: "Local expertise",
          body: "Guides who know Namibia's history, wildlife, cultures and the quiet corners most itineraries skip.",
        },
        {
          n: "2",
          title: "Authentic experiences",
          body: "Bushmen walks, traditional cooking classes, township tours: genuine encounters, arranged with respect.",
        },
        {
          n: "3",
          title: "Personalised service",
          body: "Every tour is tailored to couples, families, groups and solo travellers, from first enquiry to final drop-off.",
        },
        {
          n: "4",
          title: "Comfort and safety",
          body: "Comfort and safety are top priorities throughout every journey, not optional extras.",
        },
        {
          n: "5",
          title: "Registered operator",
          body: "Registered with the Namibia Tourism Board (NTB) and held to professional standards at every step.",
        },
      ],
    },
    activities: {
      eyebrow: "Day trips and experiences",
      h2: "Short on time? Start here.",
      cta: "Browse all experiences",
      ariaLabel: "Activities",
    },
    stay: {
      eyebrow: "Where you stay",
      h2: "Lodges and camps chosen the way we would choose for family.",
      p: "From timber lodges on Kalahari dunes to thatched chalets above the riverbeds, every stop on a Liger tour is a place we have stayed ourselves and would recommend to family. Comfort where it counts, character everywhere, and locations chosen for the view you wake up to.",
      cta: "See the routes",
      imageAlt1:
        "Row of thatched chalets on stilts along a rocky red hillside, seen from below at midday",
      imageAlt2:
        "Timber lodge cabin with a green roof standing on red Kalahari sand under a clear blue sky",
    },
    testimonials: {
      eyebrow: "Guest words",
      h2: "What our guests say.",
      ariaLabel: "What our guests say",
    },
    cta: {
      h2: "Ready when you are.",
      script: "Tell us your dates. We will build the trip around them.",
      primaryCta: "Plan my trip",
      whatsappCta: "WhatsApp us now",
    },
  },

  toursPage: {
    eyebrow: "Tours",
    title: "Choose your Namibia.",
    pageHeaderAlt:
      "Red dunes rising above a green and gravel plain under a clear sky in the Namib desert",
    lead: "Every route starts and ends in Windhoek and is shaped around your dates and group. Durations are confirmed with you at enquiry, so nothing on this page is a guess.",
    multiDay: "Multi-day routes",
    longHaul: "The long haul",
    customTitle: "None of them quite right?",
    customBody:
      "Tell us what you want to see and how long you have. We build custom routes every week.",
    notSureH2: "Not sure which route yet?",
    notSureLead:
      "Send us your dates and interests. We will reply with an honest recommendation, even if it is a shorter trip than you asked for.",
    planCta: "Plan my trip",
    whatsappCta: "WhatsApp us now",
    enquireAria: "Enquire",
  },

  tourDetail: {
    route: "Route",
    duration: "Duration",
    confirmedAtEnquiry: "Confirmed at enquiry",
    groupSize: "Group size",
    groupSizeValue: "Your group only",
    departs: "Departs",
    departsValue: "Windhoek, on your dates",
    theRoute: "The route",
    dayByDay: "Day by day",
    dayByDayLead:
      "The exact day plan is confirmed with you at enquiry and shaped around your dates. These are the stops that never change.",
    included: "Included",
    notIncluded: "Not included",
    includedItems: [
      "Local guide and driver for the full route",
      "Park and conservancy fees on the itinerary",
      "Accommodation on the route, booked for you",
      "All route transport from Windhoek and back",
    ],
    notIncludedItems: [
      "International flights to and from Namibia",
      "Travel insurance (required before departure)",
      "Personal spending, drinks and souvenirs",
      "Optional activities not listed on the route",
    ],
    priceNote:
      "Prices depend on your group size, season and accommodation choices, so we quote every tour individually in N$. Send the enquiry form and you will have a full quote, with nothing hidden, usually within one working day.",
    enquiryTitle: "Enquire about this tour",
    enquiryLead:
      "Tell us your dates and group. We reply with a personalised quote and an honest view on timing.",
    whatsappCta: "Prefer WhatsApp? Message us now",
        viewTour: "View the tour",
    moreTours: "Other routes you might like",
    viewTourAria: "View the tour: {name}",
    touristType: "Small group guided tour",
    enquireAria: "Enquire about this tour",
  },

  activitiesPage: {
    eyebrow: "Activities",
    title: "Make one day count.",
    pageHeaderAlt:
      "Gemsbok oryx standing on a grassy ridge in warm golden evening light",
    lead: "Day experiences you can book on their own or add to any tour. Everything here runs with local guides, in small groups, at times of day that make sense for the light and the wildlife.",
    addToTrip: "Add this to my trip",
    addH2: "Add any of these to your tour.",
    addLead:
      "Most guests book one or two day experiences around a longer route. Tell us what caught your eye and we will fit it into the plan.",
    planCta: "Plan my trip",
    whatsappCta: "WhatsApp us now",
    addAria: "Add an activity to your tour",
  },

  aboutPage: {
    eyebrow: "About us",
    title: "Local, and proud of it.",
    pageHeaderAlt:
      "Row of thatched chalets on stilts below a rocky red hillside under a clear sky",
    storyEyebrow: "Our story",
    storyH2: "Built by people who grew up with this land.",
    story: [
      "Liger Tours Namibia is a locally owned tour company based in Windhoek, built on a simple idea: the best way to see Namibia is with people who call it home. The company was founded by an Environmental Sciences graduate whose appreciation for nature and sustainable travel shapes every itinerary, from a morning game drive outside the capital to a multi-day journey across the country.",
      "As a company registered with the Namibia Tourism Board (NTB), Liger Tours Namibia holds itself to professional standards at every step of a trip. Tours are planned around the guests who book them: couples, families, groups and solo travellers each get a route, pace and style of travel that suits them, with comfort and safety treated as priorities rather than extras.",
      "Every tour showcases the landscapes, wildlife and cultures of Namibia while promoting responsible and sustainable tourism. That means local guides, genuine cultural encounters arranged with respect, and itineraries that leave the places guests visit as they found them.",
    ],
    missionEyebrow: "Our mission",
    mission:
      "To provide high-quality tours that connect travellers with the landscapes, wildlife and people of Namibia while promoting responsible and sustainable tourism.",
    visionEyebrow: "Our vision",
    vision:
      "To become one of Namibia's most trusted and inspiring tour companies by delivering exceptional travel experiences that showcase the country's natural wonders, rich cultures and warm hospitality.",
    valuesEyebrow: "What makes us different",
    valuesH2: "Five things we will not compromise.",
    values: [
      {
        title: "Local expertise",
        body: "Our guides have extensive knowledge of Namibia's history, wildlife, cultures and quiet corners that most itineraries skip.",
      },
      {
        title: "Authentic experiences",
        body: "From Bushmen walks and traditional cooking classes to township tours and desert adventures, we focus on genuine cultural encounters.",
      },
      {
        title: "Personalised service",
        body: "We tailor our tours to suit couples, families, groups and solo travellers, from first enquiry to final drop-off.",
      },
      {
        title: "Comfort and safety",
        body: "Your comfort and safety are our top priorities throughout every journey, in the vehicle and at every stop.",
      },
      {
        title: "Passion for Namibia",
        body: "We are committed to sharing the beauty and uniqueness of our country with visitors from around the world.",
      },
    ],
    panel: "Registered with the Namibia Tourism Board and based in Windhoek.",
    planCta: "Plan my trip",
  },

  galleryPage: {
    eyebrow: "Gallery",
    title: "The country, unedited.",
    pageHeaderAlt:
      "Bare dead acacia trees on pale clay pan with a towering red dune rising behind",
    lead: "Photographs from our trips, used exactly as they came off the camera. Select any image to open it, then move with the arrow keys and close with Escape.",
    seeH2: "Better in person.",
    seeLead: "Every photograph here was taken on a Liger route. Come and take your own.",
    planCta: "Plan my trip",
    whatsappCta: "WhatsApp us now",
    seeAria: "See it yourself",
    photos: [
      {
        src: "/imagery/crops/safari-vehicle-red-sand-1x1.webp",
        alt: "Open safari vehicle with two guests driving over red sand at golden hour",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-1x1.webp",
        alt: "Gemsbok oryx with long straight horns standing on a grassy ridge in golden light",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-16x9.webp",
        alt: "Dead acacia trees on a white clay pan below red dunes and a deep blue sky",
      },
      {
        src: "/imagery/crops/elephants-etosha-waterhole-1x1.webp",
        alt: "Elephants drinking at a muddy waterhole in Etosha National Park",
      },
      {
        src: "/imagery/crops/giraffes-walking-savanna-1x1.webp",
        alt: "Three giraffes walking in a line past green acacia trees",
      },
      {
        src: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
        alt: "Timber lodge cabin with a green roof on a red sand dune under a blue sky",
        tall: true,
      },
      {
        src: "/imagery/crops/deadvlei-warm-light-1x1.webp",
        alt: "Bare dead trees on pale clay with a red dune rising behind",
      },
      {
        src: "/imagery/crops/quiver-tree-forest-dusk-16x9.webp",
        alt: "Quiver trees silhouetted against an orange dusk sky",
      },
      {
        src: "/imagery/crops/red-dunes-valley-plain-16x9.webp",
        alt: "Red dunes rising above a green and gravel plain under a clear sky",
      },
      {
        src: "/imagery/crops/thatched-chalets-hillside-1x1.webp",
        alt: "Row of thatched chalets on stilts below a rocky red hillside",
        tall: true,
      },
      {
        src: "/imagery/crops/flamingos-walvis-bay-1x1.webp",
        alt: "Flamingos wading through the shallow blue water of Walvis Bay lagoon",
      },
      {
        src: "/imagery/crops/rhino-and-ostrich-grassland-1x1.webp",
        alt: "A rhino grazing in green grass with an ostrich beside it",
      },
      {
        src: "/imagery/crops/fish-river-canyon-view-16x9.webp",
        alt: "Fish River Canyon winding through layered rock walls in evening light",
      },
      {
        src: "/imagery/crops/gemsbok-golden-light-16x9.webp",
        alt: "Gemsbok oryx on a grassy ridge in golden evening light",
      },
      {
        src: "/imagery/crops/namib-night-sky-4x5.webp",
        alt: "The Milky Way arching over dark desert dunes at night",
        tall: true,
      },
      {
        src: "/imagery/crops/spitzkoppe-granite-peaks-1x1.webp",
        alt: "Balanced granite boulder of the Spitzkoppe above the desert floor",
      },
      {
        src: "/imagery/crops/safari-vehicle-red-sand-16x9.webp",
        alt: "Safari tracks across red sand at golden hour",
      },
      {
        src: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
        alt: "Dead acacia trees and red dunes under a deep blue sky",
        tall: true,
      },
    ] as GalleryPhoto[],
  },

  contactPage: {
    eyebrow: "Contact",
    title: "Tell us your dates.",
    pageHeaderAlt:
      "Open safari vehicle crossing red sand at golden hour with dune shadows behind",
    formH2: "Send an enquiry",
    formLead:
      "The more you tell us, the better the first reply. Dates, group size, the places you already know you want: all of it helps us come back with something real rather than a brochure.",
    panelH2: "Reach us directly",
    phone: "Phone",
    whatsapp: "WhatsApp",
    chatWithUs: "Chat with us",
    email: "Email",
    whereWeAre: "Where we are",
    hours: "Hours",
    mapCta: "Open the map",
    seasonH2: "The best months book out early.",
    seasonLead:
      "May to October is high season in Namibia, and the best lodges around Etosha and Sossusvlei fill months ahead. The earlier you enquire, the better the trip we can build.",
    seasonAria: "Planning ahead",
  },

  form: {
    name: "Name *",
    nameError: "Please tell us your name.",
    email: "Email *",
    emailError: "Please use a valid email address so we can reply.",
    phone: "Phone or WhatsApp",
    phonePlaceholder: "+264 ...",
    groupSize: "Group size",
    groupSizePlaceholder: "2 adults",
    dates: "Travel dates",
    datesPlaceholder: "Around 5 to 18 July 2027",
    message: "Your message *",
    messageError:
      "Please add a few details about your trip (10 characters or more).",
    messagePlaceholder:
      "Tell us where you want to go, how long you have and what you want to see.",
    submit: "Send my enquiry",
    sending: "Sending...",
    successTitle: "Thank you, your enquiry is in.",
    successBody: `We reply to every enquiry personally, usually within one working day. If your dates are close, WhatsApp us on ${company.phone} and we will pick it up straight away.`,
    whatsappCta: "WhatsApp us",
    generalError:
      "Something went wrong sending your enquiry. Please try again, or reach us on WhatsApp.",
  },

  notFound: {
    title: "Page not found",
    h1: "This track does not go anywhere.",
    lead: "The page you were looking for has moved or never existed. The routes below all lead somewhere good.",
    back: "Back to the start",
    viewTours: "View tours",
  },

  errorPage: {
    h1: "Something broke down on our side.",
    lead: "Like any good safari vehicle, the page will be repaired shortly. Try again, and if it keeps happening, WhatsApp us and we will sort it out by hand.",
    tryAgain: "Try again",
    back: "Back to the start",
    whatsapp: "WhatsApp us",
  },

  brandPage: {
    eyebrow: "Brand",
    title: "The Liger brand, on one page.",
    pageHeaderAlt:
      "Dead acacia trees on a white clay pan below red dunes and a deep blue sky",
    logoH2: "Logo",
    logoBody:
      "One logo, supplied variants only. The full lockup never sits in a box, chip or circle, is never recoloured, stretched or restyled, and never lands on a busy photo without a dusk overlay. Clear space around the logo equals one third of the tree canopy height. Below 140px wide, switch to the wordmark or icon file.",
    onLight: "On light backgrounds",
    onDark: "On dark backgrounds",
    mono: "Mono variants",
    coloursH2: "Colour",
    coloursBody:
      "Every value is sampled from the logo artwork: the rose of the lettering and sunrise, the olive of the acacia, the near-black night for dark sections. Rose is the brand; components use the semantic tokens, not raw hex.",
    swatch: "Swatch",
    colourName: "Token",
    colourHex: "Hex",
    colourUse: "Use",
    colourUseBg: "Default page background",
    colourUseAlt: "Alternate sections",
    colourUseTint: "Feature panels, arch backgrounds",
    colourUseBorder: "Borders, dividers",
    colourUseDiscs: "Sun discs, arch outline, decorative",
    colourUseDeco: "Decorative only",
    colourUseDisplay: "Large display text only",
    colourUseBrand: "Buttons, links, headings accent",
    colourUseHover: "Hover, strong panels",
    colourUseInk: "Body text",
    colourUseNight: "Dark sections, footer",
    colourUseAcacia: "Logo tree colour, focus ring on light",
    colourUseSunrise: "Tiny accents on dark only, focus ring",
    typeH2: "Typography",
    typeBody:
      "Three families, all free licences, self-hosted with font-display swap. Two roles on screen at once is the norm; the script is reserved so it keeps its impact.",
    typeRows: [
      {
        label: "H1 / hero: Kaushan Script",
        sample: "Namibia, unhurried.",
        note: "Brush script echoing the logo lettering. Large sizes only, sentence case, never bold or uppercase.",
      },
      {
        label: "Headings and UI: Archivo",
        sample: "Desert, coast, canyon and wildlife.",
        note: "Variable width and weight. Wide and heavy for impact. Uppercase only for eyebrows, labels and buttons.",
      },
      {
        label: "Body: Schibsted Grotesk",
        sample:
          "Plain sentences that name real places, real durations and what the guest actually does. Left aligned, generous line height, nothing smaller than 14px.",
        note: "Regular for reading, semibold for emphasis. Maximum 62 characters per line.",
      },
    ],
    devicesH2: "Signature devices",
    devicesBody:
      "Four repeating elements carry the identity: arch-masked photos with a thin offset outline, overlapping sun discs peeking from behind photos (never more than two per viewport), curved dune dividers coloured as the next section, and the headline lockup of an Archivo kicker above one script phrase.",
    deviceCaptions: ["Arch mask, 4:5", "Sun discs, max 2", "Dune divider", "Headline lockup"],
    lockupKicker: "Guided by locals",
    lockupScript: "Namibia, unhurried.",
    creditsH2: "Imagery credits",
    creditsBody:
      "Client photographs are supplemented by freely licensed images: Wikimedia Commons (CC BY-SA, CC0), Pexels and Unsplash. Full attribution for every image is kept in the project license log; Commons file pages carry the complete credits.",
  },

  privacy: {
    title: "Privacy policy",
    lastUpdated: "Last updated: October 2026",
    legalEyebrow: "Legal",
    sections: [
      {
        h: "Who we are",
        p: [
          `Liger Tours Namibia is a locally owned tour operator based in Windhoek, Namibia, registered with the Namibia Tourism Board. You can reach us at ${company.email} or ${company.phone} for anything related to this policy.`,
        ],
      },
      {
        h: "What we collect",
        p: [
          "When you send an enquiry through this website we collect the details you choose to give us: your name, email address, phone number, travel dates, group size and the content of your message. We use these only to respond to your enquiry and to plan the trip you asked about.",
          "Like most websites, our hosting platform keeps standard technical logs such as IP address, browser type and pages visited, for security and performance monitoring.",
        ],
      },
      {
        h: "How we use your information",
        p: [
          "We use your enquiry details to reply to you, prepare quotations and, if you go ahead, manage your booking. We do not sell your information, and we do not share it with third parties except the service providers directly involved in delivering your trip (such as lodges and activity partners) once you have booked, or where Namibian law requires it.",
          "Enquiry details are kept only as long as needed to handle your enquiry and any resulting booking, after which they are deleted.",
        ],
      },
      {
        h: "Third party services",
        p: [
          "This website is hosted on Vercel behind Cloudflare services. Your enquiry form submission is stored in our secured booking database. WhatsApp links open WhatsApp, operated by its own privacy policy. We do not run advertising trackers on this site.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You may ask us at any time to confirm what personal details we hold about you, correct them, or delete them. Email us and we will act on the request within a reasonable period. If you have a complaint about how your information is handled, please contact us first so we can put it right.",
        ],
      },
      {
        h: "Cookies",
        p: [
          "This website uses only cookies or local storage that are strictly necessary for the site to function and for anonymised traffic statistics. There are no advertising or cross-site tracking cookies. You can block cookies in your browser and the site will still work.",
        ],
      },
      {
        h: "Changes to this policy",
        p: [
          "If we change this policy we will publish the new version on this page with an updated date. The version on this page is the one that applies.",
        ],
      },
    ],
  },

  terms: {
    title: "Terms of service",
    lastUpdated: "Last updated: October 2026",
    legalEyebrow: "Legal",
    sections: [
      {
        h: "These terms",
        p: [
          `These terms apply when you enquire about or book a tour with Liger Tours Namibia ("we", "us"), a tour operator based in Windhoek, Namibia and registered with the Namibia Tourism Board. By confirming a booking you accept these terms.`,
        ],
      },
      {
        h: "Enquiries and quotations",
        p: [
          "Every tour on this website is quoted individually in Namibian dollars (N$) because prices depend on your group size, travel season and accommodation choices. A quotation is valid for 14 days from the date it is sent, unless it states otherwise. A booking is only confirmed once we have received your signed confirmation and the deposit described in the quotation.",
        ],
      },
      {
        h: "Payments",
        p: [
          `A deposit is required to secure your dates, with the balance due before departure as set out in your quotation. All payments are quoted and collected in Namibian dollars (N$) unless agreed otherwise in writing. Banking details appear only on official quotations and invoices; treat any request to pay into a different account as suspicious and call us on ${company.phone}.`,
        ],
      },
      {
        h: "Changes and cancellations by you",
        p: [
          "If you need to change dates or cancel, write to us as early as possible. We will always try to move your dates at no cost where lodges allow it. Cancellation charges follow the schedule in your quotation and reflect the strict cancellation terms of the lodges and parks in Namibia, which is why travel insurance is required for every guest.",
        ],
      },
      {
        h: "Changes by us",
        p: [
          "Namibia is a wild country: roads wash out, rivers flood and animals move. We may adjust an itinerary for weather, road conditions, park decisions or safety. Any change of equal or better value is made at no cost. If a significant component cannot be delivered, we will offer a fair alternative or a refund of that component.",
        ],
      },
      {
        h: "Insurance, health and documents",
        p: [
          "Comprehensive travel insurance covering medical costs, evacuation and cancellation is required on all tours and must be arranged before departure. You are responsible for a valid passport, any required visas and recommended vaccinations. Malaria precautions apply in northern Namibia; take advice from a travel clinic before you travel.",
        ],
      },
      {
        h: "Liability",
        p: [
          "We take every reasonable care in planning and running our tours and use registered providers throughout. You take part in game drives, walks and activities at your own risk and must follow your guide's instructions at all times. Our liability is limited to the extent permitted by Namibian law and is always subject to the insurance requirement above.",
        ],
      },
      {
        h: "Complaints and governing law",
        p: [
          "If something is not right, tell your guide immediately so it can be fixed on the spot, and tell us in writing afterwards. These terms are governed by the laws of the Republic of Namibia, and the courts of Namibia have jurisdiction over any dispute.",
        ],
      },
    ],
  },

  testimonials: [
    {
      quote:
        "Our itinerary was perfectly tailored to our interests. We loved that the team recommended both the iconic attractions and the quiet corners that most tourists miss. The service was professional, friendly and reliable from start to finish.",
      name: "David and Emma T.",
      country: "United Kingdom",
    },
    {
      quote:
        "From the moment we made our enquiry, we felt valued. Communication was quick, the planning was smooth, and our holiday exceeded every expectation. We can't wait to return to Namibia with Liger Tours Namibia!",
      name: "Michael R.",
      country: "Germany",
    },
    {
      quote:
        "Our trip to Namibia was spectacular, and Liger Tours Namibia made every moment special. The itinerary was thoughtfully planned, the recommendations were excellent, and everything ran smoothly from beginning to end. We appreciated the personal attention and warm hospitality throughout our journey. We will definitely recommend Liger Tours Namibia to our friends and family in France.",
      name: "Sophie L.",
      country: "France",
    },
  ] as Testimonial[],

  tours: [
    {
      slug: "windhoek-sossusvlei-swakopmund-spitzkoppe-etosha",
      name: "Windhoek, Sossusvlei, Swakopmund, Spitzkoppe and Etosha",
      metaTitle: "Signature Namibia Safari Route",
      route: "Windhoek to Sossusvlei to Swakopmund to Spitzkoppe to Etosha",
      eyebrow: "Signature tour",
      blurb:
        "Our signature Namibia journey combining desert dunes, coastal charm, granite peaks and exceptional wildlife encounters.",
      description: [
        "This is the route we built the company around. It links the four landscapes that define Namibia: the red dunes of Sossusvlei, the Atlantic coast at Swakopmund, the granite peaks of Spitzkoppe and the wildlife-rich plains of Etosha National Park.",
        "You start and finish in Windhoek, so there is no backtracking and no wasted days. Between the headline stops the route crosses some of the most striking scenery in the country, with your guide handling the driving, the park gates and the planning while you watch the landscape change outside the window.",
      ],
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Open safari vehicle with two guests driving over red sand at golden hour",
      highlights: [
        "Climb the dunes at Sossusvlei in the early morning light",
        "Walk the streets and waterfront of Swakopmund on the Atlantic coast",
        "See the granite peaks of Spitzkoppe rising out of the desert",
        "Game viewing through Etosha National Park, one of Africa's great reserves",
      ],
    },
    {
      slug: "sossusvlei-and-swakopmund",
      name: "Sossusvlei and Swakopmund Tour",
      metaTitle: "Sossusvlei and Swakopmund Tour",
      route: "Windhoek to Sossusvlei to Swakopmund",
      eyebrow: "Short itinerary",
      blurb:
        "Ideal for travellers seeking Namibia's iconic dunes and coastal experiences in a shorter itinerary.",
      description: [
        "Short on time? This route pairs the two most requested stops in Namibia: the dunes at Sossusvlei and the coastal town of Swakopmund. It is designed for travellers who want the icons without giving up a full two weeks.",
        "You still get the early morning dune access, the dead vlei clay pan, and a full taste of Swakopmund's mix of ocean air, German architecture and adventure activities, all at an easy pace from Windhoek.",
      ],
      image: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
      alt: "Dead acacia trees on a white clay pan below red dunes and a deep blue sky",
      highlights: [
        "Early morning at the Sossusvlei dunes and Deadvlei clay pan",
        "Gaub and Kuiseb canyon passes on the road to the coast",
        "A full day to enjoy Swakopmund and its coastline",
        "Short itinerary that fits into a long weekend plus travel days",
      ],
    },
    {
      slug: "etosha-and-waterberg",
      name: "Etosha National Park and Waterberg Tour",
      metaTitle: "Etosha and Waterberg Tour",
      route: "Windhoek to Etosha to Waterberg",
      eyebrow: "Wildlife focus",
      blurb:
        "Explore Etosha's famous wildlife and the scenic beauty of the Waterberg Plateau.",
      description: [
        "Built around game viewing, this tour spends its days at Etosha National Park, where elephant, lion, giraffe, gemsbok and rhino gather at the waterholes along the salt pan.",
        "The route closes at the Waterberg Plateau, a red sandstone table mountain with walking trails and viewpoints. It is a gentler finish after the early starts of the Etosha game drives and a chance to see the park's eastern bushveld from above.",
      ],
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Gemsbok oryx with long straight horns standing on a grassy ridge in golden light",
      highlights: [
        "Full game drives through Etosha National Park with a local guide",
        "Waterhole viewing at Okaukuejo and the park's famous camps",
        "Waterberg Plateau viewpoints and walking trails",
        "Strong chances of elephant, rhino, giraffe and big cat sightings",
      ],
    },
    {
      slug: "kalahari-quiver-tree-fish-river-canyon",
      name: "Kalahari, Quiver Tree Forest and Fish River Canyon",
      metaTitle: "Kalahari and Fish River Canyon",
      route: "Windhoek to Kalahari to Keetmanshoop to Fish River Canyon",
      eyebrow: "Southern Namibia",
      blurb:
        "Journey through the red sands of the Kalahari and witness the dramatic landscapes of southern Namibia.",
      description: [
        "Southern Namibia is a study in scale. The route runs from the red sands of the Kalahari to the Quiver Tree Forest near Keetmanshoop, then south to the Fish River Canyon, one of the largest canyons on the continent.",
        "Days here are about light and silence rather than tick-lists: sunrise over the dunes, quiver trees silhouetted at dusk, and the canyon rim at the times of day when its colours change minute by minute.",
      ],
      image: "/imagery/crops/quiver-tree-forest-dusk-4x5.webp",
      alt: "Quiver trees silhouetted against an orange dusk sky in southern Namibia",
      highlights: [
        "Red Kalahari sands and desert lodge stays",
        "The Quiver Tree Forest at Keetmanshoop, best at golden hour",
        "Fish River Canyon: one of the largest canyons in the world",
        "Big southern skies with outstanding stargazing",
      ],
    },
    {
      slug: "swakopmund-damaraland-owamboland-etosha",
      name: "Swakopmund, Damaraland, Owamboland and Etosha",
      metaTitle: "Damaraland, Owamboland, Etosha",
      route: "Swakopmund to Damaraland to Owamboland to Etosha",
      eyebrow: "Culture and wildlife",
      blurb:
        "Discover Namibia's diverse cultures, ancient rock landscapes and world-class wildlife viewing.",
      description: [
        "This route runs through the country's cultural heartland. From the coast at Swakopmund it heads into Damaraland, where desert-adapted wildlife moves between rocky outcrops and ancient rock art marks centuries of human presence.",
        "North of Damaraland the route passes through Owamboland, home to the largest communities in Namibia and a way of life most visitors never see, before finishing with the wildlife of Etosha National Park.",
      ],
      image: "/imagery/crops/giraffes-walking-savanna-4x5.webp",
      alt: "Three giraffes walking in a line past green acacia trees",
      highlights: [
        "Damaraland rock landscapes and ancient rock art",
        "Owambo cultural visits away from the standard tourist route",
        "Desert-adapted wildlife in a rugged setting",
        "Etosha National Park game viewing to close the journey",
      ],
    },
    {
      slug: "windhoek-sossusvlei-swakopmund-brandberg",
      name: "Windhoek, Sossusvlei, Swakopmund and Brandberg",
      metaTitle: "Sossusvlei, Coast, Brandberg",
      route: "Windhoek to Sossusvlei to Swakopmund to Brandberg",
      eyebrow: "Desert and coast",
      blurb:
        "A perfect blend of desert scenery, Atlantic coast adventures and the majestic Brandberg Mountain.",
      description: [
        "A balanced loop that combines the desert and the coast with a stop at Brandberg, Namibia's highest mountain and home to the famous White Lady rock art panel.",
        "The order of travel keeps long drives short and puts you at the dunes for sunrise and on the coast for the afternoon sea breeze, with your guide adjusting the pace to suit your group.",
      ],
      image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
      alt: "Red dunes rising above a green and gravel plain under a clear sky",
      highlights: [
        "Sossusvlei dunes and the Namib desert landscape",
        "Swakopmund coast: ocean air, seafood and adventure activities",
        "Brandberg, Namibia's highest mountain, and its rock art",
        "A loop route with no repeated legs",
      ],
    },
    {
      slug: "24-days-namibia-discovery",
      name: "24 Days Namibia Discovery Tour",
      metaTitle: "24 Day Namibia Discovery",
      route: "Full country circuit from Windhoek",
      eyebrow: "24 days",
      blurb:
        "The full Namibia circuit: every region, every highlight, at a pace that lets you actually experience them.",
      description: [
        "Our longest tour is the complete Namibia discovery: the south's canyons and the Kalahari, the dune fields of Sossusvlei, the Skeleton Coast and Swakopmund, Damaraland's rock landscapes, the cultures of the north and the wildlife of Etosha, all in one continuous journey.",
        "Twenty-four days is deliberately unhurried. There is time for the morning game drive and the afternoon cultural visit, for the detour when your guide knows a viewpoint worth the extra kilometres, and for rest days in between the long legs.",
        "The exact day-by-day plan is shaped around your travel dates and interests when you enquire, so talk to us early: this tour rewards planning.",
      ],
      image: "/imagery/crops/thatched-chalets-hillside-4x5.webp",
      alt: "Row of thatched chalets on stilts below a rocky red hillside",
      highlights: [
        "Every major region of Namibia in one continuous route",
        "Unhurried pace with rest days built in between long legs",
        "Culture, coast, desert and wildlife without rushing any of them",
        "Itinerary shaped around your dates and interests",
      ],
    },
  ] as Tour[],

  activities: [
    {
      slug: "game-drive",
      name: "Game Drive",
      duration: "3 to 4 hours",
      location: "Outside Windhoek",
      description:
        "Experience Namibia's wildlife just outside Windhoek. Enjoy a guided safari where you may encounter giraffes, zebras, antelopes and other native animals in their natural habitat.",
      image: "/imagery/crops/giraffes-walking-savanna-4x5.webp",
      alt: "Three giraffes walking in a line between green acacia trees on the savanna",
    },
    {
      slug: "city-and-township-tour",
      name: "City and Township Tour",
      duration: "2 to 3 hours",
      location: "Windhoek",
      description:
        "Discover the heart of Windhoek. Explore historical landmarks, local markets, vibrant townships and experience everyday life in Namibia's capital city.",
      image: "/imagery/crops/windhoek-christuskirche-4x5.webp",
      alt: "Historic Christuskirche church in central Windhoek with its timber spire against the sky",
    },
    {
      slug: "bar-hopping-windhoek-by-night",
      name: "Bar Hopping: Windhoek by Night",
      duration: "Evening tour",
      location: "Windhoek",
      description:
        "Experience Windhoek's nightlife with visits to popular local bars and entertainment spots. Meet locals, enjoy great music and discover the city after dark.",
      image: "/imagery/crops/sundowner-drinks-sunset-4x5.webp",
      alt: "Cold drinks on a table in the warm glow of a Namibian sunset",
    },
    {
      slug: "taste-namibia-cooking-class",
      name: "Taste Namibia: Traditional Cooking Class",
      duration: "2 to 3 hours",
      location: "Windhoek",
      description:
        "Learn how to prepare authentic Namibian dishes using traditional ingredients and cooking methods. A hands-on cultural experience for food lovers.",
      image: "/imagery/crops/campfire-cooking-pot-4x5.webp",
      alt: "Cast iron potjie pot cooking over glowing coals on an open fire",
    },
    {
      slug: "bushmen-walk",
      name: "Step into Ancient Wisdom: The Bushmen Walk",
      duration: "3 hours",
      location: "Near Windhoek",
      description:
        "Walk with San guides and discover ancient survival skills, tracking techniques, medicinal plants and the rich heritage of one of the world's oldest cultures.",
      image: "/imagery/crops/gemsbok-golden-light-4x5.webp",
      alt: "Gemsbok oryx with long straight horns standing on a grassy ridge in golden light",
    },
    {
      slug: "sunrise-desert-excursion",
      name: "Sunrise Desert Excursion",
      duration: "Half day",
      location: "Namib desert",
      description:
        "Watch the desert come alive as the first rays of sunlight paint the dunes in shades of gold and orange. A perfect experience for photographers and nature lovers.",
      image: "/imagery/crops/deadvlei-warm-light-4x5.webp",
      alt: "Bare dead trees on pale clay with a red dune rising behind",
    },
    {
      slug: "photography-tour",
      name: "Photography Tour",
      duration: "Flexible",
      location: "On request",
      description:
        "Capture Namibia's most iconic landscapes and wildlife with guidance from local experts who know the best viewpoints and lighting conditions.",
      image: "/imagery/crops/safari-vehicle-red-sand-4x5.webp",
      alt: "Open safari vehicle with two guests driving over red sand at golden hour",
    },
    {
      slug: "spitzkoppe-hiking",
      name: "Spitzkoppe Hiking Experience",
      duration: "Half day",
      location: "Spitzkoppe",
      description:
        "Explore the dramatic granite formations of Spitzkoppe and enjoy sweeping views over the surrounding desert landscape.",
      image: "/imagery/crops/spitzkoppe-granite-peaks-4x5.webp",
      alt: " Giant balanced granite boulder on the Spitzkoppe rising over the desert plains",
    },
    {
      slug: "swakopmund-coastal-adventure",
      name: "Swakopmund Coastal Adventure",
      duration: "Full day",
      location: "Swakopmund",
      description:
        "Enjoy the unique meeting point of the Atlantic Ocean and the Namib Desert with opportunities for sightseeing, beach walks and local exploration.",
      image: "/imagery/crops/swakopmund-atlantic-coast-4x5.webp",
      alt: "Atlantic waves rolling onto the sandy shoreline near Swakopmund",
    },
    {
      slug: "etosha-wildlife-safari",
      name: "Etosha Wildlife Safari",
      duration: "Full day",
      location: "Etosha National Park",
      description:
        "Spend a full day exploring Etosha National Park, famous for its abundant wildlife and exceptional game viewing opportunities.",
      image: "/imagery/crops/elephants-etosha-waterhole-4x5.webp",
      alt: "Elephants drinking at a muddy waterhole in Etosha National Park",
    },
    {
      slug: "stargazing-experience",
      name: "Stargazing Experience",
      duration: "Evening",
      location: "On request",
      description:
        "Namibia is home to some of the darkest skies in the world. Spend an evening under a canopy of stars and learn about the southern night sky.",
      image: "/imagery/crops/namib-night-sky-4x5.webp",
      alt: "The Milky Way arching over dark desert dunes at night",
    },
    {
      slug: "kalahari-cultural-experience",
      name: "Kalahari Cultural Experience",
      duration: "Half day",
      location: "Kalahari",
      description:
        "Experience traditional Kalahari hospitality, storytelling, music and local customs while learning about life in the desert.",
      image: "/imagery/crops/kalahari-red-sands-4x5.webp",
      alt: "Red Kalahari sand dunes with sparse desert grass under a soft evening sky",
    },
  ] as Activity[],
};
