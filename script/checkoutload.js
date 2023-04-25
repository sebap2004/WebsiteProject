let Basket;

    const basketload = localStorage.getItem("basket");
if (basketload === null)
{
    console.log("Created new empty basket");
    Basket = [];
}
else
{
    console.log("Basket detected");
    Basket = JSON.parse(basketload);
    console.log(Basket);
}



function displayContent(tag) {
    let productGrid = document.querySelector(".basketsummary");
    const subtotal = document.querySelector(".subtotal");
    const total = document.querySelector(".total");
    let subtotalvalue = 0;

    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }

    for (let i = 0; i < Basket.length; i++) {
        let product = Basket[i];
        console.log(product.price);
        subtotalvalue += product.price;
        let productElement = createBasketItemSummaryElement(product);
        productGrid.appendChild(productElement);
    }

    subtotal.textContent = "$"+subtotalvalue.toFixed(2);
    let totalValue = (subtotalvalue + 5).toFixed(2);
    total.textContent = "$"+totalValue;
    console.log(totalValue);
    console.log(subtotalvalue);
    let basketAmount = document.querySelector(".summaryamount");
    if (Basket === []) {
        basketAmount.textContent = "Basket Summary (0 Items)";
        return;
    }
    basketAmount.textContent = "Basket Summary (" + Basket.length + " Items)";
}


function createBasketItemSummaryElement(product) {
    const itemSummaryElement = document.createElement("div");
    itemSummaryElement.classList.add("basketitemsummary");

    const imageElement = document.createElement("embed");
    imageElement.classList.add("basketimagesummary");
    imageElement.setAttribute("src", product.image);
    itemSummaryElement.appendChild(imageElement);

    const titleElement = document.createElement("div");
    titleElement.classList.add("baskettitlesummary");
    itemSummaryElement.appendChild(titleElement);

    const nameElement = document.createElement("h2");
    nameElement.textContent = product.name;
    titleElement.appendChild(nameElement);

    const priceQtyElement = document.createElement("div");
    priceQtyElement.classList.add("basketpricesummary");
    itemSummaryElement.appendChild(priceQtyElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = "$" + product.price.toFixed(2);
    priceQtyElement.appendChild(priceElement);

    const qtyElement = document.createElement("p");
    qtyElement.textContent = "QTY: 1";
    priceQtyElement.appendChild(qtyElement);

    return itemSummaryElement;
}

window.addEventListener("load", displayContent("all"))
