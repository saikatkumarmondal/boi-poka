import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ( {book} ) => {
    // const books = use( bookPromise );
 const {
   bookId,
   bookName,

   image,
   rating,
   category,
   tags,
 
   yearOfPublishing,
   publisher,
 } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow p-6">
        <figure className="p-4 bg-gray-100 w-5/6 mx-auto rounded-3xl">
          <img src={image} alt={bookName} className="w-[166px]" />
        </figure>
        <div className="card-body ">
          <div className="flex justify-center gap-6 mb-2">
            {tags.map((tag, index) => (
              <button
                className="btn btn-outline btn-sm text-[#23BE0A] bg-[#23BE0A0D] w-[93px] h-[30px] mb-2 rounded-4xl px-3 py-5"
                key={index}>
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by :&nbsp; {publisher}</p>
          <div className="border-t-2 border-dashed border-[#13131326]"></div>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating} <FaStarHalfAlt></FaStarHalfAlt>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;