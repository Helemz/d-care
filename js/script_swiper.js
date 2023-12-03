var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    blur: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0, /*o "rotate 10, no swiper eleficacomaspecto 3d!!!"*/
      stretch: 0,
      depth: 100, /* o quao ele fica escondido! ((70 para a pag de receitas!!)))*/
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });