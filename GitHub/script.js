// Load Products from LocalStorage
document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});

// Predefined Product List
const predefinedProducts = {
    "HT001": { name: "iPhone 13", price: 60000, image: "iphone13.jpg" },
    "HT002": { name: "Samsung Galaxy S21", price: 50000, image: "s21.jpg" },
    "HT003": { name: "OnePlus 9", price: 45000, image: "oneplus9.jpg" }
};

// Function to Add Product by Code
function addProductByCode() {
    let productCode = document.getElementById("product-code").value.trim();
    if (!productCode) {
        alert("Please enter a product code.");
        return;
    }

    if (!predefinedProducts[productCode]) {
        alert("Invalid Product Code!");
        return;
    }

    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(predefinedProducts[productCode]);
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added Successfully!");
    loadProducts();
}

// Function to Load Products on Home Page
function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productContainer.appendChild(productDiv);
    });

    updateCartCount();
}

// Function to Add Product to Cart
function addToCart(name, price) {
    let currentUser = localStorage.getItem("currentUser") || "defaultUser";
    let cartKey = currentUser + "_cart";

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push({ name, price });

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert(name + " added to cart!");

    updateCartCount();
}

// Function to Update Cart Count
function updateCartCount() {
    let currentUser = localStorage.getItem("currentUser") || "defaultUser";
    let cartKey = currentUser + "_cart";
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    let cartButton = document.getElementById("cart-button");
    if (cartButton) {
        cartButton.innerText = `Go to Cart (${cart.length})`;
    }
}
