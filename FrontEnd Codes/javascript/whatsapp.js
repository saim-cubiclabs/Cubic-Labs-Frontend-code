// javascript/whatsapp.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("a");
  btn.href = "https://wa.me/96541147331"; // Replace with your WhatsApp number
  btn.target = "_blank";
  btn.innerText = "💬 WhatsApp";
  btn.style.cssText = `
    position:fixed;
    bottom:20px;
    right:20px;
    background:#25D366;
    color:white;
    padding:12px 18px;
    border-radius:30px;
    text-decoration:none;
    font-family:sans-serif;
    font-size:16px;
    box-shadow:0 2px 6px rgba(0,0,0,0.2);
    z-index:1000;
  `;
  document.body.appendChild(btn);
});
