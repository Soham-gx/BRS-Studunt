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
        { id: 1, name: 'Product 1', price: 100, image: 'product1.jpg', quantity: 10, colors: ['White', 'Black', 'Red'] },
        { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg', quantity: 5, colors: ['White', 'Blue', 'Green'] },
        { id: 3, name: 'Product 3', price: 300, image: 'product3.jpg', quantity: 8, colors: ['White', 'Yellow', 'Pink'] },
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
            <p>Available Quantity: ${product.quantity}</p>
            <label for="quantity-${product.id}">Quantity:</label>
            <select id="quantity-${product.id}">
                ${Array.from({ length: product.quantity }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
            </select>
            <label for="color-${product.id}">Color:</label>
            <select id="color-${product.id}">
                ${product.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
            </select>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId, productName, productPrice) {
    const quantity = document.getElementById(`quantity-${productId}`).value;
    const color = document.getElementById(`color-${productId}`).value;
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <p>${productName} - $${productPrice} x ${quantity} (Color: ${color})
            <button class="remove-btn" onclick="removeFromCart(this, ${productPrice * quantity})">X</button>
        </p>
    `;
    cartItems.appendChild(cartItem);

    updateTotalAmount(productPrice * quantity);
    updatePayButtonState();
}

function removeFromCart(button, amount) {
    const cartItem = button.parentElement.parentElement;
    cartItem.remove();
    updateTotalAmount(-amount);
    updatePayButtonState();
}

function updateTotalAmount(amount) {
    let currentTotal = parseFloat(document.getElementById('total-amount').innerText.replace('$', ''));
    currentTotal += amount;
    document.getElementById('total-amount').innerText = `$${currentTotal.toFixed(2)}`;
}

function updatePayButtonState() {
    const cartItems = document.getElementById('cart-items').children.length;
    document.getElementById('pay-button').disabled = cartItems === 0 || !document.getElementById('cod-option').checked;
}

function togglePayButton() {
    const codOption = document.getElementById('cod-option').checked;
    updatePayButtonState();
}

function proceedToPay() {
    const cartItems = document.getElementById('cart-items').children.length;
    if (cartItems > 0 && document.getElementById('cod-option').checked) {
        window.location.href = 'idd.html';
    } else {
        alert('Please add items to your cart and select Cash on Delivery before proceeding.');
    }
}

function searchProducts() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const productDivs = document.querySelectorAll('#product-list .product');

    productDivs.forEach(productDiv => {
        const productName = productDiv.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
            productDiv.style.display = 'block';
        } else {
            productDiv.style.display = 'none';
        }
    });
}