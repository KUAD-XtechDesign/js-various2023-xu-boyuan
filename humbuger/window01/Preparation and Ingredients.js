document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container');
    container.classList.add('animated');

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



