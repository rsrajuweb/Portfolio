import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = ({ name, details, img, links, tools }) => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__img}>
        <img src={img} alt="Amazon" />
      </div>
      <div className={styles.details}>
        <h4>{name}</h4>
        <p>{details}</p>
        <div className={styles.links}>
          <ul>
            <li>
              <a href={links.githubLink} target="_blank">
                <img src="/github.svg" alt="Github" />
              </a>
            </li>
            <li>
              <a href={links?.websiteLink} target="_blank">
                <img src="/link.svg" alt="Github" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.tools}>
          <ul>
            {tools?.length > 0 &&
              tools?.map((tool, i) => <li key={i}>{tool}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PortfolioFeatured = () => {
  return (
    <div className={`${styles.portfolioItems} ${styles.portfolioFeatured}`}> 
    </div>
  );
};

export default PortfolioFeatured;
