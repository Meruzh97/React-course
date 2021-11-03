import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import Post from "../Posts/Post"

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }

  let onInputChange = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  let postDataElements = state.profilePage.posts.map( p => (
    <Post message={p.message} />
  ));

  return (
      <MyPosts postDataElements={postDataElements} addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={onInputChange} />
  );
};

export default MyPostsContainer;