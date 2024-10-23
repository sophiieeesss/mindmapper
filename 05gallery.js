window.onload = function() {
    document.getElementById('caption1').value = localStorage.getItem('caption1') || '';
    document.getElementById('caption2').value = localStorage.getItem('caption2') || '';

    document.getElementById('caption1').oninput = function() {
        localStorage.setItem('caption1', this.value);
    };
    
    document.getElementById('caption2').oninput = function() {
        localStorage.setItem('caption2', this.value);
    };
};
