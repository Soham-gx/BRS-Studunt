document.addEventListener('DOMContentLoaded', () => {
  const adminLoginForm = document.getElementById('admin-login-form');
  const dashboardContainer = document.getElementById('dashboard-container');
  const loginContainer = document.getElementById('login-container');
  const logoutButton = document.getElementById('logout');

  const adminCredentials = {
    username: 'admin',
    password: 'admin2807',
  };

  // Admin login
  adminLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
      alert('Admin login successful!');
      loginContainer.style.display = 'none';
      dashboardContainer.style.display = 'block';
      loadOrderDetails();
    } else {
      alert('Invalid admin username or password!');
    }
  });

  // Logout functionality
  logoutButton.addEventListener('click', () => {
    alert('Logged out successfully!');
    loginContainer.style.display = 'block';
    dashboardContainer.style.display = 'none';
  });

  // Load order details for admin
  function loadOrderDetails() {
    const orderDetails = JSON.parse(localStorage.getItem('order'));
    const orderDiv = document.getElementById('order-details');

    if (orderDetails) {
      orderDiv.innerHTML = `
        <h2>Heera Telecom Order Details</h2>
        <p>Username: ${orderDetails.user.username}</p>
        <p>Products:</p>
        <ul>${orderDetails.cart.map(item => `<li>${item.name} - $${item.price}</li>`).join('')}</ul>
        <h3>Total Amount: $${orderDetails.total.toFixed(2)}</h3>
      `;
    } else {
      orderDiv.textContent = 'No orders available.';
    }
  }
});