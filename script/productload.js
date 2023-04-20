    var products = [
        {
            name: "Ryzen 7 2700",
            price: 277.43,
            tags: ["dlc"],
            url: "ExampleProductPage.html",
            image: "media/products/ryzen72700.jpg",
            description: "The Ryzen 7 2700X has the highest multiprocessing performance you can get on a mainstream desktop PC"
        },
        {
            name: "Ryzen 5 3600XT",
            price: 341.54,
            tags: ["computer"],
            url: "ExampleProductPage.html",
            image: "media/products/Ryzen53600XT.jpg",
            description: "Award-winning performance and optimized technology. For gamers. For creators. For everyone"
        },
        {
            name: "Ryzen 3 1200",
            price: 99.99,
            tags: ["prebuilt"],
            url: "ExampleProductPage.html",
            image: "media/products/ryzen31200.jpg",
            description: "10MB Cache ; AMD VR Ready Processors, AVX2, FMA3, XFR Extended Frequency Range"
        },
        {
            name: "Ryzen 9 7900X",
            price: 999.99,
            tags: ["games"],
            url: "ExampleProductPage.html",
            image: "media/products/Ryzen97900X.jpg",
            description: "Top of the line performance. Also slightly overpriced but it's whatever"
        }
    ]
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
    let productGrid = document.querySelector(".productcontainer");

    while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
    }

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (tag === "all") {
            let productElement = createProductElement(product);
            productGrid.appendChild(productElement);
        }
        else
        {
            if(product.tags.includes(tag))
            {
                let productElement = createProductElement(product);
                productGrid.appendChild(productElement);
            }
        }
    }
}


function createProductElement(product) {
    let productElement = document.createElement("section");
    productElement.classList.add("bodyitemrow", "productsection");

    let imageElement = document.createElement("embed");
    imageElement.setAttribute("src", product.image);
    imageElement.classList.add("productimage");
    productElement.appendChild(imageElement);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("bodyitemcolumn");
    productElement.appendChild(infoContainer)

    let nameElement = document.createElement("a");
    let nameText = document.createElement("h2");
    nameText.classList.add("product");
    nameElement.classList.add("product");
    nameElement.appendChild(nameText);
    nameText.textContent = product.name;
    nameElement.href = product.url;
    infoContainer.appendChild(nameElement);

    let descriptionElement = document.createElement("p");
    descriptionElement.textContent = product.description;
    infoContainer.appendChild(descriptionElement);

    let priceElement = document.createElement("p");
    priceElement.textContent = "$"+product.price;
    infoContainer.appendChild(priceElement);

    let button = document.createElement("button");
    button.textContent = "Add to cart";
    button.onclick = function(){
        addTobasket(product)
    }
    infoContainer.appendChild(button);

    return productElement;
}

function addTobasket(product)
{
    Basket.push(product);
    console.log(Basket);
    const basketString = JSON.stringify(Basket);
    localStorage.setItem("basket", basketString);
    console.log(basketString);
    UpdateBasketNumberText();
}


window.addEventListener("load", displayContent("all"))
