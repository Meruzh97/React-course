import React from "react";
import classes from "./MyPosts.module.css";


const MyPosts = (props) => {

  return (
    <div>
      <h2>My posts</h2>
      <div className={classes.posts__input}>
        <input value={props.newPostText} onChange={props.updateNewPostText}  type="text" placeholder="your news..." />
      </div>
      <button onClick={props.addPost} className={classes.button} type="submit">
        Send
      </button>{" "}
      <div className={classes.posts__items}>
        {props.postDataElements}
        {/* <Post message={postData[0].message}/> */}
        {/* <Post message="It's our new program! Hey!" /> */}
      </div>
    </div>
  );
};

export default MyPosts;