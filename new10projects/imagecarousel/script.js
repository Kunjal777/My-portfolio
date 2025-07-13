const images = [
  'images/img1.jpeg',
  'images/img2.jpeg',
  'images/img3.jpeg',
  'images/img4.jpeg'
];

let currentIndex = 0;
const carouselImage = document.getElementById('carouselImage');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Show image based on index
function showImage(index) {
  carouselImage.src = images[index];
}

// Go to next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Go to previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Auto-advance every 3 seconds
let autoSlide = setInterval(nextImage, 3000);

// Event Listeners
nextBtn.addEventListener('click', () => {
  nextImage();
  resetTimer();
});

prevBtn.addEventListener('click', () => {
  prevImage();
  resetTimer();
});

// Reset timer on manual navigation
function resetTimer() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextImage, 3000);
}
showImage(currentIndex); // Load first image right away
