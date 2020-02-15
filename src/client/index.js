import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'


let reducer = (state = {
  count: 42,
}, {type, payload} ) => {
  switch(type) {
    case 'SET-DATA':
      return Object.assign({}, state, {
        resource: payload.value
      });
    case 'ADD-SNAPSHOT':
      return Object.assign({}, state, {
        ...state,
        snapshots: {
          ...state.snapshots,
          [payload.date]: {...state.snapshots[payload.date], ...payload.value}
        }
      });
    default: return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  , document.getElementById('root'));
