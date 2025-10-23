import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaRocket, FaHeart } from 'react-icons/fa';
import './CoreValues.css';

const CoreValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const values = [
    {
      icon: FaShieldAlt,
      title: 'Trust & Integrity',
      description: 'Building lasting relationships through transparency, reliability, and unwavering commitment to ethical business practices.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: FaRocket,
      title: 'Innovation & Growth',
      description: 'Continuously evolving with cutting-edge technology to create new opportunities that drive exponential progress.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: FaHeart,
      title: 'Customer-Centered Excellence',
      description: 'Prioritizing exceptional value delivery and satisfaction to ensure mutual success for all stakeholders.',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="values" className="core-values section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Core Values
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            The fundamental principles that drive our mission and shape our culture
          </motion.p>

          <motion.div className="values-grid" variants={containerVariants}>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="value-card-inner">
                  <div className="value-background">
                    <div className={`value-gradient bg-gradient-to-br ${value.color}`}></div>
                  </div>

                  <div className="value-content">
                    <div className={`value-icon bg-gradient-to-r ${value.color}`}>
                      <value.icon />
                    </div>

                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>

                    <div className="value-metrics">
                      <div className="metric">
                        <span className="metric-number">100%</span>
                        <span className="metric-label">Commitment</span>
                      </div>
                      <div className="metric">
                        <span className="metric-number">24/7</span>
                        <span className="metric-label">Support</span>
                      </div>
                    </div>
                  </div>

                  <div className="value-decoration">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="decoration-dot"
                        style={{
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;