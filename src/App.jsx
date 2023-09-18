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
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Linkle />
      <TechHub />
      <Wherely />
      <Testimonials />
      <Connect />
    </>
  );
}

export default App;
