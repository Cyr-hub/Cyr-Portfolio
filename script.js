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
    gsap.to(".fade-in", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out"
      });

      function toggleMenu() {
        const nav = document.getElementById("navbar");
        nav.classList.toggle("active");
      }

       // GSAP Animations
       document.addEventListener('DOMContentLoaded', () => {
        const fadeIns = document.querySelectorAll('.fade-in');
        
        fadeIns.forEach((element, index) => {
            gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: "power2.out"
            });
        });
    });
    
    
    function toggleMenu() {
        const navi = document.querySelector('.navi');
        const menuToggle = document.querySelector('.menu-toggle');
        
        navi.classList.toggle('active');
        
        // Animate hamburger icon
        if (navi.classList.contains('active')) {
            menuToggle.children[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            menuToggle.children[1].style.opacity = '0';
            menuToggle.children[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            menuToggle.children[0].style.transform = 'rotate(0) translate(0)';
            menuToggle.children[1].style.opacity = '1';
            menuToggle.children[2].style.transform = 'rotate(0) translate(0)';
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Animate all fade-in elements
        gsap.utils.toArray('.fade-in').forEach((element, index) => {
            gsap.fromTo(element, 
                {
                    opacity: 0,
                    y: 30  // Start 30px below final position
                },
                {
                    opacity: 1,
                    y: 0,   // Animate to final position (0)
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "power2.out"
                }
            );
        });
        
        // Special animation for the name
        gsap.fromTo("#name", 
            {
                y: -30,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)"
            }
        );
    });

    document.getElementById('downloadCvBtn').addEventListener('click', function(e) {
        e.preventDefault();
        
        // For development only - replace with actual hosted path for production
        try {
            const link = document.createElement('a');
            link.href = 'C:\Users\HP\Desktop\Cyr-Portfolio\DelaCruz_CV.pdf'; // Relative path from your HTML file
            link.download = 'Cyril_DelaCruz_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            alert('Please view this on a live server. Local file access is blocked by browsers.');
            console.error('Download error:', error);
        }
    });