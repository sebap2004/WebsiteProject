const gamewindow = document.getElementsByClassName("gamewindow")[0];
let lightmode = localStorage.getItem("lightMode");
const pagetheme = document.body;

function openFullscreen()
{
    if (gamewindow.requestFullscreen) {
        gamewindow.requestFullscreen();
    }
}

var elem = document.activeElement;
var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.id === 'game'){
        document.body.style.setProperty("overflow", "hidden")

    }
    else{
        document.body.style.setProperty("overflow", "auto")

    }
}, 100);

function loadLightMode()
{
    lightmode = localStorage.getItem("lightMode");
    let icon;
    let isOn = 0;
    const element = document.body;
    if (lightmode === "1") {
        isOn=1;
        console.log("Loaded light mode: Light mode is on");
        icon = "../media/moon.png";
        element.classList.add("lightMode");
    }
    else {
        isOn = 0;
        console.log("Loaded light mode: Light mode is off");
        icon = "../media/sun.png";
        element.classList.remove("lightMode");
    }
    document.getElementById("darkmodeicon").src=icon;
}


function toggleLightMode()
{
    let icon;
    let isOn = 0;
    const element = document.body;
    element.classList.toggle("lightMode");
    if (element.classList.contains("lightMode")) {
        isOn=1;
        console.log("Toggled light mode: Light mode is on");
        icon = "../media/moon.png";
    }
    else {
        isOn = 0;
        console.log("Toggled light mode: Light mode is off");
        icon = "../media/sun.png";
    }
    localStorage.setItem("lightMode",isOn.toString());
    document.getElementById("darkmodeicon").src=icon;
}

const navbar = document.querySelector('.nav');
const buttons = navbar.querySelectorAll('.navitem');
document.addEventListener("DOMContentLoaded", loadLightMode);





