import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.panorama}>
        <img alt='Panorama'
             src='https://upload.wikimedia.org/wikipedia/commons/1/11/B%C3%B6dele_Bregenzerwald_Panorama.jpg'/>
      </div>
      <div>
        ava + description
      </div>
    </div>
  );
};
export default ProfileInfo;