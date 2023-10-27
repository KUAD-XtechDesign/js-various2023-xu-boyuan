let hamburgerImage = document.getElementById('hamburgerImage');
let content = document.getElementById('content');

window.addEventListener('scroll', () => {
    let scrollPercent = window.scrollY / (window.innerHeight / 2);
    if(scrollPercent >= 1) scrollPercent = 1;

    hamburgerImage.style.width = `${100 - (scrollPercent * 50)}%`;
    content.style.right = `${scrollPercent * 50}%`;
    content.style.opacity = scrollPercent;
});
