import React from 'react';
import userPhoto from '../../../assets/Images/user8.jpg';
import Status from '../Status/Status';
import s from './Info.module.css';

const ProfileInfo = (props) => {

  return (

    <div>
      <div>
        <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto}
             alt='ava'/>
        <div>

          <div className={s.about}>Fullname: {`${props.profile.fullName}`}</div>

          <div className={s.about}>About me: {`${props.profile.aboutMe}`}</div>
          <div className={s.about}>Contacts:
            {props.profile.contacts.facebook ?
              <div className={s.contact}>Facebook: {props.profile.contacts.facebook}</div> : null}
            {props.profile.contacts.website ?
              <div className={s.contact}>Website: {props.profile.contacts.website}</div> : null}
            {props.profile.contacts.vk ? <div className={s.contact}>VK: {props.profile.contacts.vk}</div> : null}
            {props.profile.contacts.twitter ?
              <div className={s.contact}>Twitter: {props.profile.contacts.twitter}</div> : null}
            {props.profile.contacts.instagram ?
              <div className={s.contact}>Instagram: {props.profile.contacts.instagram}</div> : null}
            {props.profile.contacts.youtube ?
              <div className={s.contact}>Youtube: {props.profile.contacts.youtube}</div> : null}
            {props.profile.contacts.github ?
              <div className={s.contact}>Github: {props.profile.contacts.github}</div> : null}
            {props.profile.contacts.mainLink ?
              <div className={s.contact}>Main link: {props.profile.contacts.mainLink}</div> : null}
          </div>
          <div className={s.about}>Looking for a job: {props.profile.lookingForAJob ? 'yes' &&
            <div className={s.about}>Description: {`${props.profile.lookingForAJobDescription}`}</div> : 'no'}
          </div>
          <Status status={props.status} setStatus={props.setStatus}/>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;