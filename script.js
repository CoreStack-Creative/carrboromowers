const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sideMenu.classList.toggle('active');
  overlay.style.display = sideMenu.classList.contains('active') ? 'block' : 'none';
});

overlay.addEventListener('click', () => {
  hamburger.classList.remove('active');
  sideMenu.classList.remove('active');
  overlay.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  const quoteBox = document.getElementById("quote-box");
  if (quoteBox) {
    setTimeout(() => {
      quoteBox.classList.add("show");
    }, 300); // Slight delay for a smooth entrance
  }
});
