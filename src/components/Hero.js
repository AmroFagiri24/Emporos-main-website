import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaChartLine, FaCog } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const floatingElements = [
    { icon: FaRocket, delay: 0, x: 100, y: 50 },
    { icon: FaChartLine, delay: 0.5, x: -80, y: 80 },
    { icon: FaCog, delay: 1, x: 120, y: -60 },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Driving Growth Through
              <span className="hero-highlight"> Innovation</span>
            </motion.h1>
            
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connecting businesses with customers through cutting-edge technology 
              and modern sales solutions that scale your success.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#services" className="btn">
                Explore Solutions
                <FaRocket />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get Started
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="hero-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="metric">
                  <span className="metric-value">250%</span>
                  <span className="metric-label">Growth Rate</span>
                </div>
                <div className="chart">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{
                        height: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {floatingElements.map((element, index) => (
              <motion.div
                key={index}
                className="floating-element"
                style={{ 
                  right: element.x > 0 ? `${element.x}px` : 'auto',
                  left: element.x < 0 ? `${Math.abs(element.x)}px` : 'auto',
                  top: element.y > 0 ? `${element.y}px` : 'auto',
                  bottom: element.y < 0 ? `${Math.abs(element.y)}px` : 'auto'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: element.delay + 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              >
                <element.icon />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;