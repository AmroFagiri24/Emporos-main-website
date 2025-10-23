import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBuilding, FaUsers, FaGlobe, FaChartLine } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    { icon: FaBuilding, number: '500+', label: 'Businesses Connected' },
    { icon: FaUsers, number: '10K+', label: 'Satisfied Customers' },
    { icon: FaGlobe, number: '2', label: 'Countries Served' },
    { icon: FaChartLine, number: '250%', label: 'Average Growth' }
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
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <h2 className="section-title">Who We Are</h2>
              <div className="about-description">
                <p>
                  Emporos is a dynamic technology-driven growth company dedicated to revolutionizing 
                  how businesses connect with their customers. We leverage cutting-edge AI, machine 
                  learning, and modern cloud technologies to create intelligent solutions that scale.
                </p>
                <p>
                  Operating across three key sectors—Car Rentals, Real Estate, and Employment Solutions—we 
                  focus on building meaningful connections through advanced algorithms, predictive analytics, 
                  and seamless user experiences that drive exponential business growth.
                </p>
                <p>
                  Our mission is to be the technological bridge that connects opportunities with the right 
                  people, fostering data-driven relationships that benefit everyone involved and contribute 
                  to sustainable economic growth in the digital age.
                </p>
              </div>

              <motion.div 
                className="about-features"
                variants={containerVariants}
              >
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">🚀</div>
                  <div>
                    <h4>Innovation First</h4>
                    <p>Cutting-edge technology solutions</p>
                  </div>
                </motion.div>
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">🎯</div>
                  <div>
                    <h4>Results Driven</h4>
                    <p>Measurable growth and success</p>
                  </div>
                </motion.div>
                <motion.div className="feature" variants={itemVariants}>
                  <div className="feature-icon">🤝</div>
                  <div>
                    <h4>Partnership Focus</h4>
                    <p>Long-term collaborative relationships</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div className="about-visual" variants={itemVariants}>
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="stat-icon">
                      <stat.icon />
                    </div>
                    <motion.div 
                      className="stat-number"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="about-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="image-placeholder">
                  <div className="tech-grid-bg">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="tech-dot"
                        style={{
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                  <div className="image-content">
                    <h3>Emporos</h3>
                    <p>Driving Growth Through Technology</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;