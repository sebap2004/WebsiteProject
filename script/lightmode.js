
// Variable is loaded from storage.
let lightmode = localStorage.getItem("lightMode");

// Function is called on page load.
function loadLightMode() {
    lightmode = localStorage.getItem("lightMode");
    const element = document.body;
    let icon;
    if (lightmode === null || lightmode === "0") { // If lightmode cookie is null or 0, remove light mode by default
        element.classList.remove("lightMode");
        icon = "../media/sun.png";
    } else if (lightmode === "1") { // If light mode is 1, then add the lightmode class
        element.classList.add("lightMode");
        icon = "../media/moon.png";
    }
    document.getElementById("darkmodeicon").src = icon;
}



// Toggles light mode. called from the button on the top left of the page.
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

document.addEventListener("DOMContentLoaded", loadLightMode);
window.addEventListener("load", loadLightMode);






