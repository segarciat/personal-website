import React from 'react';

const NavHeader = ({ isNavMenuShown, onTogglerClick }) => {
  return (
    <header className={isNavMenuShown ? 'hide' : undefined}>
      <button className="btn nav-toggler" onClick={onTogglerClick}>
        <span>
          <i
            className={
              isNavMenuShown ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'
            }
          ></i>
        </span>
      </button>
    </header>
  );
};

export default NavHeader;
