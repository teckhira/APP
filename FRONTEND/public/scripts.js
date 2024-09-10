// Initialize emailjs
emailjs.init("TtC3DtqhiM_wXwros"); // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailError = document.getElementById('emailError');
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
    } else {
        emailError.textContent = '';
    }

    // Validate phone number
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (phoneInput.value.trim() === '') {
        phoneError.textContent = 'Phone number is required.';
        return;
    } else {
        phoneError.textContent = '';
    }

    // Send email using EmailJS
    emailjs.sendForm('service_i5smpeh', 'template_dsnckps', form)
        .then(function(response) {
            console.log('Success:', response);
            document.getElementById('successMessage').textContent = 'Your message has been sent successfully!';
            form.reset(); // Clear form after successful submission
        }, function(error) {
            console.error('Error:', error);
            document.getElementById('successMessage').textContent = 'There was an error sending your message. Please try again.';
        });
});


