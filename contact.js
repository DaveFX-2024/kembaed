document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    menuBtn?.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Dark Mode Toggle
    const darkToggle = document.getElementById('dark-mode-toggle');
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