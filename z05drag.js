let isDragging = false;
let currentElement = null;
let offsetX = 0;
let offsetY = 0;

function makeDraggable(element) {
    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentElement = element;
        offsetX = e.clientX - currentElement.getBoundingClientRect().left;
        offsetY = e.clientY - currentElement.getBoundingClientRect().top;
    });

    element.addEventListener('mouseup', () => {
        isDragging = false;
        currentElement = null;
    });
}

document.addEventListener('mousemove', (e) => {
    if (isDragging && currentElement) {
        currentElement.style.position = 'absolute';
        currentElement.style.left = `${e.clientX - offsetX}px`;
        currentElement.style.top = `${e.clientY - offsetY}px`;
    }
});

// Apply dragging to elements
document.querySelectorAll('.draggable').forEach(makeDraggable);
document.getElementById("mainHeader").style.cursor = "move";
document.getElementById("phoneNumber").style.cursor = "move";
