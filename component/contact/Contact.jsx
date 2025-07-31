import React, { useState } from 'react';
import axios from 'axios';
import './contact.css';

// Constants
const API_CONFIG = {
  DISCORD_WEBHOOK_URL: 'https://discord.com/api/webhooks/1400098120112799816/bIAvZN89LGwkSbEOsv-Zur4Em18fY7KpwdMJ_4_IM-Hwe0hAAA0L7heBmbtGHefp-KdL', // Replace with your Discord webhook URL
  HEADERS: {
    'Content-Type': 'application/json'
  }
};

const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
};

// Discord message formatter
const formatDiscordMessage = (formData) => {
  return {
    embeds: [{
      title: "📧 New Contact Form Submission",
      color: 0x00ff00, // Green color
      fields: [
        {
          name: "👤 Name",
          value: `${formData.firstName} ${formData.lastName}`,
          inline: true
        },
        {
          name: "📧 Email",
          value: formData.email,
          inline: true
        },
        {
          name: "📱 Phone",
          value: formData.phone || "Not provided",
          inline: true
        },
        {
          name: "💬 Message",
          value: formData.message,
          inline: false
        }
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Contact Form Submission from MBuilds Dev"
      }
    }]
  };
};

// Icons Components
const CompanyIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

// Sub-components
const ContactHeader = () => (
  <div className="contact-header">
    <h1 className="contact-title">Contact Us</h1>
    <p className="contact-subtitle">
      We use an agile approach to test assumptions and connect
      with the needs of your audience early and often.
    </p>
  </div>
);

const MessageDisplay = ({ message, type }) => {
  if (!message) return null;
  
  return (
    <div className={`message ${type}`}>
      {message}
    </div>
  );
};

const FormInput = ({ label, id, type = "text", placeholder, value, onChange, required = false }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-input"
      required={required}
    />
  </div>
);

const FormTextarea = ({ label, id, placeholder, value, onChange, required = false }) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">{label}</label>
    <textarea
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="form-textarea"
      required={required}
    />
  </div>
);

const TermsAndConditions = () => (
  <div className="terms-container">
    <p className="terms-text">
      By submitting this form you agree to our{' '}
      <a href="#" className="terms-link">terms and conditions</a> and our{' '}
      <a href="#" className="terms-link">privacy policy</a> which explains how we may
      collect, use and disclose your personal information including to third parties.
    </p>
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <button 
    type="submit" 
    className="submit-btn bg-red-700"
    disabled={isSubmitting}
  >
    {isSubmitting ? (
      <>
        <span className="loading"></span>
        Sending...
      </>
    ) : (
      'Send message'
    )}
  </button>
);

const InfoSection = ({ icon, title, children }) => (
  <div className="info-section">
    <div className="info-icon">
      {icon}
    </div>
    <div className="info-content">
      <h3 className="info-title">{title}</h3>
      {children}
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="contact-info-sidebar">
    <InfoSection icon={<CompanyIcon />} title="MBuilds Dev :">
      <p className="info-text">Vikum Kavinda Narangoda</p>
      <p className="info-text">Tax id: US2355874</p>
    </InfoSection>

    <InfoSection icon={<LocationIcon />} title="Address :">
      <p className="info-text">8A, NewTown,</p>
      <p className="info-text">Kataragama [91400] - SriLanka</p>
    </InfoSection>

    <InfoSection icon={<PhoneIcon />} title="Call us :">
      <p className="info-text">
        Call me to let's work Together.
      </p>
      <a href="tel:+94758281603" className="phone-link">+94 75 828 1603 / +94 70 379 6854</a>
    </InfoSection>

    {/* Social Links */}
    <div className="social-links">
      <a 
        href="https://www.linkedin.com/in/vikum-kavinda-519683217/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <LinkedInIcon />
      </a>
      <a 
        href="https://github.com/kavindamnky" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <GitHubIcon />
      </a>
    </div>
  </div>
);

// Main Contact Component
const Contact = () => {
  // State Management
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Event Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
  };

  const setSuccessMessage = () => {
    setSubmitMessage('Thank you! Your message has been sent successfully!.');
    setMessageType('success');
    resetForm();
  };

  const setErrorMessage = (message = 'Something went wrong. Please try again.') => {
    setSubmitMessage(message);
    setMessageType('error');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');
   
    // Format data for Discord
    const discordPayload = formatDiscordMessage(formData);

    try {
      const response = await axios.post(API_CONFIG.DISCORD_WEBHOOK_URL, discordPayload, {
        headers: API_CONFIG.HEADERS
      });

      // Discord webhooks return 204 on success
      if (response.status === 204) {
        setSuccessMessage();
      } else {
        setErrorMessage();
      }
    } catch (error) {
      console.error('Discord webhook error:', error);
      if (error.response?.status === 429) {
        setErrorMessage('Too many requests. Please wait a moment and try again.');
      } else if (error.response?.status === 404) {
        setErrorMessage('Webhook not found. Please contact support.');
      } else if (error.response?.status === 400) {
        setErrorMessage('Invalid data format. Please check your inputs.');
      } else {
        setErrorMessage('An error occurred while sending your message. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render
  return (
    <div id="contactid" className="contact-container bg-gray-950">
      <div className="contact-wrapper">
        <ContactHeader />

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container bg-gray-900">
            <form className="contact-form" onSubmit={handleSubmit}>
              <MessageDisplay message={submitMessage} type={messageType} />

              {/* Name Fields Row */}
              <div className="form-row">
                <FormInput
                  label="First Name"
                  id="firstName"
                  placeholder="Bonnie"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Last Name"
                  id="lastName"
                  placeholder="Green"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email and Phone Row */}
              <div className="form-row">
                <FormInput
                  label="Your email"
                  id="email"
                  type="email"
                  placeholder="name@flowbite.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  placeholder="+12 345 6789"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Message Field */}
              <FormTextarea
                label="Your message"
                id="message"
                placeholder="Leave a comment..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <TermsAndConditions />
              <SubmitButton isSubmitting={isSubmitting} />
            </form>
          </div>

          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
