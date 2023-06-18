var isClicked = false;

function toggleChagerImage5() {
    var SmokerImage = document.getElementById("Smoker");
    var SmokerAttackImage = document.getElementById("SmokerAttack");
    if (isClicked) {
        SmokerImage.style.opacity = 1;
        SmokerAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        SmokerImage.style.opacity = 0;
        SmokerAttackImage.style.opacity = 1;
        isClicked = true;
    }
}