const cards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

const menutoggle = document.getElementById('menuToggle');
const nav = document.getElementById('navbar');

menutoggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});