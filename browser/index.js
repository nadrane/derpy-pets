import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import Main from './components/Main';
import AnimalsList from './components/AnimalsList';
import AnimalProfile from './components/AnimalProfile';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRedirect to="/all" />
      <Route path="/:filter" component={AnimalsList} />
      <Route path="/:filter/:id" component={AnimalProfile} />
    </Route>
  </Router>,
  document.getElementById('root')
);
