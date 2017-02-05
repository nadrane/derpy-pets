import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalsList = (props) => {
  const { params, cats, dogs, selectAnimal } = props;
  const animals = params.filter !== 'all' ? props[params.filter] : [...cats, ...dogs];

  return (
    <div className="row">
      <h4>{ params.filter }</h4>
      <div>
        {
          animals.map(animal => <AnimalCard
            key={animal.id}
            animal={animal}
            selectAnimal={selectAnimal}
          />)
        }
      </div>
    </div>
  );
}

export default AnimalsList;
