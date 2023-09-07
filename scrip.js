const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // You can add code to handle form submission here
    // For this example, we'll just display a message
    alert('Form submitted successfully!');
});
