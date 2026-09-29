/* Photos: your own, in the images folder. To swap one, replace the file or change image: below. */

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
    days: "Flexible", price: "On request", includes: "Trekking and adventure support, local guide and transport. Standard, Deluxe or Executive package." },
  { id: "custom", name: "Custom or honeymoon", tint: "#6B5877", image: "images/sheosar-lake.jpg",
    stops: ["You choose"],
    blurb: "Tell us who's coming and what you love. We'll build the route, stays and transport around you.",
    days: "Any length", price: "On request", includes: "Whatever you need" }
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

const MONTHS = [
  { m: "Jan", s: "winter", note: "Deep winter. Snow in the valleys and frozen lakes. Very cold nights." },
  { m: "Feb", s: "winter", note: "Still cold, often with bright, clear days. Quiet and peaceful." },
  { m: "Mar", s: "spring", note: "Winter loosens its grip. The first blossoms usually appear late in the month." },
  { m: "Apr", s: "spring", note: "Blossom season. Orchards turn pink and white across the valleys." },
  { m: "May", s: "spring", note: "Green fields and pleasant days. A lovely time before the summer rush." },
  { m: "Jun", s: "summer", note: "Deosai usually starts to open and the trekking season begins." },
  { m: "Jul", s: "summer", note: "Peak season. Wildflowers on Deosai and warm days by the lakes." },
  { m: "Aug", s: "summer", note: "Warm and busy. Book stays early and enjoy long daylight hours." },
  { m: "Sep", s: "autumn", note: "Fewer crowds, cool evenings and the first hints of autumn colour." },
  { m: "Oct", s: "autumn", note: "Golden poplars everywhere. A favourite month for photographers." },
  { m: "Nov", s: "autumn", note: "The last colours fade and the cold returns. Pack warm." },
  { m: "Dec", s: "winter", note: "Winter settles in. Snow, woodsmoke and quiet roads." }
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
