import React from 'react';
import state, {addPost, updatePostText} from "./Redux/state";
import renderEntireTree from "./render";

// import * as serviceWorker from './serviceWorker';

renderEntireTree(state, addPost, updatePostText);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
