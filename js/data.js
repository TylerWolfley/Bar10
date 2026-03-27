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
    facebook: "https://www.facebook.com/bar10riverton",
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
      { name: "Bar Ten" },
      { name: "Wiggins Fork" },
      { name: "Big Kahuna" },
      { name: "Popo Agie" },
      { name: "County Ten Boy" },
      { name: "The Du-Boyz" },
      { name: "Lava Mountain" },
      { name: "Big Horn BBQ" },
    ],
    appetizers: [
      { name: "Artichoke Dip" },
      { name: "Bar Ten Poppers" },
      { name: "Scoppers" },
      { name: "Stuffed Mushrooms" },
      { name: "Ronni Rolls" },
      { name: "Ragin' Cajun Shrimp Cocktail" },
      { name: "Chips & Salsa Basket" },
      { name: "Breadsticks" },
      { name: "Cheesesticks" },
    ],
    salads: [
      { name: "Caesar Salad" },
      { name: "Asian" },
      { name: "Pear & Gorgonzola" },
      { name: "Italian" },
      { name: "Buffalo Chicken" },
      { name: "Thai Beef" },
      { name: "House" },
    ],
    cocktails: {
      label: "Cocktails",
      note: "Ask your server about current cocktail selections and seasonal specials.",
    },
    margaritas: {
      label: "Margaritas",
      note: "Classic and specialty margaritas made with quality spirits.",
    },
    dessertMartinis: {
      label: "Dessert Martinis",
      note: "End the night right — ask about our dessert martini lineup.",
    },
    beer: {
      label: "Beer",
      categories: ["Local Breweries on Tap", "Bottled Beer"],
      note: "We rotate local Wyoming taps. Ask your server what's pouring tonight.",
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
