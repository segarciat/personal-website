import React from 'react';
import { Link } from 'react-router-dom';

const GalleryItem = ({ title, image, description }) => {
  return (
    <li className="portfolio-item">
      <Link to="/portfolio">
        <div className="portfolio-image">
          <img src={image} alt={title} />
        </div>
        <div className="portfolio-summary">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default GalleryItem;
