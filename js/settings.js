const bgItems = document.querySelectorAll('.slider__bg-link');
const imageSlides = document.querySelectorAll('.slide__bg-inner');
const shapes = document.querySelectorAll('.shapes__content');
const shapeSlides = document.querySelectorAll('.shapes__item');
const helperInput = document.querySelector('#helper-input');
const mainSection = document.querySelector('.main__section');

const mouse = document.querySelector('.mouse');
const slideBg = document.querySelector('.slide__bg');
const links = document.querySelectorAll('a');

const slidesCount = 5;
let slideCounter = 1;
const easing = BezierEasing(0.770, 0.125, 0.265, 1.040);

const startComplete = () => {
  imageSlides.forEach(el => { el.style.opacity = 1 });
  shapeSlides.forEach(el => { el.style.opacity = 1 });
};

const startingTl = gsap.timeline({ defaults: { ease: easing }, onComplete: startComplete });

const burger = document.querySelector('.burger'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
    menu.classList.remove('menu--visible');
});