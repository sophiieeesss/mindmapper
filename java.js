<<<<<<< HEAD
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
=======
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const correctPassword = "secretpassword"; // Password set to 'secretpassword'
    const errorMessage = document.getElementById("errorMessage");

    if (passwordInput === correctPassword) {
        document.getElementById("login").style.display = "none"; // Hide login
        document.getElementById("content").style.display = "block"; // Show content
        errorMessage.style.display = "none"; // Clear error message
    } else {
        errorMessage.textContent = "Incorrect password. Please try again.";
        errorMessage.style.display = "block"; // Show error message
    }
}

// Drag and drop functionality for buttons
const navButtons = document.getElementById('navButtons');
let isDragging = false;

navButtons.addEventListener('mousedown', () => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        navButtons.style.position = 'absolute';
        navButtons.style.left = `${event.pageX - navButtons.offsetWidth / 2}px`;
        navButtons.style.top = `${event.pageY - navButtons.offsetHeight / 2}px`;
    }
});
>>>>>>> f6ca985632f5bdca28fbb482ea86f1f0d3bcaa66
