import { useEffect, useState } from 'react';
import '../styles/Header.css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Header = ({ aboutRef, skillsRef, projectsRef, testimonialsRef }) => {
  const [currentSection, setCurrentSection] = useState('Home');

  const handleCurrentSectionChange = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    if (currentSection === 'Home') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
    if (currentSection === 'About') {
      window.scrollTo({
        top: aboutRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
    if (currentSection === 'Skills') {
      window.scrollTo({
        top: skillsRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
    if (currentSection === 'Projects') {
      window.scrollTo({
        top: projectsRef.current.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    }
    if (currentSection === 'Testimonials') {
      window.scrollTo({
        top: testimonialsRef.current.offsetTop,

        left: 0,
        behavior: 'smooth',
      });
    }
    if (currentSection === 'Connect') {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [aboutRef, currentSection, projectsRef, skillsRef]);

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
      <li key={section} onClick={() => handleCurrentSectionChange(section)}>
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

Header.propTypes = {
  aboutRef: PropTypes.object,
  skillsRef: PropTypes.object,
  projectsRef: PropTypes.object,
  testimonialsRef: PropTypes.object,
};

export default Header;
