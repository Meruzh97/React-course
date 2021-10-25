import React from "react";
import classes from "./MyPosts.module.css";




const MyPosts = () => {
  return (
    <div>
      <h2>My posts</h2>
      <div className={classes.posts__input}>
        <input type="text" placeholder="your news..." />
      </div>
      <button className={classes.button} type="submit">
        Send
      </button>{" "}
    </div>
  );
};

export default MyPosts