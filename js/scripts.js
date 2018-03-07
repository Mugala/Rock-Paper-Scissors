var imageSlider = document.getElementById('imagesSlider');

var images = ["url('Aimages/many.jpg')", "url('Aimages/paper.jpg')", "url('Aimages/scissors.jpg')", "url('Aimages/Rock.gif')"];


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