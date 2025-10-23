import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Quick response via WhatsApp',
      value: '+971525834426',
      link: 'https://wa.me/971525834426',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      description: 'Send us an email',
      value: 'emporos2025@gmail.com',
      link: 'mailto:emporos2025@gmail.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      description: 'Call us directly',
      value: '+250796588929',
      link: 'tel:+250796588929',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      description: 'Visit our office',
      value: 'Kigali, Rwanda',
      link: '#',
      color: 'from-cyan-500 to-cyan-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Ready to transform your business? Let's discuss how we can help you grow
          </motion.p>

          <div className="contact-content">
            <motion.div className="contact-methods" variants={containerVariants}>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="contact-method"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`method-icon bg-gradient-to-r ${method.color}`}>
                    <method.icon />
                  </div>
                  <div className="method-content">
                    <h3 className="method-title">{method.title}</h3>
                    <p className="method-description">{method.description}</p>
                    <span className="method-value">{method.value}</span>
                  </div>
                  <div className="method-arrow">
                    <FaPaperPlane />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form className="contact-form" action="mailto:emporos2025@gmail.com" method="post" encType="text/plain">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Enter your full name"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="Enter your email"
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="car-rentals">Car Rentals</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="employment">Employment Solutions</option>
                    <option value="saas">SaaS Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    placeholder="Tell us about your project or requirements"
                    required
                  ></textarea>
                </div>

                <motion.input 
                  type="submit" 
                  value="Send Message"
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;