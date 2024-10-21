const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('mousedown', function (e) {
        const element = e.target;
        let shiftX = e.clientX - element.getBoundingClientRect().left;
        let shiftY = e.clientY - element.getBoundingClientRect().top;

        element.style.position = 'absolute';
        element.style.zIndex = 1000;

        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        moveAt(e.pageX, e.pageY);

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function () {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
    });

    draggable.ondragstart = function () {
        return false;
    };
});
