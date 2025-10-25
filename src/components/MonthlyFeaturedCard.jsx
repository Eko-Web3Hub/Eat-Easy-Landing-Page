import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "./monthlyFeaturedCard/Card";

const MonthlyFeaturedCard = () => {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState(null);

  const featuredChefs = [
    {
      name: "Imdad",
      role: t('team.roles.frontBackend'),
      image: "/chiefs/Edward.png",
      linkedin: "https://www.linkedin.com/in/imdad-adelabou-a4056919a",
    },
    {
      name: "Spencer",
      role: t('team.roles.frontend'),
      image: "/chiefs/Sophia.png",
      linkedin: "https://www.linkedin.com/in/loic-hacheme",
    },
    {
      name: "Jude",
      role: t('team.roles.design'),
      image: "/chiefs/Liam.png",
      linkedin: "https://www.linkedin.com/in/jude-saizonou",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      {/* Heading */}
      <h2 className="section-title-magilio text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-12 sm:mb-16 md:mb-20">
        {t('team.title')}
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
