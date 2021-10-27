import React from "react";
import classes from "./Friend.module.css";


const Friend = (props) => {
  return (
    <li className={classes.friend}>
        <span className={classes.ava}>ava</span>
        <p className={classes.name}>{props.name}</p>
    </li>
  );
};

export default Friend;