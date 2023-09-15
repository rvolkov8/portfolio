import { useRef } from 'react';
import '../styles/Skills.css';
import { motion, useScroll, useTransform } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['end end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const videoAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };
  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      style={{ opacity }}
      whileInView="visible"
      viewport={{ once: false }}
      id="skills"
    >
      <motion.video
        variants={videoAnimation}
        src="src/assets/skills-bg-video.mp4"
        autoPlay
        muted
        loop
      ></motion.video>
      <motion.div className="container">
        <div className="container">
          <div className="type">
            <h2>Back end</h2>
            <div className="skills">
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/nodejs_100x100.png"
                  alt="Skill"
                />
                <p>Node.js</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/express_100x100.png"
                  alt="Skill"
                />
                <p>Express.js</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/mongodb_100x100.png"
                  alt="Skill"
                />
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/mongoose_100x100.png"
                  alt="Skill"
                />
                <p>Mongoose</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/passportjs_100x100.png"
                  alt="Skill"
                />
                <p>Passport.js</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/firebase_100x100.png"
                  alt="Skill"
                />
                <p>Firebase</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/google_cloud_storage_100x100.png"
                  alt="Skill"
                />
                <p>Google Cloud </p>
                <p>Storage</p>
              </div>
            </div>
          </div>
          <div className="type">
            <h2>Front end</h2>
            <div className="skills">
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/html_100x100.png"
                  alt="Skill"
                />
                <p>HTML</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/css_100x100.png"
                  alt="Skill"
                />
                <p>CSS</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/reactjs_100x100.png"
                  alt="Skill"
                />
                <p>React.js</p>
              </div>
            </div>
          </div>
          <div className="type">
            <h2>Other</h2>
            <div className="skills">
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/git_100x100.png"
                  alt="Skill"
                />
                <p>Git</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/github_100x100.png"
                  alt="Skill"
                />
                <p>GitHub</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/webpack_100x100.png"
                  alt="Skill"
                />
                <p>Webpack</p>
              </div>
              <div className="skill">
                <img
                  src="src/assets/skills-pictures/jest_100x100.png"
                  alt="Skill"
                />
                <p>Jest</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
