var isClicked = false;

function toggleChagerImage() {
    var chagerImage = document.getElementById("chager");
    var chagerAttackImage = document.getElementById("chagerAttack");
   
    if (isClicked) {
        chagerImage.style.opacity = 1;
        chagerAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        chagerImage.style.opacity = 0;
        chagerAttackImage.style.opacity = 1;
        isClicked = true;
    }
}