let cart = [];

function addToCart(productId, productName, productPrice) {
    const quantity = document.getElementById(`quantity-${productId}`).value;
    const color = document.getElementById(`color-${productId}`).value;

    // Add product details to the cart
    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        quantity: parseInt(quantity),
        color: color
    });

    // Update Cart Display
    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <p>${productName} - $${productPrice} x ${quantity} (Color: ${color})</p>
        <button onclick="removeFromCart(${productId})">Remove</button>
    `;
    cartItems.appendChild(cartItem);

    updateTotalAmount(productPrice * quantity);
    updatePayButtonState();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updatePayButtonState();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity} (Color: ${item.color})</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById('total-amount').innerText = `$${total.toFixed(2)}`;
}

function updatePayButtonState() {
    document.getElementById('pay-button').disabled = cart.length === 0 || !document.getElementById('cod-option').checked;
}

function proceedToPay() {
    document.getElementById('proceed-to-pay').style.display = 'none';
    document.getElementById('address-form').style.display = 'block';
    populateOrderSummary();
}

function populateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = '';

    cart.forEach(item => {
        orderSummary.innerHTML += `
            <p><strong>Product Name:</strong> ${item.name}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
            <p><strong>Price:</strong> $${item.price}</p>
        `;
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('grand-total').innerText = total.toFixed(2);
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    const orderData = {
        name: name,
        address: address,
        phone: phone,
        cart: cart,
        grandTotal: document.getElementById('grand-total').innerText
    };

    fetch('YOUR_DEPLOYMENT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
    .then(response => response.text())
    .then(data => {
        alert('Order submitted successfully!');
        window.location.href = '/thank-you.html';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your order. Please try again.');
    });
}