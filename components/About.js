import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about__details}>
        <p>
          Hi! I'm Md Rihan Sharif Raju, a dedicated Web Developer. I develop web
          applications. My core skill is based on JavaScript and I love to do
          most of the things using JavaScript. I have graduated with a Bachelor
          of Science in Computer Science Engineering from Port City
          International University.
        </p>
        <div className={styles.about__cta}>
          <button className={styles.resume}>
            <a href="/latest-resume1.pdf" download>
              Get Resume
            </a>
          </button>
          <button className={styles.skills}>
            <a href="#skill">My Skills</a>
          </button>
        </div>
      </div>
      <div className={styles.about__img}>
        <img src="/rsraju.jpg" alt="Rs Raju" />
      </div>
    </div>
  );
};

export default About;
