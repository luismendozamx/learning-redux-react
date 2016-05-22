import React from 'react';
import { render } from 'react-dom';

// Styles
import css from './styles/style.styl';

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Store
import store, { history } from './store';

// Components
import App from './components/App';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:post_id" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
