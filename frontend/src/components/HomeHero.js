import React from 'react';
import { Link } from 'react-router-dom';
import brandPhoto from '../images/brand-photo.jfif';

const HomeHero = () => {
  return (
    <section id="home-hero">
      <div className="container">
        <img className="hero-photo" src={brandPhoto} alt="Sergio" />
        <h1>Sergio E. Garcia T.</h1>
        <p class="short-summary">
          I'm a self-taught programmer with an interest in web devopment, game
          development, and all things code.
        </p>
        <div className="call-to-action">
          <Link to="/about" className="btn btn-outline-primary btn-rounded">
            <i className="fas fa-arrow-circle-right"></i>
            About Me
          </Link>
          <Link to="/portfolio" className="btn btn-primary btn-rounded">
            <i className="fas fa-file-code"></i>
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
