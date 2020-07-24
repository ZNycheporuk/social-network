import React from 'react';
import Header from "./Header";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.auth()
      .then(response => {
        if (response.resultCode === 0) {
          let {id, email, login} = {...response.data};
          this.props.setAuthUserData(id, email, login);
        }
      })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);