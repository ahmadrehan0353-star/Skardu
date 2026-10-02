/* Photos: your own, in the images folder. To swap one, replace the file or change image: below.
   Free photos from Unsplash (unsplash.com/license): mohenjo-daro (Noman Bukhari), badshahi-mosque (Dr Muhammad Amer),
   noor-mahal (Awais Shafqat), attabad-lake (Ijaz Rafi), passu-cones (Abdul Rafay), nangma-valley (Riaz Ali),
   fairy-meadows (Raheel Khan), hopper-valley-camp (The Hunzai Lad),
   trek-baltoro-porters, trek-k2-porter, trek-baltoro-rest (Daniel Born), trek-bagrot-trail (Adnan Temur Barcha),
   trek-skardu-summit (Gilgit Baltistan / @akbar710). */

/* Content used by the interactive parts of the site.
   To use your own photo for a place or tour, put it in /images
   and set image: "images/your-photo.jpg". */

const PLACES = [
  { id: "upper-kachura", name: "Upper Kachura Lake", area: "Kachura", moods: ["calm"], tint: "#2D6E7E", image: "images/upper-kachura-lake.jpg",
    text: "Clear, deep water ringed by trees. Row out and hear nothing but wind.",
    detail: "A quiet lake above the Shangrila resort, loved for boat rides, trout and long, lazy afternoons on the shore." },
  { id: "shangrila", name: "Shangrila (Lower Kachura)", area: "Kachura", moods: ["calm", "family"], tint: "#3F7E9E", image: "images/shangrila-lake.jpg",
    text: "The heart-shaped lake with its famous resort and gardens.",
    detail: "Easy paths, gardens and pedal boats make this one of the most relaxed stops near Skardu, especially with children." },
  { id: "satpara", name: "Satpara Lake", area: "Above Skardu town", moods: ["calm", "family"], tint: "#2F8C8A", image: "images/satpara-lake.jpg",
    text: "Turquoise water just above town, perfect for a slow afternoon.",
    detail: "Close to Skardu and easy to reach, Satpara is a good first stop on arrival day or a simple picnic outing." },
  { id: "sheosar", name: "Sheosar Lake", area: "Deosai", moods: ["calm", "adventure"], tint: "#4F74A3", image: "images/sheosar-lake.jpg",
    text: "A high lake on Deosai that mirrors the sky on still days.",
    detail: "Usually visited on a Deosai day trip. Bring warm layers: it is cold up there even in summer." },
  { id: "deosai", name: "Deosai Plains", area: "Deosai National Park", moods: ["adventure"], tint: "#6A8A45", image: "images/deosai-plains.jpg",
    text: "A vast high plateau of wildflowers and streams.",
    detail: "One of the highest plateaus in the world and a protected home for the Himalayan brown bear. Usually open in summer only." },
  { id: "katpana", name: "Katpana Cold Desert", area: "Near Skardu airport", moods: ["adventure", "family"], tint: "#B98648", image: "images/katpana-desert.jpg",
    text: "Sand dunes framed by snowy peaks. Jeeps, quad bikes and sunsets.",
    detail: "A desert that can be dusted with snow in winter. Go late afternoon for soft light and cooler sand." },
  { id: "k2-road", name: "The road to K2", area: "Via Askole and the Baltoro Glacier", moods: ["adventure"], tint: "#34495E", image: "images/k2.jpg",
    text: "The great trek toward K2 Base Camp begins with Skardu.",
    detail: "A serious multi-week trek for fit, prepared travellers. We can help with guides, porters, permits and logistics." },
  { id: "basho", name: "Basho Valley", area: "Basho", moods: ["adventure"], tint: "#4C7A58", image: "images/basho-valley.jpg",
    text: "Forests, meadows and quiet camping off the beaten track.",
    detail: "A green valley for travellers who want pine forest, streams and a night under the stars away from the crowds." },
  { id: "shigar-fort", name: "Shigar Fort", area: "Shigar", moods: ["culture"], tint: "#94623D", image: "images/shigar-fort.jpg",
    text: "A restored royal palace among orchards, now a heritage stay.",
    detail: "The old palace of the Rajas of Shigar, carefully restored. Visit for the carved wood and gardens, or stay the night." },
  { id: "khaplu", name: "Khaplu Palace", area: "Khaplu, Ghanche", moods: ["culture"], tint: "#7A5638", image: "images/khaplu-palace.jpg",
    text: "An elegant Balti palace of carved wood above the Shyok River.",
    detail: "Pair it with the old Chaqchan Mosque and the orchards of Khaplu town for a full heritage day." },
  { id: "kharpocho", name: "Kharpocho Fort", area: "Skardu town", moods: ["culture"], tint: "#8A5A47", image: "images/kharpocho-fort.jpg",
    text: "The old fort on the rock above town, with wide views of the Indus.",
    detail: "A short but steep climb rewards you with a view over Skardu, the Indus and the desert beyond." },
  { id: "chaqchan", name: "Chaqchan Mosque", area: "Khaplu", moods: ["culture"], tint: "#6B5877", image: "images/chaqchan-mosque.jpg",
    text: "One of the oldest mosques in the region.",
    detail: "A beautiful example of Balti wooden architecture. Please dress modestly and ask before taking photos." },
  { id: "manthokha", name: "Manthokha Waterfall", area: "Kharmang", moods: ["family"], tint: "#3B7C88", image: "images/manthokha-waterfall.jpg",
    text: "A roaring waterfall with shady spots and fresh trout nearby.",
    detail: "An easy day out with food by the water. Children love the spray on a hot day." }
];

