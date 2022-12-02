var gamewindow = document.getElementsByClassName("gamewindow")[0];
function openFullscreen()
{
    if (gamewindow.requestFullscreen) {
        gamewindow.requestFullscreen();
    }
}

var elem = document.activeElement;
var monitor = setInterval(function(){
    var elem = document.activeElement;
    if(elem && elem.id == 'game'){
        document.body.style.setProperty("overflow", "hidden")

    }
    else{
        document.body.style.setProperty("overflow", "auto")

    }
}, 100);

function toggleLightMode()
{
    const element = document.body;
    element.classList.toggle("lightMode");
}
