import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div className="App-header">
        <Link to="/">
          <img src="/logo.png" className="App-logo" alt="logo" />
          <h3>derpy pets</h3>
        </Link>
      </div>
      <div className="container cat-or-dog">
        <div className="row">
          <Link to="/cats" className="btn-flat btn-large col s5"> I WANT A MEOWER</Link>
          <Link to="/dogs" className="btn-flat btn-large col s5 offset-s2" > I WANT A BARKER</Link>
        </div>
      </div>
    </div>
  );
}
