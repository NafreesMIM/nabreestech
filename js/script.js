// Form submission (example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent! We’ll contact you soon.');
  this.reset();
});