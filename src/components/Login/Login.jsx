import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import {login} from '../../redux/auth-reducer';
import {getIsAuth} from '../../redux/auth-selectors';
import {required} from '../../utils/validate';
import {renderField} from '../Common/FormsControls/FormsControls';
import s from '../Common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={renderField} name='email' type='input' placeholder='email' validate={[required]}/>
      </div>
      <div>
        <Field component={renderField} name='password' type='password' placeholder='password' validate={[required]}/>
      </div>
      {props.error && <div className={s.formSomeError}>{props.error}</div>}
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
  isAuth: getIsAuth(state),
});
export default connect(mapStateToProps, {login})(Login);