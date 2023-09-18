import { useState } from 'react';
import '../styles/Connect.css';
import { motion } from 'framer-motion';

const Connect = () => {
  const [showCopy, setShowCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  let emailText = '';
  if (isCopied && showCopy) {
    emailText = 'Copied';
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  } else if (showCopy) {
    emailText = 'Copy email';
  } else {
    emailText = 'volkov.rostylav.8@gmail.com';
  }

  const delayMultiplier = 0.2;
  const h3ContainerAnimation = {
    hidden: {
      x: -700,
    },
    visible: (custom) => ({
      x: 0,
      transition: {
        delay: custom * delayMultiplier,
        duration: 1,
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
  const contactAnimation = {
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
  const gradientAnimation = {
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

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="connect"
    >
      <motion.div
        variants={h3ContainerAnimation}
        custom={4}
        className="heading-container"
      >
        <motion.h3 variants={h3Animation} custom={8}>
          Let&apos;s get in touch ✌️
        </motion.h3>
      </motion.div>
      <div className="contacts">
        <motion.div
          variants={contactAnimation}
          custom={6}
          className="contact"
          onMouseEnter={() => {
            setShowCopy(true);
          }}
          onMouseLeave={() => {
            setShowCopy(false);
          }}
          onClick={() => {
            navigator.clipboard.writeText('volkov.rostyslav.8@gmail.com');
            setIsCopied(true);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>email</title>
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
          </svg>
          <p className={`${showCopy ? 'show-copy' : ''}`}>{emailText}</p>
        </motion.div>
        <motion.div variants={contactAnimation} custom={7} className="contact">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>github</title>
            <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
          </svg>
          <a
            href="https://github.com/rvolkov8"
            target="_blank"
            rel="noreferrer"
          >
            rvolkov8
          </a>
        </motion.div>
        <motion.div variants={contactAnimation} custom={8} className="contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <a
            href="https://www.linkedin.com/in/volkovr8/"
            target="_blank"
            rel="noreferrer"
          >
            Rostyslav Volkov
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={gradientAnimation}
        custom={7}
        className="gradient"
      ></motion.div>
    </motion.section>
  );
};

export default Connect;
