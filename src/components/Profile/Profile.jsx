import React from "react";
import Content__img from "./Content__img/Content__img";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Person from "./Person/Person";
import Post from "./Posts/Post";
import classes from "./Profile.module.css";

const Profile = (props) => {

  return (
    <div>
      <Content__img />
      <Person />
      <div className={classes.posts}>
        <MyPostsContainer store={props.store}/>
      </div>
    </div>
  );
};

export default Profile;