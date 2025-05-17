const hamburger = document.getElementById('hamburger');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const menuClose = document.getElementById('menu-close');
const hamburgerLines = document.querySelectorAll('#hamburger .line');

function animateHamburger(open) {
  if (open) {
    hamburgerLines.forEach((line, index) => {
      line.style.position = 'relative'; // Ensure relative for top
      line.style.top = `${104.6 + index * 32}px`; // Slide down spacing
    });
  } else {
    hamburgerLines.forEach(line => {
      line.style.top = `0px`; // Reset
    });
  }
}

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

  animateHamburger(open); // Trigger animation
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