import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contact__status}>
        <p>
          I am interested in working with any company that thinks my skill will
          be helpful for them. If you are looking for someone like me, please
          let me know. Feel free to message me 🙂.
        </p>
        <div className={styles.resume__wrapper}>
          <a href="mailto:rsrajuweb@gmail.com">Contact Me</a>
        </div>
      </div>
      <div className={styles.contact__details}>
        <ul>
          <li>
            <h5>Email</h5>
            <p>
              rsrajuweb@gmail.com{' '}
              <span style={{ color: 'lightgray' }}>(Always available)</span>
            </p>
          </li>
          <li>
            <h5>Facebook</h5>
            <p>
              Facebook - @rsrajuweb{' '}
              <span style={{ color: 'lightgray' }}>(Always available)</span>
            </p>
          </li>
          <li>
            <h5>Address</h5>
            <p>Free Port, Chattogram, Bangladesh </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
