document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Navbar yüksekliğini hesaba katmak için scroll offset
                const headerOffset = 100; 
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // FIX: Add animation on scroll (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' 
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Sadece 'animate-in' sınıfını ekleyerek CSS animasyonunu tetikle
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Animasyon 1 kez çalışsın
            }
        });
    }, observerOptions);

    // Observe all relevant elements
    const elementsToAnimate = document.querySelectorAll('.info-card, .about-card, .learning-card, .step-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Add loading animation to images
    const images = document.querySelectorAll('.floating-card img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        this.style.transition = 'all 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });

    // Add hover effects to table rows
    const tableRows = document.querySelectorAll('.tech-table tr');
    tableRows.forEach(row => {
        row.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Typewriter effect for hero title & subtitle
    function typeWriter(element, text, speed = 100, callback) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    if (heroTitle && heroSubtitle) {
        const originalTitleText = heroTitle.textContent;
        const originalSubtitleText = heroSubtitle.textContent;

        heroTitle.textContent = '';
        heroSubtitle.textContent = '';

        typeWriter(heroTitle, originalTitleText, 80, () => {
             setTimeout(() => {
                 typeWriter(heroSubtitle, originalSubtitleText, 50);
             }, 500);
        });
    }
    
    // Ripple effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            const existingRipple = this.querySelector('.ripple');
            if (existingRipple) existingRipple.remove();

            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add PARALLAX effect to background elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card, .floating-product, .hero-image');
    
    parallaxElements.forEach(element => {
        const speed = element.classList.contains('hero-image') ? 0.2 : 0.4;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);