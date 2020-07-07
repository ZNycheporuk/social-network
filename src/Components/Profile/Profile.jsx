import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {
  return (
    <div className={s.profile}>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
};
export default Profile;