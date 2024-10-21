// Function to make an element draggable
function makeDraggable(element) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener('mousedown', (event) => {
        isDragging = true;
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        element.style.position = 'absolute';
    });

    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// Select all elements that need to be draggable
const draggableElements = document.querySelectorAll('.draggable');
draggableElements.forEach(element => makeDraggable(element));
