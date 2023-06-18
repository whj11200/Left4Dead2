document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 1;
    const slides = document
    .getElementsByClassName("slide-video")[0]
    .getElementsByTagName("iframe");
    const totalSlides = slides.length;

    function slideRotation(deg) {
    return `rotateY(${deg}deg)`;
    }
    function showSlide(n) {
      slides[0].parentNode.style.transform = `translate(-50%, -50%) ${slideRotation(-n * 390 / totalSlides)}`;
    currentSlide = (n + totalSlides) % totalSlides;
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.opacity = i === currentSlide ? 1 : 0.6;
    }
    }
    function nextSlide() {
        showSlide(currentSlide + 1); // 수정됨
    }
    function previousSlide() {
    showSlide(currentSlide - 1);
    }

    function handleArrowKeys(e) {
    e = e || window.event;
    if (e.keyCode == 37) {
        previousSlide();
      } else if (e.keyCode == 39) { // 수정됨
        nextSlide();
    }
    }

    for (let i = 0; i < totalSlides; i++) {
      slides[i].style.transform = `rotateY(${i * 360 / totalSlides}deg) translateZ(300px)`;
    }

    showSlide(currentSlide); // 기본 슬라이드 설정
    document.onkeyup = handleArrowKeys; // 키보드 이벤트 처리
});