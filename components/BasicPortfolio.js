import React from 'react';
import styles from '../styles/Portfolio.module.css';

const Portfolio = ({ name, details, img, links, tools }) => {
  return (
    <div className={styles.portfolio}>
      <div style={{ marginTop: '0px' }} className={styles.details}>
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
      <Portfolio
        name="Hotel App"
        details="This is Hotel App. Here people can book their room and cancel, admin control the all room feature and can delete ,edite,add."
        links={{
          githubLink: 'https://github.com/rsrajuweb/hotel-books',
          websiteLink: 'https://hotel-books.herokuapp.com/',
        }}
        tools={['react', 'redux', 'nodejs']}
      />
      <Portfolio
        name="Pizza App"
        details="This is pizza app. Here people can buy the pizza and cancel order, comments on the post."
        links={{
          githubLink: 'https://github.com/sauravb-git/instagram-clone',
          websiteLink: 'https://instagram-6a06f.web.app/',
        }}
        tools={['react', 'redux', 'nodejs']}
      />
      <Portfolio
        name="Emazon Ec"
        details="This is covid 19 tracker. Every day we can get updated results in this application. Also, we can see the country-wise data."
        links={{
          githubLink: 'https://github.com/sauravb-git/covid-19-tracker',
          websiteLink: 'https://covid-19-tracker-d1967.web.app',
        }}
        tools={['react', 'redux', 'nodejs']}
      />
    </div>
  );
};

export default PortfolioFeatured;
