// Enhanced blog functionality for main page
document.addEventListener("DOMContentLoaded", () => {
  const blogCards = document.querySelectorAll(".blog-card");

  blogCards.forEach(card => {
    card.addEventListener("click", () => {
      const blogId = card.getAttribute("data-blog-id");
      // Redirect to blog detail page with query parameter
      window.location.href = `blog.html?id=${blogId}`;
    });
  });
});

document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.blogId; // e.g. "startup-branding"
    if (id) {
      window.location.href = `/blog-detail.html?id=${encodeURIComponent(id)}`;
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Make blog cards clickable
  function makeBlogCardsClickable() {
    const blogCards = document.querySelectorAll('.blog-card');
    const blogIds = ['startup-branding', 'automation-2025', 'web-vs-mobile', 'ux-cost', 'scalable-app-6-weeks'];
    
    blogCards.forEach((card, index) => {
      if (blogIds[index]) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
          window.location.href = `blog-detail.html?id=${blogIds[index]}`;
        });
        
        // Add hover effect for better UX
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-8px) scale(1.02)';
          this.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(-6px) scale(1.02)';
          this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        });
      }
    });
  }

  // Blog carousel functionality (enhanced from original)
  const carousel = document.querySelector('.blog-carousel');
  if (carousel) {
    const track = carousel.querySelector('.blog-container');
    const cards = Array.from(track.children);
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');

    // Clear any existing animations
    for (let i = 0; i < 500; i++) { 
      clearInterval(i); 
      clearTimeout(i); 
    }
    track.style.animation = 'none';

    let index = 0;

    function stepWidth() {
      if (cards.length < 2) {
        return cards[0]?.getBoundingClientRect().width || 0;
      }
      return cards[1].offsetLeft - cards[0].offsetLeft;
    }

    function visibleCount() {
      const s = stepWidth() || carousel.clientWidth;
      return Math.max(1, Math.min(cards.length, Math.round(carousel.clientWidth / s)));
    }

    function clamp(v, min, max) { 
      return Math.max(min, Math.min(max, v)); 
    }

    function update() {
      const maxIndex = Math.max(0, cards.length - visibleCount());
      index = clamp(index, 0, maxIndex);
      track.style.transform = `translateX(${-index * stepWidth()}px)`;
      
      if (prevBtn) prevBtn.disabled = index === 0;
      if (nextBtn) nextBtn.disabled = index === maxIndex;
    }

    function nextSlide() { 
      index++; 
      update(); 
    }
    
    function prevSlide() { 
      index--; 
      update(); 
    }

    // Event listeners
    if (nextBtn) {
      nextBtn.addEventListener('click', nextSlide);
      window.nextSlide = nextSlide; // For inline onclick
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', prevSlide);
      window.prevSlide = prevSlide; // For inline onclick
    }

    window.addEventListener('resize', update);
    update();
  }

  // Initialize clickable cards
  makeBlogCardsClickable();

  // Language management for main page
  const langBtn = document.getElementById("lang-btn");
  const elements = document.querySelectorAll("[data-en][data-ar]");

  let currentLang = localStorage.getItem("lang") || "en";

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

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    langBtn.textContent = lang === "en" ? "AR" : "EN";
    document.body.style.fontFamily = lang === "ar" ? "'Cairo', sans-serif" : "'Oxanium', sans-serif";
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "ar" : "en";
      localStorage.setItem("lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  applyLanguage(currentLang);
});


// // Hamburger Toggle

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click", () => {
//     navMenu.classList.toggle("active");
//     hamburger.classList.toggle("toggle"); // for animation
// });

// // Close menu on nav link click (optional)
// document.querySelectorAll(".nav-link").forEach(link => {
//     link.addEventListener("click", () => {
//         if (navMenu.classList.contains("active")) {
//             navMenu.classList.remove("active");
//             hamburger.classList.remove("toggle");
//         }
//     });
// });
