import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.home} id="home">
      <p className={styles.greetings}>Hello! I am</p>
      <h1 className={styles.title}>Md Rihan Sharif Raju</h1>
      <h4 className={styles.subtitle}>Front-End Developer</h4>
      <p className={styles.designation}>
        Web Developer
        <img src="/circle.svg" width="10" alt="" />
        Programmer
        <img src="/circle.svg" width="10" alt="" />
        Software Engineer
      </p>
      <div className={styles.social}>
        <a href="https://github.com/rsrajuweb" target="_blank">
          <img src="/github.svg" width="30" alt="" />
        </a>
        <a href="https://facebook.com/rsrajuweb" target="_blank">
          <img src="/facebook.svg" width="30" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/rsrajuweb" target="_blank">
          <img src="/linkedin.svg" width="30" alt="" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=8801843623890"
          target="_blank"
        >
          <img src="/whatsapp.svg" width="30" alt="" />
        </a>
        <a href="https://api.whatsapp.com/send?phone=8801843623890" >Send Message</a>
      </div>
      <div className={styles.cta}>
        <button className={styles.resume}>
          <a href="/latest-resume1.pdf" download>
            Get Resume
          </a>
        </button>
        <button className={styles.aboutMe}>
          <a href="#about">About Me</a>
        </button>
      </div>
    </div>
  );
};

export default Home;
