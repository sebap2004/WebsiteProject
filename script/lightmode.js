
// Variable is loaded from storage.
let lightmode = localStorage.getItem("lightMode");

// Function is called on page load.
function loadLightMode()
{
    lightmode = localStorage.getItem("lightMode");
    let icon;
    const element = document.body;
    if (lightmode === null) // Checks if the lightmode cookie is null, removes light mode by default
    {
        console.log("light mode token is null, light mode is off")
        icon = "../media/sun.png";
        element.classList.remove("lightMode");
        return;
    }
    if (lightmode === "1") { // If light mode is 1, then add the lightmode class.
        console.log("Loaded light mode: Light mode is on");
        icon = "../media/moon.png";
        element.classList.add("lightMode");
    }
    document.getElementById("darkmodeicon").src=icon;
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


document.addEventListener("load", loadLightMode);





