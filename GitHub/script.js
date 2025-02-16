// Predefined product list
const products = [
    { name: "iPhone 13", price: 60000, image: "iphone13.jpg" },
    { name: "Samsung Galaxy S21", price: 50000, image: "s21.jpg" },
    { name: "OnePlus 9", price: 45000, image: "oneplus9.jpg" }
];

// Load products on page load
document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});

// Function to display products
function loadProducts() {
    let productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";

    products.forEach(product => {
        let productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.setAttribute("data-name", product.name.toLowerCase());

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

// Function to search products
function searchProducts() {
    let input = document.getElementById("search-bar").value.trim().toLowerCase();

    // Redirect to Order Tracking if "HT@adminot" is searched
    if (input === "ht@adminot") {
        window.location.href = "OrderT/HT@admin.html";
        return;
    }

    let productsList = document.querySelectorAll(".product");

    productsList.forEach(product => {
        let productName = product.getAttribute("data-name");
        if (productName.includes(input)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// Function to add product to cart
function addToCart(name, price) {
    let currentUser = localStorage.getItem("currentUser") || "defaultUser";
    let cartKey = currentUser + "_cart";

    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    cart.push({ name, price });

    localStorage.setItem(cartKey, JSON.stringify(cart));
    alert(name + " added to cart!");

    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    let currentUser = localStorage.getItem("currentUser") || "defaultUser";
    let cartKey = currentUser + "_cart";
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];

    let cartButton = document.getElementById("cart-button");
    if (cartButton) {
        cartButton.innerText = `Go to Cart (${cart.length})`;
    }
}
