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

// Import createStore from Redux
const { createStore } = Redux;

// create store
const store = createStore(counter);

// render function
function render () {
  ReactDOM.render(
    <Counter value={store.getState()} />,
    document.getElementById('root');
  );
};

// call back every time and action is dispatched
store.subscribe(render);

// render initial state
render();
