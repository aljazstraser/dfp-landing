import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage('');

    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        setStatusMessage(data.message || 'Message sent successfully!');
        // Reset form
        e.target.reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
          setStatusMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row tp-gx-10">
          <div className="col-md-12">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Name*"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <input
                name="company"
                type="text"
                placeholder="Company*"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email*"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Message*"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
          </div>
          {submitStatus && (
            <div className="col-md-12">
              <div style={{
                padding: '12px 16px',
                borderRadius: '4px',
                marginBottom: '20px',
                backgroundColor: submitStatus === 'success' ? '#d4edda' : '#f8d7da',
                color: submitStatus === 'success' ? '#155724' : '#721c24',
                border: `1px solid ${submitStatus === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
                fontSize: '14px'
              }}>
                {statusMessage}
              </div>
            </div>
          )}
          <div className="tp-contact-btn mt-10" style={{display: 'flex', gap: '16px'}}>
            <button 
              type="submit" 
              className="tp-btn" 
              name="action" 
              value="demo"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Request Demo'}
            </button>
            <button 
              type="submit" 
              className="tp-btn" 
              name="action" 
              value="investor"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Investor Contact'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
