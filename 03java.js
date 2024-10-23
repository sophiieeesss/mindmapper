const password = "secretpassword";

function checkPassword() {
    const inputPassword = document.getElementById('passwordInput').value;
    if (inputPassword === password) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        document.getElementById('errorMessage').innerText = 'Incorrect password, try again!';
    }
}
