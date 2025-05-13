// Анимация при прокрутке — отображение карточек
const cards = document.querySelectorAll('.card');

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
//  Карусель
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

// Функция для отображения активного слайда
function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

// Функция для перехода к следующему слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;  // Переход к следующему слайду
    showSlide(currentSlide);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;  // Переход к предыдущему слайду
    showSlide(currentSlide);
}

// Обработчики событий для кнопок
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Инициализация первого слайда
showSlide(currentSlide);

const form = document.querySelector('.contact-form');
const modal = document.getElementById('thankModal');
const closeBtn = document.querySelector('.close');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвратить стандартную отправку

    // Показать модальное окно
    modal.style.display = 'block';

    // Очистить форму
    form.reset();
});

// Закрыть окно при клике на крестик
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Закрыть окно при клике вне контента
window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

