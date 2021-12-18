import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';
import SlideTransition from './SlideTransition';
import ScaleTransition from './ScaleTransition';
import NavHeader from './NavHeader';
import brandPhoto from '../images/brand-photo.jfif';

const Navbar = ({ isNavMenuShown, onTogglerClick }) => {
  const navItems = [
    { to: '/about', text: 'About', icon: 'fas fa-info-circle' },
    { to: '/blog', text: 'Blog', icon: 'fas fa-comment' },
    { to: '/portfolio', text: 'Portfolio', icon: 'fas fa-code' },
    {
      to: '/contact',
      text: 'Contact',
      icon: 'fas fa-paper-plane',
    },
  ];
  navItems.forEach((item) => {
    item.id = uuidv4();
  });

  return (
    <nav className="navbar">
      <div className="container">
        <CSSTransition in={isNavMenuShown} classNames="slide-main">
          <NavHeader
            onTogglerClick={onTogglerClick}
            isNavMenuShown={isNavMenuShown}
          />
        </CSSTransition>

        <SlideTransition in={isNavMenuShown} mountOnEnter={true}>
          <div className={'nav-menu'}>
            <div className="nav-brand">
              <Link to="/" reloadDocument={true}>
                <img src={brandPhoto} alt="Sergio" />
                Sergio E. Garcia T.
              </Link>
            </div>

            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink to={item.to} reloadDocument={true}>
                    <i className={item.icon}></i>
                    {item.text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="social">
              <ScaleTransition in={isNavMenuShown} mountOnEnter={true}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/segarciat"
                >
                  <i className="fab fa-github"></i>
                </a>
              </ScaleTransition>
              <ScaleTransition in={isNavMenuShown} mountOnEnter={true}>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sergio-garcia-tapia-81516391/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </ScaleTransition>
            </ul>
          </div>
        </SlideTransition>
      </div>
    </nav>
  );
};

export default Navbar;
