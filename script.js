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
            showLoginForm();
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
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'hBar.html';
    } else {
        alert('Invalid username or password.');
    }
}

function showSignupForm() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

function showLoginForm() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
