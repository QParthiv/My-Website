document.addEventListener('DOMContentLoaded', function() {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);

    const scrollButton = document.querySelector('.AboutMeButton');
    const targetSection = document.querySelector('.AboutMeText');
    if (scrollButton && targetSection) {
        scrollButton.addEventListener('click', function() {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});