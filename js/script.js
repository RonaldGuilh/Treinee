var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        // when window width is >= 320px
        640: {
          slidesPerView: 1,
          spaceBetween: 18
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 18
        },
        // when window width is >= 640px
        1188: {
          slidesPerView: 4,
          spaceBetween: 24
        }
      }
  });