document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-links');
    const policyDrop = document.querySelector('#policy-dropdown');
    const darkToggle = document.querySelector('#dark-mode-toggle');

    // 1. Mobile Navigation
    menuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // 2. Mobile Dropdown Toggle
    policyDrop?.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
            policyDrop.classList.toggle('open');
        }
    });

    // 3. Dark Mode (Synced with Home)
    darkToggle?.addEventListener('click', () => {
        const body = document.body;
        const isDark = body.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            body.removeAttribute('data-theme');
            darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});