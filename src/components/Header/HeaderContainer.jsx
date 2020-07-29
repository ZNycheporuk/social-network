import React from 'react';
import {connect} from 'react-redux';
import {authenticate, logout} from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authenticate();
  }

  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {authenticate, logout})(HeaderContainer);