
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const content = document.querySelector('.home .content');

    // Mobile menu toggle functionality
    menuBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click event from bubbling
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Close menu when clicking on a nav link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Content fade-in animation
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            content.style.opacity = opacity;
            content.style.transform = `translateY(${20 - (opacity * 20)}px)`;
        } else {
            clearInterval(fadeIn);
        }
    }, 98);
});