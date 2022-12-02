const gamewindow = document.getElementsByClassName("gamewindow")[0];
const theme = localStorage.getItem("theme");
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
    document.getElementById("darkmodeicon").src=icon;
}

function theme1()
{
    pagetheme.classList.add("theme1");
    pagetheme.classList.remove("theme2");
    pagetheme.classList.remove("theme3");
    localStorage.setItem("theme","1");
}

function theme2()
{
    pagetheme.classList.remove("theme1");
    pagetheme.classList.add("theme2");
    pagetheme.classList.remove("theme3");
    localStorage.setItem("theme","2");
}
function theme3()
{
    pagetheme.classList.remove("theme1");
    pagetheme.classList.remove("theme2");
    pagetheme.classList.add("theme3");
    localStorage.setItem("theme","3");
}
function reset()
{
    pagetheme.classList.remove("theme1");
    pagetheme.classList.remove("theme2");
    pagetheme.classList.remove("theme3");
    localStorage.setItem("theme","0");
}
