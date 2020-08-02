import React from 'react';
import Status from '../Status/Status';
import Contact from './Contact';
import s from './Info.module.css';

const ProfileInfo = ({profile, ...props}) => {
  return (
    <div className={s.about}>
      <Contact title='Fullname' value={profile.fullName}/>
      <Contact title='About me' value={profile.aboutMe}/>
      <Contact title='Looking for a job' value={profile.lookingForAJob ? 'yes' : 'no'}/>
      <Contact title='My skills:' value={profile.lookingForAJobDescription}/>
      <Contact title='Contacts' value=' '/>
      <div className={s.contacts}>
        {Object.keys(profile.contacts).map(key => <Contact key={key} title={key} value={profile.contacts[key]}/>)}
      </div>
      <Status status={props.status} setStatus={props.setStatus}/>
      {props.isOwner && <button onClick={() => props.setEditMode(true)}>Edit</button>}

    </div>
  );
};
export default ProfileInfo;