import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import './App.css';
import Preloader from './components/Common/Preloader/Preloader';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import withSuspense from './hoc/withSuspense';
import {initialize} from './redux/app-reducer';
import {getLoggedIn} from './redux/app-selectors';

const News = React.lazy(() => import('./components/News/News'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

const App = ({initialize, ...props}) => {
  useEffect(initialize, [initialize]);

  if (!props.loggedIn) return <Preloader/>;
  return (
    <div className='app-wrapper'>
      <Header/>
      <div className='app-wrapper-navbar'>
        <Navbar/>
      </div>
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?' render={() => <Profile/>}/>
        <Route path='/dialogs' render={() => <Dialogs/>}/>
        <Route path='/users' render={() => <Users/>}/>
        <Route path='/news' render={withSuspense(News)}/>
        <Route path='/music' render={withSuspense(Music)}/>
        <Route path='/settings' render={withSuspense(Settings)}/>
        <Route path='/login' render={withSuspense(Login)}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: getLoggedIn(state),
});

export default connect(mapStateToProps, {initialize})(App);
