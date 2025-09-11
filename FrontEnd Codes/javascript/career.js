// Careers Page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Application Form Handler
    const applicationForm = document.getElementById('applicationForm');

    applicationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(applicationForm);
        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            cv: formData.get('cv'),
            portfolio: formData.get('portfolio'),
            comments: formData.get('comments')
        };

        // Simulate form submission
        const submitBtn = applicationForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;

        // Simulate API call delay
        setTimeout(() => {
            alert('Thank you for your application! We\'ll review your profile and get back to you soon.');
            applicationForm.reset();
            updateFileLabels();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);

        console.log('Application submitted with data:', data);
    });

    // File upload handling
    const fileInputs = document.querySelectorAll('input[type="file"]');

    fileInputs.forEach(input => {
        input.addEventListener('change', function () {
            const label = this.parentNode.querySelector('.file-label span');
            if (this.files.length > 0) {
                label.textContent = this.files[0].name;
                label.style.color = '#4285f4';
            } else {
                updateFileLabels();
            }
        });
    });

    function updateFileLabels() {
        const cvLabel = document.querySelector('label[for="cv"] span');
        const portfolioLabel = document.querySelector('label[for="portfolio"] span');

        cvLabel.textContent = 'Attach your CV';
        cvLabel.style.color = '#666';

        portfolioLabel.textContent = 'Choose File';
        portfolioLabel.style.color = '#666';
    }

    // Apply Now button handlers
    const applyButtons = document.querySelectorAll('.apply-btn');

    applyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const jobCard = this.closest('.job-card');
            const jobTitle = jobCard.querySelector('h3').textContent;

            // Scroll to application form
            document.querySelector('.application-section').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Pre-fill comments with job title
            setTimeout(() => {
                const commentsField = document.getElementById('comments');
                commentsField.value = `I am interested in applying for the ${jobTitle} position.`;
                commentsField.focus();
            }, 800);
        });
    });

    // Enhanced culture card hover effects
    const cultureCards = document.querySelectorAll('.culture-card');

    cultureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            // Add ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                border-radius: 50%;
                background: rgba(66, 133, 244, 0.1);
                transform: translate(-50%, -50%);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
                z-index: 1;
            `;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 300px;
                height: 300px;
                opacity: 0;
            }
        }
        
        .culture-card {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Smooth scrolling for anchor links
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
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.culture-card, .job-card, .application-form').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });

    // Form validation enhancements
    const inputs = applicationForm.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });

    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        field.classList.remove('error');

        // Validation rules
        switch (field.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email address';
                }
                break;
            case 'tel':
                const phoneRegex = /^[\+]?[\d\s\-\(\)]+$/;
                if (value && !phoneRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid phone number';
                }
                break;
            case 'file':
                if (field.required && field.files.length === 0) {
                    isValid = false;
                    errorMessage = 'Please select a file';
                }
                break;
            default:
                if (field.required && !value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                }
        }

        if (!isValid) {
            field.classList.add('error');
            field.style.borderColor = '#e53e3e';
            showFieldError(field, errorMessage);
        } else {
            field.style.borderColor = '#e2e8f0';
            hideFieldError(field);
        }

        return isValid;
    }

    function showFieldError(field, message) {
        hideFieldError(field); // Remove existing error

        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.color = '#e53e3e';
        errorDiv.style.fontSize = '12px';
        errorDiv.style.marginTop = '5px';

        field.parentNode.appendChild(errorDiv);
    }

    function hideFieldError(field) {
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    // Building animation on scroll
    const buildings = document.querySelectorAll('.building');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        buildings.forEach((building, index) => {
            const speed = (index + 1) * 0.1;
            building.style.transform = `translateY(${rate * speed}px)`;
        });
    });

    // Add loading animation styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
        
        .submit-btn.loading::after {
            content: '';
            width: 16px;
            height: 16px;
            margin-left: 10px;
            border: 2px solid transparent;
            border-top-color: #ffffff;
            border-radius: 50%;
            display: inline-block;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .field-error {
            animation: fadeInError 0.3s ease-out;
        }
        
        @keyframes fadeInError {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .culture-card:hover .card-icon {
            animation: bounce 0.6s ease-in-out;
        }
        
        @keyframes bounce {
            0%, 20%, 60%, 100% {
                transform: translateY(0) scale(1.1) rotateY(10deg);
            }
            40% {
                transform: translateY(-10px) scale(1.15) rotateY(15deg);
            }
            80% {
                transform: translateY(-5px) scale(1.12) rotateY(12deg);
            }
        }
    `;
    document.head.appendChild(loadingStyle);
});


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