import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [isNavMenuShown, setIsMenuShown] = useState(false);

  const handleNavTogglerClick = () => {
    setIsMenuShown((menuWasShown) => !menuWasShown);
  };
  return (
    <React.Fragment>
      <Navbar
        onTogglerClick={handleNavTogglerClick}
        isNavMenuShown={isNavMenuShown}
      />
      <main id="content" className={isNavMenuShown ? 'hide' : undefined}>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
