import { useRef } from 'react';
import '../styles/Wherely.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import wherelyDemo from '../assets/project-demos/wherely-demo.gif';

const Wherely = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const delayMultiplier = 0.2;

  const h2Animation = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 1,
      },
    }),
  };
  const projectPAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * delayMultiplier,
        duration: 1,
      },
    }),
  };
  const imgAnimation = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 1,
      },
    }),
  };
  const aAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        duration: 1,
      },
    }),
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="wherely"
    >
      <div className="project">
        <motion.img
          variants={imgAnimation}
          custom={3}
          src={wherelyDemo}
          alt="Wherely demo"
        />
        <div>
          <motion.h2 variants={h2Animation} custom={2}>
            Wherely
          </motion.h2>
          <motion.p variants={projectPAnimation} custom={3}>
            Application that challenges users to find hidden objects within
            images inspired by classic video game consoles.
          </motion.p>
          <div className="buttons">
            <motion.a
              variants={aAnimation}
              custom={4}
              href="https://github.com/rvolkov8/project-wherely"
              target="_blank"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>code-tags</title>
                <path d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
              </svg>
              View code
            </motion.a>
            <motion.a
              variants={aAnimation}
              custom={4}
              href="https://wherely.onrender.com/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
              </svg>
              See live
            </motion.a>
          </div>
        </div>
      </div>
      <motion.div
        variants={projectPAnimation}
        custom={5}
        className="gradient"
      ></motion.div>
    </motion.section>
  );
};

export default Wherely;