const MOODS = [
  { id: "all", label: "Show me everything", line: "Every corner we can take you to." },
  { id: "adventure", label: "Thrill and altitude", line: "For the ones who want their heart to race a little." },
  { id: "calm", label: "Still water, slow days", line: "For the ones who came to breathe." },
  { id: "culture", label: "Forts and old stories", line: "For the ones who like a place with a past." },
  { id: "family", label: "Easy family fun", line: "For the ones travelling with little explorers." }
];

const TOURS = [
  { id: "lakes", name: "Lakes of Skardu", tint: "#2D6E7E", image: "images/upper-kachura-lake.jpg",
    stops: ["Satpara Lake", "Shangrila", "Upper Kachura Lake", "Katpana Cold Desert"],
    blurb: "Slow mornings by still water, boat rides under the peaks and a desert sunset to finish.",
    days: "Flexible", price: "On request", includes: "Local guide, airport pickup and drop, and your choice of transport. Standard, Deluxe or Executive package." },
  { id: "deosai", name: "Deosai and Sheosar", tint: "#6A8A45", image: "images/deosai-lake.jpg",
    stops: ["Skardu", "Deosai Plains", "Sheosar Lake", "Skardu"],
    blurb: "Cross the high plains by jeep, look out for brown bears and wildflowers, and picnic by Sheosar.",
    days: "Flexible", price: "On request", includes: "Local guide, airport pickup and drop, and your choice of transport. Standard, Deluxe or Executive package." },
  { id: "heritage", name: "Shigar and Khaplu Heritage", tint: "#94623D", image: "images/khaplu-palace.jpg",
    stops: ["Kharpocho Fort", "Shigar Fort", "Khaplu Palace", "Chaqchan Mosque"],
    blurb: "Royal forts, carved-wood palaces, old mosques and the orchards that surround them.",
    days: "Flexible", price: "On request", includes: "Local guide, airport pickup and drop, and your choice of transport. Standard, Deluxe or Executive package." },
  { id: "family", name: "Family Getaway", tint: "#3B7C88", image: "images/manthokha-waterfall.jpg",
    stops: ["Shangrila", "Manthokha Waterfall", "Satpara Lake", "Katpana Cold Desert"],
    blurb: "Short drives, easy walks and plenty of time to play. Built around the kids' energy.",
    days: "Flexible", price: "On request", includes: "Local guide, airport pickup and drop, and your choice of transport. Standard, Deluxe or Executive package." },
  { id: "k2", name: "K2 Base Camp Trek", tint: "#34495E", image: "images/k2.jpg",
    stops: ["Skardu", "Askole", "Baltoro Glacier", "Concordia", "K2 Base Camp"],
    blurb: "A once-in-a-lifetime trek for fit, prepared travellers. We handle the logistics.",
    days: "21", price: "$2,300", was: "$2,500", includes: "Trekking and adventure support, local guide and transport. Standard, Deluxe or Executive package." },

  /* Treks */
  { id: "gondogoro", name: "K2 Base Camp and Gondogoro La Pass Trek", tint: "#34495E", image: "images/k2.jpg",
    stops: ["Skardu", "Askole", "Concordia", "K2 Base Camp", "Gondogoro La", "Hushe"],
    blurb: "Walk the Baltoro to K2, then cross the high Gondogoro La and come down through the Hushe valley.",
    days: "15", price: "$2,000", was: "$2,200", includes: "Trekking and adventure support, local guide and transport." },
  { id: "laila-bc", name: "Laila Peak Base Camp Trek", tint: "#4F74A3", image: "images/trek-baltoro-porters.jpg",
    stops: ["Skardu", "Khaplu", "Hushe", "Laila Peak Base Camp"],
    blurb: "A beautiful trek from Hushe village to the foot of the sharp, spear-like Laila Peak.",
    days: "12", price: "$1,500", was: "$2,000", includes: "Trekking and adventure support, local guide and transport." },
  { id: "nanga-rakaposhi", name: "Nanga Parbat & Rakaposhi Base Camp Trek", tint: "#6A8A45", image: "images/fairy-meadows.jpg",
    stops: ["Fairy Meadows", "Nanga Parbat Base Camp", "Rakaposhi Base Camp"],
    blurb: "Two great base camps in one trip: the meadows below Nanga Parbat and the glacier views of Rakaposhi.",
    days: "12", price: "$1,500", was: "$2,200", includes: "Trekking and adventure support, local guide and transport." },
  { id: "gb-trekking", name: "Gilgit Baltistan Trekking Adventure", tint: "#4C7A58", image: "images/hopper-valley-camp.jpg",
    stops: ["Skardu", "Valleys and base camps of Gilgit-Baltistan"],
    blurb: "Two weeks on foot through the valleys, villages and mountain views of Gilgit-Baltistan.",
    days: "14", price: "$1,800", was: "$2,200", includes: "Trekking and adventure support, local guide and transport." },
  { id: "himalayas", name: "Trekking Pakistan Himalayas", tint: "#3B7C88", image: "images/upper-kachura-lake.jpg",
    stops: ["Forests, lakes and meadows of the Pakistan Himalayas"],
    blurb: "Pine forests, mirror lakes and big mountain views on a classic Himalayan trek.",
    days: "12", price: "$1,800", includes: "Trekking and adventure support, local guide and transport." },
  { id: "arando-haramosh", name: "Arando Haramosh La Trek", tint: "#33455E", image: "images/trek-bagrot-trail.jpg",
    stops: ["Skardu", "Arandu", "Haramosh La"],
    blurb: "A long, wild crossing over Haramosh La for experienced trekkers who want real remoteness.",
    days: "17", price: "$2,200", was: "$2,500", includes: "Trekking and adventure support, local guide and transport." },
  { id: "nangma", name: "Nangma Valley Trek Karakoram Pakistan", tint: "#2F8C8A", image: "images/nangma-valley.jpg",
    stops: ["Skardu", "Kande", "Nangma Valley"],
    blurb: "Granite walls, green meadows and quiet camps in the Nangma Valley, Pakistan's own Yosemite.",
    days: "10", price: "$1,400", was: "$1,800", includes: "Trekking and adventure support, local guide and transport." },
  { id: "thalle-la", name: "Thallay / Thalle La Trek", tint: "#6A8A45", image: "images/trek-skardu-summit.jpg",
    stops: ["Shigar", "Thalle La", "Khaplu"],
    blurb: "Cross the Thalle La pass between the Shigar and Khaplu valleys through fields and high pasture.",
    days: "7", price: "$1,500", was: "$2,000", includes: "Trekking and adventure support, local guide and transport." },
  { id: "machulo", name: "Machulo La K2 Viewpoint Trek", tint: "#A5561D", image: "images/trek-k2-porter.jpg",
    stops: ["Khaplu", "Machulo", "Machulo La K2 Viewpoint"],
    blurb: "A short trek above Machulo village to a viewpoint where K2 rises on the horizon.",
    days: "6", price: "$1,000", was: "$1,500", includes: "Trekking and adventure support, local guide and transport." },
  { id: "barah-broq", name: "Barah Broq Moses Peak Trek", tint: "#B98648", image: "images/trek-baltoro-rest.jpg",
    stops: ["Khaplu", "Barah", "Barah Broq"],
    blurb: "A short trek up to the high pastures of Barah Broq for wide views across the Karakoram.",
    days: "6", price: "$1,000", was: "$1,400", includes: "Trekking and adventure support, local guide and transport." },

  /* Cultural and Pakistan tours */
  { id: "north-group", name: "North Pakistan Guided Group Trip", tint: "#2D6E7E", image: "images/attabad-lake.jpg",
    stops: ["Islamabad", "Hunza", "Attabad Lake", "Skardu"],
    blurb: "Turquoise lakes, mountain valleys and old forts across the north, in a friendly guided group.",
    days: "10", price: "$1,200", includes: "Local guide and transport." },
  { id: "hindukush-karakoram", name: "Pakistan Hindu Kush, Pamir & Karakoram Tour", tint: "#4F74A3", image: "images/passu-cones.jpg",
    stops: ["Hindu Kush", "Pamir", "Karakoram"],
    blurb: "Three great mountain ranges in one journey, with glaciers, high passes and valley villages.",
    days: "15", price: "$2,000", was: "$3,000", includes: "Local guide and transport." },
  { id: "indus-valley", name: "Pakistan Indus Valley Civilization Cultural Tour", tint: "#B98648", image: "images/mohenjo-daro.jpg",
    stops: ["Mohenjo-daro", "Harappa", "Taxila"],
    blurb: "Walk through the ruins of one of the world's oldest civilizations along the Indus.",
    days: "12", price: "$1,400", includes: "Local guide and transport." },
  { id: "south-cultural", name: "South Pakistan Cultural Group Tour", tint: "#94623D", image: "images/noor-mahal.jpg",
    stops: ["Karachi", "Thatta", "Mohenjo-daro", "Bahawalpur", "Derawar Fort"],
    blurb: "Desert forts, ancient cities and colourful bazaars across southern Pakistan.",
    days: "12", price: "$1,800", includes: "Local guide and transport." },
  { id: "lahore-swat", name: "Lahore Multan Peshawar & Swat Cultural Tour", tint: "#6B5877", image: "images/badshahi-mosque.jpg",
    stops: ["Lahore", "Multan", "Peshawar", "Swat"],
    blurb: "Mughal Lahore, the shrines of Multan, the old city of Peshawar and the green Swat valley.",
    days: "7", price: "$1,600", was: "$2,000", includes: "Local guide and transport." },

  { id: "custom", name: "Custom or honeymoon", tint: "#6B5877", image: "images/sheosar-lake.jpg",
    stops: ["You choose"],
    blurb: "Tell us who's coming and what you love. We'll build the route, stays and transport around you.",
    days: "Any length", price: "On request", includes: "Whatever you need" }
];

