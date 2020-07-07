import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Hi! I\'m here', likesCount: 19},
    {id: 2, message: 'How are you?', likesCount: 7},
  ];
  let postElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>);
  return (
    <div className={s.posts}>
      My posts
      <div className={s.new_post}>
        <textarea></textarea>
        <br/>
        <button>New Post</button>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;