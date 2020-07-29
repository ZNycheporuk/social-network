import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      header
      <div className={s.login}>
        {props.isAuth ? <div>{props.login} <NavLink to='/login' onClick={props.logout}>Logout</NavLink></div> : <NavLink
          to='/login'>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;