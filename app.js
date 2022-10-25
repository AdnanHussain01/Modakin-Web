var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      200: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      400: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      775: {
        slidesPerView: 1,
        spaceBetween: 30
      },
      // when window width is >= 640px
      990: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

  