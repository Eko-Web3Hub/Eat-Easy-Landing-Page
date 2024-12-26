import React from "react";

const NewsletterBox = () => {
  return (
    <div className="flex flex-col md:flex-row relative bg-secondary/10 p-8 md:p-10 overflow-hidden rounded-xl md:rounded-[80px] space-y-8 md:space-y-0 md:space-x-[85px]">
      {/* Image Section */}
      <div className="flex-shrink-0 mx-auto md:mx-0 w-full md:w-auto">
        <img
          src="/newsletterBox/Shrimp.png"
          alt="shrimp recipe"
          className="w-full max-w-xs md:max-w-none object-contain"
        />
      </div>

      {/* Text and Input Section */}
      <div className="flex flex-col space-y-6 md:space-y-10 flex-grow text-center md:items-center md:justify-center md:text-left">
        <h2 className="text-lg md:text-3xl md:text-center font-bold">
          Delicious Recipes delivered daily to your mailbox
        </h2>
        <div className="relative bg-white border border-secondary/50 rounded-xl flex items-center w-full">
          <input
            type="email"
            placeholder="your.email@example.com"
            className="bg-white p-3 pl-10 rounded-xl focus:outline-none w-full text-sm md:text-base"
          />
          <button className="absolute right-1 px-4 md:px-10 py-2 text-white bg-primary rounded-xl hover:bg-primary-dark transition">
            Submit
          </button>
        </div>
      </div>

      {/* "DELICIOUS" Text Background */}
      <div className="absolute -bottom-6 md:-bottom-20 md:right-0 font-extrabold text-6xl md:text-[200px] text-stroke text-center">
        DELICIOUS
      </div>
    </div>
  );
};

export default NewsletterBox;
