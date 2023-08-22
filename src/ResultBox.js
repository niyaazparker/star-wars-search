import React from 'react';

const ResultBox = ({ selectedCharacter }) => {
  if (!selectedCharacter) {
    return null;
  }

  return (
    <div className="result-box col-4 mx-auto text-start border p-3">
      <h2>{selectedCharacter.name}</h2>
      <div className='row'>
        <div className='col-6'>
            <p>Height:</p>
            <p>Mass:</p>
            <p>Hair Color:</p>
            <p>Skin Color:</p>
            <p>Eye Color:</p>
            <p>Birth Year:</p>
            <p>Gender: </p>
        </div>
        <div className='col-6'>
            <p>{selectedCharacter.height}</p>
            <p>{selectedCharacter.mass}</p>
            <p>{selectedCharacter.hair_color}</p>
            <p>{selectedCharacter.skin_color}</p>
            <p>{selectedCharacter.eye_color}</p>
            <p>{selectedCharacter.birth_year}</p>
            <p>{selectedCharacter.gender}</p>
        </div>
      </div>
     
    </div>
  );
};

export default ResultBox;
