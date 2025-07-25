// Theme toggle functionality
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  toggleBtn.textContent = isDark ? '☀' : '🌙';
  
  // Save preference to localStorage
  localStorage.setItem('darkMode', isDark);
});

// Check for saved theme preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-theme');
  toggleBtn.textContent = '☀';
}
// Add this to your existing JavaScript file
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('active');
  } else {
    backToTopButton.classList.remove('active');
  }
});
// Typewriter Effect
const typewriterElement = document.querySelector('.typewriter');
const texts = JSON.parse(typewriterElement.getAttribute('data-texts'));
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  
  typewriterElement.textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 100);
  }
})();