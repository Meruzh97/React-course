import React from 'react';
import classes from  './Header.module.css';


const Header = () => {
  return (
    <header className={classes.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" />
    </header>
  );
};

export default Header;