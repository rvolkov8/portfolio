import { useState } from 'react';
import '../styles/Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  const [currentSection, setCurrentSection] = useState('Home');

  const handleCurrentSectionChange = (section) => {
    setCurrentSection(section);
  };

  const sectionsArray = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Testimonials',
    'Connect',
  ];

  const navButtons = sectionsArray.map((section) => {
    return (
      <li
        key={section}
        className={currentSection === section ? 'active' : ''}
        onClick={() => handleCurrentSectionChange(section)}
      >
        {section}
      </li>
    );
  });

  const headerAnimation = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1.6, duration: 1 },
    },
  };

  return (
    <motion.header initial="hidden" whileInView="visible">
      <motion.nav variants={headerAnimation}>{navButtons}</motion.nav>
    </motion.header>
  );
};

export default Header;
