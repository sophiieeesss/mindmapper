// Password protection
function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = 'retro123'; // Change to whatever password you want
  const loginForm = document.getElementById('login');
  const mainContent = document.getElementById('main-content');
  const errorMessage = document.getElementById('error-message');

  if (password === correctPassword) {
    loginForm.style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    errorMessage.innerText = 'Incorrect password!';
  }
}

// Drag and Drop functionality
const draggables = document.querySelectorAll('.draggable');
const container = document.querySelector('.container');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

container.addEventListener('dragover', e => {
  e.preventDefault();
  const afterElement = getDragAfterElement(container, e.clientY);
  const draggable = document.querySelector('.dragging');
  if (afterElement == null) {
    container.appendChild(draggable);
  } else {
    container.insertBefore(draggable, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}
