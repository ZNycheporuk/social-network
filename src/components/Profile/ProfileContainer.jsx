import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.userId;
    // this.props.setIsFetching(true);
    profileAPI.getProfile(userId).then(data => {
      // this.props.setIsFetching(false);
      this.props.setProfile(data);
    })
  };

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>;
  };
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.id,
  }
}

export default connect(mapStateToProps, {
  setProfile,
})(withRouter(ProfileContainer));