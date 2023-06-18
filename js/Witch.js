var isClicked = false;

function toggleChagerImage6() {
    var WITCHImage = document.getElementById("WITCH");
    var WITCHAttackImage = document.getElementById("WITCHAttack");
    
    if (isClicked) {
        WITCHImage.style.opacity = 1;
        WITCHAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        WITCHImage.style.opacity = 0;
        WITCHAttackImage.style.opacity = 1;
        isClicked = true;
    }
}