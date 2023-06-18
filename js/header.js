var Myheader = document.getElementById("header");
        
//mouse event
console.log(document.getElementById("header"));
document.getElementById("header").onmouseover = function(){
    console.log(this);
    console.log("Myheader");
    document.getElementById("header").style.backgroundColor ="black";
}

document.getElementById("header").onmouseout = function(){
    console.log("mouse out");
    document.getElementById("header").style.backgroundColor =" rgba(116, 23, 23, 0.808)";
}
//스크롤 이벤트
window.addEventListener("scroll", function(){
    console.log(window.scrollY);
    if(window.scrollY >200){
        console.log("220 이상");
        //Myheader.style.height =0 + "px";   
        //Myheader.style.top = -100 +"px";
        Myheader.classList.add("down");
        Myheader.classList.remove("up");
            
        
    }
    else {
        console.log("200 이하")
        header.classList.add('header');
        //Myheader.style.height =100 +"px"; 
        //Myheader.style.top = 0 +"px";
        Myheader.classList.remove("down");
        Myheader.classList.add("up");
        
    
    }
    

});