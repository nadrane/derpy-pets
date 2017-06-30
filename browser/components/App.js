import React from 'react';
import { catsData, dogsData } from '../data';
import AnimalsList from './AnimalsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'all',
      cats: catsData,
      dogs: dogsData,
    };
  }

  changeView(view) {
    this.setState(view);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/logo.png" className="App-logo" alt="logo" />
          <h3>derpy pets</h3>
        </div>

        <div className="container cat-or-dog">
          <div className="row">
            <button
              onClick={() => { this.changeView('cats'); }}
              className="btn-flat btn-large col s5"
            >I WANT A MEOWER</button>
            <button
              onClick={() => { this.changeView('dogs'); }}
              className="btn-flat btn-large col s5 offset-s2"
            >I WANT A BARKER</button>
          </div>
        </div>

        <div className="App-content container-fluid">
          <div className="row">
            <h4>{this.state.view}</h4>
            {
              this.state.view === 'cats' ? <AnimalsList animals={this.state.cats} />
              : this.state.view === 'dogs' ? <AnimalsList animals={this.state.dogs} />
              : this.state.view === 'all' ? (
                <div>
                  <AnimalsList animals={this.state.cats} />
                  <AnimalsList animals={this.state.dogs} />
                </div>
              ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
