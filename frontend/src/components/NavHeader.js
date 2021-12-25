import React from 'react';

const NavHeader = ({ isNavMenuShown, onTogglerClick, logo }) => {
  return (
    <header>
      <button className="btn nav-toggler" onClick={onTogglerClick}>
        <span>
          <i className={isNavMenuShown ? 'fas fa-times' : 'fas fa-bars'}></i>
        </span>
      </button>
      <img src={logo} alt="Logo" />
    </header>
  );
};

export default NavHeader;
