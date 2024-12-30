import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage(); // Access language context
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  // Language change handler
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsMenuOpen(false); // Close dropdown if opened
  };

  return (
    <div className="flex flex-row justify-between items-center px-4 sm:px-8">
      {/* Logo */}
      <div>
        <img
          src="/logo.png"
          alt="Eat'easy"
          className="w-32 sm:w-40 md:w-48 cursor-pointer"
          onClick={() => handleNavigate("/")}
        />
      </div>

      {/* Burger Menu for Mobile */}
      <div ref={dropdownRef} className="relative md:hidden">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle menu state
          aria-label="Toggle Menu"
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              // Close Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Burger Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full right-0 w-auto bg-white shadow-lg z-10 rounded-lg px-10`}
        >
          <div className="flex flex-col items-center">
            <a
              href="/#features"
              className="block py-3 text-black hover:text-primary hover:underline text-center transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              FEATURES
            </a>
            <a
              href="#footer"
              className="block py-3 text-black hover:text-primary hover:underline text-center transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </a>

            {/* Language Switcher */}
            <div className="flex space-x-4 mt-4">
              <img
                src="/flags/en.png"
                alt="English"
                className={`w-6 h-4 cursor-pointer ${
                  language === "en" ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleLanguageChange("en")}
              />
              <img
                src="/flags/fr.png"
                alt="French"
                className={`w-6 h-4 cursor-pointer ${
                  language === "fr" ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleLanguageChange("fr")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-10 items-center font-bold">
        <a
          href="/#features"
          className="text-black hover:text-primary hover:underline"
        >
          FEATURES
        </a>
        <a
          href="#footer"
          className="text-black hover:text-primary hover:underline"
        >
          SERVICES
        </a>

        {/* Language Switcher */}
        <div className="flex space-x-4 items-center">
          <img
            src="/flags/en.png"
            alt="English"
            className={`w-6 h-4 cursor-pointer ${
              language === "en" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleLanguageChange("en")}
          />
          <img
            src="/flags/fr.png"
            alt="French"
            className={`w-6 h-4 cursor-pointer ${
              language === "fr" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleLanguageChange("fr")}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
