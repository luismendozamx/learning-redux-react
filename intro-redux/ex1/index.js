// Import createStore from Redux
var createStore = Redux.createStore;

// create store
var store = createStore(counter);

// Reducer function
function counter (state, action) {
	if (typeof state === 'undefined') {
		return 0;
	}

	switch(action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		default:
			return state;
	}
};

// render function
function render () {
	//document.body.innerText = store.getState();
	console.log(store.getState());
};

// call back every time and action is dispatched
store.subscribe(render);

// render initial state
render();

// bind click to dispatch event
document.addEventListener('click', function() {
	store.dispatch({ type: 'INC' });
});
