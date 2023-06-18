const imageList = [
  './img/image7.jpg',
  './img/image1.jpg',
  './img/image2.jpg',
  './img/image3.jpg',
  './img/image4.jpg',
  './img/image5.png.jpg',
  './img/image6.jpg',
];

let currentIndex = 0;
let timerId;

function changeImageByIndex(index) {
  changeImage(imageList[index]);
  currentIndex = index;
}

function changeImage(imageSrc) {
  const bigImage = document.getElementById("bigImage");
  bigImage.style.opacity = 0;
  bigImage.style.transform = "scale(0.9)";

  setTimeout(() => {
    bigImage.src = imageSrc;
    bigImage.style.opacity = 1;
    bigImage.style.transform = "scale(1)";
  }, 500);
}

timerId = setInterval(() => {
  currentIndex = (currentIndex + 1) % imageList.length;
  changeImageByIndex(currentIndex);
}, 5000); // 3초 간격으로 이미지 변경