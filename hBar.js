document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    document.getElementById('username-display').innerText = `Welcome, ${username}`;
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = page.id === pageId ? 'block' : 'none';
    });
}

function logout() {
    localStorage.removeItem('loggedIn');
    alert('You have been logged out.');
    window.location.href = 'index.html'; // Redirect to the main login/signup page
}
