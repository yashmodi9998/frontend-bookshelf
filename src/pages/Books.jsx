import React, { useState, useEffect } from 'react';

function Books() {
  // State variable to store the list of books
  const [books, setBooks] = useState([]);
  // State variable to indicate whether data is loaded
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch books data from the backend API
    fetch('https://backend-bookshelf.onrender.com/books') 
      .then(response => {
        // Check if response is successful
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        // Parse response data as JSON
        return response.json();
      })
      .then(data => {
        // Set books data and indicate loading has finished
        setBooks(data);
        setLoading(false);
      })
      .catch(error => {
        // Log and handle errors
        console.error('Error fetching books:', error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  // If loading, render a loading indicator
  if (loading) {
    return (
      <div className="container">
        <h1 className="mt-5 mb-4">Comics</h1>
        <div className="spinner-border text-danger" >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Once loading is finished, render the books list
  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Comics</h1>
      <div className="row">
        {/* Render books' content */}
        {books.map(book => (
          <div className="col-md-4 mb-4" key={book._id}>
            <div className="card h-100">
              <a href={`https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.title)}`} target="_blank" className='book-link'>
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-subtitle">{book.author}</p>
                  <p className="card-text">ISBN: <small>{book.isbn}</small></p>
                  <small className="card-text">{book.description}</small>
                  <div className="characters">
                    <p>Characters:</p>
                    <div>
                      {book.characters.map((character, index) => (
                        <span key={index} className="badge bg-dark me-1">{character}</span>
                      ))}
                    </div>
                  </div>
                  <div className="awards">
                    <p>Awards:</p>
                    <div>
                      {book.awards.map((award, index) => (
                        <span key={index} className="badge bg-danger me-1">{award}</span>
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

export default Books;
