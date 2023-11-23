/* eslint-disable no-undef */

const bannerChetra = document.querySelector('.banner__chetra-swiper');
const bannerVipo = document.querySelector('.banner__vipo-swiper');
const catalogChetra = document.querySelector('.catalog-chetra__wrapper');
const catalogVipo = document.querySelector('.catalog-vipo__wrapper');
const chetraUnitImages = document.querySelector('.chetra-unit__slider');
const vipoUnitImages = document.querySelector('.vipo-unit__slider');


const bannerChetraSlider = new Swiper(bannerChetra, {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3000,
  },
});

const bannerVipoSlider = new Swiper(bannerVipo, {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 3100,
  },
});

const catalogChetraSlider = new Swiper(catalogChetra, {
  slidesPerView: 5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },

});

const catalogVipoSlider = new Swiper(catalogVipo, {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});

const chetraUnitSlider = new Swiper(chetraUnitImages, {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

const vipoUnitSlider = new Swiper(vipoUnitImages, {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
});

const handleSwiperBtnClick = () => {
  const optionsBase = document.querySelector('.vipo-unit__options-base');
  const dimensions = document.querySelector('.vipo-unit__options-dimensions');
  optionsBase.textContent = '';
  dimensions.textContent = '';
  setTimeout(() => {
    const activeSlide = document.querySelector('.swiper-slide-active');
    const baseName = activeSlide.getAttribute('data-base');
    const dimensionsParam = activeSlide.getAttribute('data-dimensions');
    optionsBase.textContent = baseName;
    dimensions.textContent = dimensionsParam;
  }, 300);
};

vipoUnitSlider.on('activeIndexChange', handleSwiperBtnClick);


export {catalogChetraSlider, bannerVipoSlider, bannerChetraSlider, catalogVipoSlider, chetraUnitSlider, vipoUnitSlider};
