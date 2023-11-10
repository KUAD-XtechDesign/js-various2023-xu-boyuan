document.addEventListener('DOMContentLoaded', (event) => {
    const burgerImages = document.querySelectorAll('.burger-img');

    burgerImages.forEach((img) => {
        img.classList.add('animated');
    });
});

