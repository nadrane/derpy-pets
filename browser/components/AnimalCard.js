import React from 'react';

const AnimalCard = ({ animal }) => {
  return (
    <div className="col s3">
      <img className="animal-img" src={animal.imageUrl} alt={animal.name} />
      <p className="animal-label">{animal.name} ({animal.gender}): {animal.description}</p>
    </div>
  );
}

export default AnimalCard;
