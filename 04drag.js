let isDragging = false;
let offsetX, offsetY, draggedElement;

function makeDraggable(element) {
    element.addEventListener('mousedown', function(e) {
        isDragging = true;
        draggedElement = element;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
    });
}

document.addEventListener('mousemove', function(e) {
    if (isDragging && draggedElement) {
        draggedElement.style.position = 'absolute';
        draggedElement.style.left = (e.clientX - offsetX) + 'px';
        draggedElement.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    draggedElement = null;
});

// Make elements draggable
document.querySelectorAll('.draggable').forEach(makeDraggable);
