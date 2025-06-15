import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt( id );
    const data = useLoaderData();
    const singleBook = data.find((book) => book.bookId === bookId );
    const {
      image,
      bookName,
      author,
      category,
      review,
      tags,
      totalPages,
      publisher,
      yearOfPublishing,
      rating,
  } = singleBook;
  
  const handleMarkAsRead=(id)=>{
    // store with id
    // where to store
    //array or collection
    //if book already exist then show an alert
    // if book not exist then push in the collection or array
    addToStoredDB(id);
  }
    return (
      <div className="w-[1170px] h-[711px] mx-auto flex justify-between items-center bg-white my-9">
        <div className="w-[573px] h-[711px] bg-[#F5F5F5] rounded-3xl shadow-inner p-16 flex items-center justify-center">
          <img src={image} alt="" className="p-10" />
        </div>
        <div className="w-[573px] h-[711px]  rounded-3xl shadow-inner p-16">
          <h2 className="text-4xl font-bold mb-4 playfair-display-font">
            {bookName}
          </h2>
          <p className="text-black font-medium text-2xl">By: {author}</p>
          <div className="border-t border-gray-300 my-3"></div>
          <p className="text-2xl font-medium">{category}</p>
          <div className="border-t border-gray-300 my-3"></div>
          <p className="  text-xs font-bold text-[#131313]">
            Review:
            <span className="text-xs font-normal text-gray-400"> {review}</span>
          </p>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-xs font-bold text-[#131313]">Tag</p>
            <div className="flex gap-2">
              {tags.map((tag, index) => (
                <button
                  className="btn btn-outline btn-sm text-[#23BE0A] bg-[#23BE0A0D] w-[93px] h-[30px] mb-2 rounded-4xl px-3 py-5"
                  key={index}>
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-300 my-3"></div>
          <p className="text-xs font-bold text-[#131313] my-3">
            <span className="text-xs font-normal text-gray-400">
              Number of Pages:
            </span>
            &nbsp; &nbsp;{totalPages}
          </p>
          <p className="text-xs font-bold text-[#131313] my-3">
            <span className="text-xs font-normal text-gray-400">
              Publisher:
            </span>
            &nbsp; &nbsp;{publisher}
          </p>
          <p className="text-xs font-bold text-[#131313] my-3">
            <span className="text-xs font-normal text-gray-400">
              Year of Publishing:
            </span>
            &nbsp; &nbsp;{yearOfPublishing}
          </p>
          <p className="text-xs font-bold text-[#131313] my-3">
            <span className="text-xs font-normal text-gray-400">Rating:</span>
            &nbsp; &nbsp;{rating}
          </p>
          <div>
            <button
              onClick={() => handleMarkAsRead(id)}
              className="bg-[#FFFFFF] text-black px-4 py-3 rounded-2xl border-2 border-gray-300 mr-4">
              Mark as Read
            </button>
            <button className="bg-[#50B1C9] text-white px-4 py-3 rounded-2xl">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;