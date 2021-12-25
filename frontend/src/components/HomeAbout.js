import React from 'react';
import { Link } from 'react-router-dom';
import homeIntroPhoto from '../images/home-intro-photo.jpg';

const HomeAbout = () => {
  return (
    <section id="home-about">
      <div className="container">
        <h2 className="section-heading">Who am I?</h2>
        <div className="home-intro">
          <div className="intro-photo">
            <img src={homeIntroPhoto} alt="Sergio" />
          </div>
          <div className="intro-text">
            <p>
              Hi there! I'm Sergio. When I am not providing excellent customer
              service experience at Trader Joe's or tailored mathematics
              instruction, I am taking steps towards my dream job as a software
              developer.
            </p>
            <br />
            <p>
              I am drawn to mathematics as well as web and game development, but
              most of all, I like to problem-solve and learning how things work.
            </p>
            <Link to="/about" className="btn btn-primary btn-rounded">
              <i className="fas fa-map-signs"> </i>
              <strong>My Story</strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
