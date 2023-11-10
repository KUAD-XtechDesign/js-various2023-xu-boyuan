document.addEventListener('DOMContentLoaded', (event) => {
    let sections = document.querySelectorAll('.section');
    let background = document.getElementById('background');

    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('animated');
        }, index * 500); 
    });

    function updateBackground(section) {
        if (section.dataset.background) {
            background.style.backgroundImage = `url('${section.dataset.background}')`;
        }
    }

    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    window.addEventListener('scroll', () => {
        sections.forEach((section, index) => {
            let sectionTop = section.getBoundingClientRect().top;
            let sectionHeight = section.offsetHeight;
            let windowHeight = window.innerHeight;
            
            if (sectionTop <= windowHeight / 2 && sectionTop + sectionHeight >= windowHeight / 2) {
                updateBackground(section);
            }

            let image = section.querySelector('.image');
            let content = section.querySelector('.content');
            let scrollPercent = (windowHeight - sectionTop) / (windowHeight / 2);
            scrollPercent = Math.min(1, Math.max(0, scrollPercent));
            image.style.width = `${100 - (scrollPercent * 50)}%`;
            content.style.transform = `translate(-50%, -50%) translateX(${(1 - scrollPercent) * 100}%)`;
            content.style.opacity = scrollPercent;
        });
    });

    if (sections.length > 0) {
        updateBackground(sections[0]);
    }

    // Call the smoothScroll function
    smoothScroll();
});


