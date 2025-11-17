let seconds = 0;
let clicks = 1;
let timer = null;
const timers = document.querySelector(".timer");
const header = document.querySelector(".header");
function displayTime(){
    document.getElementById("time").innerHTML =
        `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`;
}

function startTime(){
    if (timer === null){
        timer = setInterval(() => {
            seconds++;
            displayTime();
        }, 1000);
    }
}

function stopTime(){
    clearInterval(timer);
    timer = null;
}

function resetTime(){
    stopTime();
    seconds = 0;
    displayTime();
}

displayTime();

document.getElementById("start").addEventListener("click", startTime);
document.getElementById("stop").addEventListener("click", stopTime);
document.getElementById("reset").addEventListener("click", resetTime);



const backgrounds = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.gif",
    "6.gif",
    "7.gif",
    "8.gif",
    "9gif.gif",
    "10.gif",
];

let index = 0;
let active = 1;

const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

document.getElementById("theme").addEventListener("click", () => {
    index = (index + 1) % backgrounds.length;
    const nextImg = backgrounds[index];
    
    if (index === 8) {
        header.style.color="white";
        timers.style.color = "white";
    } else {
        header.style.color="black";
        timers.style.color = "black";
    }
    if (active === 1) {
        bg2.style.backgroundImage = `url("${nextImg}")`;
        bg2.style.opacity = 1;
        bg1.style.opacity = 0;
        active = 2;
    } else {
        bg1.style.backgroundImage = `url("${nextImg}")`;
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
        active = 1;
    }
});