/* Signature packages: full itineraries with Standard / Deluxe / Executive rates.
   Prices in US dollars, converted from PKR at about 280 PKR = $1 and rounded to the nearest $10.
   Shown on the home page and at the top of the Tours page. */
const PACKAGES = [
  { id: "skardu-shigar-5d", name: "Premium Skardu Tour Package", subtitle: "Discover the Beauty of Skardu & Shigar Valley",
    duration: "5 Days / 4 Nights", type: "Premium Skardu Tour", image: "images/upper-kachura-lake.jpg",
    intro: "Experience the breathtaking beauty of Skardu with an unforgettable journey through crystal-clear lakes, majestic mountains, vast alpine landscapes, spectacular waterfalls, and the golden dunes of the Cold Desert. From the enchanting Shangri-La Lake to the breathtaking Deosai National Park, discover the natural wonders of Gilgit-Baltistan with comfort, convenience, and professional local tour assistance.",
    regions: [
      { name: "Skardu & Kachura Valley", stops: ["Upper Kachura Lake (Shangri-La)", "Soq Valley"] },
      { name: "Deosai National Park", stops: ["Deosai Plains", "Spectacular mountain landscapes and alpine scenery"] },
      { name: "Kharmang Valley", stops: ["Manthokha Waterfall", "Chocolate Rock", "Sermink Valley"] },
      { name: "Shigar Valley", stops: ["Shigar Fort", "Sarfaranga Cold Desert", "Blind Lake"] }
    ],
    includes: [
      "Private Transport: Luxury Prado TX / TZ",
      "Fuel Charges: Fully Included",
      "Professional Driver: Driver charges included",
      "All Toll Taxes & Road Charges",
      "Experienced Tour Support: Professional assistance throughout the journey",
      "Hotel Accommodation: According to selected package category",
      "Daily Breakfast: Included with hotel accommodation"
    ],
    excludes: [
      "Airfare / Flight Tickets",
      "Lunch, Dinner & Other Meals",
      "Entrance Fees / Attraction Tickets",
      "Personal Expenses",
      "Any services not specifically mentioned under inclusions"
    ],
    tiers: [
      { name: "Standard Package", price: "$520" },
      { name: "Deluxe Package", price: "$700" },
      { name: "Executive Package", price: "$790" }
    ],
    rateNote: "Package prices are subject to selected accommodation, room category, vehicle availability, and booking confirmation.",
    notes: [
      "Advance booking is recommended to secure your preferred hotel and vehicle.",
      "Hotel availability and room categories will be confirmed at the time of reservation.",
      "Customized itineraries and private tour arrangements are available upon request."
    ] },

  { id: "skardu-hunza-8d", name: "Skardu & Hunza Premium Tour Package", subtitle: "Explore the Majestic Beauty of Skardu & Hunza",
    duration: "8 Days / 7 Nights", type: "Private Customized Tour", image: "images/passu-cones.jpg",
    intro: "Discover the breathtaking landscapes of Northern Pakistan, from the crystal-clear lakes of Skardu and the vast plains of Deosai to the majestic mountains, historic forts, and spectacular valleys of Hunza. Enjoy a memorable journey with comfortable private transportation, experienced local support, quality hotel accommodation, and a personalized travel experience.",
    regions: [
      { name: "Skardu & Shigar Valley", stops: ["Upper Kachura Lake & Shangri-La Resort", "Soq Valley", "Deosai National Park", "Shigar Valley & Shigar Fort", "Manthokha Waterfall", "Sarfaranga Cold Desert"] },
      { name: "Hunza Valley", stops: ["Altit Fort", "Baltit Fort", "Hunza Valley & Scenic Viewpoints", "Khunjerab Pass – Pak-China Border"] }
    ],
    includes: [
      "Private Transportation: Dedicated Prado TX / TZ throughout the tour",
      "Fuel Charges: Complete fuel expenses included",
      "Professional Driver: Experienced driver with all driver charges included",
      "Toll Taxes & Road Charges: All applicable toll taxes and road charges included",
      "Experienced Tour Support: Professional travel assistance and coordination throughout your journey",
      "Hotel Accommodation: Comfortable accommodation according to your selected package and hotel category",
      "Daily Breakfast: Breakfast included with hotel accommodation"
    ],
    excludes: [
      "Airfare / Flight Tickets",
      "Lunch, Dinner & Other Meals",
      "Entrance Fees / Attraction Tickets",
      "Personal Expenses",
      "Special Activities & Optional Excursions",
      "Any service or expense not specifically mentioned under Services Included"
    ],
    tiers: [
      { name: "Standard Package", price: "$950" },
      { name: "Deluxe Package", price: "$1,160" },
      { name: "Executive Package", price: "$1,410" }
    ],
    rateNote: "Package rates are based on the selected accommodation and service category. Hotel availability, room category, and vehicle allocation will be confirmed at the time of booking. Rates may vary depending on travel dates and availability.",
    notes: [] }
];

