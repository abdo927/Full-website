// Add this script at the end of the body tag or use an external JavaScript file

const images = document.querySelectorAll('.background-slider img');
let index = 0;

function changeBackground() {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
  index = (index + 1) % images.length;
}

setInterval(changeBackground, 3000); // Change background every 3 seconds