import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import withSuspense from './hoc/withSuspense';
import {initialize} from './redux/app-reducer';
import {getLoggedIn} from './redux/app-selectors';

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {
  componentDidMount() {
    this.props.initialize();
  }

  render() {
    if (!this.props.loggedIn) return <Preloader/>;
    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <div className='app-wrapper-navbar'>
          <Navbar/>
        </div>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
          <Route path='/dialogs' render={() => <DialogsContainer/>}/>
          <Route path='/users' render={() => <UsersContainer/>}/>
          <Route path='/news' render={withSuspense(News)}/>
          <Route path='/music' render={withSuspense(Music)}/>
          <Route path='/settings' render={withSuspense(Settings)}/>
          <Route path='/login' render={withSuspense(Login)}/>
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => ({
  loggedIn: getLoggedIn(state),
});

export default connect(mapStateToProps, {initialize})(App);
