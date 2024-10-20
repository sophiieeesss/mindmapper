const correctPassword = 'secretpassword'; // The password to check

function validatePassword() {
    const inputPassword = document.getElementById('password').value;

    if (inputPassword === correctPassword) {
        document.getElementById('password-form').style.display = 'none';
        document.getElementById('content').style.display = 'block'; // Show content
    } else {
        alert('Incorrect password. Please try again.'); // Alert on incorrect password
    }
}

