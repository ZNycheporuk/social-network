import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile,} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
      ? this.props.match.params.userId
      : this.props.userId;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.id,
  }
}

export default connect(mapStateToProps, {
  getProfile
})(withRouter(ProfileContainer));