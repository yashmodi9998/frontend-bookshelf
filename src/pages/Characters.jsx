import React, { useState, useEffect } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://backend-bookshelf.onrender.com/characters') 
      .then(response => {
        console.log(response);
        if (!response.ok) {

          throw new Error('Failed to fetch characters');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        setCharacters(data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Book List</h1>
      <div className="card-container ">
     
        {characters.map(character => (
          <div key={character._id} className="col">
          <div className="card">
          <a href='#' className='book-link'>
           
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Real Name: {character.realName}</h6>
              <p className="card-text">First Appearance: {character.firstAppearance}</p>
              <p className="card-text">Powers:</p>
              <ul className="list-unstyled">
                {character.powers.map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
              <p className="card-text">Description: {character.description}</p>
            </div>
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>

  );
}

export default Characters;
