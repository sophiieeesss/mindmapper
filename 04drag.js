// Make elements draggable
const draggables = document.querySelectorAll('.draggable');
draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', dragStart);
});

function dragStart(e) {
    const draggable = e.target;

    function dragMove(e) {
        draggable.style.position = 'absolute';
        draggable.style.left = e.pageX - draggable.offsetWidth / 2 + 'px';
        draggable.style.top = e.pageY - draggable.offsetHeight / 2 + 'px';
    }

    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
    }

    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}
