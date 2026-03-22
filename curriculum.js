document.addEventListener('DOMContentLoaded', () => {
    // Search Functionality for the Table
    const searchInput = document.getElementById('docSearch');
    const tableRows = document.querySelectorAll('#resourceBody tr');

    searchInput?.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        tableRows.forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';
        });
    });

    // Dark Mode Toggle
    const darkToggle = document.getElementById('dark-mode-toggle');
    darkToggle?.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        isDark ? document.body.removeAttribute('data-theme') : document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    if (localStorage.getItem('theme') === 'dark') document.body.setAttribute('data-theme', 'dark');

    // Mobile Menu
    document.getElementById('mobile-menu')?.addEventListener('click', () => {
        document.getElementById('nav-links').classList.toggle('active');
    });
});