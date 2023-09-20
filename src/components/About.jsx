import '../styles/About.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import CV from '../assets/JavaScript_Dev_Rostyslav_Volkov_ENG.pdf';

const About = ({ aboutRef }) => {
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeInAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.section
      ref={aboutRef}
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
    >
      <motion.div variants={fadeInAnimation} custom={1} className="container">
        <motion.p variants={fadeInAnimation} custom={3}>
          <strong>From communicator to code crafter,</strong> my journey has
          taken a dynamic shift into the world of web development. In a mere
          nine months, I&apos;ve become a self-taught programmer, breathing life
          into lines of code. This portfolio is a canvas showcasing my
          transformation, where you&apos;ll find a diverse array of web
          development projects. Each one is a testament to my dedication,
          transforming ideas into interactive web experiences. Welcome to my
          evolving journey in web development!
        </motion.p>
        <div>
          <motion.p variants={fadeInAnimation} custom={4} className="cta">
            You can read more about my biography, experience, skills, education
            and much more in the PDF attached bellow:
          </motion.p>
          <motion.a
            variants={fadeInAnimation}
            custom={5}
            href={CV}
            download={true}
          >
            Download CV
          </motion.a>
        </div>
      </motion.div>
      <motion.div
        className="shadow"
        variants={fadeInAnimation}
        custom={2}
      ></motion.div>
    </motion.section>
  );
};

About.propTypes = {
  aboutRef: PropTypes.object,
};

export default About;
