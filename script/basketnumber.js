
// Creates a basket object and loads the basket from local storage in a second object.
let currentBasket;
let basketLoad = localStorage.getItem("basket");

// This function is called on page load.
function init()
{
    // If there is no basket in local storage, create a new empty one.
    if (basketLoad === null)
    {
        currentBasket = [];
    }
    else
    {
        // Try to parse from the local storage, if it fails create an empty basket.
        try { currentBasket = JSON.parse(basketLoad); }
        catch (error) {
            currentBasket = [];
        }
    }
    UpdateBasketNumberText();
}

// Function that grabs the text showing the amount of items in the basket on the top right corner and updates the value
// based on the length of the basket array.
function UpdateBasketNumberText() {
    const basketNumber = document.querySelector(".basketNumber");
    try {
        basketLoad = localStorage.getItem("basket");
        currentBasket = JSON.parse(basketLoad); }
    catch (error) {
        currentBasket = [];
    }
    if (currentBasket === null) {
        basketNumber.textContent = "Basket: 0 items";
        console.log("No Basket");
        return;
    }
    basketNumber.textContent = "Basket: " + currentBasket.length + " items";
    console.log("Updated Basket Number");
}

document.addEventListener("DOMContentLoaded", init);
