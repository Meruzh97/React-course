import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from  './Header.module.css';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" />
      {!props.login
      ? <div className={classes.loginBlock}><NavLink to='/login'>Login</NavLink></div>
      : <div className={classes.loginBlock}>{props.login}</div>}
    </header>
  );
};

export default Header;