ocument.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-links');
    const policyDrop = document.querySelector('#policy-dropdown');
    const darkToggle = document.querySelector('#dark-mode-toggle');

    // 1. Mobile Navigation
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Mobile Dropdown Toggle
    policyDrop.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            policyDrop.classList.toggle('open');
        }
    });



    // 4. Dark Mode
    darkToggle.addEventListener('click', () => {
        const body = document.body;
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            body.setAttribute('data-theme', 'dark');
            darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});





/* the about us code */



