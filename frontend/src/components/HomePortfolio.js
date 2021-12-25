import React from 'react';
import PortfolioGallery from './PortfolioGallery';

const HomePortfolio = () => {
  return (
    <section id="home-portfolio">
      <div className="container">
        <h2 className="section-heading">Portfolio</h2>
        <p>Swipe, drag, or click to explore from a selection of projects.</p>
        <PortfolioGallery />
      </div>
    </section>
  );
};

export default HomePortfolio;
