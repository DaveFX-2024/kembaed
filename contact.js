document.addEventListener('DOMContentLoaded', () => {
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

    // Dark Mode Toggle

    darkToggle?.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        isDark ? document.body.removeAttribute('data-theme') : document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
        darkToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});