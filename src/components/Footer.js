import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Why Choose Us', href: '#why-us' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Car Rentals', href: '#services' },
      { name: 'Real Estate', href: '#services' },
      { name: 'Employment Solutions', href: '#services' },
      { name: 'SaaS Services', href: '#technologies' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Status Page', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/emporos.25/', color: 'hover:text-pink-400' },
    { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: '#', color: 'hover:text-sky-400' },
    { icon: FaGithub, href: '#', color: 'hover:text-gray-300' }
  ];

  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-gradient"></div>
        <div className="footer-particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="footer-particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="brand-logo">
              <img src="./images/Emporos-logo1.png" alt="Emporos Logo" className="footer-logo-image" />
              <div className="brand-text">
                <h3>Emporos</h3>
                <span>Sales Technology Solutions</span>
              </div>
            </div>
            
            <p className="brand-description">
              Driving growth through innovative technology solutions that connect 
              businesses with their customers and create sustainable success.
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.color}`}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-links-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="links-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-column">
              <h4>Services</h4>
              <ul>
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-column">
              <h4>Support</h4>
              <ul>
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:emporos2025@gmail.com">emporos2025@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+250796588929">+250 796 588 929</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span>Kigali, Rwanda</span>
              </div>
            </div>

            <div className="newsletter">
              <h5>Stay Updated</h5>
              <p>Subscribe to our newsletter for the latest updates</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <motion.button 
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Emporos. All rights reserved. Made with{' '}
              <FaHeart className="heart-icon" /> for innovation.
            </p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;