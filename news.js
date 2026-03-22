const newsContent = {
    1: { title: "Digital Library Phase 1", text: "The Bureau has successfully launched the first phase of the digital library project. It includes high-speed fiber connectivity and 10,000+ local educational resources." },
    2: { title: "Grade 12 National Exam Prep", text: "Mock exam schedules and study materials are now available at all district education offices and can be downloaded from our curriculum section." },
    3: { title: "Regional Sports Day", text: "The 2026 sports festival kicks off this Friday. Over 40 schools will compete in athletics, football, and volleyball at the Durame Stadium." },
    4: { title: "Teacher Scholarship Program", text: "New funding available for secondary teachers pursuing Master's degrees in STEM subjects. Applications close next month." },
    5: { title: "STEM Innovation Fair", text: "A showcase of engineering and coding projects from local high school students. Winners will represent the zone at the regional level." },
    6: { title: "New Curriculum Integration", text: "A three-day workshop for school principals on implementing the updated national competency-based curriculum." },
    7: { title: "Regional Ranking Results", text: "Performance analysis of 2025 examinations highlights significant improvement in literacy rates across rural districts." },
    8: { title: "International Literacy Day", text: "Public reading events and book donation drives held in all major town centers to encourage youth reading habits." },
    9: { title: "School Lunch Program", text: "Expansion of the nutrition initiative to cover 50 more primary schools, ensuring students receive balanced meals daily." },
    10: { title: "ICT Training for Educators", text: "Over 300 teachers received specialized training on using classroom tablets and interactive digital teaching tools." }
};

function openNews(id) {
    const modal = document.getElementById("newsModal");
    const body = document.getElementById("modalBody");
    const data = newsContent[id] || { title: "Update", text: "Story details are being updated. Check back shortly." };
    body.innerHTML = `<h2>${data.title}</h2><p style="margin-top:20px; color:var(--text-soft); line-height:1.8;">${data.text}</p>`;
    modal.style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuBtn = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-links');
    menuBtn?.addEventListener('click', () => navLinks.classList.toggle('active'));

    // Dark Mode Toggle
    const darkToggle = document.querySelector('#dark-mode-toggle');
    darkToggle?.addEventListener('click', () => {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        isDark ? document.body.removeAttribute('data-theme') : document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', isDark ? 'light' : 'dark');
    });

    if (localStorage.getItem('theme') === 'dark') document.body.setAttribute('data-theme', 'dark');

    // Modal Close
    document.querySelector('.close-modal').onclick = () => document.getElementById("newsModal").style.display = "none";
    window.onclick = (e) => { if(e.target.className === 'modal') document.getElementById("newsModal").style.display = "none"; };

    // Search
    document.getElementById('newsSearch').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.news-card').forEach(card => {
            card.style.display = card.innerText.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });
});