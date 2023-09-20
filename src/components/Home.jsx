import { useRef } from 'react';
import '../styles/Home.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import mePicture from '../assets/me-home-picture.jpg';

const Home = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const textAnimation = {
    hidden: { opacity: 0, y: 100 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 1 },
    }),
  };

  const imgAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.6, duration: 1 },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="home"
    >
      <div className="info">
        <motion.h1 custom={2} variants={textAnimation}>
          Hi, I&apos;m Rostyslav 👋,
        </motion.h1>
        <motion.h1 custom={3} variants={textAnimation}>
          a JavaScript Developer
        </motion.h1>
        <motion.h2 custom={4} variants={textAnimation}>
          Currently based in Sofia, Bulgaria.
        </motion.h2>
      </div>
      <motion.img
        viewport={{ once: false }}
        variants={imgAnimation}
        src={mePicture}
        alt="Picture"
      />
    </motion.section>
  );
};

export default Home;
