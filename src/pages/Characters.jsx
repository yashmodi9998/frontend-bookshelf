import React, { useState, useEffect } from 'react';

function Characters() {
  // State variable to store the list of characters
  const [characters, setCharacters] = useState([]);
  // State variable to indicate whether data is being loaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch characters data from the backend API
    fetch('https://backend-bookshelf.onrender.com/characters') 
      .then(response => {
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        // Parse response data as JSON
        return response.json();
      })
      .then(data => {
        // Set characters data and indicate loading has finished
        setCharacters(data);
        setLoading(false);
      })
      .catch(error => {
        // Log and handle errors
        console.error('Error fetching characters:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // If loading, render a loading indicator
  if (loading) {
    return (
      <div className="container ">
      <h1 className="mt-5 mb-4">Characters</h1>
      <div className="spinner-border text-danger" >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  }

  // Once loading is finished and api is loaded, render the characters list
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Characters</h1>
      <div className="row">
        {characters.map(character => (
          <div className="col-md-4 mb-4" key={character._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <h6 className="card-subtitle "><small>Known As: {character.realName}</small></h6>
                <p className="card-text">First Appearance: {character.firstAppearance}</p>
                <small className="card-text"> {character.description}</small>
                <div className="powers">
                  <div><p>Power:</p>
                    {character.powers.map((power, index) => (
                      <span key={index} className="badge bg-dark me-1">{power}</span>
                    ))}
                  </div> 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Characters;
