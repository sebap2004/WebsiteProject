var products = [
    // COMPUTER PARTS
    {
        name: "Ryzen 7 2700",
        price: 277.43,
        tags: ["computer"],
        url: "DynamicProductPage.html",
        image: "media/products/ryzen72700/1.jpg",
        description: "The Ryzen 7 2700X has the highest multiprocessing performance you can get on a mainstream desktop PC"
    },
    {
        name: "Xbox Wireless Controller",
        price: 49.99,
        tags: ["consoles"],
        url: "InteractiveProductPage.html",
        image: "media/products/xboxcontroller/black1.jpg",
        description: "Award-winning performance and optimized technology. For gamers. For creators. For everyone"
    },
    {
        name: "Ryzen 5 3600XT",
        price: 341.54,
        tags: ["computer"],
        url: "DynamicProductPage.html",
        image: "media/products/Ryzen53600XT.jpg",
        description: "Award-winning performance and optimized technology. For gamers. For creators. For everyone"
    },
    {
        name: "Ryzen 9 7900X",
        price: 999.99,
        tags: ["computer"],
        url: "DynamicProductPage.html",
        image: "media/products/Ryzen97900X.jpg",
        description: "Top of the line performance. Also slightly overpriced but it's whatever"
    },
    {
        name: "AMD Radeon RX 6700 XT",
        price: 699.99,
        tags: ["computer"],
        url: "DynamicProductPage.html",
        image: "https://m.media-amazon.com/images/I/81ye21szIDL._AC_SL1500_.jpg",
        description: "Elevate your gaming experience with AMD Radeon RX 6700 XT graphics card"
    },
    {
        name: "AMD Ryzen 9 5950X",
        price: 1199.99,
        tags: ["computer"],
        url: "DynamicProductPage.html",
        image: "https://m.media-amazon.com/images/I/616VM20+AzL._AC_SL1384_.jpg",
        description: "The world's best desktop processor for gaming, content creation, and productivity"
    },
    {
        name: "AMD A10-9700",
        price: 79.99,
        tags: ["computer"],
        url: "DynamicProductPage.html",
        image: "https://m.media-amazon.com/images/I/514sZGy7NpL._AC_.jpg",
        description: "Get impressive computing and graphics performance without breaking the bank with AMD A10-9700 APU"
    },
    // CONSOLES
    {
        name: "Xbox Series X",
        price: 499,
        tags: ["consoles"],
        url: "https://www.xbox.com/en-us/consoles/xbox-series-x",
        image: "https://m.media-amazon.com/images/I/51D+yYhKReL._AC_SL1500_.jpg",
        description: "Experience the next generation of gaming with the Xbox Series X. With lightning-fast load times, high-quality graphics, and a massive library of games, this console delivers an immersive gaming experience.",
    },
    {
        name: "PlayStation 5",
        price: 499,
        tags: ["consoles"],
        url: "https://www.playstation.com/en-us/ps5/",
        image: "https://m.media-amazon.com/images/I/71PMC4DWWFL._AC_SL1500_.jpg",
        description: "Get ready for a new era of gaming with the PlayStation 5. With lightning-fast load times, stunning graphics, and a library of exclusive games, this console is a must-have for any serious gamer.",
    },
    {
        name: "Nintendo Switch",
        price: 299,
        tags: ["consoles"],
        url: "https://www.nintendo.com/switch/",
        image: "https://m.media-amazon.com/images/I/51K6gw94TRL._AC_SL1200_.jpg",
        description: "Experience the fun of gaming anytime, anywhere with the Nintendo Switch. With its innovative design, you can play your favorite games at home or on the go.",
    },
    // GAMES
    {
        name: "Red Dead Redemption 2",
        price: 59.99,
        tags: ["games"],
        url: "https://www.rockstargames.com/reddeadredemption2/",
        image: "https://m.media-amazon.com/images/I/71J8hLvabYL._AC_SL1500_.jpg",
        description: "Immerse yourself in the epic world of the American frontier with Red Dead Redemption 2. From shootouts with outlaws to hunting for game, this game offers an unforgettable gaming experience.",
    },
    {
        name: "The Last of Us Part II",
        price: 59.99,
        tags: ["games"],
        url: "https://www.thelastofus.playstation.com/",
        image: "https://m.media-amazon.com/images/I/81OFTUvFX4L._AC_SL1500_.jpg",
        description: "Join Ellie on a journey of revenge in The Last of Us Part II. With stunning graphics, intense gameplay, and a gripping storyline, this game is a must-play for any PlayStation gamer.",
    },
    {
        name: "Hades",
        price: 24.99,
        tags: ["games"],
        url: "https://www.supergiantgames.com/games/hades/",
        image: "https://m.media-amazon.com/images/I/81yeI3PjF5L._AC_SL1500_.jpg",
        description: "Embark on a journey through the underworld in Hades. With its fast-paced action and beautifully rendered graphics, this game is a must-play for any fan of the roguelike genre.",
    },
    {
        name: "HP Pavilion Gaming Desktop",
        price: 849.99,
        tags: ["prebuilts"],
        url: "https://www.hp.com/us-en/shop/pdp/hp-pavilion-gaming-desktop-tg01-2170m",
        image: "https://m.media-amazon.com/images/I/71RgeqFfjWL._AC_SL1500_.jpg",
        description: "Get ready to game on the HP Pavilion Gaming Desktop. With an AMD Ryzen 5 processor and NVIDIA GeForce GTX 1650 graphics, you can experience smooth gameplay and stunning visuals.",
    },
    {
        name: "Dell G5 Gaming Desktop",
        price: 999.99,
        tags: ["prebuilts"],
        url: "https://www.dell.com/en-us/shop/desktop-computers/new-dell-g5-gaming-desktop/spd/g-series-5000-desktop/g5dtfxns740s",
        image: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/02/Dell-G5-05.jpg",
        description: "Dominate the game with the Dell G5 Gaming Desktop. Featuring an Intel Core i5 processor and NVIDIA GeForce GTX 1660 graphics, this desktop delivers powerful performance and immersive visuals.",
    },
    {
        name: "ASUS ROG Strix GL10DH Gaming Desktop",
        price: 1499.99,
        tags: ["prebuilts"],
        url: "https://www.asus.com/us/Tower-PCs/ROG-Strix-GL10DH/",
        image: "https://image.polargaming.co.uk/64d81923-926c-47f7-b204-26b6ddc4cb0a.d4d3d2677e39d941d200338ddad32eee.jpeg",
        description: "Get the ultimate gaming experience with the ASUS ROG Strix GL10DH Gaming Desktop. Featuring an AMD Ryzen 7 processor and NVIDIA GeForce RTX 2060 graphics, this desktop delivers high-end performance and stunning visuals.",
    }



]

let ProductBasket;
console.log()
const productBasketLoad = localStorage.getItem("basket");
if (productBasketLoad === null)
{
    console.log("Created new empty basket");
    ProductBasket = [];
}
else
{
    try {
        ProductBasket = JSON.parse(productBasketLoad);
        console.log("Basket detected");
    } catch (error) {
        console.log("Created new empty basket from error");
        ProductBasket = [];
    }
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
    console.log("Loaded with " + tag + " tag");
}


function createProductElement(product) {
    let productElement = document.createElement("section");
    productElement.classList.add("bodyitemrow", "productsection");

    let imageElement = document.createElement("embed");
    imageElement.setAttribute("src", product.image);
    imageElement.setAttribute("href", product.url);
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
    ProductBasket.push(product);
    const basketString = JSON.stringify(ProductBasket);
    localStorage.setItem("basket", basketString);
    UpdateBasketNumberText();
}

window.addEventListener("load", displayContent("all"))

