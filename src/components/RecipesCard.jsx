import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const RecipesCard = () => {
  const { t } = useTranslation();
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      name: t('recipes.africanFoods.name'),
      description: t('recipes.africanFoods.description'),
      image: "/recipeCard/african.png",
      link: "/recipes/french-classics",
    },
    {
      name: t('recipes.spicyFavorites.name'),
      description: t('recipes.spicyFavorites.description'),
      image: "/recipeCard/tacos.png",
      link: "/recipes/spicy-favorites",
    },
    {
      name: t('recipes.healthyChoices.name'),
      description: t('recipes.healthyChoices.description'),
      image: "/recipeCard/smoothie.png",
      link: "/recipes/healthy-choices",
    },
    {
      name: t('recipes.sweetTreats.name'),
      description: t('recipes.sweetTreats.description'),
      image: "/recipeCard/dessert.png",
      link: "/recipes/sweet-treats",
    },
  ];

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-12 bg-lightest">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-2xl sm:text-3xl font-bold">
          {t('recipes.sectionTitle')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700">
          {t('recipes.sectionSubtitle')}
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="bg-darkest rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            onClick={() => setSelectedRecipe(index)}
            className={`cursor-pointer p-4 rounded-lg transform transition-all duration-500 ease-in-out 
            ${selectedRecipe === index ? "bg-primary py-6 scale-105 shadow-lg z-10" : "bg-gray-800"}`}
          >
            {/* Image */}
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 sm:h-48 object-cover rounded-lg transition-transform duration-500"
            />
            {/* Recipe Name */}
            <h3 className="text-lg sm:text-xl text-white font-bold mt-4 text-center">
              {recipe.name}
            </h3>
            {/* Recipe Description */}
            <p className="mt-2 text-sm text-gray-300 text-center">{recipe.description}</p>
            {/* Link */}
            {selectedRecipe === index && (
              <div className="mt-4 text-center">
                <a
                  href={recipe.link}
                  className="text-white font-semibold hover:underline hover:text-secondary"
                >
                  {t('recipes.learnMore')}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipesCard;
