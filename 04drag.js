// Drag and Drop functionality
let dragItem = null;

document.querySelectorAll('.draggable').forEach(item => {
    item.addEventListener('mousedown', dragStart);
    item.addEventListener('mouseup', dragEnd);
    item.addEventListener('mousemove', drag);
});

function dragStart(e) {
    dragItem = this;
    this.style.zIndex = 1000; // Bring to front when dragging
}

function dragEnd() {
    dragItem = null;
}

function drag(e) {
    if (dragItem) {
        dragItem.style.left = e.pageX - dragItem.offsetWidth / 2 + 'px';
        dragItem.style.top = e.pageY - dragItem.offsetHeight / 2 + 'px';
    }
}
