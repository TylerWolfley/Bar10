/* =============================================================
   Bar 10 — Main JS
   Mobile nav toggle, hours status, dynamic content injection
============================================================= */

(function () {
  "use strict";

  /* ── Mobile nav toggle ─────────────────────────────────── */
  var navToggle = document.getElementById("nav-toggle");
  var navMenu   = document.getElementById("nav-menu");

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
    var el = document.getElementById("hours-status");
    if (!el || typeof BAR10 === "undefined") return;

    var now      = new Date();
    var dayIndex = now.getDay(); // 0 = Sun, 6 = Sat
    var dayMap   = [6, 0, 1, 2, 3, 4, 5];
    var todayData = BAR10.hours[dayMap[dayIndex]];

    if (!todayData || !todayData.open) {
      el.textContent = "Closed today";
      el.classList.add("status--closed");
      return;
    }

    function parseTime(str) {
      var parts  = str.split(" ");
      var time   = parts[0];
      var period = parts[1];
      var hm     = time.split(":").map(Number);
      var h = hm[0], m = hm[1];
      if (period === "PM" && h !== 12) h += 12;
      if (period === "AM" && h === 12) h = 0;
      return h * 60 + m;
    }

    var nowMinutes = now.getHours() * 60 + now.getMinutes();
    var openMin    = parseTime(todayData.open);
    var closeMin   = parseTime(todayData.close);
    if (closeMin === 0) closeMin = 24 * 60;

    if (nowMinutes >= openMin && nowMinutes < closeMin) {
      el.textContent = "Open now — closes " + todayData.close;
      el.classList.add("status--open");
    } else if (nowMinutes < openMin) {
      el.textContent = "Opens today at " + todayData.open;
      el.classList.add("status--closed");
    } else {
      var nextDay = BAR10.hours[dayMap[(dayIndex + 1) % 7]];
      el.textContent = "Closed — opens " + (nextDay && nextDay.open ? nextDay.open : "next week");
      el.classList.add("status--closed");
    }
  }

  /* ── Render hours table ────────────────────────────────── */
  function renderHoursTable() {
    var el = document.getElementById("hours-table");
    if (!el || typeof BAR10 === "undefined") return;

    var rows = BAR10.hours.map(function (h) {
      var hours = h.open ? h.open + " \u2013 " + h.close : "Closed";
      return "<tr><td>" + h.day + "</td><td>" + hours + "</td></tr>";
    }).join("");
    el.innerHTML = '<table class="hours-table"><tbody>' + rows + "</tbody></table>";
  }

  /* ── Render menu sections ──────────────────────────────── */
  function renderMenu() {
    if (typeof BAR10 === "undefined") return;
    var m = BAR10.menu;
    renderMenuList("menu-pizzas", m.pizzas);
    renderMenuList("menu-appetizers", m.appetizers);
    renderMenuList("menu-salads", m.salads);
    renderMenuNote("menu-cocktails", m.cocktails.note);
    renderMenuNote("menu-margaritas", m.margaritas.note);
    renderMenuNote("menu-dessert-martinis", m.dessertMartinis.note);
    renderMenuNote("menu-beer", m.beer.note);
  }

  function renderMenuList(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      return '<li class="menu-item">' + item.name + "</li>";
    }).join("");
  }

  function renderMenuNote(id, note) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = '<p class="menu-note">' + note + "</p>";
  }

  /* ── Render events ─────────────────────────────────────── */
  function renderEvents() {
    var el = document.getElementById("events-list");
    if (!el || typeof BAR10 === "undefined") return;

    el.innerHTML = BAR10.events.map(function (ev) {
      var when = ev.time && ev.time !== "Varies" ? ev.day + " &middot; " + ev.time : ev.day;
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
