import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row p-10 md:p-20 space-y-10 md:space-y-0">
        <div className="md:w-1/3">
          <h2 className="text-2xl text-white md:text-3xl font-bold mb-10">
            Have a Great Recipe to Share?
          </h2>
          <button className="bg-secondary text-black px-6 py-2 rounded-lg hover:bg-secondary/90">
            Send Recipe
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 gap-12">
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-4 ml-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigate("#features")}
                  className="text-white hover:text-secondary"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("#")}
                  className="text-white hover:text-secondary"
                >
                  How does it work?
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("#")}
                  className="text-white hover:text-secondary"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-bold text-lg mb-4 ml-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigate("/terms-and-conditions")}
                  className="text-white hover:text-secondary"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("/privacy-policy")}
                  className="text-white hover:text-secondary"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-10 pb-5 text-center">
        <div className="mb-4">
          <a href="https://x.com/EatEasyApp" className="text-white mx-2 hover:text-secondary">
            Twitter
          </a>
        </div>
        <p className="text-sm mb-2">
          Email us at:{" "}
          <a href="mailto:eateasyhub@gmail.com" className="text-white hover:text-secondary">
            eateasyhub@gmail.com
          </a>
        </p>
        <p className="text-sm">
          &copy; 2024 Eat'Easy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
