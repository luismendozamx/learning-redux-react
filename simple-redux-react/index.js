import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';

// Reducer function
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
};

// Counter component
const Counter = ({
  value,
  onInc,
  onDec
 }) => (
  <div>
    <h1>{ value }</h1>
    <button onClick={onInc}>+</button>
    <button onClick={onDec}>-</button>
  </div>
);

// create store
const store = createStore(counter);

// render function
const render = () => {
  ReactDOM.render(
    <Counter
      value={ store.getState() }
      onInc={() =>
        store.dispatch({
          type: 'INC'
        })
      }
      onDec={() =>
        store.dispatch({
          type: 'DEC'
        })
      }
    />,
    document.getElementById('root')
  );
};

// call back every time and action is dispatched
store.subscribe(render);

// render initial state
render();
