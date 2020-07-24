import React from 'react';
import s from './User.module.css'
import userPhoto from '../../../assets/Images/user8.jpg'
import {NavLink} from 'react-router-dom';

const User = (props) => {

  return (
    <div className={s.userDiv}>
      <NavLink to={`/profile/${props.user.id}`}>
        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt='ava' className={s.ava}/>
      </NavLink>
      {props.user.followed
        ? <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
                  onClick={() => props.onUnfollow(props.user.id)}>Unfollow</button>
        : <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)}
                  onClick={() => props.onFollow(props.user.id)}>Follow</button>}
      <div>{props.user.name}</div>
      <div>{props.user.status}</div>
      <div>{props.user.location ? props.user.location.country : 'country'}</div>
      <div>{props.user.location ? props.user.location.city : 'city'}</div>
    </div>
  );
};
export default User;