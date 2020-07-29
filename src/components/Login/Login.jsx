import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../redux/auth-reducer';
import {required} from '../../utils/validate';
import {renderField} from '../Common/FormsControls/FormsControls';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={renderField} name='email' type='input' placeholder='email' validate={[required]}/>
      </div>
      <div>
        <Field component={renderField} name='password' type='password' placeholder='password' validate={[required]}/>
      </div>
      <div>
        <Field component={'input'} name='rememberMe' type='checkbox'/> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  };
  if (props.isAuth)
    return <Redirect to='/profile'/>;
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {login})(Login);