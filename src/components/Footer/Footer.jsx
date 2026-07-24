import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-title">Rehoboth Enterprises</h3>
            <p className="footer-desc">
              Your trusted partner for mobile phones, tablets, accessories, and more. 
              Quality products at affordable prices.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/categories">All Products</Link></li>
              <li><Link to="/smartphones">Smartphones</Link></li>
              <li><Link to="/tablets">Tablets</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Customer Service</h4>
            <ul className="footer-links">
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Warranty</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="contact-list">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <span className="contact-label">Phone</span>
                  <a href="tel:+254712345678" className="contact-value">+254 712 345 678</a>
                </div>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <div>
                  <span className="contact-label">WhatsApp</span>
                  <a href="https://wa.me/254712345678" className="contact-value">+254 712 345 678</a>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@rehobothenterprises.co.ke" className="contact-value">
                    info@rehobothenterprises.co.ke
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-value">Nairobi, Kenya</span>
                </div>
              </div>
              <div className="contact-item">
                <FaClock className="contact-icon" />
                <div>
                  <span className="contact-label">Working Hours</span>
                  <span className="contact-value">Mon - Sat: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Rehoboth Enterprises. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;