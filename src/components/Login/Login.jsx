import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../../redux/auth-reducer';
import {getIsAuth} from '../../redux/auth-selectors';
import LoginForm from './Form';

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  };
  if (props.isAuth)
    return <Redirect to='/profile'/>;
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
});
export default connect(mapStateToProps, {login})(Login);