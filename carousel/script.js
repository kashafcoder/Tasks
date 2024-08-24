let slides = document.querySelectorAll(".carousel-slide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
let timer;

function previousbtn() {
  counter--;
  stopAutoplay();
  sliderImage();
  startAutoplay();
}

function nextbtn() {
  counter++;
  stopAutoplay();
  sliderImage();
  startAutoplay();
}

function sliderImage() {
  if (counter < 0) {
    counter = slides.length - 1;
  } else if (counter >= slides.length) {
    counter = 0;
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

let AutoplayPaused = false;

function pauseAutoplay() {
  if (AutoplayPaused) {
    startAutoplay();
  } else {
    stopAutoplay();
  }

  AutoplayPaused = !AutoplayPaused;
}

document.addEventListener("visibilitychange", VisibilityChange);

function VisibilityChange() {
  if (document.visibilityState === "hidden") {
    stopAutoplay();
    AutoplayPaused = true;
  } else {
    startAutoplay();
    AutoplayPaused = false;
  }
}

function startAutoplay() {
  stopAutoplay();
  if (!AutoplayPaused) {
    timer = setInterval(() => {
      counter++;
      sliderImage();
    }, 2000);
  }
}

function stopAutoplay() {
  clearInterval(timer);
}


const carouselContainer = document.querySelector(".carousel");

carouselContainer.addEventListener("mouseup", () => {
    setTimeout(() => {
      startAutoplay();
    }, 100);
  });

carouselContainer.addEventListener("mousedown", () => {
  pauseAutoplay();
});


startAutoplay()