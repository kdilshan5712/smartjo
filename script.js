document.getElementById('buyButton').addEventListener('click', () => {
  window.location.href = "https://your-preorder-link.com"; // Change this to your real link
});

document.getElementById('mobile-menu').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('active');
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const phoneNumber = "94783946275"; 
  
  const fullMessage = `Hello! I'm ${name} (${email})%0A${message}`;
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

  window.open(whatsappURL, '_blank');
});
