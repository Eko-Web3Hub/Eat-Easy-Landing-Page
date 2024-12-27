import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <div className="flex flex-row justify-between items-center px-4 sm:px-8">
      {/* Logo */}
      <div>
        <img
          src="/logo.png"
          alt="Eat'easy"
          className="w-32 sm:w-40 md:w-48" // Adjust sizes for different screen sizes
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
            {" "}
            {/* Spacing between items */}
            <a
              href="#home"
              className="block py-3 text-black hover:text-primary hover:underline text-center transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              HOME
            </a>
            <a
              href="#features"
              className="block py-3 text-black hover:text-primary hover:underline text-center transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              FEATURES
            </a>
            <a
              href="#contact"
              className="block py-3 text-black hover:text-primary hover:underline text-center transition-colors duration-300 ease-in-out"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-10 font-bold">
        <a
          href="#home"
          className="text-black hover:text-primary hover:underline"
        >
          HOME
        </a>
        <a
          href="#features"
          className="text-black hover:text-primary hover:underline"
        >
          FEATURES
        </a>
        <a
          href="#contact"
          className="text-black hover:text-primary hover:underline"
        >
          SERVICES
        </a>
      </div>
    </div>
  );
};

export default Navbar;
