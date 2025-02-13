// User Registration
function register() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (!username || !password) {
    document.getElementById("error-message").innerText = "Username and password cannot be empty!";
    return;
  }

  if (users[username]) {
    document.getElementById("error-message").innerText = "This username is already taken!";
    return;
  }

  users[username] = password;
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", username);
  moveGuestCartToUser(username);
  window.location.href = "home.html";
}

// User Login
function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value;
  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username] === password) {
    localStorage.setItem("currentUser", username);
    moveGuestCartToUser(username);
    window.location.href = "home.html";
  } else {
    document.getElementById("error-message").innerText = "Invalid username or password!";
  }
}

// Logout
function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

// Move Guest Cart to User Cart After Login
function moveGuestCartToUser(username) {
  let guestCart = JSON.parse(localStorage.getItem("guest_cart")) || [];
  let userCart = JSON.parse(localStorage.getItem(username + "_cart")) || [];

  if (guestCart.length > 0) {
    userCart.push(...guestCart);
    localStorage.setItem(username + "_cart", JSON.stringify(userCart));
    localStorage.removeItem("guest_cart");
  }
}

// Add to Cart (Supports both guest and logged-in users)
function addToCart(productName, price) {
  let currentUser = localStorage.getItem("currentUser");
  let cartKey = currentUser ? currentUser + "_cart" : "guest_cart";

  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  cart.push({ name: productName, price: price });

  localStorage.setItem(cartKey, JSON.stringify(cart));

  alert(productName + " added to cart!");
  console.log("Updated Cart:", JSON.parse(localStorage.getItem(cartKey))); // Debugging log
}

// Load Cart Items
function loadCart() {
  let currentUser = localStorage.getItem("currentUser");
  let cartKey = currentUser ? currentUser + "_cart" : "guest_cart";

  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  let cartDiv = document.getElementById("cart-items");
  let totalPrice = 0;

  cartDiv.innerHTML = "";
  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>No items in cart.</p>";
  } else {
    cart.forEach((item, index) => {
      cartDiv.innerHTML += `<p>${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">❌</button></p>`;
      totalPrice += item.price;
    });
    document.getElementById("total-price").innerText = "Total: ₹" + totalPrice;
  }
}

// Remove Item from Cart
function removeFromCart(index) {
  let currentUser = localStorage.getItem("currentUser");
  let cartKey = currentUser ? currentUser + "_cart" : "guest_cart";

  let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
  cart.splice(index, 1);
  localStorage.setItem(cartKey, JSON.stringify(cart));

  loadCart();
}

// Checkout (Requires Login)
function checkout() {
  let currentUser = localStorage.getItem("currentUser");
  if (!currentUser) {
    alert("Please log in to place an order.");
    return;
  }

  let cart = JSON.parse(localStorage.getItem(currentUser + "_cart")) || [];
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let orders = JSON.parse(localStorage.getItem(currentUser + "_orders")) || [];
  orders.push(...cart);
  localStorage.setItem(currentUser + "_orders", JSON.stringify(orders));
  localStorage.removeItem(currentUser + "_cart");

  alert("Order Confirmed!");
  window.location.href = "orders.html";
}

// Load Orders
function loadOrders() {
  let currentUser = localStorage.getItem("currentUser");
  let orders = JSON.parse(localStorage.getItem(currentUser + "_orders")) || [];
  let orderDiv = document.getElementById("order-list");

  orderDiv.innerHTML = "";
  if (orders.length === 0) {
    orderDiv.innerHTML = "<p>No orders found.</p>";
  } else {
    orders.forEach(order => {
      orderDiv.innerHTML += `<p>${order.name} - ₹${order.price}</p>`;
    });
  }
}