import React from 'react';
import bookImage from "../../assets/books.jpg";
const Banner = () => {
    return (
      <div className="flex justify-around gap-32 items-center p-16 my-20 w-[900px] mx-auto bg-[#F5F5F5] rounded-3xl shadow-inner">
        <div className='mx-16'>
          <h1 className="text-5xl playfair-display-font font-bold my-11">
            Books to freshen up <br /> your bookshelf
          </h1>
          <button className="text-[#FFFFFF] text-xl bg-[#23BE0A] px-5 py-3 rounded-4xl">
            View The List
          </button>
        </div>
        <div>
          <img src={bookImage} alt="Banner of BoiPoka" className="w-[#318px]" />
        </div>
      </div>
    );
};

export default Banner;