import { useRef } from 'react';
import '../styles/Testimonials.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import angelIskrev from '../assets/testimonials/angel-iskrev.jpeg';
import elenaStaneva from '../assets/testimonials/elena-staneva.jpeg';
import petarMarinov from '../assets/testimonials/petar-marinov.jpg';

const Testimonials = ({ testimonialsRef }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const delayMultiplier = 0.2;
  const animation = {
    hidden: {
      opacity: 0,
      x: 300,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 0.5,
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
        duration: 0.5,
      },
    }),
  };

  const quoteAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * delayMultiplier,
        duration: 0.5,
      },
    }),
  };

  const exColleagueImgAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * delayMultiplier,
        duration: 0.5,
        ease: 'backOut',
      },
    }),
  };

  const exColleagueInfoAnimation = {
    hidden: {
      opacity: 0,
      x: -120,
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 0.5,
      },
    }),
  };

  return (
    <>
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="testimonials"
        id="first"
      >
        <motion.div
          className="heading-container"
          variants={animation}
          custom={3}
        >
          <motion.h3 variants={h3Animation} custom={4}>
            Testimonials
          </motion.h3>
        </motion.div>
        <div className="testimonial" id="first">
          <motion.h2 variants={quoteAnimation} custom={6}>
            &ldquo;Rostyslav consistently demonstrated a remarkable intellect
            and thoughtful approach. His dedication and ambition were evident in
            his work ethic.&ldquo;
          </motion.h2>
          <div className="ex-colleague">
            <motion.img
              variants={exColleagueImgAnimation}
              custom={6}
              src={angelIskrev}
              alt="Photo of Angel Iskrev"
            />
            <motion.div variants={exColleagueInfoAnimation} custom={7}>
              <p>Angel Iskrev</p>
              <p>
                Creative Director &<br></br>Co-Founder at proof.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="second"
        className="testimonials"
      >
        <div className="testimonial" id="second">
          <h2>
            &ldquo;On my personal opinion, one of his most respected skills is
            the ability to find solutions and proactively seek for less known
            decisions - an attitude he applies equally for big projects and
            daily tasks. His logical thinking highly contributed in projects
            with strategic planning and brainstorming sessions for new
            projects.&ldquo;
          </h2>
          <div className="ex-colleague">
            <motion.img
              variants={exColleagueImgAnimation}
              custom={2}
              src={elenaStaneva}
              alt="Photo of Elena Staneva"
            />
            <motion.div variants={exColleagueInfoAnimation} custom={3}>
              <p>Elena Staneva</p>
              <p>Head of Propaganda Agency</p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="third"
        className="testimonials"
      >
        <div className="testimonial" id="third">
          <h2>
            &ldquo;Rostyslav is very versatile. He quickly adapts to new
            challenges and he quickly finds solutions. He thinks logically
            regarding the tasks at hand. He is a team player who is always
            looking to build on proposals made by others.&ldquo;
          </h2>
          <motion.div className="ex-colleague">
            <motion.img
              variants={exColleagueImgAnimation}
              custom={3}
              src={petarMarinov}
              alt="Photo of Petar Marinov"
            />
            <motion.div variants={exColleagueInfoAnimation} custom={4}>
              <p>Petar Marinov</p>
              <p>
                Head of Advertising<br></br>at Pulse Fitness & Spa
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

Testimonials.propTypes = {
  testimonialsRef: PropTypes.object,
};

export default Testimonials;
