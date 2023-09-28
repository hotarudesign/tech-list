"use strict";
new Splide(".splide", {
  type: "loop",
  drag: false,
  arrows: false,
  pagination: false,
  focus: "center",
  perPage: 5,
  breakpoints: {
    768: {
      perPage: 3,
    },
    587: {
      perPage: 3,
    },
  },

  isNavigation: false,
  autoScroll: {
    speed: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    rewind: false,
  },
}).mount(window.splide.Extensions);
