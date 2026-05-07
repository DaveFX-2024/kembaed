const newsContent = {
    1: { title: "Competent School Leadership for School Improvement", text: "The Central Ethiopia Regional Education Bureau has launched the second round of on-the-job capacity-building training for over 330 school leaders and experts across three centers (Hossana, Worabe, and Bui). The initiative aims to transform school administrators into change leaders to directly improve educational quality and student outcomes across pre-primary, primary, and middle schools in the region." },
    2: { title: "Public Contribution to Educational Infrastructure is Nation-Building: Chief Administrator Endashaw Tassw", text: "Chief Administrator of Central Ethiopia Region, Endashaw Tassw (PhD), inaugurated the newly reconstructed Sodo Bui Secondary School in the East Gurage Zone. The project, which cost over 210 million Birr, was made possible through the combined efforts of the local community, private investors, and partner organizations. The Chief Administrator praised this collaboration as a model of the public's commitment to building the nation through the expansion of quality education." },
    3: { title: "Professional Licensing Assessment Underway for Over 18,000 Educators in Central Ethiopia", text: "The Central Ethiopia Regional State has launched a massive professional competency assessment for 18,460 teachers and school leaders across 32 centers. Inaugurated by Deputy Chief Administrator Anteneh Fekadu at Wachemo University, the initiative utilizes both paper-based and online testing to ensure educators meet modern technological and pedagogical standards, ultimately aiming to drive regional education quality." },
    
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