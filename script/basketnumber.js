let currentBasket;
let basketLoad = localStorage.getItem("basket");
function init()
{
    if (basketLoad === null)
    {
        currentBasket = [];
    }
    else
    {
        try { currentBasket = JSON.parse(basketLoad); }
        catch (error) {
            currentBasket = [];
        }
    }
    UpdateBasketNumberText();
}


function UpdateBasketNumberText() {
    const basketNumber = document.querySelector(".basketNumber");
    try {
        basketLoad = localStorage.getItem("basket");
        currentBasket = JSON.parse(basketLoad); }
    catch (error) {
        console.error("STUPID FUCKING BASKET BROKE, REMAKING...")
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
