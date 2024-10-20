let offsetX, offsetY, draggedElement;

document.querySelectorAll('.movable').forEach(element => {
    element.addEventListener('mousedown', function(event) {
        draggedElement = this;
        offsetX = event.clientX - draggedElement.getBoundingClientRect().left;
        offsetY = event.clientY - draggedElement.getBoundingClientRect().top;
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
    });
});

function mouseMove(event) {
    draggedElement.style.left = (event.clientX - offsetX) + 'px';
    draggedElement.style.top = (event.clientY - offsetY) + 'px';
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}
