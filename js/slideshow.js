let slideIndex = 0;
let slides;
let slideInterval;

document.addEventListener('DOMContentLoaded', () => {
  slides = document.getElementsByClassName("mySlides");
  showSlides(); // Initialize slide show
  slideInterval = setInterval(showSlides, 7000); // Change slide every 7 seconds
});

// Function to show slides
function showSlides() {
  let i;
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('show');
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  // Show the current slide
  slides[slideIndex-1].classList.add('show');
}

// Function to go to the next/previous slide
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}

  // Reset slideInterval to handle manual slide changes
  clearInterval(slideInterval);
  slideInterval = setInterval(showSlides, 7000);

  // Update slides display
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('show');
  }
  slides[slideIndex-1].classList.add('show');
}
