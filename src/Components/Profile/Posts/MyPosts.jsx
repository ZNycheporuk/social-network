import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts
    .map(p => <Post id={p.id} message={p.message} name={p.poster} avaUrl={p.posterAva} likesCount={p.likesCount}/>);
  let newPostElement = React.createRef();
  let addPost = () => props.addPost(newPostElement.current.value);
  let Change = () => {
    props.updatePostText(newPostElement.current.value);
  };
  return (
    <div className={s.posts}>
      My posts
      <div className={s.new_post}>
        <textarea onChange={Change} ref={newPostElement} value={props.text}/>
        <br/>
        <button onClick={addPost}>New Post</button>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;