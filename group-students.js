// group-students.js
// Handles page-specific interactions for group-students.html.
// The main navbar logic (mobile menu, dark mode, dropdown) is
// already handled by script.js which is also loaded on this page.

document.addEventListener('DOMContentLoaded', () => {
    // Highlight the active nav link for this page
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const groupLink = document.querySelector('a[href="group-students.html"]');
    if (groupLink) groupLink.classList.add('active');
});
