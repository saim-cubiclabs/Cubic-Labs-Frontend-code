// Carousel functionality
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".service-dots .dot");
let index = 0;
const intervalTime = 4000;
let carouselInterval;

function showSlide(i) {
  items.forEach((item, idx) => {
    item.classList.toggle("active", idx === i);
    dots[idx].classList.toggle("active", idx === i);
  });
  index = i;
}

function nextSlide() {
  let newIndex = (index + 1) % items.length;
  showSlide(newIndex);
}

// Auto scroll
carouselInterval = setInterval(nextSlide, intervalTime);

// Click dots to change slide
dots.forEach((dot, idx) => {
  dot.addEventListener("click", () => {
    showSlide(idx);
    clearInterval(carouselInterval);
    carouselInterval = setInterval(nextSlide, intervalTime);
  });
});

// Start with first slide
showSlide(index);


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
