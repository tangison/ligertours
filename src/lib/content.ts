/* Liger Tours Namibia: real content, sourced from ligertoursnamibia.com (fetched 2026-10-18)
   and the client brand kit. Voice rules applied (BRAND-GUIDE section 7): no em dashes,
   no banned words, N$ currency, +264 phone format. Nothing invented. */

export const company = {
  name: "Liger Tours Namibia",
  legalName: "Liger Tours Namibia",
  phone: "+264 81 472 2552",
  phoneHref: "tel:+264814722552",
  whatsapp: "https://wa.me/264814722552",
  email: "info@ligertoursnamibia.com",
  city: "Windhoek",
  country: "Namibia",
  address: "Windhoek, Namibia",
  domain: "ligertoursnamibia.com",
  url: "https://ligertoursnamibia.com",
  registered: "Registered with the Namibia Tourism Board (NTB)",
  hours: "Monday to Saturday, 08:00 to 17:00 (CAT)",
} as const;

export const about = {
  founderLine:
    "Founded by an Environmental Sciences graduate with a deep appreciation for nature and sustainable travel, Liger Tours Namibia creates personalised travel experiences that connect visitors with the heart of the country.",
  story: [
    "Liger Tours Namibia is a locally owned tour company based in Windhoek, built on a simple idea: the best way to see Namibia is with people who call it home. The company was founded by an Environmental Sciences graduate whose appreciation for nature and sustainable travel shapes every itinerary, from a morning game drive outside the capital to a multi-day journey across the country.",
    "As a company registered with the Namibia Tourism Board (NTB), Liger Tours Namibia holds itself to professional standards at every step of a trip. Tours are planned around the guests who book them: couples, families, groups and solo travellers each get a route, pace and style of travel that suits them, with comfort and safety treated as priorities rather than extras.",
    "Every tour showcases the landscapes, wildlife and cultures of Namibia while promoting responsible and sustainable tourism. That means local guides, genuine cultural encounters arranged with respect, and itineraries that leave the places guests visit as they found them.",
  ],
  mission:
    "To provide high-quality tours that connect travellers with the landscapes, wildlife and people of Namibia while promoting responsible and sustainable tourism.",
  vision:
    "To become one of Namibia's most trusted and inspiring tour companies by delivering exceptional travel experiences that showcase the country's natural wonders, rich cultures and warm hospitality.",
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
} as const;

export type Tour = {
  slug: string;
  name: string;
  metaTitle: string;
  route: string;
  eyebrow: string;
  blurb: string;
  description: string[];
  duration?: string;
  image: string;
  alt: string;
  highlights: string[];
};

export const tours: Tour[] = [
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
    image: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
    alt: "Timber lodge cabin with a green roof on a red sand dune under a blue sky",
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
];

export const tourByLength = {
  note: "Durations beyond the 24-day discovery tour are confirmed with the client at enquiry, so they are shown as on request rather than guessed.",
} as const;

export type Activity = {
  slug: string;
  name: string;
  duration: string;
  location: string;
  description: string;
  image: string;
  alt: string;
};

export const activities: Activity[] = [
  {
    slug: "game-drive",
    name: "Game Drive",
    duration: "3 to 4 hours",
    location: "Outside Windhoek",
    description:
      "Experience Namibia's wildlife just outside Windhoek. Enjoy a guided safari where you may encounter giraffes, zebras, antelopes and other native animals in their natural habitat.",
    image: "/imagery/crops/giraffes-walking-savanna-4x5.webp",
    alt: "Three giraffes walking in a line past green acacia trees",
  },
  {
    slug: "city-and-township-tour",
    name: "City and Township Tour",
    duration: "2 to 3 hours",
    location: "Windhoek",
    description:
      "Discover the heart of Windhoek. Explore historical landmarks, local markets, vibrant townships and experience everyday life in Namibia's capital city.",
    image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
    alt: "Red dunes rising above a green and gravel plain under a clear sky",
  },
  {
    slug: "bar-hopping-windhoek-by-night",
    name: "Bar Hopping: Windhoek by Night",
    duration: "Evening tour",
    location: "Windhoek",
    description:
      "Experience Windhoek's nightlife with visits to popular local bars and entertainment spots. Meet locals, enjoy great music and discover the city after dark.",
    image: "/imagery/crops/deadvlei-warm-light-4x5.webp",
    alt: "Bare dead trees on pale clay with a red dune rising behind",
  },
  {
    slug: "taste-namibia-cooking-class",
    name: "Taste Namibia: Traditional Cooking Class",
    duration: "2 to 3 hours",
    location: "Windhoek",
    description:
      "Learn how to prepare authentic Namibian dishes using traditional ingredients and cooking methods. A hands-on cultural experience for food lovers.",
    image: "/imagery/crops/thatched-chalets-hillside-4x5.webp",
    alt: "Row of thatched chalets on stilts below a rocky red hillside",
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
    image: "/imagery/crops/deadvlei-blue-sky-4x5.webp",
    alt: "Dead acacia trees on a white clay pan below red dunes and a deep blue sky",
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
    image: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
    alt: "Timber lodge cabin with a green roof on a red sand dune under a blue sky",
  },
  {
    slug: "swakopmund-coastal-adventure",
    name: "Swakopmund Coastal Adventure",
    duration: "Full day",
    location: "Swakopmund",
    description:
      "Enjoy the unique meeting point of the Atlantic Ocean and the Namib Desert with opportunities for sightseeing, beach walks and local exploration.",
    image: "/imagery/crops/deadvlei-warm-light-4x5.webp",
    alt: "Bare dead trees on pale clay with a red dune rising behind",
  },
  {
    slug: "etosha-wildlife-safari",
    name: "Etosha Wildlife Safari",
    duration: "Full day",
    location: "Etosha National Park",
    description:
      "Spend a full day exploring Etosha National Park, famous for its abundant wildlife and exceptional game viewing opportunities.",
    image: "/imagery/crops/rhino-and-ostrich-grassland-4x5.webp",
    alt: "A rhino grazing in green grass with an ostrich beside it",
  },
  {
    slug: "stargazing-experience",
    name: "Stargazing Experience",
    duration: "Evening",
    location: "On request",
    description:
      "Namibia is home to some of the darkest skies in the world. Spend an evening under a canopy of stars and learn about the southern night sky.",
    image: "/imagery/crops/red-dunes-valley-plain-4x5.webp",
    alt: "Red dunes rising above a green and gravel plain under a clear sky",
  },
  {
    slug: "kalahari-cultural-experience",
    name: "Kalahari Cultural Experience",
    duration: "Half day",
    location: "Kalahari",
    description:
      "Experience traditional Kalahari hospitality, storytelling, music and local customs while learning about life in the desert.",
    image: "/imagery/crops/red-dune-timber-lodge-4x5.webp",
    alt: "Timber lodge cabin with a green roof on a red sand dune under a blue sky",
  },
];

export const testimonials = [
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
] as const;

export const nav = [
  { href: "/tours", label: "Tours" },
  { href: "/activities", label: "Activities" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;
