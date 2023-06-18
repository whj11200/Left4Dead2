let currentImageIndex = 0;
let images, intervalId;

function startImageSequence() {
if (!images) {
    images = document.getElementsByClassName('images');
}

if (!intervalId) {
    intervalId = setInterval(showNextImage, 500); // 1000ms (1s) 간격으로 이미지를 나타냅니다.
}
}

function showNextImage() {
if (currentImageIndex < images.length) {
    images[currentImageIndex].classList.remove('hidden');
    images[currentImageIndex].classList.add('fadeIn');
    currentImageIndex++;
} else {
    clearInterval(intervalId);
    intervalId = null;
}
}