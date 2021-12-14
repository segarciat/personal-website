import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import NavHeader from './NavHeader';
import brandPhoto from '../images/brand-photo.jfif';

const Navbar = ({ isNavMenuShown, onTogglerClick }) => {
  const navItems = [
    { to: '/about', text: 'About', icon: 'fas fa-info-circle' },
    { to: '/blog', text: 'Blog', icon: 'fas fa-comment' },
    { to: '/projects', text: 'Projects', icon: 'fas fa-code' },
    { to: '/contact', text: 'Contact', icon: 'fas fa-paper-plane' },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <NavHeader
          onTogglerClick={onTogglerClick}
          isNavMenuShown={isNavMenuShown}
        />
        <div className={`nav-menu ${isNavMenuShown ? 'show' : ''}`}>
          <div className="nav-brand">
            <Link to="/" reloadDocument={true}>
              <img src={brandPhoto} alt="Sergio" />
              Sergio E. Garcia T.
            </Link>
          </div>
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={`${item.text}#${index}`}>
                <NavLink to={item.to} reloadDocument={true}>
                  <i className={item.icon}></i>
                  {item.text}
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
