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