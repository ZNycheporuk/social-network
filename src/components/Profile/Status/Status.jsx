import React, {useEffect, useState} from 'react';
import s from './Status.module.css';

const ProfileStatus = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.setStatus(status);
  };
  const onStatusChange = (event) => setStatus(event.target.value);

  return (
    <div className={s.status}>

      {!editMode
        ? <div>
          Status:
          <span onDoubleClick={activateEditMode}> {status || 'Enter your status'} </span>
        </div>
        : <div>
          <input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode}
                 value={status}/>
        </div>}
    </div>
  );
};


export default ProfileStatus;