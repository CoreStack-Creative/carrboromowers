const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuClose = document.getElementById('menu-close');

function toggleMenu(open) {
  if (open) {
    hamburger.classList.add('active');
    sideMenu.classList.add('active');
    overlay.style.display = 'block';
  } else {
    hamburger.classList.remove('active');
    sideMenu.classList.remove('active');
    overlay.style.display = 'none';
  }
}

hamburger.addEventListener('click', () => {
  toggleMenu(!sideMenu.classList.contains('active'));
});

overlay.addEventListener('click', () => {
  toggleMenu(false);
});

menuClose.addEventListener('click', () => {
  toggleMenu(false);
});

document.addEventListener("DOMContentLoaded", function () {
  // Animate quote box
  const quoteBox = document.getElementById("quote-box");
  if (quoteBox) {
    setTimeout(() => {
      quoteBox.classList.add("show");
    }, 300);
  }

  // Animate feature boxes one-by-one
  const features = [1, 2, 3];
  features.forEach((num, i) => {
    const box = document.getElementById(`feature-${num}`);
    if (box) {
      setTimeout(() => {
        box.classList.add("show");
      }, 700 + i * 400);
    }
  });
});