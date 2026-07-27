// Smooth Navbar Effect

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background = "rgba(0,0,0,0.85)";
header.style.transition = "0.4s";

}else{

header.style.background = "rgba(0,0,0,0.5)";

}

});

// Button Animation

const button = document.querySelector(".btn");

button.addEventListener("mouseover",()=>{

button.style.transform="scale(1.08)";
button.style.transition="0.3s";

});

button.addEventListener("mouseout",()=>{

button.style.transform="scale(1)";

});

// Welcome Message

window.onload=function(){

console.log("Welcome to URVIKRUTHI");

}
