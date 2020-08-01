import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import Info from './Info/Info';
import MyPosts from './Posts/MyPosts';
import s from './Profile.module.css';


const Profile = (props) => {
  if (props.isFetching || !props.profile) {
    return <Preloader/>;
  }
  return (
    <div className={s.profile}>
      <Info profile={props.profile} status={props.status} setStatus={props.setStatus}/>
      <MyPosts addPost={props.addPost} posts={props.posts}/>
    </div>
  );
};
export default Profile;