// Global variables
let articles = {};
let chatMessages = [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializeArticles();
    setupSmoothScrolling();
});

// Initialize knowledge base articles
function initializeArticles() {
    articles = {
        'web-hosting': {
            title: 'Website Hosting Issues',
            content: `
                <h4>Common Hosting Issues and Solutions</h4>
                <p><strong>1. Website Not Loading:</strong></p>
                <ul>
                    <li>Check DNS settings and propagation</li>
                    <li>Verify hosting server status</li>
                    <li>Clear browser cache and try different browsers</li>
                </ul>
                <p><strong>2. Slow Loading Times:</strong></p>
                <ul>
                    <li>Optimize images and media files</li>
                    <li>Enable caching and compression</li>
                    <li>Review hosting plan resources</li>
                </ul>
                <p><strong>3. SSL Certificate Issues:</strong></p>
                <ul>
                    <li>Verify SSL certificate installation</li>
                    <li>Check certificate expiration date</li>
                    <li>Update mixed content references</li>
                </ul>
            `
        },
        'web-performance': {
            title: 'Website Performance Optimization',
            content: `
                <h4>Performance Optimization Guide</h4>
                <p><strong>Image Optimization:</strong></p>
                <ul>
                    <li>Use appropriate image formats (WebP, JPEG, PNG)</li>
                    <li>Compress images without quality loss</li>
                    <li>Implement lazy loading for images</li>
                </ul>
                <p><strong>Code Optimization:</strong></p>
                <ul>
                    <li>Minify CSS, JavaScript, and HTML</li>
                    <li>Remove unused code and plugins</li>
                    <li>Use efficient coding practices</li>
                </ul>
                <p><strong>Caching Strategies:</strong></p>
                <ul>
                    <li>Implement browser caching</li>
                    <li>Use CDN for static assets</li>
                    <li>Configure server-side caching</li>
                </ul>
            `
        },
        'app-store': {
            title: 'App Store Submission Guidelines',
            content: `
                <h4>App Store Submission Process</h4>
                <p><strong>Pre-submission Checklist:</strong></p>
                <ul>
                    <li>Test app thoroughly on multiple devices</li>
                    <li>Prepare app screenshots and descriptions</li>
                    <li>Create app icon in required sizes</li>
                    <li>Ensure compliance with store guidelines</li>
                </ul>
                <p><strong>Common Rejection Reasons:</strong></p>
                <ul>
                    <li>Crashes or major bugs</li>
                    <li>Incomplete app information</li>
                    <li>Inappropriate content</li>
                    <li>Non-functional features</li>
                </ul>
                <p><strong>After Submission:</strong></p>
                <ul>
                    <li>Monitor review status</li>
                    <li>Respond to reviewer feedback</li>
                    <li>Prepare for potential updates</li>
                </ul>
            `
        },
        'brand-assets': {
            title: 'Brand Asset Downloads',
            content: `
                <h4>Accessing Your Brand Assets</h4>
                <p><strong>Available Assets:</strong></p>
                <ul>
                    <li>Logo variations (PNG, SVG, EPS)</li>
                    <li>Color palette files</li>
                    <li>Typography specifications</li>
                    <li>Brand guidelines document</li>
                </ul>
                <p><strong>Download Instructions:</strong></p>
                <ul>
                    <li>Access your client portal</li>
                    <li>Navigate to the "Assets" section</li>
                    <li>Select and download required files</li>
                </ul>
                <p><strong>Usage Guidelines:</strong></p>
                <ul>
                    <li>Maintain minimum clear space around logos</li>
                    <li>Use approved color combinations only</li>
                    <li>Don't modify or distort brand elements</li>
                </ul>
            `
        },
        'ecom-payments': {
            title: 'Payment Processing Setup',
            content: `
                <h4>E-commerce Payment Configuration</h4>
                <p><strong>Supported Payment Methods:</strong></p>
                <ul>
                    <li>Credit/Debit Cards (Visa, MasterCard, AmEx)</li>
                    <li>PayPal and digital wallets</li>
                    <li>Bank transfers and ACH payments</li>
                    <li>Cryptocurrency (upon request)</li>
                </ul>
                <p><strong>Security Features:</strong></p>
                <ul>
                    <li>PCI DSS compliance</li>
                    <li>SSL encryption for all transactions</li>
                    <li>Fraud detection and prevention</li>
                    <li>Secure tokenization</li>
                </ul>
                <p><strong>Setup Process:</strong></p>
                <ul>
                    <li>Configure payment gateway settings</li>
                    <li>Test transactions in sandbox mode</li>
                    <li>Set up webhooks for notifications</li>
                    <li>Enable production mode</li>
                </ul>
            `
        }
    };
}

// Smooth scrolling for navigation
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
}

// FAQ toggle functionality
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Search functionality
function searchKnowledgeBase() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    // Simple search through articles
    const results = [];
    for (let key in articles) {
        const article = articles[key];
        if (article.title.toLowerCase().includes(searchTerm) || 
            article.content.toLowerCase().includes(searchTerm)) {
            results.push(key);
        }
    }
    
    if (results.length > 0) {
        showArticle(results[0]);
    } else {
        alert('No articles found for your search. Please try a different term or contact support.');
    }
}

// Show article in modal
function showArticle(articleId) {
    const article = articles[articleId];
    if (!article) {
        alert('Article not found');
        return;
    }
    
    document.getElementById('articleTitle').textContent = article.title;
    document.getElementById('articleContent').innerHTML = article.content;
    document.getElementById('articleModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('articleModal').style.display = 'none';
}

// Chat functionality
function openChat() {
    document.getElementById('chatWidget').style.display = 'flex';
}

function closeChat() {
    document.getElementById('chatWidget').style.display = 'none';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate bot response
    setTimeout(() => {
        const responses = [
            "Thank you for your message. A support agent will be with you shortly.",
            "I understand your concern. Let me connect you with the right team member.",
            "That's a great question! Let me look into that for you.",
            "I can help you with that. Could you provide more details?",
            "Thank you for reaching out. Our team will review this and get back to you."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, 'bot');
    }, 1000);
}

function addChatMessage(message, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Support ticket submission
function submitTicket(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const ticket = {
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'),
        priority: formData.get('priority'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        timestamp: new Date().toISOString()
    };
    
    // Simulate ticket submission
    console.log('Ticket submitted:', ticket);
    
    // Show success message
    alert('Support ticket submitted successfully! We\'ll get back to you within 4 hours during business hours.');
    
    // Reset form
    event.target.reset();
}

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function callSupport() {
    if (confirm('Call + (965) 41147331?')) {
        window.location.href = 'tel:+965 41147331';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('articleModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle window resize for responsive chat widget
window.addEventListener('resize', function() {
    const chatWidget = document.getElementById('chatWidget');
    if (window.innerWidth <= 480 && chatWidget.style.display === 'flex') {
        // Adjust chat widget for mobile
        chatWidget.style.width = 'calc(100% - 20px)';
        chatWidget.style.height = '70vh';
    }
});

// Initialize tooltips and other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to buttons
    const buttons = document.querySelectorAll('button, .action-card');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Simulate typing indicator for chat
function showTypingIndicator() {
    const messagesContainer = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing';
    typingDiv.innerHTML = '<p>Agent is typing...</p>';
    typingDiv.id = 'typingIndicator';
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    setTimeout(() => {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    }, 2000);
}


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
