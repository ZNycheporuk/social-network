import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts
    .map(p => <Post id={p.id} message={p.message} name={p.poster} avaUrl={p.posterAva} likesCount={p.likesCount}/>);

  const onAddPost = () => props.addPost();
  const onPostChange = (event) => props.updatePostText(event.target.value);

  return (
    <div className={s.posts}>
      My posts
      <div className={s.new_post}>
        <textarea onChange={onPostChange} value={props.text}/>
        <br/>
        <button onClick={onAddPost}>New Post</button>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;