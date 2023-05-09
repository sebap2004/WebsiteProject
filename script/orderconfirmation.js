let OrderCheckoutBasket;
const orderbasketload = localStorage.getItem("basket");
if (orderbasketload === null)
{
    console.log("Created new empty basket");
    OrderCheckoutBasket = [];
}
else
{
    console.log("Basket detected");
    OrderCheckoutBasket = JSON.parse(orderbasketload);
    console.log(OrderCheckoutBasket);
}
function displayContent() {
    let productGrid = document.querySelector(".basketsummary");
    const subtotal = document.querySelector(".subtotal");
    const total = document.querySelector(".total");
    let subtotalvalue = 0;

    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }
    let Summarytitle = document.createElement("h3");
    Summarytitle.textContent = "You purchased:";
    Summarytitle.style = 'margin-top: 0';
    productGrid.appendChild(Summarytitle);


    for (let i = 0; i < OrderCheckoutBasket.length; i++) {
        let product = OrderCheckoutBasket[i];
        console.log(product.price);
        subtotalvalue += product.price;
        let productElement = createBasketItemSummaryElement(product);
        productGrid.appendChild(productElement);
    }

    subtotal.textContent = "$"+subtotalvalue.toFixed(2);
    let totalValue = (subtotalvalue + 5).toFixed(2);
    total.textContent = "$"+totalValue;
    let basketAmount = document.querySelector("#itemamount");
    if (OrderCheckoutBasket === []) {
        basketAmount.textContent = "Basket Summary (0 Items)";
        return;
    }
    basketAmount.textContent = "Your " + OrderCheckoutBasket.length + " items will be arriving shortly.";
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

    return itemSummaryElement;
}

window.addEventListener("load", displayContent())