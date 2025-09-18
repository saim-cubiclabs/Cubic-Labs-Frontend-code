// Get form reference
const contactForm = document.getElementById('contactForm');

// Handle pre-filled message from pricing section
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    
    if (message) {
        const messageTextarea = document.getElementById('message');
        if (messageTextarea) {
            messageTextarea.value = decodeURIComponent(message);
        }
    }
});

const inputs = contactForm.querySelectorAll('input, textarea');

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

// Add loading animation to submit button
const style = document.createElement('style');
style.textContent = `
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
    `;
document.head.appendChild(style);


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
