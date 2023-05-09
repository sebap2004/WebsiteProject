let thumbnailsList = document.querySelectorAll(".thumbnail");
console.log(thumbnailsList.length);
let colorSelector = document.querySelector("#colorSelect");
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
