let CheckoutBasket;
const basketload = localStorage.getItem("basket");
if (basketload === null)
{
    console.log("Created new empty basket");
    CheckoutBasket = [];
}
else
{
    console.log("Basket detected");
    CheckoutBasket = JSON.parse(basketload);
    console.log(CheckoutBasket);
}
const form = document.querySelector("form");
const formSubmitButton = document.querySelector(".paynow");

// Form validation code
formSubmitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const messageText = document.querySelector(".checkoutMessage");

    // Regex for each required field
    const phoneNumberRegex = /^[0-9]{11}$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const creditcardRegex = /^[0-9]{16}$/
    const securitynumberRegex = /^[0-9]{3}$/;
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (basketload === null || basketload.length < 1)
    {
        messageText.innerText = "Basket is empty.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const fullNameInput = document.getElementById('fullname');
    if (!fullNameInput || fullNameInput.value.length < 2 || fullNameInput.value.length > 50)
    {
        console.log("Name must be between 2-50 characters.");
        messageText.innerText = "Name must be between 2-50 characters.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const phoneNumberInput = document.getElementById('phoneNumber');
    if (!phoneNumberInput || !phoneNumberRegex.test(phoneNumberInput.value)) {
        console.log("Please enter a valid phone number.");
        messageText.innerText = "Please enter a valid phone number.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const emailInput = document.getElementById('email');
    if (!emailInput || !emailRegex.test(emailInput.value)) {
        console.log("Please enter a valid email address.");
        messageText.innerText = "Please enter a valid email address.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const addressLine1Input = document.getElementById('addressline1');
    if (!addressLine1Input || addressLine1Input.value.length < 2)
    {
        console.log("Address Line 1 must be at least 2 characters long.");
        messageText.innerText = "Address Line 1 must be at least 2 characters long.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const addressLine2Input = document.getElementById('addressline1');
    if (addressLine2Input && addressLine2Input.value.length < 2)
    {
        console.log("Address Line 2 must be at least 2 characters long.");
        messageText.innerText = "Address Line 2 must be at least 2 characters long.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const countyInput = document.getElementById('county');
    if (!countyInput || countyInput.value.length < 2)
    {
        console.log("County must be at least 2 characters long.");
        messageText.innerText = "County must be at least 2 characters long.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const cardNameInput = document.getElementById('cardname');
    if (!cardNameInput || cardNameInput.value.length < 2 || cardNameInput.value.length > 50)
    {
        console.log("Card Name must be between 2-50 characters.");
        messageText.innerText = "Card Name must be between 2-50 characters.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }

    const cardNumberInput = document.getElementById('cardnumber');
    if (!cardNumberInput || !creditcardRegex.test(cardNumberInput.value)) {
        console.log("Please enter a valid card number.");
        messageText.innerText = "Please enter a valid card number.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }
    const securityNumberInput = document.getElementById('securitynumber');
    if (!securityNumberInput || !securitynumberRegex.test(securityNumberInput.value)) {
        console.log("Please enter a valid security number.");
        messageText.innerText = "Please enter a valid security number.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }
    const expiryDateInput = document.getElementById('expirydate');
    if (!expiryDateInput || !expiryDateRegex.test(expiryDateInput.value)) {
        console.log("Please enter a valid expiry date.");
        messageText.innerText = "Please enter a valid expiry date.";
        messageText.classList.remove("checkoutHidden");
        messageText.classList.add("checkoutError");
        messageText.classList.remove("checkoutSuccess");
        return;
    }
    window.location.href = "orderconfirmation.html";
});
function displayContent() {
    let productGrid = document.querySelector(".basketsummary");
    const subtotal = document.querySelector(".subtotal");
    const total = document.querySelector(".total");
    let subtotalvalue = 0;

    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }


    for (let i = 0; i < CheckoutBasket.length; i++) {
        let product = CheckoutBasket[i];
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
    let basketAmount = document.querySelector("#itemamount");
    if (CheckoutBasket === []) {
        basketAmount.textContent = "Basket Summary (0 Items)";
        return;
    }
    basketAmount.textContent = "Basket Summary (" + CheckoutBasket.length + " Items)";
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