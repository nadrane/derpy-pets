import React from 'react';

const AnimalCard = ({ animal }) => {
  return (
    <div className="col s3">
      <img className="animal-img" src={animal.imageUrl} />
      <p>{animal.name}</p>
    </div>
  );
};

export default AnimalCard;
