# Bar 10 — Website

A mobile-first website for **Bar 10** in Riverton, Wyoming.

## Pages

| File | Page |
|---|---|
| `index.html` | Homepage |
| `menu.html` | Full Menu |
| `events.html` | Events (Trivia, Live Music) |
| `about.html` | About |
| `gallery.html` | Photo Gallery |
| `contact.html` | Contact & Hours |

## Structure

```
/
├── index.html
├── menu.html
├── events.html
├── about.html
├── gallery.html
├── contact.html
├── css/
│   └── style.css       # All styles — dark warm theme, mobile-first
├── js/
│   ├── data.js         # Centralized business data (hours, menu, events)
│   └── main.js         # Nav, hours status, dynamic content rendering
└── images/
    ├── hero-bg.jpg                    # Homepage hero background
    ├── gallery/                       # Gallery images (see gallery.html for filenames)
    └── [featured food/drink images]   # See index.html for filenames
```

## Editing Content

- **Hours, phone, address, social links** → edit `js/data.js`
- **Menu items** → edit `js/data.js` (menu section)
- **Events** → edit `js/data.js` (events array)
- **Page copy and layout** → edit the relevant `.html` file

## Adding Photos

Drop photos into the `images/` folder. The gallery page (`gallery.html`) shows the expected filenames for each placeholder.

**Recommended sizes:**
- Hero background: 1920×1080 px minimum
- Featured cards: 800×600 px, 4:3 ratio
- Gallery items: 800×800 px, square

## Business Info

- **Address:** 114 S Broadway Ave, Riverton, WY 82501
- **Phone:** (307) 856-2337
- **Email:** bar10wyo@gmail.com
- **Hours:** Mon–Thu 4 PM–11 PM · Fri–Sat 4 PM–12 AM · Sun Closed