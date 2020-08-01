import React from 'react';
import s from './FormsControls.module.css';

export const renderField = ({input, label, meta: {touched, error}, ...props}) => {
  const hasError = touched && error;
  return (
    <div className={`${s.formControl} ${hasError ? s.error : null}`}>

      <input {...input} {...props}/>

      {hasError && <span>{error}</span>}

    </div>
  );
};
