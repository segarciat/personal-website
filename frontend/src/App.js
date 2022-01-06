import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';

function App() {
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);
  const [isNavbarShown, setIsNavbarShown] = useState(true);
  // scrollY's, old value is read in useEffect.
  // eslint-disable-next-line
  const [scrollY, setScrollY] = useState(0);

  const handleNavTogglerClick = () => {
    setIsNavMenuShown((menuWasShown) => !menuWasShown);
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setScrollY((oldScrollY) => {
        setIsNavbarShown(window.scrollY < oldScrollY);
        return window.scrollY;
      });
    };
    window.addEventListener('scroll', handleWindowScroll);
    // clean up on re-render.
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [setScrollY, setIsNavbarShown]);
  return (
    <React.Fragment>
      <CSSTransition
        in={isNavbarShown || isNavMenuShown}
        classNames="slide-vertical"
      >
        <Navbar
          onTogglerClick={handleNavTogglerClick}
          isNavMenuShown={isNavMenuShown}
        />
      </CSSTransition>

      <CSSTransition in={isNavMenuShown} classNames={'nav-toggle-slide'}>
        <CSSTransition in={isNavMenuShown} classNames={'blur'}>
          <main id="content">
            <Outlet />
          </main>
        </CSSTransition>
      </CSSTransition>
    </React.Fragment>
  );
}

export default App;
