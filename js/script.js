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

const navItems = document.querySelectorAll('.navgation a');
const indicador = document.querySelector('.indicador');
const initialPosition = 17; // Define a posição inicial do indicador
  
navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const position = item.getAttribute('data-x');
    indicador.style.left = `${position}px`; // Move o indicador para a posição especificada
  });
  
  item.addEventListener('mouseout', () => {
    indicador.style.left = `${initialPosition}px`; // Volta à posição inicial
  });
});
  