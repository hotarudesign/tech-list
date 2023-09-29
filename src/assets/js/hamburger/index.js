"use strict";

const toggleBtn = document.querySelector(".toggle-btn");
const slideMenu = document.querySelector(".g-nav");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault;
  toggleBtn.classList.toggle("is-active");
  slideMenu.classList.toggle("is-show");
});
