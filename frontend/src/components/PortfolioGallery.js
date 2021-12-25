import React from 'react';
import { Link } from 'react-router-dom';
import JumpAdventureSample from '../images/jump-adventure-sample.png';
import BlastZoneSample from '../images/blast-zone-sample.png';

const PortfolioGallery = () => {
  return (
    <ul>
      <li className="portfolio-item">
        <Link to="/portfolio">
          <div className="portfolio-image">
            <img src={BlastZoneSample} alt="Blast Zone" />
          </div>
          <div className="portfolio-summary">
            <h3>Blast Zone</h3>
            <p>
              A 2D topdown tank battle game where the user faces an AI tank.
            </p>
          </div>
        </Link>
      </li>
      <li className="portfolio-item">
        <Link to="/portfolio">
          <div className="portfolio-image">
            <img src={JumpAdventureSample} alt="Jump Adventure" />
          </div>
          <div className="portfolio-summary">
            <h3>Jump Adventure</h3>
            <p>
              A 2D platformer game where the player races time to obtain all
              stage artifacts.
            </p>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default PortfolioGallery;
