const currentImage = document.querySelector("#current-image");
const thumbnails = document.querySelectorAll(".thumbnail");

function changeImage(event){
    currentImage.src =event.target.src;
    currentImage.alt = event.target.alt;

    thumbnails.forEach(function(thumbnail){
        if(thumbnail.src === currentImage.src){
            thumbnail.classList.add("thumbnailselected");
        }else{
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