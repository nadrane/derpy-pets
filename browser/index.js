import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Header from './components/Header';
import { HashRouter,Route, Link } from 'react-router-dom'

function Dogs() {
  return <p> the dogs are here! </p>
}

ReactDOM.render(
  <HashRouter>
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/:species" component={Main} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
