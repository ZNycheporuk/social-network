import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.poster}>
        <img
          alt='avatar'
          src={props.avaUrl}/>
        {props.name}
      </div>
      <div>{props.message}</div>

      <div className={s.likes}>
        {`likes ${props.likesCount}`}
      </div>
    </div>
  );
};
export default Post;