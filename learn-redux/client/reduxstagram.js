import React from 'react';
import { render } from 'react-dom';

// Styles
import css from './styles/style.styl';

// React Router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Components
import Main from './components/Main';
import Single from './components/Single';
import Photogrid from './components/Photogrid';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:post_id" component={Single}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
