import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavHeader from './NavHeader';
import brandPhoto from '../images/brand-photo.jfif';

const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navItems = [
    { to: '/about', linkText: 'About', iconClassList: 'fas fa-info-circle' },
    { to: '/blog', linkText: 'Blog', iconClassList: 'fas fa-comment' },
    { to: '/projects', linkText: 'Projects', iconClassList: 'fas fa-code' },
    {
      to: '/contact',
      linkText: 'Contact',
      iconClassList: 'fas fa-paper-plane',
    },
  ];

  const brandPhotoStyle = {
    height: '3rem',
    width: '3rem',
    border: 'none',
    borderRadius: '50%',
    marginRight: '0.5rem',
  };

  const handleTogglerClick = () => {
    console.log('toggle menu');
    setIsMenuShown((menuWasShown) => !menuWasShown);
    document.querySelector('main#content').classList.toggle('hide');
    document.querySelector('.navbar header').classList.toggle('hide');
    document.querySelector('.nav-menu').classList.toggle('show');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavHeader
          onTogglerClick={handleTogglerClick}
          isMenuShown={isMenuShown}
        />
        <div className="nav-menu">
          <Link to="/" reloadDocument={true}>
            <img src={brandPhoto} alt="Sergio" style={brandPhotoStyle} />
            Sergio E. Garcia T.
          </Link>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={`${item.linkText}#${index}`}>
                <NavLink to={item.to} reloadDocument={true}>
                  <i className={item.iconClassList}></i>
                  {item.linkText}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/segarciat"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sergio-garcia-tapia-81516391/"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
