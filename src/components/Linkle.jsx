import { useRef } from 'react';
import '../styles/Linkle.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Linkle = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const delayMultiplier = 0.2;
  const h3ContainerAnimation = {
    hidden: {
      x: -400,
    },
    visible: (custom) => ({
      x: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 0.6,
        ease: 'easeInOut',
      },
    }),
  };

  const h3Animation = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 0.4,
      },
    }),
  };

  const headingPAnimation = {
    hidden: {
      opacity: 0,
      y: -25,
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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="linkle"
    >
      <div>
        <motion.div variants={h3ContainerAnimation} custom={2}>
          <motion.h3 variants={h3Animation} custom={4}>
            My recent works
          </motion.h3>
        </motion.div>
        <motion.p custom={5} variants={headingPAnimation}>
          Here are a few past projects I&apos;ve worked on. Want to see more?
          Check out my{' '}
          <a
            target="_blank"
            href="https://github.com/rvolkov8"
            rel="noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>Github</title>
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>{' '}
            GitHub profile.
          </a>
        </motion.p>
      </div>
      <motion.div style={{ opacity }} className="project">
        <motion.img
          variants={imgAnimation}
          custom={9}
          src="src/assets/project-demos/linkle-demo.gif"
          alt="Linkle demo"
        />
        <div>
          <motion.h2 variants={h2Animation} custom={7}>
            Linkle (Social Network)
          </motion.h2>
          <motion.p variants={projectPAnimation} custom={8}>
            Robust web application that allows users to connect with friends,
            share updates, and engage in social interactions.
          </motion.p>
          <div className="buttons">
            <motion.a
              variants={aAnimation}
              custom={10}
              href="https://github.com/rvolkov8/project-linkle"
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
              custom={10}
              href="https://linkle.onrender.com/"
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
      </motion.div>
      <motion.div
        variants={projectPAnimation}
        custom={9}
        className="gradient"
      ></motion.div>
    </motion.section>
  );
};

export default Linkle;
