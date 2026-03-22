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

    // 3. Slider Logic
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.querySelector('#nextSlide');
    const prevBtn = document.querySelector('#prevSlide');
    let current = 0;
    let slideTimer;

    const showSlide = (n) => {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active'));
        current = (n + slides.length) % slides.length;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
    };

    const nextSlide = () => showSlide(current + 1);
    
    nextBtn.onclick = () => { nextSlide(); resetTimer(); };
    prevBtn.onclick = () => { showSlide(current - 1); resetTimer(); };
    dots.forEach((dot, i) => dot.onclick = () => { showSlide(i); resetTimer(); });

    function startTimer() { slideTimer = setInterval(nextSlide, 6000); }
    function resetTimer() { clearInterval(slideTimer); startTimer(); }
    startTimer();

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




