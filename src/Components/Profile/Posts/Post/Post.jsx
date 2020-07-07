import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        alt='avatar'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5PPgPJEaXKUY00u6ebU25vHptkoXeQ02UcQ&usqp=CAU'/>
      {props.message}
      <div>
        like
      </div>
    </div>
  );
}
export default Post;