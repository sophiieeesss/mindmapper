const correctPassword = 'secretpassword'; // This is your password

function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;

    if (inputPassword === correctPassword) {
        // Hide the login section and show the content
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        // Display an error message
        document.getElementById('errorMessage').innerText = 'Incorrect password. Please try again.';
    }
}
