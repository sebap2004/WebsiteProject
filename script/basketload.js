const basketload = localStorage.getItem("basket");
const basket = JSON.parse(basketload);

function displayContent(tag) {
    let productGrid = document.querySelector(".bodyitemcolumn");

    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }

    for (let i = 0; i < basket.length; i++) {
        let product = basket[i];
        let productElement = createBasketItemElement(product);
        productGrid.appendChild(productElement);
    }
}

function createBasketItemElement(product) {
    let basketItemElement = document.createElement("div");
    basketItemElement.classList.add("basketitem");

    let imageContainer = document.createElement("div");
    imageContainer.classList.add("basketelement");
    basketItemElement.appendChild(imageContainer);

    let imageElement = document.createElement("embed");
    imageElement.setAttribute("src", product.image);
    imageElement.classList.add("basketimage");
    imageContainer.appendChild(imageElement);

    let titleContainer = document.createElement("div");
    titleContainer.classList.add("basketelement");
    basketItemElement.appendChild(titleContainer);

    let titleElement = document.createElement("h2");
    titleElement.textContent = product.name;
    titleContainer.appendChild(titleElement);

    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;
    titleContainer.appendChild(descriptionElement);

    let removeLink = document.createElement("a");
    removeLink.classList.add("remove");
    removeLink.setAttribute("href", "#");
    removeLink.textContent = "Remove from basket";
    removeLink.addEventListener('click', function(event) {
        event.preventDefault();
        const basketItem = this.parentElement.parentElement;
        basketItem.remove();
    });
    titleContainer.appendChild(removeLink);

    let priceContainer = document.createElement("div");
    priceContainer.classList.add("basketelement");
    priceContainer.style.width = "20%";
    priceContainer.style.textAlign = "right";
    basketItemElement.appendChild(priceContainer);

    let priceElement = document.createElement("p");
    priceElement.textContent = "$" + product.price;
    priceContainer.appendChild(priceElement);

    return basketItemElement;
}





window.addEventListener("load", displayContent("all"))