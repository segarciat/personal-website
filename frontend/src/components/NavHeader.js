import React from 'react';

const NavHeader = ({ isNavMenuShown, onTogglerClick }) => {
  return (
    <header>
      <button className="btn nav-toggler" onClick={onTogglerClick}>
        <span>
          <i className={isNavMenuShown ? 'fas fa-times' : 'fas fa-bars'}></i>
        </span>
      </button>
      <strong>Sergio E. Garcia T.</strong>
    </header>
  );
};

export default NavHeader;
