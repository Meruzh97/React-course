import React from "react";
import classes from "./MyPosts.module.css";




const MyPosts = (props) => {
  // debugger;
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div>
      <h2>My posts</h2>
      <div className={classes.posts__input}>
        <input ref={newPostElement} type="text" placeholder="your news..." />
      </div>
      <button onClick={addPost} className={classes.button} type="submit">
        Send
      </button>{" "}
    </div>
  );
};

export default MyPosts