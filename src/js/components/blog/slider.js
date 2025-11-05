import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useBlogSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: false,
  });
};

export const useAcordslider = () => {
  const heroItem = document.querySelectorAll('.hero__item');
  const heroContetn = document.querySelectorAll('.hero__content');

  heroItem.forEach((tab) => {
    tab.addEventListener('click', function () {
      heroItem.forEach((t) => t.classList.remove('active'));
      this.classList.add('active');
    });

    heroItem.forEach((item) => {
      item.addEventListener('click', function () {
        heroContetn.forEach((content) => {
          content.classList.add('hidden');
        });
        heroItem.forEach((tab) => {
          tab.classList.remove('active');
        });
        const targetContent = document.querySelector(`#${item.dataset.tab}`);
        targetContent.classList.remove('hidden');
        item.classList.add('active');
      });
    });
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      769: {
        centeredSlides: false,
      },
    },
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
  });
};
