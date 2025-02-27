function validatePassword() {
    const input = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Encoded password (Base64 version of "ready2wed")
    const encodedCorrectPassword = "cmVhZHkyd2Vk";

    // Encode user input to Base64 for comparison
    const encodedInput = btoa(input);

    if (encodedInput === encodedCorrectPassword) {
        errorMessage.textContent = "";
        window.location.href = "main.html"; // Redirect on success
    } else {
        errorMessage.textContent = "Hibás jelszó / Incorrect password";
    }
}
// Listen for Enter key press in the password input field
document.getElementById("password").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        validatePassword();
    }
});