import '../styles/Skills.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import skillsBgVideo from '../assets/skills-bg.mp4';
import nodeJsPicture from '../assets/skills-pictures/nodejs_100x100.png';
import expressJsPicture from '../assets/skills-pictures/express_100x100.png';
import mongoDbPicture from '../assets/skills-pictures/mongodb_100x100.png';
import mongoosePicture from '../assets/skills-pictures/mongoose_100x100.png';
import passportJsPicture from '../assets/skills-pictures/passportjs_100x100.png';
import firebasePicture from '../assets/skills-pictures/firebase_100x100.png';
import googleCloudStoragePicture from '../assets/skills-pictures/google_cloud_storage_100x100.png';
import htmlPicture from '../assets/skills-pictures/html_100x100.png';
import cssPicture from '../assets/skills-pictures/css_100x100.png';
import reactJsPicture from '../assets/skills-pictures/reactjs_100x100.png';
import gitPicture from '../assets/skills-pictures/git_100x100.png';
import githubPicture from '../assets/skills-pictures/github_100x100.png';
import webpackPicture from '../assets/skills-pictures/webpack_100x100.png';
import jestPicture from '../assets/skills-pictures/jest_100x100.png';
import postmanPicture from '../assets/skills-pictures/postman_100x100.png';
import postgresPicture from '../assets/skills-pictures/postgres_100x100.png';
import typeormPicture from '../assets/skills-pictures/typeorm_100x100.png';
import nestJsPicture from '../assets/skills-pictures/nestjs_100x100.png';
import javascriptPicture from '../assets/skills-pictures/javascript_100x100.png';
import typescriptPicture from '../assets/skills-pictures/typescript_100x100.png';

const Skills = ({ skillsRef }) => {
  const { scrollYProgress } = useScroll({
    target: skillsRef,
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
      ref={skillsRef}
      initial="hidden"
      style={{ opacity }}
      whileInView="visible"
      viewport={{ once: false }}
      id="skills"
    >
      <motion.video
        variants={videoAnimation}
        src={skillsBgVideo}
        autoPlay
        muted
        loop
      ></motion.video>
      <motion.div className="container">
        <div className="type">
          <h2>Programming languages</h2>
          <div className="skills">
            <div className="skill">
              <img src={javascriptPicture} alt="Skill" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src={typescriptPicture} alt="Skill" />
              <p>TypeScript</p>
            </div>
          </div>
        </div>
        <div className="type">
          <h2>Back end</h2>
          <div className="skills">
            <div className="skill">
              <img src={nodeJsPicture} alt="Skill" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src={expressJsPicture} alt="Skill" />
              <p>Express</p>
            </div>
            <div className="skill">
              <img src={nestJsPicture} alt="Skill" />
              <p>NestJS</p>
            </div>
            <div className="skill">
              <img src={postgresPicture} alt="Skill" />
              <p>PostgreSQL</p>
            </div>
            <div className="skill">
              <img src={typeormPicture} alt="Skill" />
              <p>TypeORM</p>
            </div>
            <div className="skill">
              <img src={mongoDbPicture} alt="Skill" />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <img src={mongoosePicture} alt="Skill" />
              <p>Mongoose</p>
            </div>
            <div className="skill">
              <img src={passportJsPicture} alt="Skill" />
              <p>Passport.js</p>
            </div>
            <div className="skill">
              <img src={firebasePicture} alt="Skill" />
              <p>Firebase</p>
            </div>
            <div className="skill">
              <img src={googleCloudStoragePicture} alt="Skill" />
              <p>GCS</p>
            </div>
          </div>
        </div>
        <div className="type">
          <h2>Front end</h2>
          <div className="skills">
            <div className="skill">
              <img src={htmlPicture} alt="Skill" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src={cssPicture} alt="Skill" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src={reactJsPicture} alt="Skill" />
              <p>React.js</p>
            </div>
          </div>
        </div>
        <div className="type">
          <h2>Other</h2>
          <div className="skills">
            <div className="skill">
              <img src={gitPicture} alt="Skill" />
              <p>Git</p>
            </div>
            <div className="skill">
              <img src={githubPicture} alt="Skill" />
              <p>GitHub</p>
            </div>
            <div className="skill">
              <img src={webpackPicture} alt="Skill" />
              <p>Webpack</p>
            </div>
            <div className="skill">
              <img src={jestPicture} alt="Skill" />
              <p>Jest</p>
            </div>
            <div className="skill">
              <img src={postmanPicture} alt="Skill" />
              <p>Postman</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

Skills.propTypes = {
  skillsRef: PropTypes.object,
};

export default Skills;
