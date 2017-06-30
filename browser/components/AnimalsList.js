import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalsList = ({ animals }) => {
  return (
    <div>
      {
        animals.map(animal => <AnimalCard key={animal.id} animal={animal} />)
      }
    </div>
  );
};

export default AnimalsList;
