var isClicked = false;

function toggleChagerImage4() {
    var TankImage = document.getElementById("Tank");
    var TankAttackImage = document.getElementById("TankAttack");
    var TankAttack2Image = document.getElementById("TankAttack2");
    
    if (isClicked) {
        if (TankAttackImage.style.opacity === "1") {
            TankAttackImage.style.opacity = "0";
            TankImage.style.opacity = "1";
        } else if (TankAttack2Image.style.opacity === "1") {
            TankAttack2Image.style.opacity = "0";
            TankAttackImage.style.opacity = "1";
        } else {
            TankImage.style.opacity = "0";
            TankAttack2Image.style.opacity = "1";
        }
    } else {
        TankImage.style.opacity = "0";
        TankAttackImage.style.opacity = "1";
        isClicked = true;
    }
}