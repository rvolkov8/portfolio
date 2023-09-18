import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Linkle from './components/Linkle';
import TechHub from './components/TechHub';
import Wherely from './components/Wherely';
import Testimonials from './components/Testimonials';
import Connect from './components/Connect';
import { useEffect, useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        testimonialsRef={testimonialsRef}
      />
      <Home />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Linkle projectsRef={projectsRef} />
      <TechHub />
      <Wherely />
      <Testimonials testimonialsRef={testimonialsRef} />
      <Connect />
    </>
  );
}

export default App;
