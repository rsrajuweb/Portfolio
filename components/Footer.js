import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const handleTop = () => {
    if (typeof window === undefined) return;
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.footer}>
      <div className={styles.farewells}>
        <ul>
          <li>
            ধন্যবাদ{' '}
            <span
              style={{ width: '90%' }}
              className={styles.bangla_language_progress}
            ></span>
          </li>
          <li>
            Thank
            <span
              style={{ width: '70%' }}
              className={styles.english_language_progress}
            ></span>
          </li>
        </ul>
      </div>
      <div className={styles.footer__details}>
        <ul>
          <li>
            <a href="https://github.com/rsrajuweb" target="_blank">
              <img src="/star.svg" alt="Start" />
              <span>Star</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/rsrajuweb" target="_blank">
              <img src="/fork.svg" alt="Start" />
              <span>Fork</span>
            </a>
          </li>
          <li>
            <span>Buy Me</span>
          </li>
          <li onClick={handleTop}>
            <span>&#10148;</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
