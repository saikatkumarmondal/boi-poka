import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [ allBooks, setAllBooks ] = useState( [] );
    // useEffect( () => {
    //     // fetch(
    //     //   "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
    //     // );

    //     fetch( "/data/booksData.json" )
    //         .then( ( res ) => res.json() )
    //     .then((data)=> setAllBooks(data))
    // },[])

    const bookPromise = fetch( "/data/booksData.json" ).then( ( res ) => res.json() );
    return (
      <div>
        <h1 className="text-3xl text-center  p-6">Books</h1>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-error"></span>
          }>
          <div className=" grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 p-6 ">
            {data.map((book) => (
              <Book book={book} key={book.bookId}></Book>
            ))}
          </div>
        </Suspense>
      </div>
    );
};

export default Books;