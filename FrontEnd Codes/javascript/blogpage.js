// // blogpage.js
// import { blogData } from './blogData.js';

// const container = document.getElementById('blog-container');

// blogData.forEach(post => {
//   const div = document.createElement('div');
//   div.className = "blog-post";
//   div.innerHTML = `
//     <h2>${post.title}</h2>
//     <p>${post.content}</p>
//   `;
//   container.appendChild(div);
// });


// blogpage.js
import { blogData } from "./blogData.js";  // assuming blogData is exported

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const blogId = params.get("id");

  const blog = blogData.find(b => b.id === blogId);

  if (blog) {
    document.querySelector(".blog-title").textContent = blog.title;
    document.querySelector(".blog-content").textContent = blog.content;
    // etc...
  } else {
    document.querySelector(".blog-container").innerHTML = "<p>Blog not found.</p>";
  }
});



