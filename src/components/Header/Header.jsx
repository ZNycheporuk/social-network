import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../redux/auth-reducer';
import {getIsAuth, getLogin} from '../../redux/auth-selectors';
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
const mapStateToProps = (state) => {
  return {
    login: getLogin(state),
    isAuth: getIsAuth(state),
  };
};

export default connect(mapStateToProps, {logout})(Header);