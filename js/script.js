// Dark/Light Mode Toggle
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

// Check for saved user preference or use system preference
const savedMode = localStorage.getItem('mode');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedMode === 'dark' || (!savedMode && systemPrefersDark)) {
  body.classList.add('dark-mode');
  modeToggle.textContent = '☀️';
}

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  modeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('mode', isDark ? 'dark' : 'light');
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
}

// Scroll Animations
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-box, .pricing-card, .add-on-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    if (body.classList.contains('dark-mode')) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
  } else {
    header.style.boxShadow = 'none';
  }
});