/* "Why travel with STAT?" points, shown under the packages */
const WHY_STAT = [
  "Local Expertise & Professional Tour Management",
  "Private & Customized Travel Experience",
  "Comfortable Transportation",
  "Quality Accommodation Options",
  "Personalized Travel Assistance",
  "Explore Northern Pakistan with Local Experience"
];

const SEASONS = [
  { id: "spring", image: "images/basho-valley.jpg", name: "Spring", months: "March to May", color: "#B35A6E",
    title: "The valleys bloom.",
    text: "Apricot and cherry blossoms turn the orchards pink and white, fields go green and the crowds have not arrived yet.",
    good: "Photographers, couples and quiet travel" },
  { id: "summer", image: "images/deosai-plains.jpg", name: "Summer", months: "June to August", color: "#2D6E7E",
    title: "Everything opens up.",
    text: "Deosai fills with wildflowers, the lakes are at their bluest and the high trekking routes come alive.",
    good: "Treks, Deosai and families" },
  { id: "autumn", image: "images/satpara-lake.jpg", name: "Autumn", months: "September to November", color: "#A5561D",
    title: "Gold on every tree.",
    text: "Poplars and willows turn yellow and orange under crisp, clear skies. Some of the best light of the year.",
    good: "Road trips, photography and heritage" },
  { id: "winter", image: "images/k2.jpg", name: "Winter", months: "December to February", color: "#33455E",
    title: "Snow and silence.",
    text: "White valleys, frozen lakes and cosy evenings. Some high roads close, but the town and nearby spots are magical.",
    good: "Snow lovers and slow travel" }
];

