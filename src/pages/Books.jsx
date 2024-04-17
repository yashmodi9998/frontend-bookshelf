import React, { useState, useEffect } from 'react';

function Books() {
  const [books, setBooks] = useState([]);
  const [image, setImage] = useState([]);
  

  useEffect(() => {
    fetch('https://backend-bookshelf.onrender.com/books') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        return response.json();
      })
      .then(data => {
        setBooks(data);
        // data.forEach(element => {

        // });
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  // const fetchBookCoverByTitle = async (title) => {
  //   try {
  //     const encodedTitle = encodeURIComponent(title);
  //     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}`);
  //     const data = await response.json();
  //     const thumbnailUrl = data.items[0].volumeInfo.imageLinks.thumbnail;
  //     setImage(thumbnailUrl);
  //     console.log(image)
  //     return thumbnailUrl;
  //   } catch (error) {
  //     console.error('Error fetching book cover:', error);
  //     return null;
  //   }
  // };

  return (

    <div className="container">
      <h1 className="mt-5 mb-4">Book List</h1>
      <div className="card-container ">
     
        {books.map(book => (
              
          <div key={book._id} className="col">
            <div className="card">
            <a href={`https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.title)}`} target="_blank" className='book-link'>
              <div className="card-body ">
                <h5 className="card-title ">{book.title}</h5>
                <p className="card-subtitle text-muted">{book.author}</p>
                <p className="card-text ">ISBN: <small>{book.isbn}</small></p>
                <small className="card-text"> {book.description}</small>
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
