import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// root reducers
import rootReducer from './reducers/index';

// data
import comments from './data/comments';
import posts from './data/posts';

// create object for defaultData
const defaultState = {
  posts: posts,
  comments: comments
};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
