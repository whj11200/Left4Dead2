var isClicked = false;
        
function toggleImage() {
    var jokeyImage = document.getElementById("JOKEY");
    var jokeyAttackImage = document.getElementById("JOKEYAttack");
   
    
    if (isClicked) {
        jokeyImage.style.opacity = 1;
        jokeyAttackImage.style.opacity = 0;
        isClicked = false;
    } else {
        jokeyImage.style.opacity = 0;
        jokeyAttackImage.style.opacity = 1;
        isClicked = true;
    }
}