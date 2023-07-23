// Get the elements from the HTML
const emailInput = document.getElementById("emailInput");
const signupButton = document.getElementById("signupButton");

// Add an event listener to the sign-up button
signupButton.addEventListener("click", function() {
    // Validate the email address
    if (validateEmail(emailInput.value)) {
        // Redirect to the desired URL
        window.location.href = "https://belovedstore.ccbp.tech/";
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}