function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Signup successful!');
        showLoginForm();
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
        showProfilePage(username);
    } else {
        alert('Invalid username or password.');
    }
}

function logout() {
    showLoginForm();
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
    if (username) {
        showProfilePage(username);
    } else {
        document.getElementById('signup-form').style.display = 'block';
    }
});