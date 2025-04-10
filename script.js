// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(anchor.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Carousel functionality for each project card
document.querySelectorAll('.project-card').forEach(card => {
    const slides = card.querySelectorAll('.slides img');
    const prev = card.querySelector('.prev');
    const next = card.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    // Initial display
    showSlide(currentIndex);
});