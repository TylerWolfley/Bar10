// Bar 10 — Centralized site data
// Edit this file to update hours, contact info, menu, and events across the site.

const BAR10 = {
  name: "Bar 10",
  tagline: "Wyoming Bred. Craft Beer. Craft Cocktails. Artisan Pizza. Raising the Bar in County Ten.",
  address: {
    street: "114 S Broadway Ave",
    city: "Riverton",
    state: "WY",
    zip: "82501",
    full: "114 S Broadway Ave, Riverton, WY 82501",
  },
  phone: "(307) 856-2337",
  phoneHref: "tel:+13078562337",
  email: "bar10wyo@gmail.com",
  mapLink: "https://maps.google.com/?q=114+S+Broadway+Ave+Riverton+WY+82501",
  social: {
    facebook: "https://www.facebook.com/bar10wyo",
    instagram: "https://www.instagram.com/bar10riverton",
  },
  hours: [
    { day: "Monday",    open: "4:00 PM", close: "11:00 PM" },
    { day: "Tuesday",   open: "4:00 PM", close: "11:00 PM" },
    { day: "Wednesday", open: "4:00 PM", close: "11:00 PM" },
    { day: "Thursday",  open: "4:00 PM", close: "11:00 PM" },
    { day: "Friday",    open: "4:00 PM", close: "12:00 AM" },
    { day: "Saturday",  open: "4:00 PM", close: "12:00 AM" },
    { day: "Sunday",    open: null,      close: null        },
  ],
  menu: {
    pizzas: [
      { name: "Bar Ten",        image: "images/gallery/pizza-bar-ten.jpg",      desc: "The house pizza. Our signature — built to represent everything we do here." },
      { name: "Wiggins Fork",   image: null,                                     desc: "Named for the canyon. Bold, layered flavors that hold their own." },
      { name: "Big Kahuna",     image: "images/gallery/pizza-big-kahuna.jpg",    desc: "Goes big in every direction — loaded, unapologetic, and worth every bite." },
      { name: "Popo Agie",      image: "images/gallery/pizza-popo-agie.jpg",     desc: "Named for Riverton's own river. A local favorite built to come back to." },
      { name: "County Ten Boy", image: "images/gallery/pizza-county-ten.jpg",    desc: "This one's ours. Built for anyone who knows what County Ten means." },
      { name: "The Du-Boyz",    image: null,                                     desc: "A nod to DuBois — the kind of pie you make the drive for." },
      { name: "Lava Mountain",  image: "images/gallery/pizza-lava-mountain.jpg", desc: "Brings the heat. Named for the volcanic peaks on the horizon." },
      { name: "Big Horn BBQ",   image: "images/gallery/pizza-big-horn-bbq.jpg",  desc: "Smoky, rich, and unapologetic. Everything a BBQ pizza should be." },
    ],
    appetizers: [
      { name: "Artichoke Dip",                 desc: "Warm, creamy, and built for sharing. Served with bread for dipping." },
      { name: "Bar Ten Poppers",               desc: "House-made jalapeño poppers — a Bar 10 signature." },
      { name: "Scoppers",                      desc: "Ask your server. A local favorite that earns its reputation." },
      { name: "Stuffed Mushrooms",             desc: "Rich, savory, and one of our most-ordered starters." },
      { name: "Ronni Rolls",                   desc: "Crispy rolls packed with a savory filling. Made fresh." },
      { name: "Ragin' Cajun Shrimp Cocktail", desc: "Fresh shrimp with a Cajun kick. Bold and clean." },
      { name: "Chips & Salsa Basket",          desc: "Fresh tortilla chips and house salsa." },
      { name: "Breadsticks",                   desc: "Warm and soft — perfect alongside any order." },
      { name: "Cheesesticks",                  desc: "Classic and crowd-pleasing. Made to share." },
    ],
    salads: [
      { name: "Caesar Salad",      desc: "Crisp romaine, house Caesar, and Parmesan." },
      { name: "Asian",             desc: "A bright, layered mix with Asian-inspired dressing." },
      { name: "Pear & Gorgonzola", desc: "Sweet pear, sharp gorgonzola, and a balanced vinaigrette." },
      { name: "Italian",           desc: "Classic Italian dressing over a fresh-cut mix." },
      { name: "Buffalo Chicken",   desc: "Heat-forward chicken with cooling ranch." },
      { name: "Thai Beef",         desc: "Tender beef with Thai-seasoned dressing and fresh vegetables." },
      { name: "House",             desc: "A clean, simply dressed house salad." },
    ],
    cocktails: {
      label: "Cocktails",
      categories: ["Classic Cocktails", "Specialty Builds", "On the Rocks"],
      note: "Our bar goes deeper than you'd expect. Ask your server about current selections and seasonal specials.",
    },
    margaritas: {
      label: "Margaritas",
      categories: ["Classic", "Specialty", "Frozen"],
      note: "Classic and specialty margaritas made with quality spirits. Ask what's available tonight.",
    },
    dessertMartinis: {
      label: "Dessert Martinis",
      categories: ["Rotating Seasonal Selections"],
      note: "The right way to end the night. Ask your server what's pouring.",
    },
    beer: {
      label: "Beer",
      categories: ["Wyoming Taps — Rotating", "Bottled & Canned"],
      note: "Local Wyoming breweries on tap, rotating regularly. Ask your server what's pouring tonight.",
    },
  },
  featuredItems: [
    {
      name: "Stuffed Mushrooms",
      description: "A local favorite from the appetizer menu. Rich, satisfying, and worth starting with.",
      emoji: "🍄",
      image: "images/stuffed-mushrooms.jpg",
    },
    {
      name: "Whiskey BBQ Sliders",
      description: "Tender, smoky, and built for sharing over a cold drink.",
      emoji: "🍔",
      image: "images/whiskey-bbq-sliders.jpg",
    },
    {
      name: "Pork Street Tacos",
      description: "Street-style and packed with flavor. A crowd favorite.",
      emoji: "🌮",
      image: "images/pork-street-tacos.jpg",
    },
    {
      name: "Meatball Sliders",
      description: "Hearty sliders that hit the spot before or after a round.",
      emoji: "🍝",
      image: "images/meatball-sliders.jpg",
    },
    {
      name: "Chicken Pot Pie",
      description: "Comfort food done right — warm and filling.",
      emoji: "🥧",
      image: "images/chicken-pot-pie.jpg",
    },
  ],
  events: [
    {
      title: "Trivia Night",
      day: "Thursday",
      time: "7:00 PM",
      description:
        "Test your knowledge every Thursday. Bring a team, grab a round, and compete for bragging rights in Riverton's best trivia night.",
      recurring: true,
      icon: "🎯",
    },
    {
      title: "Live Music",
      day: "Fridays & Saturdays",
      time: "Varies",
      description:
        "Local and regional acts take the stage on weekend nights. Call ahead or check our social pages for the current lineup.",
      recurring: true,
      icon: "🎸",
    },
    {
      title: "Special Events",
      day: "Rotating",
      time: "Varies",
      description:
        "Private parties, holiday events, and one-off specials throughout the year. Call us to reserve space or ask about upcoming dates.",
      recurring: false,
      icon: "🥂",
    },
  ],
};
