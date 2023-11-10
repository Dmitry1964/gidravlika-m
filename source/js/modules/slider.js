/* eslint-disable no-undef */

const bannerChetra = document.querySelector('.banner__chetra-swiper');
const bannerVipo = document.querySelector('.banner__vipo-swiper');

export const bannerChetraSlider = new Swiper(bannerChetra, {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
  },
});

export const bannerVipoSlider = new Swiper(bannerVipo, {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3100,
  },
});
