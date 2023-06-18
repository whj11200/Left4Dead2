var isClicked = false;

function toggleChagerImage3() {
    var HuntterImage = document.getElementById("Huntter");
    var HuntterAttackImage = document.getElementById("HuntterAttack");
    if (isClicked) {
        HuntterImage.style.opacity = 1;
        HuntterAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        HuntterImage.style.opacity = 0;
        HuntterAttackImage.style.opacity = 1;
        isClicked = true;
    }
}