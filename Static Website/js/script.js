let slideindex =1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlides(n) {
   showSlides(slideIndex = n); 
}

function showSlide(n); {
    let i;
    let slides = document.getElementByClassNsame("myslides");
    let dots = document.getElementByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active ", "");
    }       
    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += äctive;
}