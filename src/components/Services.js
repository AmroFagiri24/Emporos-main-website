import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaHome, FaUsers, FaCogs, FaArrowRight } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: FaCar,
      title: 'Car Rentals',
      description: 'Revolutionary mobility solutions connecting customers with premium car rental services through our intelligent matching platform.',
      features: ['Smart Booking System', 'Real-time Availability', '24/7 Support'],
      color: 'from-blue-500 to-cyan-500',
      link: 'https://emporos-cr.vercel.app/'
    },
    {
      icon: FaHome,
      title: 'Real Estate',
      description: 'Advanced property technology bridging investors, owners, and clients with AI-powered market insights and seamless transactions.',
      features: ['Market Analytics', 'Virtual Tours', 'Investment Tools'],
      color: 'from-indigo-500 to-blue-500',
      link: 'https://emporos-real-estate.vercel.app/'
    },
    {
      icon: FaUsers,
      title: 'Employment Solutions',
      description: 'Next-generation talent acquisition platform using machine learning to create perfect matches between employers and candidates.',
      features: ['AI Matching', 'Skill Assessment', 'Career Growth'],
      color: 'from-cyan-500 to-teal-500',
      comingSoon: true
    },
    {
      icon: FaCogs,
      title: 'Tech Services',
      description: 'Comprehensive technology solutions and consulting services for businesses and individuals in Toronto, Canada.',
      features: ['Web Development', 'System Integration', 'Tech Consulting'],
      color: 'from-purple-500 to-indigo-500',
      link: 'https://emporosnexus.vercel.app/'
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
    hidden: { opacity: 0, y: 50 },
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
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Services
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Cutting-edge solutions that transform how businesses connect with their customers
          </motion.p>

          <motion.div className="services-grid" variants={containerVariants}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="service-header">
                  <div className={`service-icon bg-gradient-to-r ${service.color}`}>
                    <service.icon />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="service-feature">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {service.link ? (
                  <motion.a 
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Site
                    <FaArrowRight />
                  </motion.a>
                ) : (
                  <motion.button 
                    className={`service-btn ${service.comingSoon ? 'coming-soon' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={service.comingSoon}
                  >
                    {service.comingSoon ? 'Coming Soon' : 'Learn More'}
                    <FaArrowRight />
                  </motion.button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;