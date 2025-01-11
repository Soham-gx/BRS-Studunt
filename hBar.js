document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    document.getElementById('username-display').innerText = `Welcome, ${username}`;
    document.getElementById('account-username').innerText = username;

    displayProducts();
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}

function displayProducts() {
    const products = [
        { id: 1, name: 'Product 1', price: 100, image: 'product1.jpg' },
        { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg' },
        // Add more products as needed
    ];
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function searchProducts() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function addToCart(productId, productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <p>${productName} - $${productPrice}</p>
    `;
    cartItems.appendChild(cartItem);
}

function togglePayButton() {
    const codOption = document.getElementById('cod-option').checked;
    document.getElementById('pay-button').disabled = !codOption;
}

function proceedToPay() {
    if (document.getElementById('cod-option').checked) {
        window.location.href = 'idd.html';
    }
}