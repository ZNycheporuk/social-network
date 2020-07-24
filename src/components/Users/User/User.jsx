import React from 'react';
import s from './User.module.css'
import userPhoto from '../../../assets/Images/user8.jpg'
import {NavLink} from 'react-router-dom';
import {followAPI} from "../../../api/api";

const User = (props) => {

  return (
    <div className={s.userDiv}>
      <NavLink to={`/profile/${props.user.id}`}>
        <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto} alt='ava' className={s.ava}/>
      </NavLink>
      {props.user.followed
        ? <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)} onClick={() => {
          props.followingInProgress(true, props.user.id);
          followAPI.unfollow(props.user.id).then(resultCode => {
            if (resultCode === 0) {
              props.onUnfollow(props.user.id)
            }
            props.followingInProgress(false, props.user.id);
          })
        }}>Unfollow</button>
        : <button disabled={props.isFollowingInProgress.some(id => id === props.user.id)} onClick={() => {
          props.followingInProgress(true, props.user.id);
          followAPI.follow(props.user.id).then(resultCode => {
            if (resultCode === 0) {
              props.onFollow(props.user.id)
            }
            props.followingInProgress(false, props.user.id);
          })
        }}>Follow</button>}
      <div>{props.user.name}</div>
      <div>{props.user.status}</div>
      <div>{props.user.location ? props.user.location.country : 'country'}</div>
      <div>{props.user.location ? props.user.location.city : 'city'}</div>
    </div>
  );
};
export default User;