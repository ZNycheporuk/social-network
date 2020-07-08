import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import * as serviceWorker from './serviceWorker';
let renderEntireTree = (state, addPost, updatePostText) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  console.log('1')
};
export default renderEntireTree;