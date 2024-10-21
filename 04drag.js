// Enable drag and drop for the header and phone number
function makeDraggable(element) {
    let isDragging = false;
    let shiftX, shiftY;

    element.onmousedown = function(event) {
        isDragging = true;
        shiftX = event.clientX - element.getBoundingClientRect().left;
        shiftY = event.clientY - element.getBoundingClientRect().top;

        document.onmousemove = function(event) {
            if (isDragging) {
                element.style.left = event.pageX - shiftX + 'px';
                element.style.top = event.pageY - shiftY + 'px';
            }
        };

        document.onmouseup = function() {
            isDragging = false;
            document.onmousemove = null;
            document.onmouseup = null;
        };
    };

    element.ondragstart = function() {
        return false;
    };
}

document.addEventListener('DOMContentLoaded', function() {
    makeDraggable(document.getElementById('mainHeader'));
    makeDraggable(document.getElementById('phone'));
});
