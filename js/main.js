/* =============================================================
   Bar 10 — Main JS
   Mobile nav toggle, hours status, dynamic content injection
============================================================= */

(function () {
  "use strict";

  /* ── Mobile nav toggle ─────────────────────────────────── */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu   = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("is-open");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", function (e) {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ── Hours status (open / closed) ─────────────────────── */
  function buildHoursStatus() {
    const el = document.getElementById("hours-status");
    if (!el || typeof BAR10 === "undefined") return;

    const now      = new Date();
    const dayIndex = now.getDay(); // 0 = Sun, 6 = Sat
    const dayMap   = [6, 0, 1, 2, 3, 4, 5];
    const todayData = BAR10.hours[dayMap[dayIndex]];

    if (!todayData || !todayData.open) {
      el.textContent = "Closed today";
      el.classList.add("status--closed");
      return;
    }

    function parseTime(str) {
      const [time, period] = str.split(" ");
      let [h, m] = time.split(":").map(Number);
      if (period === "PM" && h !== 12) h += 12;
      if (period === "AM" && h === 12) h = 0;
      return h * 60 + m;
    }

    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const openMin    = parseTime(todayData.open);
    let   closeMin   = parseTime(todayData.close);
    if (closeMin === 0) closeMin = 24 * 60;

    if (nowMinutes >= openMin && nowMinutes < closeMin) {
      el.textContent = "Open now — closes " + todayData.close;
      el.classList.add("status--open");
    } else if (nowMinutes < openMin) {
      el.textContent = "Opens today at " + todayData.open;
      el.classList.add("status--closed");
    } else {
      const nextDay = BAR10.hours[dayMap[(dayIndex + 1) % 7]];
      const nextOpen = nextDay && nextDay.open ? nextDay.open + " tomorrow" : "Monday";
      el.textContent = "Closed — opens at " + nextOpen;
      el.classList.add("status--closed");
    }
  }

  /* ── Render hours table ────────────────────────────────── */
  function renderHoursTable() {
    const el = document.getElementById("hours-table");
    if (!el || typeof BAR10 === "undefined") return;

    const rows = BAR10.hours.map(function (h) {
      const hours = h.open ? h.open + " \u2013 " + h.close : "Closed";
      return "<tr><td>" + h.day + "</td><td>" + hours + "</td></tr>";
    }).join("");
    el.innerHTML = '<table class="hours-table"><tbody>' + rows + "</tbody></table>";
  }

  /* ── HTML escape utility ───────────────────────────────── */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /* ── Render menu sections ──────────────────────────────── */
  function renderMenu() {
    if (typeof BAR10 === "undefined") return;
    var m = BAR10.menu;
    renderPricedList("menu-favorites", m.favorites);
    renderPizzaList("menu-pizzas", m.pizzas);
    renderAppetizers("menu-appetizers", m.appetizers);
    renderNoted("menu-salads-note", m.salads.note);
    renderPricedList("menu-salads", m.salads.items);
    renderNoted("menu-pastas-note", m.pastas.note);
    renderPricedList("menu-pastas", m.pastas.items);
    renderBuildYourOwn("menu-byo", m.buildYourOwn);
    renderNoted("menu-desserts-note", m.desserts.note);
    renderDesserts("menu-desserts", m.desserts);
    renderCatering("menu-catering", m.catering);
  }

  function renderNoted(id, text) {
    var el = document.getElementById(id);
    if (!el || !text) return;
    el.textContent = text;
  }

  /* Priced list — items with { name, price, desc, note?, priceAlt?, cheeses? } */
  function renderPricedList(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      var html = '<li class="menu-item menu-item--described">';
      html += '<div class="menu-item-header">';
      html += '<span class="menu-item-name">' + esc(item.name) + "</span>";
      if (item.price) {
        html += '<span class="menu-item-price">' + esc(item.price) + "</span>";
      }
      html += "</div>";
      if (item.priceAlt) {
        html += '<div class="menu-item-price-alt">' + esc(item.priceAlt) + "</div>";
      }
      if (item.desc) {
        html += '<span class="menu-item-desc">' + esc(item.desc) + "</span>";
      }
      if (item.note) {
        html += '<span class="menu-item-note">' + esc(item.note) + "</span>";
      }
      if (item.cheeses && item.cheeses.length) {
        html += '<span class="menu-item-cheeses">' + item.cheeses.map(esc).join(" \u00b7 ") + "</span>";
      }
      html += "</li>";
      return html;
    }).join("");
  }

  /* Pizza list — items with { name, price14, price7, desc, note? } */
  function renderPizzaList(id, data) {
    var crustEl = document.getElementById("menu-pizza-crusts");
    if (crustEl && data.crusts) crustEl.textContent = data.crusts;

    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = data.items.map(function (item) {
      var html = '<li class="menu-pizza-item">';
      html += '<div class="menu-pizza-item-top">';
      html += '<span class="menu-pizza-item-name">' + esc(item.name) + "</span>";
      html += '<div class="menu-pizza-item-prices">';
      html += '<div class="menu-pizza-price-row"><span class="menu-pizza-size-label">14\u2033 / 12\u2033 Cauliflower Crust</span><span class="menu-pizza-price-val">' + esc(item.price14) + "</span></div>";
      html += '<div class="menu-pizza-price-row"><span class="menu-pizza-size-label">7\u2033 / Flatbread</span><span class="menu-pizza-price-val">' + esc(item.price7) + "</span></div>";
      html += "</div></div>";
      if (item.desc) {
        html += '<p class="menu-pizza-item-desc">' + esc(item.desc) + "</p>";
      }
      if (item.note) {
        html += '<p class="menu-pizza-item-note">' + esc(item.note) + "</p>";
      }
      html += "</li>";
      return html;
    }).join("");
  }

  /* Appetizers — handles simple items, tiered (ribs), alt-price (nachos), cheese board */
  function renderAppetizers(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      var html = '<li class="menu-item menu-item--described">';

      if (item.tiers) {
        /* Tiered pricing (Ribs) */
        html += '<div class="menu-item-header">';
        html += '<span class="menu-item-name">' + esc(item.name) + "</span>";
        html += "</div>";
        if (item.label) {
          html += '<span class="menu-item-label">' + esc(item.label) + "</span>";
        }
        html += '<div class="menu-item-tiers">';
        item.tiers.forEach(function (tier) {
          html += '<div class="menu-item-tier"><span class="menu-item-tier-size">' + esc(tier.size) + "</span><span class=\"menu-item-tier-price\">" + esc(tier.price) + "</span></div>";
        });
        html += "</div>";
      } else {
        html += '<div class="menu-item-header">';
        html += '<span class="menu-item-name">' + esc(item.name) + "</span>";
        if (item.price) {
          html += '<span class="menu-item-price">' + esc(item.price) + "</span>";
        }
        html += "</div>";
        if (item.priceAlt) {
          html += '<div class="menu-item-price-alt">' + esc(item.priceAlt) + "</div>";
        }
      }

      if (item.note) {
        html += '<span class="menu-item-note">' + esc(item.note) + "</span>";
      }
      if (item.desc) {
        html += '<span class="menu-item-desc">' + esc(item.desc) + "</span>";
      }
      if (item.cheeses && item.cheeses.length) {
        html += '<span class="menu-item-cheeses">' + item.cheeses.map(esc).join(" \u00b7 ") + "</span>";
      }
      html += "</li>";
      return html;
    }).join("");
  }

  /* Build Your Own Pizza */
  function renderBuildYourOwn(id, data) {
    var el = document.getElementById(id);
    if (!el) return;

    var html = '<div class="byo-wrapper">';

    /* Sizes + pricing */
    html += '<div class="byo-sizes">';
    data.sizes.forEach(function (s) {
      html += '<div class="byo-size-row">';
      html += '<span class="byo-size-name">' + esc(s.size) + "</span>";
      html += '<span class="byo-size-base">' + esc(s.basePrice) + "</span>";
      html += '<span class="byo-size-topping">+ ' + esc(s.toppingPrice) + " per topping</span>";
      html += "</div>";
    });
    html += "</div>";

    /* Crust & topping note */
    html += '<p class="byo-meta">' + esc(data.crusts) + "</p>";
    if (data.toppingNote) {
      html += '<p class="byo-topping-note">' + esc(data.toppingNote) + "</p>";
    }

    /* Topping categories */
    html += '<div class="byo-categories">';
    data.categories.forEach(function (cat) {
      var catClass = "byo-category" + (cat.label === "Veggies" ? " byo-category--veggies" : "");
      html += '<div class="' + catClass + '">';
      html += '<h4 class="byo-category-label">' + esc(cat.label) + "</h4>";
      html += '<ul class="byo-category-items">';
      cat.items.forEach(function (item) {
        html += "<li>" + esc(item) + "</li>";
      });
      html += "</ul></div>";
    });
    html += "</div></div>";

    el.innerHTML = html;
  }

  /* Desserts — with footer note */
  function renderDesserts(id, data) {
    var el = document.getElementById(id);
    if (!el) return;
    var items = data.items;
    el.innerHTML = items.map(function (item) {
      var html = '<li class="menu-item menu-item--described">';
      html += '<div class="menu-item-header">';
      html += '<span class="menu-item-name">' + esc(item.name) + "</span>";
      if (item.price) {
        html += '<span class="menu-item-price">' + esc(item.price) + "</span>";
      }
      html += "</div>";
      if (item.desc) {
        html += '<span class="menu-item-desc">' + esc(item.desc) + "</span>";
      }
      html += "</li>";
      return html;
    }).join("");

    if (data.footer) {
      var existingFooter = el.parentElement.querySelector(".menu-desserts-footer");
      if (!existingFooter) {
        var footer = document.createElement("p");
        footer.className = "menu-note menu-desserts-footer";
        footer.textContent = data.footer;
        el.parentElement.appendChild(footer);
      }
    }
  }

  /* Catering / Hours */
  function renderCatering(id, data) {
    var el = document.getElementById(id);
    if (!el) return;

    var html = '<div class="menu-catering">';

    html += '<div class="menu-catering-col">';
    html += '<h3 class="menu-catering-col-title">Catering</h3>';
    html += '<p class="menu-catering-text">' + esc(data.cateringNote) + "</p>";
    html += "</div>";

    html += '<div class="menu-catering-col">';
    html += '<h3 class="menu-catering-col-title">Hours</h3>';
    html += '<p class="menu-catering-hours-main">' + esc(data.hoursRegular) + "</p>";
    html += '<p class="menu-catering-col-title menu-catering-kitchen-label">Kitchen Open Late</p>';
    html += '<p class="menu-catering-hours-detail">' + esc(data.kitchenMonThu) + "</p>";
    html += '<p class="menu-catering-hours-detail">' + esc(data.kitchenFriSat) + "</p>";
    html += "</div>";

    html += "</div>";
    el.innerHTML = html;
  }

  /* ── Render events ─────────────────────────────────────── */
  function renderEvents() {
    const el = document.getElementById("events-list");
    if (!el || typeof BAR10 === "undefined") return;

    el.innerHTML = BAR10.events.map(function (ev) {
      return (
        '<article class="event-card">' +
        '<div class="event-card-meta">' +
        '<div class="event-card-day">' + ev.day + "</div>" +
        (ev.time && ev.time !== "Varies" ? '<div class="event-card-time">' + ev.time + "</div>" : "") +
        "</div>" +
        '<div class="event-card-body">' +
        "<h3>" + ev.title + "</h3>" +
        "<p>" + ev.description + "</p>" +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ── Populate contact details ──────────────────────────── */
  function populateContact() {
    if (typeof BAR10 === "undefined") return;

    document.querySelectorAll("[data-contact='phone']").forEach(function (el) {
      el.textContent = BAR10.phone;
      if (el.tagName === "A") el.href = BAR10.phoneHref;
    });

    document.querySelectorAll("[data-contact='email']").forEach(function (el) {
      el.textContent = BAR10.email;
      if (el.tagName === "A") el.href = "mailto:" + BAR10.email;
    });

    document.querySelectorAll("[data-contact='address']").forEach(function (el) {
      el.textContent = BAR10.address.full;
    });
  }

  /* ── Init ──────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    buildHoursStatus();
    renderHoursTable();
    renderMenu();
    renderEvents();
    populateContact();
  });
})();
