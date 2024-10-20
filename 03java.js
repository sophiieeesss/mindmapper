const correctPassword = 'secretpassword'; // Set your password here

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (input === correctPassword) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
    }
}
