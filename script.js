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

gsap.from(".greeting", { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
gsap.from(".role", { opacity: 0, y: 50, duration: 1, ease: "power3.out", delay: 0.6 });
gsap.from(".description", { opacity: 0, y: 50, duration: 1, ease: "power3.out", delay: 0.6 });
gsap.from(".profile-image", { opacity: 0, y: 50, duration: 0.1, ease: "power3.out", delay: 0.6 });
    
gsap.from(".social-icons a", { 
    opacity: 0, 
    y: 20, 
    stagger: 0.2,
    duration: 0.8, 
    ease: "power2.out",
    delay: 0.9
    });

gsap.from(".buttons a", { 
    opacity: 0, 
    scale: 0.8, 
    duration: 0.8, 
    ease: "back.out(1.7)", 
    delay: 1.2 
    });


    