// Load Products Function
function loadProducts() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productList = document.getElementById("product-list");
    productList.innerHTML = "";

    products.forEach((product, index) => {
        productList.innerHTML += `
            <p>
                ${product.name} - ₹${product.price} 
                <button onclick="editProduct(${index})">✏️ Edit</button>
                <button onclick="deleteProduct(${index})">🗑️ Delete</button>
            </p>
        `;
    });
}

// Add Product by Code
function addProductByCode() {
    let productCode = document.getElementById("product-code").value.trim();
    if (!productCode) {
        alert("Please enter a product code.");
        return;
    }

    // Predefined Product List with Codes
    let predefinedProducts = {
        "HT001": { name: "iPhone 13", price: 60000, image: "iphone13.jpg" },
        "HT002": { name: "Samsung Galaxy S21", price: 50000, image: "s21.jpg" },
        "HT003": { name: "OnePlus 9", price: 45000, image: "oneplus9.jpg" }
    };

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

// Edit Product
function editProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let newName = prompt("Enter new product name:", products[index].name);
    let newPrice = prompt("Enter new price:", products[index].price);
    let newImage = prompt("Enter new image URL:", products[index].image);

    if (newName && newPrice && newImage) {
        products[index] = { name: newName, price: newPrice, image: newImage };
        localStorage.setItem("products", JSON.stringify(products));
        loadProducts();
    }
}

// Delete Product
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadProducts();
}

// Load products on page load
document.addEventListener("DOMContentLoaded", loadProducts);
