import React from 'react';

const Card = ({ title, description, image, soon }) => {
  return (
    <div className="relative bg-white border border-[#EAECF0] rounded-lg shadow-lg p-6 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      
      <div className="absolute top-[-40px] left-1/4 transform -translate-x-1/2 w-30 h-30 bg-white rounded-full border-2 border-secondary p-2">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-full p-2 bg-secondary/80 border border-white" />
      </div>
      <div className="pt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{description} <span className='text-secondary font-bold'>{soon}</span></p>
      </div>
    </div>
  );
};

export default Card;
