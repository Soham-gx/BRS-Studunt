let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, imgSrc) {
  cart.push({ name, price, imgSrc });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  alert(name + " added to cart!");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  let cartItems = document.getElementById("cart-items");
  let checkoutBtn = document.getElementById("checkout-btn");

  if (!cartItems) return; // Prevent error on other pages

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p id='empty-cart-msg'>Your cart is empty.</p>";
    checkoutBtn.style.display = "none";
    return;
  }

  cart.forEach((item, index) => {
    let cartItem = document.createElement("div");
    cartItem.innerHTML = `
            <img src="${item.imgSrc}" width="50">
            <p>${item.name} - ₹${item.price}</p>
            <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
        `;
    cartItems.appendChild(cartItem);
  });

  checkoutBtn.style.display = "block";
}

function proceedToCheckout() {
  window.location.href = "checkout.html";
}

window.onload = updateCart;