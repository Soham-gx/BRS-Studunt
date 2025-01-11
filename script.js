function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    const storedUsername = localStorage.getItem('username');

    if (username && password) {
        if (storedUsername && storedUsername === username) {
            alert('This user ID is already associated with another account.');
        } else {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            alert('Signup successful! Please log in.');
            showLoginForm(); // Redirect to login form after signup
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        localStorage.setItem('loggedIn', 'true'); // Set loggedIn status
        showProfilePage(username);
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    localStorage.removeItem('loggedIn'); // Clear loggedIn status
    alert('You have been logged out.');
    showSignupForm(); // Redirect to signup form after logout
}

function showSignupForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile-page').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('profile-page').style.display = 'none';
}

function showProfilePage(username) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile-page').style.display = 'block';

    document.getElementById('profile-username').innerText = username;
    document.getElementById('profile-image').innerText = username.charAt(0).toUpperCase();
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    const loggedIn = localStorage.getItem('loggedIn');
    if (username && loggedIn === 'true') {
        showProfilePage(username);
    } else {
        document.getElementById('signup-form').style.display = 'block';
    }
});