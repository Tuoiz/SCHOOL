// const buttons=document.querySelectorAll('[data-carousel-button]');
// buttons.forEach(button => {
//   button.addEventListener('click',()=>{
//     const offset = button.dataset.carouselButton === 'next'? 1:-1;
//     const slides= button
//       .closest('[data-carousel]')
//       .querySelector('[data-slides]')
//     const activeSlides = slides.querySelector('[data-active]');
//     let newIndex = [...slides.children].indexOf(activeSlides) + offset;
//     if (newIndex < 0) newIndex = slides.children.length - 1;
//     if (newIndex >= slides.children.length) newIndex =0;
//     slides.children[newIndex].dataset.active = true;
//     delete activeSlides.dataset.active;
//   })
// });

let hamburger= document.querySelector('.hamburger');
let sliding= document.querySelector('.menu');
let close=document.querySelector('#close');


hamburger.addEventListener('click',slider);
let show=true;
function slider() {
  if (show) {
    // first.style.display='none';
    sliding.style.left=`${0}px`;
    close.classList.toggle('is-active')
    show=false;
  } else {
    sliding.style.left=`${-300}px`;
    close.classList.toggle('is-active')
    show=true;
  }
};









