import React from 'react';
import styles from '../styles/Portfolio.module.css';
import PortfolioFeatured from './PortfolioFeatured';
import BasicPortfolio from './BasicPortfolio';

const Portfolio = () => {
  return (
    <div id="portfolio" className={styles.portfolio_wrapper}>
      <PortfolioFeatured />
      <BasicPortfolio />
      <div className={styles.more}>
        <a target="_blank" href="https://github.com/rsrajuweb">
          More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
