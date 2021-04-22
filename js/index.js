const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  effect: 'cube',
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button__next',
    prevEl: '.slider-button__prev',
  },
});