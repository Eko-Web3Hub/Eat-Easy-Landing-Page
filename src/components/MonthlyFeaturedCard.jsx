import React, { useState } from "react";
import Card from "./monthlyFeaturedCard/Card";

const MonthlyFeaturedCard = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const featuredChefs = [
    {
      name: "Imdad",
      role: "Front/Backend",
      image: "/chiefs/Edward.png",
      linkedin: "https://www.linkedin.com/in/imdad-adelabou-a4056919a",
    },
    {
      name: "Spencer",
      role: "Frontend",
      image: "/chiefs/Sophia.png",
      linkedin: "https://www.linkedin.com/in/spencerhacheme",
    },
    {
      name: "Jude",
      role: "Design",
      image: "/chiefs/Liam.png",
      linkedin: "https://www.linkedin.com/in/judesaizonou",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-20 md:mb-20">
        Easy Teams Chefs
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-20 md:gap-10 items-center justify-center">
        {featuredChefs.map((chef, index) => (
            <Card
            key={index}
            name={chef.name}
            role={chef.role}
            image={chef.image}
            linkedin={chef.linkedin}
            isSelected={selectedCard === index}
            onClick={() => setSelectedCard(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthlyFeaturedCard;
