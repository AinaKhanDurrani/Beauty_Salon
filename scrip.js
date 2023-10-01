const clickbutton= document.getElementById("clickbutton")
const audio = new Audio("./click_sound.mp3");

function playsound(){
    audio.play();
}

clickbutton.addEventListener("click",playsound)