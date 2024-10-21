function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const correctPassword = 'secretpassword';
    const errorMessage = document.getElementById('errorMessage');

    if (passwordInput === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
