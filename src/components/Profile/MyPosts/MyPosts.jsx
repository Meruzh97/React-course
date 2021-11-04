import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Posts/Post"


const MyPosts = (props) => {
  
  let postDataElements = props.posts.map( p => (
  <Post message={p.message} />
  ));

  let onInputChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h2>My posts</h2>
      <div className={classes.posts__input}>
        <input value={props.newPostText} onChange={onInputChange}  type="text" placeholder="your news..." />
      </div>
      <button onClick={props.addPost} className={classes.button} type="submit">
        Send
      </button>{" "}
      <div className={classes.posts__items}>
        {postDataElements}
        {/* <Post message={postData[0].message}/> */}
        {/* <Post message="It's our new program! Hey!" /> */}
      </div>
    </div>
  );
};

export default MyPosts;