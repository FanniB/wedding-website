// Function to check if the user is authenticated
function checkSession() {
  const authTimestamp = localStorage.getItem("authTimestamp");

  if (authTimestamp) {
      const timeElapsed = Date.now() - parseInt(authTimestamp, 10);
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      if (timeElapsed < oneDay) {
          return; // User is authenticated, do nothing
      } else {
          // Session expired, remove stored timestamp and redirect to login
          localStorage.removeItem("authTimestamp");
          window.location.href = "login.html";
      }
  } else {
      // No session, redirect to login only if the user is on a protected page
      const protectedPages = ["main.html", "dashboard.html", "settings.html"];
      const currentPage = window.location.pathname.split("/").pop(); // Get current file name

      if (protectedPages.includes(currentPage)) {
          window.location.href = "login.html";
      }
  }
}

// Call checkSession() on page load to enforce authentication
checkSession();

// Function to validate password on login page
function validatePassword() {
  const input = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Base 64 
  const encodedCorrectPassword = "cmVhZHkyd2Vk"; 

  // Encode user input to Base64 for comparison
  const encodedInput = btoa(input);

  if (encodedInput === encodedCorrectPassword) {
      // Store session timestamp in localStorage (valid for 24 hours)
      localStorage.setItem("authTimestamp", Date.now());

      // Redirect to the last visited page or main page
      const lastPage = localStorage.getItem("lastPage") || "main.html";
      window.location.href = lastPage;
  } else {
      errorMessage.textContent = "Hibás jelszó / Incorrect password";
  }
}

// Function to log out the user
function logout() {
  localStorage.removeItem("authTimestamp");
  localStorage.removeItem("lastPage"); // Clear last visited page
  window.location.href = "login.html";
}

// Store last visited page before redirecting
window.addEventListener("beforeunload", function () {
  const currentPage = window.location.pathname.split("/").pop();
  localStorage.setItem("lastPage", currentPage);
});

// Add event listener only if the password field exists (avoids errors on other pages)
document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.getElementById("password");
  if (passwordField) {
      passwordField.addEventListener("keypress", function (event) {
          if (event.key === "Enter") {
              validatePassword();
          }
      });
  }
});
