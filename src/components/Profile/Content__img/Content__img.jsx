import React from "react";
import classes from "./Content__img.module.css";

const Content__img = () => {
  return (
    <div className={classes.content__img}>
      <img
        className="image"
        src="https://langate.com/wp-content/uploads/2020/12/code-refactoring.jpg"
      />
    </div>
  );
};

export default Content__img;
