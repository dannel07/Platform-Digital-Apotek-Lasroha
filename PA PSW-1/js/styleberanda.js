let navToggle = document.querySelector(".nav__toggle");
let navWrapper = document.querySelector(".nav__wrapper");

navToggle.addEventListener("click", function () {
  if (navWrapper.classList.contains("active")) {
    this.setAttribute("aria-expanded", "false");
    this.setAttribute("aria-label", "menu");
    navWrapper.classList.remove("active");
  } else {
    navWrapper.classList.add("active");
    this.setAttribute("aria-label", "close menu");
    this.setAttribute("aria-expanded", "true");
    searchForm.classList.remove("active");
    searchToggle.classList.remove("active");
  }
});

var slideIndex = 1;
showSlide(slideIndex);

function nextslide(n){
  showSlide(slideIndex += n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName
  ("imgslide");

  if (n > slides.length){
    slideIndex=1
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i <slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

