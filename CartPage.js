function togglePayButton() {
    const codOption = document.getElementById('cod-option').checked;
    updatePayButtonState();
}

function updatePayButtonState() {
    const cartItems = document.getElementById('cart-items').children.length;
    document.getElementById('pay-button').disabled = cartItems === 0 || !document.getElementById('cod-option').checked;
}

function updateTotalAmount(amount) {
    let currentTotal = parseFloat(document.getElementById('total-amount').innerText.replace('$', ''));
    currentTotal += amount;
    document.getElementById('total-amount').innerText = `$${currentTotal.toFixed(2)}`;
}

function proceedToPay() {
    const cartItems = document.getElementById('cart-items').children.length;
    if (cartItems > 0 && document.getElementById('cod-option').checked) {
        window.location.href = 'idd.html';
    } else {
        alert('Please add items to your cart and select Cash on Delivery before proceeding.');
    }
}
