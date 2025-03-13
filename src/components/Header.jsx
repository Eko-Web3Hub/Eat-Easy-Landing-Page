import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppleLogo from "../assets/apple.svg";

const Header = () => {
  const images = [
    "/ingredientsadding.png",
    "/preferences.png",
    "/menushowing.png",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10 p-5">
      {/* Text Section */}
      <div className="flex flex-1 flex-col space-y-[25px] mb-8 lg:mb-0">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-2xl lg:text-4xl">
          Say goodbye to kitchen dilemmas with Eat'Easy
        </h1>
        <p className="text-base lg:text-lg">
          Unlock the power of your pantry! We help you to generate personalized
          recipes based on the ingredients you already have. Save time, reduce
          waste, and enjoy healthy, delicious meals tailored to your
          preferences.
        </p>
        <div className="flex flex-row gap-10 justify-center lg:justify-start">
          <Link target="_blank" to="https://apps.apple.com/fr/app/eateasy/id6739941450" className="contents">
            <button className="primary shadow-custom w-full lg:w-1/3 flex items-center justify-center gap-2">
              Find Recipes
              <img src={AppleLogo} alt="Apple" className="w-5 h-5 invert" />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center relative w-full overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex}`}
            className="w-full h-full object-contain max-w-md mx-auto p-5 lg:p-[25px]"
            initial={{ x: "100%", scale: 1 }}
            animate={{ x: 0, scale: 1 }}
            exit={{ x: "-100%", scale: 1 }}
            transition={{
              x: { duration: 0.7, ease: "easeInOut" },
              scale: { duration: 1, ease: "easeInOut" },
            }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
