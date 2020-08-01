import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {getIsAuth} from '../redux/auth-selectors';

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuth(state),
  };
};

const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if (!props.isAuth) return <Redirect to='/login'/>;
    return <Component/>;
  };
  return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
