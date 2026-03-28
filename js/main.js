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
    renderPizzaCards("menu-pizzas", m.pizzas);
    renderMenuList("menu-appetizers", m.appetizers);
    renderMenuList("menu-salads", m.salads);
    renderMenuDrink("menu-cocktails", m.cocktails);
    renderMenuDrink("menu-margaritas", m.margaritas);
    renderMenuDrink("menu-dessert-martinis", m.dessertMartinis);
    renderMenuDrink("menu-beer", m.beer);
  }

  function renderPizzaCards(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      var photoHtml = item.image
        ? '<img src="' + esc(item.image) + '" alt="' + esc(item.name) + ' \u2014 specialty pizza at Bar 10" loading="lazy" onerror="this.closest(\'.menu-pizza-photo\').classList.add(\'menu-pizza-photo--empty\')" />'
        : "";
      return (
        '<div class="menu-pizza-card">' +
        '<div class="menu-pizza-photo' + (item.image ? "" : " menu-pizza-photo--empty") + '">' + photoHtml + "</div>" +
        '<div class="menu-pizza-info">' +
        '<div class="menu-pizza-name">' + esc(item.name) + "</div>" +
        (item.desc ? '<div class="menu-pizza-desc">' + esc(item.desc) + "</div>" : "") +
        "</div>" +
        "</div>"
      );
    }).join("");
  }

  function renderMenuList(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      if (item.desc) {
        return (
          '<li class="menu-item menu-item--described">' +
          '<span class="menu-item-name">' + esc(item.name) + "</span>" +
          '<span class="menu-item-desc">' + esc(item.desc) + "</span>" +
          "</li>"
        );
      }
      return '<li class="menu-item">' + esc(item.name) + "</li>";
    }).join("");
  }

  function renderMenuDrink(id, data) {
    var el = document.getElementById(id);
    if (!el) return;
    var html = "";
    if (data.categories && data.categories.length) {
      html += '<div class="menu-drink-categories">';
      data.categories.forEach(function (cat) {
        html += '<div class="menu-drink-category"><span class="menu-drink-category-name">' + esc(cat) + "</span></div>";
      });
      html += "</div>";
    }
    html += '<p class="menu-note">' + esc(data.note) + "</p>";
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
