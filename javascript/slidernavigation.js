const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
document.querySelector(".next-btn").addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > numberOfSlides - 1){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
document.querySelector(".prev-btn").addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > numberOfSlides - 1){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
document.querySelector(".slider").addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
document.querySelector(".slider").addEventListener("mouseout", () => {
  repeater();
});


// Load random image about software development for slider.
const slidesSoftwareDev = ["../images/sliderpics/SoftwareDev_Transportes.jpg", "../images/sliderpics/SoftwareDev_TablasDeCifrado.jpg"];
document.getElementById('slideSoftDev').src = slidesSoftwareDev[randomInteger(0, slidesSoftwareDev.length - 1)];

const slidesGameDev = ["../images/sliderpics/GameDev_Pandemicware.jpg", "../images/sliderpics/GameDev_TopDownRace.jpg", "../images/sliderpics/GameDev_Platformer.jpg", "../images/sliderpics/GameDev_Wave.jpg"];
document.getElementById('slideGameDev').src = slidesGameDev[randomInteger(0, slidesGameDev.length - 1)];