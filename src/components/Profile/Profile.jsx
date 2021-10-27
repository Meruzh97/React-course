import React from "react";
import Content__img from "./Content__img/Content__img";
import MyPosts from "./MyPosts/MyPosts";
import Person from "./Person/Person";
import Post from "./Posts/Post";
import classes from "./Profile.module.css";

const Profile = (props) => {
  
  let postDataElements = props.postData.map( p => (
    <Post message={p.message} />
  ));

  return (
    <div>
      <Content__img />
      <Person />
      <div className={classes.posts}>
        <MyPosts addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        <div className={classes.posts__items}>
          {postDataElements}
          {/* <Post message={postData[0].message}/> */}
          {/* <Post message="It's our new program! Hey!" /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
