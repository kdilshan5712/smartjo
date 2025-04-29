document.addEventListener('DOMContentLoaded', () => {
  // Preorder Button
  const buyButton = document.getElementById('buyButton');
  if (buyButton) {
    buyButton.addEventListener('click', () => {
      window.location.href = "https://your-preorder-link.com"; // Replace with real link
    });
  }

  // Mobile Menu Toggle
  const toggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // WhatsApp Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      const phoneNumber = "94783946275"; // Change to your number
      const fullMessage = `Hello! I'm ${name} (${email})%0A${message}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

      window.open(whatsappURL, '_blank');
    });
  }
});
