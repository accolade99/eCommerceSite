//mobile (hamburger menu) toggle
document.addEventListener('DOMContentLoaded', ()=>{})
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector('.home .content');
    var opacity = 0;
    var intervalID = setInterval(function() {
        if (opacity < 1) {
            opacity = opacity + 0.05; // Increase opacity
            content.style.opacity = opacity;
        } else {
            clearInterval(intervalID); // Stop the interval when fully visible
        }
    }, 98); // Adjust the speed of fade-in by changing the interval time
});