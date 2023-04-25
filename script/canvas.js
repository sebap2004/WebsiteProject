
function load()
{
    const canvas = document.querySelector("#animationCanvas");
    const renderContext = canvas.getContext('2d');
    renderContext.fillStyle='rgb(236, 179, 250)';
    renderContext.fillRect(50,50,100,100);
    console.log("Loaded epic style");
}

document.addEventListener("DOMContentLoaded",load)