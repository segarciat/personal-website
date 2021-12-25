import React from 'react';
import HomeHero from './HomeHero';
import HomePortfolio from './HomePortfolio';
import HomeAbout from './HomeAbout';

const Home = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeAbout />
      <HomePortfolio />
    </React.Fragment>
  );
};

export default Home;
