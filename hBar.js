document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    document.getElementById('username-display').innerText = `Welcome, ${username}`;

    const firstLetter = username.charAt(0).toUpperCase();
    const profileImage = document.getElementById('profile-image');
    profileImage.alt = firstLetter;
    profileImage.src = `https://via.placeholder.com/100?text=${firstLetter}`;
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}

function changeProfileImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            document.getElementById('profile-image').src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

function changeUsername() {
    const newUsername = document.getElementById('username').value;
    if (newUsername) {
        localStorage.setItem('username', newUsername);
        alert('Username changed successfully.');
        document.getElementById('username-display').innerText = `Welcome, ${newUsername}`;
        const firstLetter = newUsername.charAt(0).toUpperCase();
        document.getElementById('profile-image').src = `https://via.placeholder.com/100?text=${firstLetter}`;
    } else {
        alert('Please enter a new username.');
    }
}

function changePassword() {
    const oldPassword = document.getElementById('old-password').value;
    const newPassword = document.getElementById('new-password').value;
    const reEnterPassword = document.getElementById('re-enter-password').value;

    const storedPassword = localStorage.getItem('password');

    if (oldPassword === storedPassword) {
        if (newPassword === reEnterPassword) {
            localStorage.setItem('password', newPassword);
            alert('Password changed successfully.');
        } else {
            alert('New passwords do not match.');
        }
    } else {
        alert('Old password is incorrect.');
    }
}