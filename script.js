// Add your JavaScript code here
const imageContainer = document.querySelector('.image-container');
const images = imageContainer.querySelectorAll('img');
const imageDescription = document.querySelector('#image-description');
const pauseButton = document.querySelector('#pause-button');
const runButton = document.querySelector('#run-button');
const overlay = document.querySelector('.overlay');
let currentIndex = 0;
let intervalId = 0;

const imageDescriptions = [
  'Image 1 description',
  'Image 2 description',
  'Image 3 description',
];

function displayNextImage() {
  images[currentIndex].classList.add('hidden');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.remove('hidden');
  setTimeout(() => {
    imageDescription.textContent = imageDescriptions[currentIndex];
    overlay.classList.add('visible');
  }, 500);
  overlay.classList.remove('visible');
}

function startSlideshow() {
  intervalId = setInterval(displayNextImage, 3000);
  pauseButton.style.display = 'inline-block';
  runButton.style.display = 'none';
}

function stopSlideshow() {
  clearInterval(intervalId);
  pauseButton.style.display = 'none';
  runButton.style.display = 'inline-block';
}

pauseButton.addEventListener('click', stopSlideshow);
runButton.addEventListener('click', startSlideshow);

startSlideshow();