/* Each month has its own photo (img). Without one it falls back to its season's photo. */
const MONTHS = [
  { m: "Jan", s: "winter", img: "images/trek-skardu-summit.jpg", note: "Deep winter. Snow in the valleys and frozen lakes. Very cold nights." },
  { m: "Feb", s: "winter", img: "images/k2.jpg", note: "Still cold, often with bright, clear days. Quiet and peaceful." },
  { m: "Mar", s: "spring", img: "images/katpana-desert.jpg", note: "Winter loosens its grip. The first blossoms usually appear late in the month." },
  { m: "Apr", s: "spring", img: "images/shigar-fort.jpg", note: "Blossom season. Orchards turn pink and white across the valleys." },
  { m: "May", s: "spring", img: "images/basho-valley.jpg", note: "Green fields and pleasant days. A lovely time before the summer rush." },
  { m: "Jun", s: "summer", img: "images/deosai-plains.jpg", note: "Deosai usually starts to open and the trekking season begins." },
  { m: "Jul", s: "summer", img: "images/deosai-lake.jpg", note: "Peak season. Wildflowers on Deosai and warm days by the lakes." },
  { m: "Aug", s: "summer", img: "images/shangrila-lake.jpg", note: "Warm and busy. Book stays early and enjoy long daylight hours." },
  { m: "Sep", s: "autumn", img: "images/satpara-lake.jpg", note: "Fewer crowds, cool evenings and the first hints of autumn colour." },
  { m: "Oct", s: "autumn", img: "images/upper-kachura-lake.jpg", note: "Golden poplars everywhere. A favourite month for photographers." },
  { m: "Nov", s: "autumn", img: "images/kharpocho-fort.jpg", note: "The last colours fade and the cold returns. Pack warm." },
  { m: "Dec", s: "winter", img: "images/hero-main.jpg", note: "Winter settles in. Snow, woodsmoke and quiet roads." }
];

