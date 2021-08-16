/* nav menu */
const navBtn = document.querySelector('.nav__btn');
const navMobile = document.querySelector('.nav__mobile');

navBtn.addEventListener('click', () => {
    navMobile.classList.toggle('nav__mobile-active');
    navBtn.classList.toggle('nav__btn-close');
}) 


/* slider */
$(document).ready(function () {
  $('.homeslider').slick({
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>'
  });
});

$(document).ready(function(){
  $('.testimonials__slider').slick({
      arrows: false,
      dots: true,
  });
});