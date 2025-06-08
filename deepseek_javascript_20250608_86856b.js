// Анимация кнопок при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.download-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});