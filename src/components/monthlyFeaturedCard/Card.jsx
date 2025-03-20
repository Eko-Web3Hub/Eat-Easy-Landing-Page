import React from "react";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons

const Card = ({ name, role, image, linkedin, isSelected, onClick }) => {
  return (
    <div
      className={`bg-card flex flex-row relative items-center w-[400px] h-[100px] rounded-3xl p-4 
        ${isSelected ? "bg-secondary/10 border border-secondary" : "bg-[#EAECF0]"} cursor-pointer transition-all duration-300`}
      onClick={onClick}
    >
      <div className="ml-10">
        <p className="font-bold">{name}</p>
        <p>
          Chef. <span className="font-bold">{role}</span>
        </p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary flex items-center gap-2 mt-2 hover:underline"
        >
          <FaLinkedin size={16} /> LinkedIn
        </a>
      </div>
      <div
        className={`absolute translate-y-1 right-10 border border-2 border-white rounded-full 
        ${isSelected ? "bg-secondary" : "bg-[#FFCE80]"}`}
        onClick={onClick}
      >
        <img src={image} alt={name} className="rounded-full" />
      </div>
    </div>
  );
};

export default Card;
