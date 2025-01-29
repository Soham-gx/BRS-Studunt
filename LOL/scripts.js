// Login Function
function login() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (localStorage.getItem(username) === password) {
    alert('Login successful!');
    window.location.href = 'home.html';
  } else {
    alert('Invalid credentials!');
  }
}

// Sign Up Function
function signUp() {
  let newUsername = document.getElementById('newUsername').value;
  let newPassword = document.getElementById('newPassword').value;

  if (newUsername && newPassword) {
    localStorage.setItem(newUsername, newPassword);
    alert('Sign up successful!');
  } else {
    alert('Please fill in all fields!');
  }
}

// Admin Login Function
function adminLogin() {
  let adminUsername = document.getElementById('adminUsername').value;
  let adminPassword = document.getElementById('adminPassword').value;

  if (adminUsername === 'admin' && adminPassword === 'admin123') {
    alert('Admin login successful!');
    window.location.href = 'admin-panel.html';
  } else {
    alert('Invalid admin credentials!');
  }
}

// Add to Cart Function
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}

// Checkout Function
function checkout() {
  alert('Thank you for ordering from Heera Telecom or Voda!');
  localStorage.removeItem('cart');
}