var mobileNav = document.getElementById("mobile-nav");
var bars = document.getElementById("button-bars");
var body = document.getElementsByTagName("body")[0];
var rememberY = 0;
mobileNav.onmousemove = function(event){
    mobileNav.style.backgroundPosition = event.clientX/30 + "px " + event.clientY/30 + "px";
}

mobileNav.onclick = function(){
    mobileNav.style.display = "none";
    body.style.height = "auto";
    body.style.overflow = "scroll";
    window.scrollTo(0,rememberY - 5);
}


bars.onclick = function(event){
    rememberY = event.pageY;
    mobileNav.style.display = "flex";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    window.scrollTo(0,0);
}