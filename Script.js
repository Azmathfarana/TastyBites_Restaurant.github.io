gsap.to("#nav", {
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    },
});

gsap.to("#home",{
    backgroundColor:"#000",
    scrollTrigger:{
    trigger:"#home",
    scroller:"body",
    start:"top -25%",
    end:"top -50%",
    scrub:1
   },
});
gsap.from("order img,#order-online", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#order-online",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#cards-container", {
  scale: 0.8,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#private-dining h1 h4", {
  y: 50,
  scrollTrigger: {
    trigger: "#private-dining h1 h4",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

gsap.from("#contact-page img", {
  y: 50,
  scrollTrigger: {
    trigger: "#contact-page img",
    scroller: "body",
    start: "top 75%",
    end: "top 75%",
    scrub: 3,
  },
});
gsap.from("#contact h6", {
  y: 50,
  scrollTrigger: {
    trigger: "#contact h6",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

function fun(){
  alert("Welcome to the Tasty Bites.com");
}

/* Order*/
function fun(){
  alert("Thank you for your Order");
}

/* Slider carousal*/
"use strict";
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select next slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

//private-dining//
function fun(){
  alert("Welcome to the Tasty Bites.com");
}