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
      <h1 className="mt-5 mb-4">Characters</h1>
      <div className="row">
     
        {characters.map(character => (
          <div key={character._id} className="col-md-4 mb-4">
          <div className="card h-100">
          <a href='#' className='book-link'>
           
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
              <h6 className="card-subtitle "><small>Known As: {character.realName}</small></h6>
              <p className="card-text">First Appearance: {character.firstAppearance}</p>
          
              <small className="card-text"> {character.description}</small>
              <div className="powers">
                    <div><p>Power:</p>
                    {character.powers.map((power, index) => (
                        <span  className="badge bg-dark me-1">{power}</span>
                      ))}
                   </div> 
                  </div>
                  
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
