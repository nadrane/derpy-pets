import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Main from './components/Main';
import AnimalsList from './components/AnimalsList';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/all" />
      <Route path="/:filter" component={AnimalsList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
