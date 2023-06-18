var isClicked = false;

function toggleChagerImage1() {
    var spitterImage = document.getElementById("spitter");
    var spitterAttackImage = document.getElementById("spitterAttack");
   
    if (isClicked) {
        spitterImage.style.opacity = 1;
        spitterAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        spitterImage.style.opacity = 0;
        spitterAttackImage.style.opacity = 1;
        isClicked = true;
    }
}