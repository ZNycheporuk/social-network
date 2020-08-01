import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {getIsAuth, getLogin} from '../../redux/auth-selectors';
import Header from './Header';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: getLogin(state),
    isAuth: getIsAuth(state),
  };
};

export default connect(mapStateToProps, {logout})(HeaderContainer);