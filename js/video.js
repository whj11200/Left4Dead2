var videoElement = document.getElementById("videoElement");
var isVideoPlaying = false;

function toggleVideo() {
    if (videoElement.paused) {
        videoElement.play();
    } else {
        videoElement.pause();
    }
    isVideoPlaying = !isVideoPlaying;
}

function zoomVideo(event) {
    var currWidth = videoElement.clientWidth;
    var currHeight = videoElement.clientHeight;
    var delta = event.deltaY > 0 ? 4 : -3.5;

    // 크기 조절
    var newWidth = currWidth + 100 * delta;
    var newHeight = currHeight + 20 * delta;

    // 크기 제한
    var minWidth = 60; // 최소 너비
    var minHeight = 10; // 최소 높이
    var maxWidth = 1920; // 최대 너비
    var maxHeight = 1080; // 최대 높이

    // 최소/최대 크기를 벗어나지 않도록 조정
    newWidth = Math.min(Math.max(newWidth, minWidth), maxWidth);
    newHeight = Math.min(Math.max(newHeight, minHeight), maxHeight);

    videoElement.style.width = newWidth + "px";
    videoElement.style.height = newHeight + "px";
}

// 클릭 이벤트 처리 함수 등록
videoElement.addEventListener("click", toggleVideo);

// 휠 이벤트 처리 함수 등록
document.addEventListener("wheel", zoomVideo);