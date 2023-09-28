"use strict";

const view = document.querySelector(".container");
const mask = document.querySelector(".container__mask");
const nextBtn = document.querySelector(".btn-next");
const reloadBtn = document.querySelector(".btn-reload");
const homeBtn = document.querySelector(".btn-home");
const BG_ALLAY = [
  "url(../../assets/images/webp/random-view01.webp)",
  "url(../../assets/images/webp/random-view02.webp)",
  "url(../../assets/images/webp/random-view03.webp)",
];
let changeRand = 0;

window.addEventListener("DOMContentLoaded", () => {
  reloadBtn.style.display = "none";
  homeBtn.style.display = "none";
  changeRand = Math.floor(Math.random() * BG_ALLAY.length);
  let firstBg = BG_ALLAY[changeRand];
  view.style.backgroundImage = firstBg;
  nextBtn.addEventListener("click", () => {
    BG_ALLAY.splice(changeRand, 1);
    changeRand = Math.floor(Math.random() * BG_ALLAY.length);
    let secondeBg = BG_ALLAY[changeRand];
    view.style.backgroundImage = secondeBg;
    if (BG_ALLAY.length === 1) {
      nextBtn.style.display = "none";
      reloadBtn.style.display = "block";
      homeBtn.style.display = "block";
    }
  });
});
