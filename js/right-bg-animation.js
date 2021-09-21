const imagesSlides = (direction) => {
    let currentSlide = document.querySelector('.slide__bg-inner--current');
    let nextSlide;
    direction == 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;
  
    if (nextSlide) {
      imageSlides.forEach(el => { el.classList.remove('index'); });
  
      currentSlide.classList.add('index');
  
      const tl = gsap.timeline({
        defaults: { ease: easing },
        onComplete: function() {
          currentSlide.classList.remove('index');
        }
      });
  
      tl.from(nextSlide, 0.5, {
        xPercent: 100
      })
      .from(nextSlide.querySelector('.slider__bg-link'), 0.5, {
        xPercent: -100,
        delay: -0.5
      });
  
      currentSlide.classList.remove('slide__bg-inner--current');
      nextSlide.classList.add('slide__bg-inner--current');
    }
  };
  