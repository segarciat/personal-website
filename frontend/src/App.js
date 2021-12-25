import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';

function App() {
  const [isNavMenuShown, setIsNavMenuShown] = useState(false);

  const handleNavTogglerClick = () => {
    setIsNavMenuShown((menuWasShown) => !menuWasShown);
  };
  return (
    <React.Fragment>
      <Navbar
        onTogglerClick={handleNavTogglerClick}
        isNavMenuShown={isNavMenuShown}
      />
      <CSSTransition in={isNavMenuShown} classNames="slide-main">
        <main id="content">
          <Outlet />
        </main>
      </CSSTransition>
    </React.Fragment>
  );
}

export default App;
