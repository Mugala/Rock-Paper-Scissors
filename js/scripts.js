var imageSlider = document.getElementById('imagesSlider');

var images = ["url('images/many.jpg')", "url('images/scissors.jpg')", "url('images/paper.jpg')", "url('images/all.jpg')", "url('images/paper.jpg')"];


var counter = 0;

function carousel() {
  imageSlider.style.backgroundImage = images[counter];

  counter++;


  if (counter > 3) {
    counter = 0;
  }
  console.log("kanyi")
}
setInterval(carousel, 2000);