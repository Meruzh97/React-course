import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text)=>{
      dispatch(updateNewPostTextActionCreator(text)); 
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
//   }
//   let onInputChange = (e) => {
//     let text = e.target.value;
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   }

//   return (
//       <MyPosts addPost={addPost} newPostText={state.profilePage.newPostText} updateNewPostText={onInputChange} />
//   );
// };
