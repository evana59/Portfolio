console.log("start")
let slideIndex = 0;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length-1) 
  {
    slideIndex = 0
  }
  if (n < 0) 
  {
    slideIndex = slides.length - 1
  }
  for (let i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++)
   {
    dots[i].className = dots[i].className.replace(" active", "");
   }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}