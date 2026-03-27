/* =============================================================
   Bar 10 — Main JS
   Mobile nav toggle, hours status, dynamic content injection
============================================================= */

(function () {
  "use strict";

  /* ── Mobile nav toggle ─────────────────────────────────── */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      navMenu.classList.toggle("is-open");
    });

    // Close nav when a link is clicked
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close nav on outside click
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

    const now = new Date();
    const dayIndex = now.getDay(); // 0 = Sun, 1 = Mon … 6 = Sat
    const dayMap = [6, 0, 1, 2, 3, 4, 5]; // map JS day index → BAR10.hours index
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
    let openMin = parseTime(todayData.open);
    let closeMin = parseTime(todayData.close);
    // handle midnight close (e.g. 12:00 AM = next day)
    if (closeMin === 0) closeMin = 24 * 60;

    if (nowMinutes >= openMin && nowMinutes < closeMin) {
      el.textContent = "Open now · Closes " + todayData.close;
      el.classList.add("status--open");
    } else if (nowMinutes < openMin) {
      el.textContent = "Opens today at " + todayData.open;
      el.classList.add("status--closed");
    } else {
      el.textContent = "Closed · Opens " + (BAR10.hours[dayMap[(dayIndex + 1) % 7]]?.open || "tomorrow");
      el.classList.add("status--closed");
    }
  }

  /* ── Render hours table ────────────────────────────────── */
  function renderHoursTable() {
    const el = document.getElementById("hours-table");
    if (!el || typeof BAR10 === "undefined") return;

    const rows = BAR10.hours
      .map(function (h) {
        const hours = h.open ? h.open + " – " + h.close : "Closed";
        return `<tr><td>${h.day}</td><td>${hours}</td></tr>`;
      })
      .join("");
    el.innerHTML = `<table class="hours-table"><tbody>${rows}</tbody></table>`;
  }

  /* ── Render menu sections ──────────────────────────────── */
  function renderMenu() {
    if (typeof BAR10 === "undefined") return;

    const m = BAR10.menu;

    renderList("menu-pizzas", m.pizzas);
    renderList("menu-appetizers", m.appetizers);
    renderList("menu-salads", m.salads);

    renderNote("menu-cocktails", m.cocktails.note);
    renderNote("menu-margaritas", m.margaritas.note);
    renderNote("menu-dessert-martinis", m.dessertMartinis.note);
    renderNote("menu-beer", m.beer.note);
  }

  function renderList(id, items) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items
      .map(function (item) {
        return `<li class="menu-item">${item.name}</li>`;
      })
      .join("");
  }

  function renderNote(id, note) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = `<p class="menu-note">${note}</p>`;
  }

  /* ── Render events ─────────────────────────────────────── */
  function renderEvents() {
    const el = document.getElementById("events-list");
    if (!el || typeof BAR10 === "undefined") return;

    el.innerHTML = BAR10.events
      .map(function (ev) {
        return `
        <article class="event-card">
          <div class="event-icon" aria-hidden="true">${ev.icon}</div>
          <div class="event-body">
            <h3 class="event-title">${ev.title}</h3>
            <p class="event-meta">${ev.day}${ev.time !== "Varies" ? " · " + ev.time : ""}</p>
            <p class="event-desc">${ev.description}</p>
          </div>
        </article>`;
      })
      .join("");
  }

  /* ── Populate contact details ──────────────────────────── */
  function populateContact() {
    if (typeof BAR10 === "undefined") return;

    const phoneEls = document.querySelectorAll("[data-contact='phone']");
    phoneEls.forEach(function (el) {
      el.textContent = BAR10.phone;
      if (el.tagName === "A") el.href = BAR10.phoneHref;
    });

    const emailEls = document.querySelectorAll("[data-contact='email']");
    emailEls.forEach(function (el) {
      el.textContent = BAR10.email;
      if (el.tagName === "A") el.href = "mailto:" + BAR10.email;
    });

    const addrEls = document.querySelectorAll("[data-contact='address']");
    addrEls.forEach(function (el) {
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
