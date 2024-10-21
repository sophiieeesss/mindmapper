const correctPassword = "secretpassword"; // Set your password

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    if (input === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.innerText = "Incorrect password. Please try again.";
    }
}
