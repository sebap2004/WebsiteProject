
function UpdateBasketNumberText() {
    const basketload = localStorage.getItem("basket");
    const basket = JSON.parse(basketload);
    const basketNumber = document.querySelector(".basketNumber");
    if (basket === null) {
        basketNumber.textContent = "Basket: 0 items";
        console.log("No Basket");
        return;
    }

    basketNumber.textContent = "Basket: " + basket.length + " items";
    console.log("Updated Basket Number");
}

document.addEventListener("DOMContentLoaded", UpdateBasketNumberText);
