const correctPassword = "secretpassword";

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const content = document.getElementById("content");

    if (passwordInput === correctPassword) {
        errorMessage.textContent = "";
        content.style.display = "block";
        document.getElementById("login").style.display = "none";
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}
