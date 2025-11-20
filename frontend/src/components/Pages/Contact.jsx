import React, { useState } from "react";
import "./Styles/contactus.css";
import Header from "../Header/Header";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "support@autodealer.com",
      description: "Send us an email anytime",
      action: "mailto:support@autodealer.com",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
      action: "tel:+15551234567",
    },
    // {
    //   icon: "💬",
    //   title: "Live Chat",
    //   details: "Start chatting",
    //   description: "24/7 customer support",
    //   action: "#chat",
    // },
    {
      icon: "🏢",
      title: "Visit Us",
      details: "123 Automotive Ave, City",
      description: "Stop by our headquarters",
      action: "https://maps.google.com",
    },
  ];

  const faqs = [
    {
      question: "How do I submit a dealer review?",
      answer:
        "You can submit a review by visiting the dealer's page and clicking on the 'Submit Review' button. You'll need to provide your purchase details and rating.",
    },
    {
      question: "Can I edit my review after submitting?",
      answer:
        "Currently, reviews cannot be edited after submission. Please ensure all information is accurate before submitting.",
    },
    {
      question: "How are dealer ratings calculated?",
      answer:
        "Ratings are based on the average of all customer reviews, considering factors like service quality, pricing, and customer experience.",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
    <Header />
    <div className="contact-us">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get in Touch</h1>
            <p>
              We're here to help you with any questions about our platform,
              dealer reviews, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods">
        <div className="container">
          <div className="methods-grid">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="method-card"
                onClick={(e) => {
                  if (method.action === "#chat") {
                    e.preventDefault();
                    // Implement chat functionality
                    alert("Live chat coming soon!");
                  }
                }}
              >
                <div className="method-icon">{method.icon}</div>
                <h3>{method.title}</h3>
                <p className="method-details">{method.details}</p>
                <p className="method-description">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="review">Review Issue</option>
                      <option value="dealer">Dealer Partnership</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`submit-button ${isSubmitting ? "loading" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <div className="success-message">
                    ✅ Thank you! Your message has been sent successfully.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="error-message">
                    ❌ There was an error sending your message. Please try
                    again.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h3>Contact Information</h3>
                <p>We'd love to hear from you. Here's how you can reach us:</p>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <h4>Our Office</h4>
                    <p>
                      123 Automotive Avenue
                      <br />
                      Suite 500
                      <br />
                      Detroit, MI 48201
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our platform
          </p>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Join thousands of satisfied customers and trusted dealers on our
              platform.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Sign Up Free</button>
              <button className="cta-button secondary">View Dealers</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default ContactUs;
