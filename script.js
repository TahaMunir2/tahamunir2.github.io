document.addEventListener('DOMContentLoaded', () => {
    
const hiddenElements = document.querySelectorAll('.project.hidden, .section-heading.hidden');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the element is in view, remove the 'hidden' class
                entry.target.classList.remove('hidden');
                // Optional: Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    hiddenElements.forEach(el => observer.observe(el));
});
