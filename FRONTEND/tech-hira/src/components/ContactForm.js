import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './style/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    return phone.length >= 10; // Basic validation for phone numbers
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Validate email and phone
    if (!validateEmail(formData.email)) {
      formErrors.email = 'Invalid email address';
    }
    if (!validatePhone(formData.phone)) {
      formErrors.phone = 'Invalid phone number';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});

    // Send email using EmailJS
    emailjs.send(
      'service_i5smpeh', // Replace with your EmailJS Service ID
      'template_dsnckps', // Replace with your EmailJS Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        phone: formData.phone,
      },
      'TtC3DtqhiM_wXwros' // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Message sent successfully!');
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setErrors({ email: 'There was a problem sending the email. Please try again later.' });
    });
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="error-message">{errors.email}</div>}

        <label htmlFor="phone">Phone:</label>
        <div className="phone-input-container">
          <PhoneInput
            country={'us'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true,
            }}
          />
        </div>
        {errors.phone && <div className="error-message">{errors.phone}</div>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {successMessage && <div className="success-message">{successMessage}</div>}
      </form>
    </div>
  );
};

export default ContactForm;
