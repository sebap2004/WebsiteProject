
// Grabs the list of thumbnails on the page
let thumbnailsList = document.querySelectorAll(".thumbnail");

// Grabs the dropdown menu
let colorSelector = document.querySelector("#colorSelect");

// Creates a function that changes all the images based on the value of the dropdown menu that is clicked.
colorSelector.onchange = function ()
{
    let currentImage = document.querySelector("#current-image");
    let color = this.value;
    if (color==="white")
    {
        for (let i = 0; i < thumbnailsList.length; i++) {
            let image = thumbnailsList[i];
            console.log(image);
            image.src = "media/products/xboxcontroller/white"+(i+1)+".jpg";
            console.log(image.src);
        }
        currentImage.src = thumbnailsList[0].src;
    }
    else
    {
        for (let i = 0; i < thumbnailsList.length; i++) {
            let image = thumbnailsList[i];
            console.log(image);
            image.src = "media/products/xboxcontroller/black"+(i+1)+".jpg";
        }
        currentImage.src = thumbnailsList[0].src;
    }
    console.log("Changed to " +color);
}
