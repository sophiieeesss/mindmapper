// Set your desired password here
const password = "secretpassword";

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const loginDiv = document.getElementById("login");
    const contentDiv = document.getElementById("content");

    if (input === password) {
        loginDiv.style.display = "none"; // Hide login
        contentDiv.style.display = "block"; // Show content
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
