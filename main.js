// Toggle Menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const contactBtn = document.querySelector('.button');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => n.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
}));

// Scroll Spy for Navigation Highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const navItem = document.querySelector(`.nav__menu a[href*='${sectionId}']`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItem.classList.add('active-link');
    } else {
      navItem.classList.remove('active-link');
    }
  });
});

// Contact Button Popup
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    alert('Email: praveensp7205@gmail.com\nPhone: +91 6383449663\nLinkedIn: linkedin.com/in/praveen-s-1a7428324');
  });
}

// Dark/Light Theme Toggle
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('portfolio-theme', newTheme);
}

// Load Saved Theme on Page Load
window.onload = function () {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
};
