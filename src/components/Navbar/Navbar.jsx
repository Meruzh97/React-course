import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom"
import Friends from "../Friends/Friends"

const Navbar = (props) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li><NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink></li>
        <li><NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink></li>
        <li><NavLink to='/news' activeClassName={classes.active}>News</NavLink></li>
        <li><NavLink to='/users' activeClassName={classes.active}>Users</NavLink></li>
        <li><NavLink to='/music' activeClassName={classes.active}>Music</NavLink></li>
        <li className={classes.settings}><NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink></li>
        <li className={classes.friends}><Friends friendsData={props.friendsData}/></li>
      </ul>
    </nav>
  );
};

export default Navbar;