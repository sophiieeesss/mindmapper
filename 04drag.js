let isDragging = false;
let currentDraggable = null;
let offsetX, offsetY;

document.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('draggable')) {
        isDragging = true;
        currentDraggable = event.target;
        offsetX = event.clientX - currentDraggable.getBoundingClientRect().left;
        offsetY = event.clientY - currentDraggable.getBoundingClientRect().top;
    }
});

document.addEventListener('mousemove', function(event) {
    if (isDragging && currentDraggable) {
        currentDraggable.style.position = 'absolute';
        currentDraggable.style.left = (event.clientX - offsetX) + 'px';
        currentDraggable.style.top = (event.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    currentDraggable = null;
});
