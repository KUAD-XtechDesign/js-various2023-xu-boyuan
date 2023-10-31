let sections = document.querySelectorAll('.section');
let mainTitle = document.getElementById('main-title');
let background = document.getElementById('background');
let titleDisplayed = false;
let scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

scrollPercent = Math.min(1, Math.max(0, scrollPercent));
function updateBackgroundOpacity() {
    let scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    scrollPercent = Math.min(1, Math.max(0, scrollPercent));
    background.style.opacity = 0.3 + (0.7 * scrollPercent);
}

updateBackgroundOpacity(); 

window.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        let sectionTop = section.getBoundingClientRect().top;
        let scrollPercent = (window.innerHeight - sectionTop) / (window.innerHeight / 2);
        if (scrollPercent >= 1) scrollPercent = 1;
        if (scrollPercent <= 0) scrollPercent = 0;

        let image = section.querySelector('.image');
        let content = section.querySelector('.content');

        image.style.width = `${100 - (scrollPercent * 50)}%`;
        content.style.transform = `translate(-50%, -50%) translateX(${(1 - scrollPercent) * 100}%)`;
        content.style.opacity = scrollPercent;

        
        if(index === 0 && scrollPercent === 1 && !titleDisplayed) {
            mainTitle.classList.remove('hidden');
            titleDisplayed = true;
        }
    });

    
    if (titleDisplayed) {
        let offset = window.scrollY - window.innerHeight;
        if (offset > 0) {
            mainTitle.style.transform = `translateX(-50%) translateY(-${offset}px)`;
        } else {
            mainTitle.style.transform = `translateX(-50%)`;
        }
    }

    
    updateBackgroundOpacity();
});



