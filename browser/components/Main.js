import React from 'react';

import { catsData, dogsData } from '../../data';
import { Route } from 'react-router-dom';
import AnimalsList from './AnimalsList';
import AnimalProfile from './AnimalProfile';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: catsData,
      dogs: dogsData,
    }
  }

  render() {
    const species = this.props.match.params.species
    const animalsToDisplay = species === 'all' ?
      [...this.state.cats, ...this.state.dogs] :
      this.state[species];

    return (
      <div className="App-content container-fluid">
        <AnimalsList
          animals={animalsToDisplay}
          view={this.state.view}
        />
      </div>
    );
  }
}

export default Main;
