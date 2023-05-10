
// Creates a basket variable and loads the basket object from local storage.
const getBasket = localStorage.getItem("basket");
let basket;

// Tries to load the basket object, if it fails create an empty basket.
try { basket = JSON.parse(getBasket); }
catch (error) {
    basket = [];
}


// Similar to the productload.js displayContent function, but with different HTML elements.
function displayContent() {
    let productGrid = document.querySelector(".baskets");
    const subtotal = document.querySelector(".subtotal");
    const total = document.querySelector(".total");
    const amountText = document.querySelector(".basketamount");
    let subtotalvalue = 0; // Initialize subtotalvalue to zero

    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }

    if (basket === null || basket.length === 0)
    {
        amountText.textContent = "0 items";
        let noitems = document.createElement("h3");
        noitems.textContent = "No items in basket";
        return;
    }

    for (let i = 0; i < basket.length; i++) {
        let product = basket[i];
        console.log(product.price);
        subtotalvalue += product.price;
        let productElement = createBasketItemElement(product);
        productGrid.appendChild(productElement);
    }

    subtotal.textContent = "$"+subtotalvalue.toFixed(2);
    let totalValue = (subtotalvalue + 5).toFixed(2);
    total.textContent = "$"+totalValue;
    console.log(totalValue);
    console.log(subtotalvalue);

    if (basket !== null)
    {
        if (basket.length === 0) {
            amountText.textContent = "0 items";
            console.log("basket is null");
            return;
        }
        amountText.textContent= basket.length + " Items";
        console.log("basket is not null");
    }
}

// Creates a basket item that shows the product that is in the basket at the index pIndex.
function createBasketItemElement(product, pIndex) {
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
        // Local function that removes the product from the array.
        event.preventDefault();
        if (basket.length <= 1)
        {
            basket = null;
            console.log(basket);
            localStorage.removeItem("basket");
            UpdateBasketNumberText();
            displayContent()
            return;
        }
        basket.splice(pIndex, 1);
        localStorage.setItem("basket", JSON.stringify(basket));
        displayContent();
        UpdateBasketNumberText();
        console.log(basket);
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

// Clears all items from the basket and removes the localstorage object.
function clearbasket()
{
    basket = null;
    localStorage.removeItem("basket");
    console.log("basket cleared");
    UpdateBasketNumberText();
    displayContent();
}

window.addEventListener("load", displayContent("all"))