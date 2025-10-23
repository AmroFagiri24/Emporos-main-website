import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaFileInvoiceDollar, 
  FaUsers, 
  FaBoxes, 
  FaCashRegister, 
  FaCalendarAlt, 
  FaChartBar 
} from 'react-icons/fa';
import './Technologies.css';

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const technologies = [
    {
      icon: FaFileInvoiceDollar,
      title: 'Smart Invoicing',
      description: 'AI-powered invoicing system with automated tracking, payment reminders, and real-time analytics.',
      status: 'Coming Soon',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: FaUsers,
      title: 'Simple CRM',
      description: 'Intelligent customer relationship management with predictive analytics and automated workflows.',
      status: 'Coming Soon',
      color: 'from-indigo-600 to-purple-500'
    },
    {
      icon: FaBoxes,
      title: 'Easy Inventory',
      description: 'Smart inventory management with IoT integration, predictive restocking, and supply chain optimization.',
      status: 'Coming Soon',
      color: 'from-cyan-600 to-teal-500'
    },
    {
      icon: FaCashRegister,
      title: 'Point of Sale (POS)',
      description: 'Next-generation POS system with contactless payments, real-time sync, and advanced reporting.',
      status: 'Ready',
      color: 'from-emerald-600 to-green-500',
      isReady: true
    },
    {
      icon: FaCalendarAlt,
      title: 'Online Booking',
      description: 'Intelligent booking platform with AI scheduling, automated confirmations, and customer insights.',
      status: 'Coming Soon',
      color: 'from-orange-600 to-yellow-500'
    },
    {
      icon: FaChartBar,
      title: 'Business Dashboard',
      description: 'Comprehensive analytics dashboard with real-time KPIs, predictive insights, and custom reports.',
      status: 'Coming Soon',
      color: 'from-purple-600 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="technologies" className="technologies section">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            SaaS Services
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Revolutionary cloud-based solutions powered by AI and modern technology
          </motion.p>

          <motion.div className="tech-grid" variants={containerVariants}>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                className="tech-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="tech-card-inner">
                  <div className="tech-header">
                    <div className={`tech-icon bg-gradient-to-r ${tech.color}`}>
                      <tech.icon />
                    </div>
                    <span className={`tech-status ${tech.isReady ? 'ready' : ''}`}>{tech.status}</span>
                  </div>

                  <h3 className="tech-title">{tech.title}</h3>
                  <p className="tech-description">{tech.description}</p>

                  {tech.isReady ? (
                    <div className="pricing-plans">
                      <div className="plan">
                        <span className="plan-name">Enterprise</span>
                        <span className="plan-price">$199/mo</span>
                      </div>
                    </div>
                  ) : (
                    <div className="tech-progress">
                      <div className="progress-bar">
                        <motion.div 
                          className="progress-fill"
                          initial={{ width: 0 }}
                          animate={inView ? { width: '75%' } : { width: 0 }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                      <span className="progress-text">Development: 75%</span>
                    </div>
                  )}

                  {tech.isReady ? (
                    <motion.a
                      href="https://pos-nexus.vercel.app/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-notify-btn subscribe-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Start 7-Day Free Trial
                    </motion.a>
                  ) : (
                    <motion.button 
                      className="tech-notify-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Notify Me
                    </motion.button>
                  )}
                </div>

                <div className="tech-glow"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;