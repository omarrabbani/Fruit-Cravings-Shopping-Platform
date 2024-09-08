const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "DOMINICAN BANANAS",
        price: 0.59,
        img: "./Banana.avif",
        description: "Currently out of stock.",
        
    },
    {
        id: 2,
        title: "CALIFORNIAN APPLES",
        price: 6.97,
        img: "./Apple.avif",
        description: "Imported fresh from source country at all times.",
    },
    {
        id: 3,
        title: "ZIMBABWEAN ORANGES",
        price: 3.99,
        img: "./Oranges.png",
        description: "Imported fresh from source country at all times.",
    },
    {
        id: 4,
        title: "MEXICAN MANGOES",
        price: 19.99,
        img: "./Mango.webp",
        description: "Imported fresh from source country at all times.",
    },
    {
        id: 5,
        title: "TURKISH WATERMELONS",
        price: 4.99,
        img: "./Watermelon.avif",
        description: "Currently out of stock.",
    },
];

let chosenProduct = products[0]; // Default product is the first one

// Select elements for current product display
const currProductImg = document.querySelector(".productImg");
const currProductTitle = document.querySelector(".productTitle");
const currProductPrice = document.querySelector(".productPrice");
const currProductDesc = document.querySelector(".productDescription");
const currProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// Function to update the product display
function updateProductDisplay(product) {
    currProductTitle.textContent = product.title;
    currProductPrice.textContent = "$" + product.price;
    currProductDesc.textContent = product.description;
    currProductImg.src = product.img;
}

// Function to show the payment popup
function showPayment() {
    payment.style.display = "flex";
}

// Close the payment popup when 'X' is clicked
close.addEventListener("click", function(){
    payment.style.display = "none";
});

// Menu item click event: update the slider and product display
menuItems.forEach(function(item, index){
    item.addEventListener("click", function(){
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        chosenProduct = products[index];
        updateProductDisplay(chosenProduct);

        // Re-attach event listener to the Buy Now button for the new product
        productButton.style.cursor = "pointer";
        productButton.removeEventListener("click", showPayment); 
        productButton.addEventListener("click", showPayment);    
    });
});

// Size selection event listener
currProductSizes.forEach(function(size){
    size.addEventListener("click", function(){
        currProductSizes.forEach(function(size){
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

// Initialize Buy Now button event for the first product
productButton.addEventListener("click", showPayment);