import React from "react";
import classes from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <li className={classes.dialogs__item}>
      <NavLink to={path} activeClassName={classes.active}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default DialogsItem;