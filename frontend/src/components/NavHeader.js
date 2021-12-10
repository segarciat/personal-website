import React from 'react';

const NavHeader = ({ isMenuShown, onTogglerClick }) => {
  return (
    <header>
      <button className="btn nav-toggler" onClick={onTogglerClick}>
        <span>
          <i
            className={isMenuShown ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}
          ></i>
        </span>
      </button>
    </header>
  );
};

export default NavHeader;
