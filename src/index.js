// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'; /* code change */
import { Provider } from 'react-redux'; /* code change */

import counterReducer from './reducers/counterReducer.js';
import App from './App';
import './index.css';

//we could now pass store down through App and we would be able to access the Redux store.

// const store = createStore(counterReducer); /* code change */

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); /* code change */

// ReactDOM.render(<App />, document.getElementById('root'));

// code change - added Provider to wrap around App 
// By including the Provider, we'll be able to access our Redux store and/or dispatch actions 
//from any component we want, regardless of where it is on the component tree.
ReactDOM.render(
    <Provider store={store}> 
      <App />
    </Provider> /* code change */,
    document.getElementById('root')
  );