// expects window.BLOGS or similar from blogData.js
(function () {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const post = window.BLOGS?.[id];

  const $ = (sel) => document.querySelector(sel);

  if (!post) {
    $('#blog-content').innerHTML = `
      <div class="error">
        <h2>Post not found</h2>
        <a href="index.html#blog-section">Back to Blogs</a>
      </div>`;
    return;
  }

  $('#blog-title').textContent = post.title;
  $('#blog-author').textContent = post.author || 'Cubic Labs Team';
  $('#blog-date').textContent = post.date || '';
  $('#blog-read-time').textContent = post.readTime || '';
  const hero = $('#hero-image');
  if (hero && post.image) hero.src = post.image;

  // tags
  const tagsWrap = $('#blog-tags');
  tagsWrap.innerHTML = (post.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  // content (allow simple HTML)
  $('#blog-content').innerHTML = post.html || `<p>${post.summary || ''}</p>`;

  // prev/next
  const nav = $('#blog-navigation');
  const items = [];
  if (post.prev && window.BLOGS[post.prev]) {
    items.push(`
      <a class="nav-post prev" href="blog-detail.html?id=${post.prev}">
        <div class="nav-post-label"><i class="fas fa-arrow-left"></i> Previous</div>
        <div class="nav-post-title">${window.BLOGS[post.prev].title}</div>
      </a>`);
  }
  if (post.next && window.BLOGS[post.next]) {
    items.push(`
      <a class="nav-post next" href="blog-detail.html?id=${post.next}">
        <div class="nav-post-label">Next <i class="fas fa-arrow-right"></i></div>
        <div class="nav-post-title">${window.BLOGS[post.next].title}</div>
      </a>`);
  }
  nav.innerHTML = items.join('');
})();





document.addEventListener('DOMContentLoaded', function() {
  // Language management
  const langBtn = document.getElementById("lang-btn");
  const elements = document.querySelectorAll("[data-en][data-ar]");
  
  // Load saved language or default to English
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

    // Update direction and language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Update button text
    langBtn.textContent = lang === "en" ? "AR" : "EN";

    // Update font
    document.body.style.fontFamily =
      lang === "ar" ? "'Cairo', sans-serif" : "'Oxanium', sans-serif";
  }

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    localStorage.setItem("lang", currentLang);
    applyLanguage(currentLang);
    loadBlogContent(); // Reload content in new language
  });

  // Get blog ID from URL
  function getBlogIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  // Load and display blog content
  function loadBlogContent() {
    const blogId = getBlogIdFromUrl();
    
    if (!blogId) {
      showError();
      return;
    }

    const blog = getBlogPost(blogId);
    
    if (!blog) {
      showError();
      return;
    }

    // Update page title
    document.title = `${blog.title[currentLang]} - Cubic Labs`;

    // Update hero section
    document.getElementById('hero-image').src = blog.image;
    document.getElementById('blog-title').textContent = blog.title[currentLang];
    document.getElementById('blog-author').textContent = blog.author;
    document.getElementById('blog-date').textContent = blog.date;
    document.getElementById('blog-read-time').textContent = blog.readTime;

    // Update tags
    const tagsContainer = document.getElementById('blog-tags');
    tagsContainer.innerHTML = blog.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Update content
    const contentContainer = document.getElementById('blog-content');
    const contentParagraphs = blog.content[currentLang];
    contentContainer.innerHTML = contentParagraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

    // Update navigation
    updateBlogNavigation(blogId);
  }

  // Update blog navigation (previous/next posts)
  function updateBlogNavigation(currentId) {
    const allPosts = getAllBlogPosts();
    const currentIndex = allPosts.findIndex(post => post.id === currentId);
    const navigationContainer = document.getElementById('blog-navigation');
    
    let navigationHTML = '';

    // Previous post
    if (currentIndex > 0) {
      const prevPost = allPosts[currentIndex - 1];
      navigationHTML += `
        <a href="blog-detail.html?id=${prevPost.id}" class="nav-post prev">
          <div class="nav-post-label">
            <i class="fas fa-arrow-left"></i>
            <span data-en="Previous Post" data-ar="المقال السابق">Previous Post</span>
          </div>
          <div class="nav-post-title">${prevPost.title[currentLang]}</div>
        </a>
      `;
    } else {
      navigationHTML += '<div></div>'; // Empty div for grid alignment
    }

    // Next post
    if (currentIndex < allPosts.length - 1) {
      const nextPost = allPosts[currentIndex + 1];
      navigationHTML += `
        <a href="blog-detail.html?id=${nextPost.id}" class="nav-post next">
          <div class="nav-post-label">
            <span data-en="Next Post" data-ar="المقال التالي">Next Post</span>
            <i class="fas fa-arrow-right"></i>
          </div>
          <div class="nav-post-title">${nextPost.title[currentLang]}</div>
        </a>
      `;
    }

    navigationContainer.innerHTML = navigationHTML;

    // Apply language to new elements
    applyLanguage(currentLang);
  }

  // Show error message
  function showError() {
    const contentContainer = document.getElementById('blog-content');
    contentContainer.innerHTML = `
      <div class="error">
        <h2 data-en="Blog Post Not Found" data-ar="المقال غير موجود">Blog Post Not Found</h2>
        <p data-en="Sorry, the blog post you're looking for doesn't exist." data-ar="عذرًا، المقال الذي تبحث عنه غير موجود.">Sorry, the blog post you're looking for doesn't exist.</p>
        <a href="index.html#blog-section" data-en="Return to Blog Section" data-ar="العودة لقسم المدونة">Return to Blog Section</a>
      </div>
    `;
    
    // Hide hero section
    document.getElementById('blog-hero').style.display = 'none';
    
    applyLanguage(currentLang);
  }

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

  // Initialize
  applyLanguage(currentLang);
  loadBlogContent();
});


