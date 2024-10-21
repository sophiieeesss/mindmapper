// Password protection logic
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (passwordInput === 'secretpassword') { // Change this to your desired password
        document.getElementById('login').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        errorMessage.textContent = 'Incorrect password. Please try again.';
        errorMessage.style.color = 'red';
    }
}
