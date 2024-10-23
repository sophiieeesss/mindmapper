const correctPassword = "secretpassword";

function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const content = document.getElementById("content");

    if (passwordInput === correctPassword) {
        errorMessage.textContent = "";
        content.style.display = "block";
        document.getElementById("login").style.display = "none";
        localStorage.setItem("authenticated", "true");
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
}

// On page load, check if user is authenticated
window.onload = function() {
    if (localStorage.getItem("authenticated") === "true") {
        document.getElementById("content").style.display = "block";
        document.getElementById("login").style.display = "none";
    }
};
