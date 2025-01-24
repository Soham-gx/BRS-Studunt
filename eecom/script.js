let isLoggedIn = false; // Initially, the user is not logged in

function showPage(page) {
  const pageContent = document.getElementById("pageContent");
  if (page === "home") {
    pageContent.innerHTML = "<h2>Welcome To Home Page</h2>";
  } else if (page === "store") {
    pageContent.innerHTML = "<h2>Welcome To Store Page</h2>";
  } else if (page === "feedback") {
    pageContent.innerHTML = "<h2>Welcome To Feedback Page</h2>";
  }
}

function redirectToLogin() {
  window.location.href =
    "https://script.google.com/macros/s/AKfycbwhfy3cdtpNc7FEEICF71iVq1bDkMYCjg7AuUBmmytjZOxBov8ynzfZza-aznuHRfA/exec";
}

document.addEventListener("DOMContentLoaded", () => {
  const accountTab = document.getElementById("accountTab");

  // If the user is logged in, change "Login & Sign Up" to "Account"
  if (isLoggedIn) {
    accountTab.innerHTML = '<a class="nav-link" href="#" onclick="showPage(\'account\')">Account</a>';
  }
});