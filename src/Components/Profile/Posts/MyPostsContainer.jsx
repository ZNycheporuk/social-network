import React from 'react';
import {addPostCreator, updatePostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

  let addPost = () => props.store.dispatch(addPostCreator());
  let onPostChange = (text) => {
    props.store.dispatch(updatePostTextCreator(text));
  };
  let store = props.store.getState().profilePage;
  return (
    <MyPosts addPost={addPost}
             onPostChange={onPostChange}
             text={store.newPostText}
             posts={store.posts}/>
  );
};
export default MyPostsContainer;