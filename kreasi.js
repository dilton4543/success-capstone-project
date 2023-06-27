const hamburger = document.getElementById("hamburger");
const navlink = document.getElementById("navmenu");

hamburger.addEventListener("click", function(){
    if(navlink.style.display === "none"){
        navlink.style.display = "block";
    }else{
        navlink.style.display = "none";
    }
});