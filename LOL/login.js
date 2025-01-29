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