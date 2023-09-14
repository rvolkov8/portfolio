import { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [currentSection, setCurrentSection] = useState('home');

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

  return (
    <header>
      <nav>{navButtons}</nav>
    </header>
  );
};

export default Header;
