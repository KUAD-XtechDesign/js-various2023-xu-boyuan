document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Add 'active' class to the clicked nav item
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(lnk => lnk.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Optional: Close nav dropdown on outside click (for responsive menu)
    window.addEventListener('click', function(e) {
        if (!document.querySelector('.navbar').contains(e.target)) {
            // Code to close the nav dropdown
        }
    });
});

