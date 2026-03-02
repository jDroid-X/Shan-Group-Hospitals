// Basic JavaScript for future interactivity enhancements
document.addEventListener('DOMContentLoaded', () => {
    // Add simple smooth scrolling for anchor links if any are implemented
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Shan Group Hospital Website Initialized.");
});
