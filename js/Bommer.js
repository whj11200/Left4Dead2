var isClicked = false;

function toggleChagerImage2() {
    var BommerImage = document.getElementById("Bommer");
    var BommerAttackImage = document.getElementById("Bommerattack");
   
    if (isClicked) {
        BommerImage.style.opacity = 1;
        BommerAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        BommerImage.style.opacity = 0;
        BommerAttackImage.style.opacity = 1;
        isClicked = true;
    }
}