import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Rs Raju | MERN Stack Developer</title>
        <link rel="shortcut icon" href="/logo2.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="I'm Rs Raju. I'm a MERN Stack Developer. I have been working for this development sector last 2 years. I love to make the web more open to the world."
        />
        <meta
          name="keywords"
          content="rsraju, rsraju, RihanSharifRaju, Rsraju, rsrajuweb git, rsrajuweb"
        />

        <meta
          property="og:title"
          content="Rs Raju | MERN Stack Developer"
        />
        <meta
          property="og:description"
          content="I'm Rs Raju. I'm a MERN Stack Developer. I have been working for this development sector last 2 years. I love to make the web more open to the world."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saurav.me" />
        <meta
          property="og:image" 
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="website__body">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
