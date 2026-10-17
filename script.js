"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");

if (menuButton && navigation) {
  const setMenuOpen = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    menuButton.querySelector(".visually-hidden").textContent = open
      ? "Cerrar navegación"
      : "Abrir navegación";
  };

  menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia("(min-width: 681px)").matches) setMenuOpen(false);
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
