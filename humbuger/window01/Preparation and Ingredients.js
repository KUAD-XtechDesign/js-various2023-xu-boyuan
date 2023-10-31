document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container');

    // Simple fade-in and slide-in animation for the container
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 500);
});

