document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is connected!');

    // Highlight active menu item
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Display form data in console (this can be changed to send the data to a server)
        console.log('Form Data:', { name, email, message });

        // Clear form
        contactForm.reset();
        alert('Your message has been sent!');
    });
});
