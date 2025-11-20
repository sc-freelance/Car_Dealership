import React from "react";
import "./Styles/aboutus.css";
import Header from "../Header/Header";

const AboutUs = () => {
  const teamMembers = [
    // {
    //   id: 1,
    //   name: "Sarah Johnson",
    //   role: "CEO & Founder",
    //   image:
    //     "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    //   description: "10+ years in automotive industry",
    // },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Technology innovation expert",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Operations and customer experience",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      description: "Full-stack development specialist",
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "500+", label: "Dealer Partners" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description:
        "Constantly evolving to provide cutting-edge solutions for our customers and partners.",
    },
    {
      icon: "🤝",
      title: "Trust",
      description:
        "Building lasting relationships based on transparency, reliability, and mutual respect.",
    },
    {
      icon: "⭐",
      title: "Excellence",
      description:
        "Committed to delivering exceptional quality in every aspect of our service.",
    },
    // {
    //   icon: "🌱",
    //   title: "Growth",
    //   description:
    //     "Fostering continuous improvement and sustainable development for all stakeholders.",
    // },
  ];

  return (
    <>
    <Header />
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Driving Excellence in Automotive Solutions
          </h1>
          <p className="hero-subtitle">
            For over 15 years, we've been connecting car enthusiasts with
            trusted dealers, revolutionizing the way people find and review
            automotive services.
          </p>
          <button className="cta-button">Learn More About Our Journey</button>
        </div>
        <div className="hero-visual">
          {/* <div className="floating-card card-1">
            <span>🏆</span>
            <p>Trusted Platform</p>
          </div> */}
          <div className="floating-card card-2">
            <span>⭐</span>
            <p>5-Star Reviews</p>
          </div>
          <div className="floating-card card-3">
            <span>🤝</span>
            <p>500+ Partners</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                We're dedicated to creating transparent, reliable connections
                between car buyers and dealerships. Our platform empowers
                consumers with honest reviews and provides dealers with valuable
                insights to improve their services.
              </p>
              <div className="mission-points">
                <div className="mission-point">
                  <span className="point-icon">🎯</span>
                  <div>
                    <h4>Transparent Reviews</h4>
                    <p>Real feedback from real customers</p>
                  </div>
                </div>
                <div className="mission-point">
                  <span className="point-icon">🛡️</span>
                  <div>
                    <h4>Trusted Network</h4>
                    <p>Verified dealers and authentic experiences</p>
                  </div>
                </div>
                <div className="mission-point">
                  <span className="point-icon">💡</span>
                  <div>
                    <h4>Innovative Solutions</h4>
                    <p>Cutting-edge technology for better experiences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="visual-card">
                <div className="card-header">
                  <div className="card-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="card-content">
                  <div className="review-example">
                    <div className="review-header">
                      <div className="reviewer">John D.</div>
                      <div className="rating">★★★★★</div>
                    </div>
                    <p className="review-text">
                      "Exceptional service! Found the perfect dealer through
                      this platform."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate professionals dedicated to transforming the automotive
            industry
          </p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="image-overlay"></div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience the Difference?</h2>
            <p>
              Join thousands of satisfied customers and trusted dealers today
            </p>
            <div className="cta-buttons">
              <button className="cta-primary">Get Started</button>
              <button className="cta-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
