import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.posts}>
      My posts
      <div className={s.new_post}>
        <textarea></textarea>
        <br/>
        <button>New Post</button>
      </div>
      <Post message="Hi! I'm here"/>
      <Post message="How are you?"/>
    </div>
  );
}
export default MyPosts;