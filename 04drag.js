document.querySelectorAll('.draggable').forEach(item => {
    item.onmousedown = function(event) {
        let shiftX = event.clientX - item.getBoundingClientRect().left;
        let shiftY = event.clientY - item.getBoundingClientRect().top;

        item.style.position = 'absolute';
        item.style.zIndex = 1000;

        function moveAt(pageX, pageY) {
            item.style.left = pageX - shiftX + 'px';
            item.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        item.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            item.onmouseup = null;
        };
    };
});
