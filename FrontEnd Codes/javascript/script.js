// Blog Carousel Functionality
document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides and remove active from dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Show the desired slide and activate the corresponding dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Initial call to show the first slide
    showSlide(currentSlide);

    // Auto-play
    setInterval(nextSlide, 5000);

    // Optional: Clickable dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

// after you define prevSlide and nextSlide:
// document.getElementById('blog-prev')?.addEventListener('click', prevSlide);
// document.getElementById('blog-next')?.addEventListener('click', nextSlide);


// FAQ Toggle Functionality
function toggleFaq(element) {
    const item = element.parentElement;
    const answer = item.querySelector('.faq-answer');
    const icon = element.querySelector('i');

    if (item.classList.contains('active')) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
    } else {
        // Close other open FAQs
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
            faq.querySelector('.faq-answer').style.maxHeight = null;
            faq.querySelector('i').style.transform = "rotate(0deg)";
        });

        // Open the clicked one
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
    }
}


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function () {
    const animateElements = document.querySelectorAll('.service-card, .blog-card, .faq-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .service-card,
    .blog-card,
    .faq-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .service-card.animate-in,
    .blog-card.animate-in,
    .faq-item.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .service-card:nth-child(2).animate-in {
        transition-delay: 0.1s;
    }
    
    .service-card:nth-child(3).animate-in {
        transition-delay: 0.2s;
    }
    
    .service-card:nth-child(4).animate-in {
        transition-delay: 0.3s;
    }
`;
document.head.appendChild(style);

// Team section indicator functionality
document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.addEventListener('click', function () {
        // Remove active class from all indicators
        document.querySelectorAll('.indicator').forEach(ind => {
            ind.classList.remove('active');
        });

        // Add active class to clicked indicator
        this.classList.add('active');

        // Here you could add logic to change team content based on indicator
        // For this example, we'll just keep the visual feedback
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.borderColor = '#4CAF50';
    });

    card.addEventListener('mouseleave', function () {
        this.style.borderColor = '#f0f0f0';
    });
});

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('mobile-active');
}

// Add mobile menu styles
const mobileStyle = document.createElement('style');
mobileStyle.textContent = `
    @media (max-width: 768px) {
        .nav-menu.mobile-active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 2px 20px rgba(0,0,0,0.1);
            padding: 1rem;
        }
    }
`;
document.head.appendChild(mobileStyle);

//language management
document.addEventListener("DOMContentLoaded", () => {
    const langBtn = document.getElementById("lang-btn");
    const elements = document.querySelectorAll("[data-en][data-ar]");

    // Load saved language or default to English
    let currentLang = localStorage.getItem("lang") || "en";
    applyLanguage(currentLang);

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("lang", currentLang);
        applyLanguage(currentLang);
    });

    function applyLanguage(lang) {
        elements.forEach(el => {
            const text = el.getAttribute(`data-${lang}`);
            if (text) {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                    el.placeholder = text;
                } else {
                    el.textContent = text;
                }
            }
        });

        // Update direction and language
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        // Update button text
        langBtn.textContent = lang === "en" ? "AR" : "EN";

        // Update font
        document.body.style.fontFamily =
            lang === "ar" ? "'Cairo', sans-serif" : "'Oxanium', sans-serif";
    }
});


// Services script
 document.addEventListener("DOMContentLoaded", function() {
            const slides = document.querySelectorAll(".slider-text .slide");
            const dots = document.querySelectorAll(".slider-text .dot");
            let currentIndex = 0;
            const intervalTime = 4000;
            let carouselInterval;

            function showSlide(index) {
                // Remove active class from all slides and dots
                slides.forEach(slide => slide.classList.remove("active"));
                dots.forEach(dot => dot.classList.remove("active"));
                
                // Add active class to current slide and dot
                slides[index].classList.add("active");
                dots[index].classList.add("active");
                
                currentIndex = index;
            }

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                showSlide(currentIndex);
            }

            function startCarousel() {
                carouselInterval = setInterval(nextSlide, intervalTime);
            }

            function stopCarousel() {
                clearInterval(carouselInterval);
            }

            function restartCarousel() {
                stopCarousel();
                startCarousel();
            }

            // Initialize carousel
            showSlide(0);
            
            // Start auto-play after a short delay to ensure everything is loaded
            setTimeout(startCarousel, 100);

            // Dot click navigation
            dots.forEach((dot, index) => {
                dot.addEventListener("click", function() {
                    showSlide(index);
                    restartCarousel();
                });
            });

            // Pause on hover (optional)
            const sliderContainer = document.querySelector(".slider-text");
            sliderContainer.addEventListener("mouseenter", stopCarousel);
            sliderContainer.addEventListener("mouseleave", startCarousel);
        });

// blogs script
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.blog-carousel');
    const track = carousel.querySelector('.blog-container');
    const cards = Array.from(track.children);
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    /* Kill any legacy timers/animations that might auto-run */
    for (let i = 0; i < 500; i++) { clearInterval(i); clearTimeout(i); }
    track.style.animation = 'none';

    let index = 0;

    // Distance between consecutive cards (robust to gaps/margins)
    function stepWidth() {
        if (cards.length < 2) {
            return cards[0]?.getBoundingClientRect().width || 0;
        }
        return cards[1].offsetLeft - cards[0].offsetLeft;
    }

    // How many cards fit in the viewport right now
    function visibleCount() {
        const s = stepWidth() || carousel.clientWidth;
        return Math.max(1, Math.min(cards.length, Math.round(carousel.clientWidth / s)));
    }

    function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

    function update() {
        const maxIndex = Math.max(0, cards.length - visibleCount());
        index = clamp(index, 0, maxIndex);
        track.style.transform = `translateX(${-index * stepWidth()}px)`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === maxIndex;
    }

    function nextSlide() { index++; update(); }
    function prevSlide() { index--; update(); }

    // Support both inline onclick=... and addEventListener
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    window.addEventListener('resize', update);
    update();
});


// Hamburger Toggle

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("toggle"); // for animation
});

// Close menu on nav link click (optional)
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            hamburger.classList.remove("toggle");
        }
    });
});

// Pricing Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for pricing buttons
    const pricingButtons = document.querySelectorAll('.pricing-btn');
    
    pricingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the pricing card type
            const card = this.closest('.pricing-card');
            const isEcommerce = card.classList.contains('pricing-card-light');
            
            // Create contact message based on the selected plan
            let message = '';
            if (isEcommerce) {
                message = 'Hello! I am interested in your E-commerce solution starting at 1500 KWD. Could you please provide more details?';
            } else {
                message = 'Hello! I am interested in your Custom Web Solution starting at 3000 KWD. Could you please provide more details?';
            }
            
            // Redirect to contact page with the message (you can modify this as needed)
            const encodedMessage = encodeURIComponent(message);
            
            // Option 1: Redirect to contact page
            window.location.href = `contact.html?message=${encodedMessage}`;
            
            // Option 2: Open WhatsApp (uncomment if you prefer this)
            // const whatsappNumber = '+96541147331'; // Replace with your actual number
            // const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            // window.open(whatsappUrl, '_blank');
        });
    });
    
    // Add animation to pricing cards on scroll
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    const pricingObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    pricingCards.forEach(card => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        
        // Observe for animation
        pricingObserver.observe(card);
    });
});
// Sm
ooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && hamburger) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
});