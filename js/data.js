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
    favorites: [
      { name: "Chicken Pot Pie",     price: "$10.99", desc: "An all-American comfort food classic. Large, meaty chunks of juicy white chicken breast with sweet carrots and peas, covered in a buttery cream sauce." },
      { name: "Italian Slider",      price: "$11.99", desc: "Canadian bacon, pepperoni, mozzarella, lettuce, tomatoes, red onion, pepperoncini, and house dressing." },
      { name: "Meatball Sliders",    price: "$10.99", desc: "Traditional big plump meatballs, signature marinara, fresh basil, mozzarella, and shaved parmesan." },
      { name: "Cuban Slider",        price: "$11.99", desc: "Pulled pork/ham, mustard, Swiss, and deli pickle." },
      { name: "Whiskey BBQ Sliders", price: "$10.99", desc: "House pulled pork, caramelized onions, cheddar cheese, and our signature whiskey BBQ." },
      { name: "Pork Street Tacos",   price: "$11.99", desc: "House pulled pork, onions, cilantro, fresh jalapeños, and Bar Ten hot sauce." },
    ],
    pizzas: {
      crusts: "House crust, thin crust, flatbread, or 12\u2033 cauliflower crust.",
      items: [
        { name: "Thai Chicken",     price14: "$20.99", price7: "$11.99", desc: "Thai peanut sauce, chicken, peppers, red onion, topped with mint, basil, and cilantro." },
        { name: "Surf & Turf",      price14: "$24.99", price7: "$14.99", desc: "Chipotle cream, plump shrimp, bacon, red onion, tomatoes, and cheddar jack." },
        { name: "BBQ Pig",          price14: "$20.99", price7: "$11.99", desc: "Whiskey BBQ sauce, pulled pork, bacon, caramelized onions, and cheddar jack cheese." },
        { name: "The Greek",        price14: "$20.99", price7: "$11.99", desc: "Olive oil, gyro style lamb, red onion, tomatoes, goat cheese, Kalamata olives, cucumbers, and tzatziki drizzle." },
        { name: "Chipotle Chicken", price14: "$23.99", price7: "$12.99", desc: "Chipotle cream, chicken, red onion, jalapeños, corn, cheddar jack, topped with tortilla chips, cilantro, and chipotle raspberry drizzle." },
        { name: "Popo Agie",        price14: "$20.99", price7: "$11.99", desc: "White sauce, spinach, artichoke hearts, mushrooms, tomatoes, and mozzarella.", note: "Add chicken for $2." },
        { name: "Apple Jacked",     price14: "$20.99", price7: "$11.99", desc: "Olive oil, bacon, apples, blue cheese with a balsamic reduction." },
        { name: "Garlic Shrimp",    price14: "$23.99", price7: "$12.99", desc: "Butter wine sauce, shrimp, garlic, tomatoes, asiago, topped with green onions." },
        { name: "Sweet Heat",       price14: "$20.99", price7: "$11.99", desc: "Marinara, Italian sausage, chorizo, jalapeños, caramelized onions with Thai sweet chili." },
        { name: "County 10",        price14: "$20.99", price7: "$11.99", desc: "Marinara, pepperoni, bacon, ham, sausage, and mozzarella." },
        { name: "Sunshine Vine",    price14: "$20.99", price7: "$11.99", desc: "Marinara, spinach, cremini mushrooms, artichoke hearts, caramelized onions, tomatoes, garlic, goat cheese, and balsamic reduction." },
        { name: "Fig & Pig",        price14: "$20.99", price7: "$11.99", desc: "Olive oil, chorizo, dates, goat cheese, and spinach." },
        { name: "The Bar10der",     price14: "$17.99", price7: "$9.99",  desc: "Marinara, pepperoni, sausage, mushrooms, red onions, mozzarella, and shaved parmesan.", note: "Add green olives and red pepper flakes for the true BAR10DER experience." },
      ],
    },
    appetizers: [
      { name: "Meatballs",              price: "$9.99",  desc: "Three meatballs with house marinara, fresh basil, and grated parmesan." },
      { name: "Stuffed Jalapeños",      price: "$9.99",  desc: "In-house cheese stuffing topped with bacon and our whiskey BBQ." },
      { name: "Stuffed Mushrooms",      price: "$9.99",  desc: "In-house cheese stuffing with spicy Italian sausage and sweet soy." },
      { name: "Devils on Horseback",    price: "$10.99", desc: "Gorgonzola stuffed dates wrapped in bacon." },
      { name: "Artichoke Dip",          price: "$10.99", desc: "A Bar Ten signature, served with breadsticks." },
      { name: "Ronnie Stromboli",       price: "$10.99", desc: "Marinara, double pepperoni, mozzarella, and green onions." },
      { name: "Coastal Shrimp Cocktail",price: "$11.99", desc: "Six plump shrimp served with our in-house cocktail sauce." },
      { name: "Nachos",                 price: "$13.99", priceAlt: "Half Nachos — $8.99", desc: "Choice of chicken, pulled pork, or chorizo, black beans, red onion, jalapeños, tomatoes, chipotle cream, and cheddar/jack cheese." },
      { name: "Bacon Wrapped Shrimp",   price: "$13.99", desc: "Six plump shrimp served with sweet soy and garlic butter." },
      {
        name: "Ribs", label: "The Best in Fremont County!",
        tiers: [
          { size: "1/4 Rack", price: "$10.99" },
          { size: "1/2 Rack", price: "$15.99" },
          { size: "Full Rack", price: "$26.99" },
        ],
        desc: "Slow-cooked and then seasoned with your choice of signature whiskey BBQ, Asian, buffalo, or buffalo blue sauce.",
      },
      {
        name: "Cheese Board", price: "$13.99", note: "When available.",
        desc: "A selection of fine cheeses paired with dates, apples, Kosmo cherry peppers, spiced walnuts, and Kalamata olives.",
        cheeses: ["Grand Cru Reserve", "Smoked Fontina", "Sriracha Gouda", "Prairie Sunset"],
      },
    ],
    salads: {
      note: "All salads are made with Oregon spring mix.",
      items: [
        { name: "The House",           price: "$6.99",  desc: "House croutons, cucumbers, and tomatoes... your basic side salad!" },
        { name: "Pear & Gorgonzola",   price: "$10.99", desc: "Spiced walnuts, pears, and gorgonzola served with balsamic vinaigrette." },
        { name: "Chicken Bacon Ranch", price: "$12.99", desc: "Chicken, bacon, cucumber, red onion, tomatoes, cilantro, pepperoncini, and house croutons." },
        { name: "Asian",               price: "$12.99", desc: "Peppers, green onions, tomatoes, chicken, topped with La Choy fry noodles, cilantro, mint, served with Asian dressing." },
        { name: "BBQ Chicken",         price: "$13.99", desc: "Chicken, bacon, tortilla strips, black beans, corn, cilantro, tomatoes, cucumbers, served with Bar Ten BBQ and ranch dressing." },
        { name: "Greek",               price: "$10.99", desc: "Tomatoes, red onion, cucumbers, Kalamata olives, goat cheese, and Bar Ten balsamic vinaigrette.", note: "Add chicken for $2." },
        { name: "Italian Salad",       price: "$13.99", desc: "Chopped pepperoni, Canadian bacon, applewood bacon, olives, pepperoncinis, tomatoes, and mozzarella cheese served with Bar Ten balsamic vinaigrette." },
      ],
    },
    pastas: {
      note: "Traditional Italian Cuisine",
      items: [
        { name: "Mac & Cheese",   price: "$8.99",  desc: "Macaroni, parmesan cream sauce, cheddar, jack, and blue cheese.", note: "Add bacon for $1." },
        { name: "Meatball Penne", price: "$9.99",  desc: "Marinara, meatball, fresh basil, mozzarella, and fresh parmesan." },
        { name: "Shrimp Scampi",  price: "$11.99", desc: "Plump shrimp, garlic butter, green onions, fresh garlic, and shaved parmesan." },
      ],
    },
    buildYourOwn: {
      sizes: [
        { size: "14\u2033 Pizza",  basePrice: "$16.99", toppingPrice: "$1.50" },
        { size: "7\u2033 Pizza",   basePrice: "$8.99",  toppingPrice: "$0.75" },
      ],
      crusts: "House crust, thin crust, flatbread, or gluten free crust.",
      toppingNote: "Unlimited Toppings",
      categories: [
        { label: "Meat",    items: ["Pepperoni", "Spicy Italian Sausage", "Meatball", "Shrimp", "Bacon", "Pulled Pork", "Chicken", "Chorizo", "Lamb"] },
        { label: "Sauce",   items: ["Marinara", "BBQ", "Asian", "White Sauce", "Thai Peanut", "Buffalo", "Garlic Butter", "Chipotle Cream"] },
        { label: "Cheese",  items: ["Mozzarella", "Cheddar/Jack", "Goat Cheese", "Gorgonzola", "Shaved Parmesan", "Asiago"] },
        { label: "Veggies", items: ["Artichoke Hearts", "Pepperoncini", "Kalamata Olives", "Green Olives", "Black Olives", "Red Onion", "Corn", "Green Onion", "Caramelized Onion", "Jalape\u00f1os", "Mixed Bell Peppers", "Mushrooms", "Spinach", "Tomatoes", "Apples", "Dates", "Cilantro", "Basil", "Mint"] },
        { label: "Drizzle", items: ["Sweet Chili", "Balsamic Glaze", "Ranch", "Buffalo", "Sweet Soy", "BBQ"] },
      ],
    },
    desserts: {
      note: "Bartender Sundaes",
      items: [
        { name: "Grasshopper",    price: "$8.99", desc: "Cr\u00e8me de menthe and chocolate sauce over vanilla bean ice cream topped with whipped cream and a cherry." },
        { name: "My Name Is Mud", price: "$8.99", desc: "Kahl\u00faa, Bailey\u2019s, chocolate sauce over vanilla bean ice cream topped with whipped cream and a cherry." },
        { name: "Southern Cross", price: "$8.99", desc: "Old Weller bourbon and chocolate/caramel sauce over vanilla bean ice cream topped with spiced walnuts, whipped cream, and a cherry." },
      ],
      footer: "Ask your bartender for ideas.",
    },
    catering: {
      cateringNote: "We are now able to cater your big events. Everything is made from scratch with fresh ingredients. We also offer top-shelf bar service. See server for details and application.",
      hoursRegular: "4 PM \u2013 Close, Monday \u2013 Saturday",
      kitchenMonThu: "Monday \u2013 Thursday: Kitchen open till 10 PM",
      kitchenFriSat: "Friday & Saturday: Kitchen open till 11 PM",
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
