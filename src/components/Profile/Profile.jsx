import React from "react";
import Content__img from "./Content__img/Content__img";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Person from "./Person/Person";
import classes from "./Profile.module.css";


const Profile = (props) => {
  return (
    <div>
      <Content__img />
      <Person profile={props.profile}/>
      <div className={classes.posts}>
        <MyPostsContainer/>
      </div>
    </div>
  );
};

export default Profile;