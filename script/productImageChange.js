const currentImage = document.querySelector("#current-image");
const thumbnails = document.querySelectorAll(".thumbnail");

function changeImage(event){
    currentImage.src =event.target.src; // Changes the current image source to the clicked image.
    currentImage.alt = event.target.alt;

    // Checks each thumbnail if it has the same source as the current image, and gives it the selected class.
    thumbnails.forEach(function(thumbnail){
        if(thumbnail.src === currentImage.src){
            thumbnail.classList.add("thumbnailselected");
        }
        else{
            if (thumbnail.classList.contains("thumbnailselected"))
            {
                thumbnail.classList.remove("thumbnailselected");
            }
        }
    });
}



thumbnails.forEach((thumbnail)=>{
    thumbnail.addEventListener("click", changeImage)
})