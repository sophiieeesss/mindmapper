// Functionality for gallery captions
document.querySelectorAll('.caption').forEach((textarea) => {
    // Load caption from localStorage
    const photoIndex = Array.from(textarea.closest('.photo-container').parentNode.children).indexOf(textarea.closest('.photo-container'));
    textarea.value = localStorage.getItem(`caption_${photoIndex}`) || "";

    // Save caption to localStorage on input
    textarea.addEventListener('input', () => {
        localStorage.setItem(`caption_${photoIndex}`, textarea.value);
    });
});
