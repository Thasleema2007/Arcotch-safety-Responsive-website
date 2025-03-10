
let currentIndex = 0;  // Define currentIndex globally

function showSlide(index) {
    const slides = document.querySelectorAll('.testimonial');  // Assuming you have this class for slides
    const dots = document.querySelectorAll('.dot');
    
    if (index >= slides.length) currentIndex = 0;       // Loop back to first slide
    if (index < 0) currentIndex = slides.length - 1;    // Go to last slide if negative

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';  // Show current slide
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active-dot', i === currentIndex);  // Highlight current dot
    });
  // Update currentIndex
}

function currentSlide(index) {
    currentIndex=index - 1;
    showSlide(currentIndex);
}

setInterval(() => {
    currentIndex++;
   showSlide(currentIndex);  // Auto-slide every 3 seconds
}, 3000);

showSlide(currentIndex);  // Initial call