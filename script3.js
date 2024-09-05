const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
    speed: 700,

    slidesPerView: 3,
    spaceBetween: 30,


    breakpoints: {
      1920:{
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
      1198:{
        slidesPerView: 2,

      },
      999:{
        slidesPerView: 2,
  
      },
      0: {
        slidesPerView: 1,
      }
    },
  });