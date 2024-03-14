document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#26a69a';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'transparent';
        });
    });
});
