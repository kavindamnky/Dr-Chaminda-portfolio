import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            <div className="footer-brand">
              <h3 className="footer-logo">
                Kavinda <span className="footer-accent">Narangoda</span>
              </h3>
              <p className="footer-description">
                Undergraduate IT student at University Of Moratuwa, passionate about creating 
                digital experiences through development.
              </p>
            </div>

            <div className="footer-links-section">
              <div className="footer-column">
                <h4 className="footer-heading">Quick Links</h4>
                <nav className="footer-nav">
                  <a href="#home" className="footer-link">Home</a>
                  <a href="#about" className="footer-link">About</a>
                  <a href="#projects" className="footer-link">Projects</a>
                  <a href="#contact" className="footer-link">Contact</a>
                </nav>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Connect</h4>
                <div className="footer-social">
                  <a href="#" className="footer-link" aria-label="LinkedIn">
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="footer-link" aria-label="GitHub">
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="footer-link" aria-label="Email">
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>&copy; 2025 Himsara G.W.S. All rights reserved.</p>
            </div>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