const FACTS = [
  "Most expeditions and treks to K2, the second-highest mountain on Earth, pass through Skardu on their way in.",
  "Deosai is one of the highest plateaus in the world and a protected home for the Himalayan brown bear.",
  "Near Skardu lies a cold desert, where sand dunes can be dusted with snow in winter.",
  "The Indus River flows right past Skardu on its long journey to the Arabian Sea.",
  "Shigar Fort, once a royal palace, was carefully restored and now welcomes overnight guests.",
  "Baltistan is famous for its apricots, eaten fresh in summer and dried for the long winters."
];

const QUIZ = [
  { q: "Your perfect morning starts with…",
    a: [ { t: "A sunrise hike", m: "adventure" }, { t: "Tea by a quiet lake", m: "calm" },
         { t: "Wandering old streets", m: "culture" }, { t: "Everyone laughing at breakfast", m: "family" } ] },
  { q: "Pick a souvenir.",
    a: [ { t: "Muddy boots", m: "adventure" }, { t: "A photo of still water", m: "calm" },
         { t: "A hand-carved wooden box", m: "culture" }, { t: "A bag of dried apricots for the family", m: "family" } ] },
  { q: "What would ruin a holiday?",
    a: [ { t: "Being bored", m: "adventure" }, { t: "Rushing", m: "calm" },
         { t: "Places with no story", m: "culture" }, { t: "Long, tiring drives", m: "family" } ] }
];

const HERO_SLIDES = [
  { image: "images/hero-main.jpg", caption: "Explore Gilgit Baltistan" }
];

const GALLERY = [
  { image: "images/sheosar-lake.jpg", alt: "Sheosar Lake below the Deosai mountains" },
  { image: "images/satpara-lake.jpg", alt: "Turquoise water at Satpara Lake" },
  { image: "images/deosai-lake.jpg", alt: "Wildflowers and open sky on the Deosai plateau" },
  { image: "images/basho-valley.jpg", alt: "Green meadows and a mountain village in Basho Valley" },
  { image: "images/k2.jpg", alt: "A snow-covered peak against a deep blue sky" },
  { image: "images/katpana-desert.jpg", alt: "Brown hills and snowy peaks near Skardu" },
  { image: "images/kharpocho-fort.jpg", alt: "Kharpocho Fort above the Indus River" },
  { image: "images/khaplu-palace.jpg", alt: "Khaplu Palace with its carved wooden tower" }
];
