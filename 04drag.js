let isDragging = false;
let currentElement = null;
let offsetX, offsetY;

document.querySelectorAll('.draggable').forEach(element => {
    element.addEventListener('mousedown', (e) => {
        isDragging = true;
        currentElement = element;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
        element.style.cursor = 'grabbing';
    });

    element.addEventListener('mouseup', () => {
        isDragging = false;
        currentElement = null;
        element.style.cursor = 'grab';
    });
});

document.addEventListener('mousemove', (e) => {
    if (isDragging && currentElement) {
        currentElement.style.left = (e.clientX - offsetX) + 'px';
        currentElement.style.top = (e.clientY - offsetY) + 'px';
    }
});

// Ensure phone number is draggable as well
const phone = document.getElementById('phone');
phone.addEventListener('mousedown', (e) => {
    isDragging = true;
    currentElement = phone;
    offsetX = e.clientX - phone.getBoundingClientRect().left;
    offsetY = e.clientY - phone.getBoundingClientRect().top;
    phone.style.cursor = 'grabbing';
});

phone.addEventListener('mouseup', () => {
    isDragging = false;
    currentElement = null;
    phone.style.cursor = 'grab';
});
