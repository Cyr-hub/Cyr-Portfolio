function toggleMenu() {
    document.querySelector(".navi").classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function() {
        gsap.from(".header", { 
            y: -100, 
            opacity: 0, 
            duration: 1.2, 
            ease: "power2.out"
        });
    });
