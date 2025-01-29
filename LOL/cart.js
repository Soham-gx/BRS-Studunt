// Display Cart Items
function displayCartItems() {
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItemsDiv = document.getElementById('cart-items');

  cartItemsDiv.innerHTML = '';
  cartItems.forEach(item => {
    let cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerText = item;
    cartItemsDiv.appendChild(cartItemDiv);
  });
}

// Proceed to Checkout
function proceedToCheckout() {
  document.getElementById('checkout-form').style.display = 'block';
}

// Finalize Checkout
function finalizeCheckout() {
  let customerName = document.getElementById('customerName').value;
  let address = document.getElementById('address').value;
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  cartItems.forEach(item => {
    orders.push({
      productName: item,
      quantity: 1,
      color: 'default', // Can be replaced with actual color input if needed
      customerName: customerName,
      address: address
    });
  });

  localStorage.setItem('orders', JSON.stringify(orders));
  alert('Your order has been successfully placed!');
  localStorage.removeItem('cart');
  window.location.href = 'home.html';
}

// Load Cart Items on page load
window.onload = displayCartItems;