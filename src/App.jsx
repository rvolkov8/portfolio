import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Linkle from './components/Linkle';
import { useEffect } from 'react';
import TechHub from './components/TechHub';

function App() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Linkle />
      <TechHub />
    </>
  );
}

export default App;
