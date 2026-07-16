(function () {
  "use strict";

  /* Mobile nav toggle */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  function closeNav() {
    navToggle.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  }

  navToggle.addEventListener("click", function () {
    var isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  /* Highlight the nav link for the section currently in view */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav-link");

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute("id");
        navLinks.forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
        });
      });
    },
    { rootMargin: "-50% 0px -45% 0px" }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* Scroll-reveal animation for elements marked .reveal */
  var revealItems = document.querySelectorAll(".reveal");

  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });

  /* Footer copyright year */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
