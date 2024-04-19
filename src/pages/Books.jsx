import React, { useState, useEffect } from 'react';

function Books() {
  // variable to get data of list of books
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    // used fetch method to call backend api
    fetch('https://backend-bookshelf.onrender.com/books') 
      .then(response => {
        // If response is not correct. return error
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        // if there is resposnse convert it in json
        return response.json();
      })
      .then(data => {
        // set response in a books
        setBooks(data);
      })
      .catch(error => {
        // if there is any error in books fetching
        console.error('Error fetching books:', error);
      });
  }, []);

  

  return (
<>     
  <div className="container">
    <h1 className="mt-5 mb-4">Comics</h1>
    <div className="row">
      {/* convert books data in book using map  */}
      {books.map(book => (                
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            {/* based on booktitle, used google link to get perticulart link of that book */}
            <a href={`https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.title)}`} target="_blank" className='book-link'>
                <div className="card-body ">
                  <h5 className="card-title ">{book.title}</h5>
                  <p className="card-subtitle">{book.author}</p>
                  <p className="card-text ">ISBN: <small>{book.isbn}</small></p>
                  <small className="card-text"> {book.description}</small>
                  <div className="characters">
                    <p>Characters:</p>
                    <div>
                      {book.characters.map((character) => (
                        <span  className="badge bg-dark me-1">{character}</span>
                      ))}
                    </div>
                  </div>
                  <div className="awards">
                    <p>Awards:</p>
                    <div>
                      {book.awards.map((award) => (
                        <span  className="badge bg-danger me-1">{award}</span>
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
 </>

  );
}

export default Books;
