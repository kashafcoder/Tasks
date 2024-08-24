let carouselImage = document.getElementById("carousel-cell1");
let smallimages = document.getElementsByClassName("small-img");
let selectedLines = document.getElementsByClassName("selected-line");
let imageUrls = [
  "assets/mango.jpg",
  "assets/green.jpg",
  "assets/berry.jpg",
  "assets/strawberry.jpg"
];

smallimages[0].classList.add("selected");
selectedLines[0].style.opacity = 1;
carouselImage.style.backgroundImage = `url(${imageUrls[0]})`;

for (let i = 0; i < smallimages.length; i++) {
  smallimages[i].onclick = function () {
    for (let j = 0; j < smallimages.length; j++) {
      smallimages[j].classList.remove("selected");
    }
    
    this.classList.add("selected");
    
    carouselImage.style.backgroundImage = `url(${imageUrls[i]})`;
    resetSelectedLines();
    selectedLines[i].style.opacity = 1;
  };
}

function resetSelectedLines() {
  for (let i = 0; i < selectedLines.length; i++) {
    selectedLines[i].style.opacity = 0;
  }
}