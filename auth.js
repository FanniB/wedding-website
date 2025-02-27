function validatePassword() {
    const input = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    // Encoded password (Base64 version of "ready2wed")
    const encodedCorrectPassword = "cmVhZHkyd2Vk"; 
  
    // Encode user input to Base64 for comparison
    const encodedInput = btoa(input);
  
    if (encodedInput === encodedCorrectPassword) {
      // Store session timestamp in localStorage (valid for 24 hours)
      localStorage.setItem("authTimestamp", Date.now());
  
      // Redirect to main page
      window.location.href = "main.html";
    } else {
      errorMessage.textContent = "Hibás jelszó / Incorrect password";
    }
  }
  
  // Function to check if the session is still valid
  function checkSession() {
    const authTimestamp = localStorage.getItem("authTimestamp");
  
    if (authTimestamp) {
      const timeElapsed = Date.now() - parseInt(authTimestamp);
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  
      if (timeElapsed < oneDay) {
        // Session is still valid, redirect user
        window.location.href = "main.html";
      } else {
        // Session expired, remove stored timestamp
        localStorage.removeItem("authTimestamp");
      }
    }
  }
  
  // Check session on page load
  checkSession();
  
  // Listen for Enter key press in the password input field
  document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      validatePassword();
    }
  });
  