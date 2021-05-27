// modify the data-bs-interval of the carousel
const myCarousel = document.querySelector("#mycarousel");
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
});

var pauseButton = document.getElementById("carouselButton");
var playing = true;

document
  .getElementById("carouselButton")
  .addEventListener("click", function () {
    if (playing) {
      pauseButton.innerHTML = `<span class="fas fa-play"></span>`;
      playing = false;
      carousel.pause();
    } else {
      pauseButton.innerHTML = `<span class="fas fa-pause"></span>`;
      playing = true;
      carousel.cycle();
    }
  });

// reserve a table button
var reserveModal = new bootstrap.Modal(document.getElementById("assmodal"));
document.getElementById("reserveButton").addEventListener("click", function () {
  reserveModal.show();
});

// login button
var loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
document.getElementById("loginButton").addEventListener("click", function () {
  loginModal.show();
});
