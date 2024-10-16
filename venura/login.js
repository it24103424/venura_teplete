// Access the login form
const loginForm = document.getElementById('loginForm');

// Add event listener for form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting the default way
    
    // Collect username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple validation check (add more checks if needed)
    if (username === "admin" && password === "password123") {
        // Redirect to home.html if credentials are correct
        window.location.href = "home.html";
    } else {
        // Show an alert if the credentials are incorrect
        alert("Invalid username or password. Please try again.");
    }
});