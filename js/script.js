var swiper = new Swiper('.text-slider__container', {
    loop: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.text-slider__wrapper_pagination',
        clickable: true,
        dynamicBullets: true,
    },
});