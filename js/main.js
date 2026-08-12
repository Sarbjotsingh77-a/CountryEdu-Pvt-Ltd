document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const menuButton = document.querySelector(".menu-btn");

  window.addEventListener("scroll", () => {
    if (!header) return;

    header.classList.toggle("scrolled", window.scrollY > 60);
  });

  /* ==========================================================
              MOBILE FULL-SCREEN MENU
  ========================================================== */

  const mobileMenu = document.getElementById("mobileMenu");
  const mobileBackdrop = document.getElementById("mobileMenuBackdrop");
  const mobileCloseBtn = document.querySelector(".mobile-menu-close");
  const mobileSearchInput = document.getElementById("mobile-search-input");
  const mobileSearchBtn = document.querySelector(".mobile-search-btn");

  function openMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.add("open");
    mobileBackdrop?.classList.add("open");
    document.body.style.overflow = "hidden";
    menuButton?.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;

    mobileMenu.classList.remove("open");
    mobileBackdrop?.classList.remove("open");
    document.body.style.overflow = "";
    menuButton?.setAttribute("aria-expanded", "false");
  }

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", openMobileMenu);
    mobileCloseBtn?.addEventListener("click", closeMobileMenu);
    mobileBackdrop?.addEventListener("click", closeMobileMenu);

    mobileMenu.querySelectorAll(".mobile-menu-links a").forEach(link => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMobileMenu();
    });
  }

  /* Mobile search: filters live on programs.html, otherwise redirects there */

function runMobileSearch() {
    const query = mobileSearchInput?.value.trim() || "";
    const pageSearchInput = document.getElementById("program-search-input");

    // Both programs.html and combos.html have a #program-search-input
    // on the page itself, so just reuse whichever one is present.
    if (pageSearchInput) {
      pageSearchInput.value = query;
      pageSearchInput.dispatchEvent(new Event("input"));
      closeMobileMenu();
      document.getElementById("programs-grid")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // On pages with no local search (e.g. index.html), send them to Programs.
      window.location.href = `programs.html?search=${encodeURIComponent(query)}`;
    }
  }

  mobileSearchBtn?.addEventListener("click", runMobileSearch);
  mobileSearchInput?.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault();
      runMobileSearch();
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});