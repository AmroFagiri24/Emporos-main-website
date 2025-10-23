import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaConnectdevelop, FaCogs, FaRocket, FaHandshake } from 'react-icons/fa';
import './WhyUs.css';

const WhyUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const reasons = [
    {
      icon: FaConnectdevelop,
      title: 'Proven Connection Builder',
      description: 'We excel at creating meaningful connections between businesses and customers using advanced AI algorithms and data analytics to ensure successful outcomes for all parties.',
      number: '01'
    },
    {
      icon: FaCogs,
      title: 'Multi-Sector Expertise',
      description: 'Deep knowledge across Car Rentals, Real Estate, and Employment Solutions, powered by machine learning insights that understand unique challenges and opportunities.',
      number: '02'
    },
    {
      icon: FaRocket,
      title: 'Growth-Focused Technology',
      description: 'We leverage cutting-edge technology stacks including cloud computing, AI, and automation to drive exponential growth and create scalable business opportunities.',
      number: '03'
    },
    {
      icon: FaHandshake,
      title: 'Value for All Stakeholders',
      description: 'Our platform ensures every connection delivers measurable value through smart matching algorithms, creating win-win situations that foster long-term partnerships.',
      number: '04'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="why-us" className="why-us section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Why Choose Emporos
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Advanced technology solutions that deliver measurable results and sustainable growth
          </motion.p>

          <motion.div className="reasons-grid" variants={containerVariants}>
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="reason-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="reason-number">{reason.number}</div>
                
                <div className="reason-content">
                  <div className="reason-header">
                    <div className="reason-icon">
                      <reason.icon />
                    </div>
                    <h3 className="reason-title">{reason.title}</h3>
                  </div>

                  <p className="reason-description">{reason.description}</p>

                  <div className="reason-progress">
                    <div className="progress-track">
                      <motion.div 
                        className="progress-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: '90%' } : { width: 0 }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                      />
                    </div>
                    <span className="progress-label">Success Rate: 90%</span>
                  </div>

                  <motion.button 
                    className="reason-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                <div className="reason-decoration">
                  <div className="decoration-circle"></div>
                  <div className="decoration-circle"></div>
                  <div className="decoration-circle"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="why-us-cta"
            variants={itemVariants}
          >
            <div className="cta-content">
              <h3>Ready to Transform Your Business?</h3>
              <p>Join hundreds of companies already growing with Emporos technology solutions</p>
              <motion.a 
                href="#contact" 
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;