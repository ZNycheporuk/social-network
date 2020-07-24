import React from 'react';
import preloader from '../../../assets/Images/preloader.svg';
import s from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={s.loader}>
      <img alt='loader' src={preloader}/>
    </div>
  )
};

export default Preloader;