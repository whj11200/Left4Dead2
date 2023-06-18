function checkScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (scrollPercentage >= 100) {
        // 다음 페이지로 이동할 URL
        const nextPageURL = 'https://store.steampowered.com/app/550/Left_4_Dead_2/';
        window.location.href = nextPageURL;
    }
}

window.addEventListener('scroll', checkScroll);