document.addEventListener('DOMContentLoaded', () => {
    // Basic GSAP animations
    gsap.from('header', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-content h1', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.hero-content p', {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: 'power3.out'
    });

    gsap.from('.hero-btns', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)'
    });

    // Scroll reveal for sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // If there are specific elements to animate inside
                const cards = entry.target.querySelectorAll('.project-card, .timeline-item, .cert-card, .skill-item');
                if (cards.length > 0) {
                    gsap.from(cards, {
                        y: 50,
                        opacity: 0,
                        stagger: 0.2,
                        duration: 0.8,
                        ease: 'power3.out'
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile Menu logic can be added here if needed
});
