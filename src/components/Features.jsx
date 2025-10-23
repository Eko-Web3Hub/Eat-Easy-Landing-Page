import React from "react";
import { useTranslation } from "react-i18next";
import Card from "./features/Card";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('features.addIngredients.title'),
      description: t('features.addIngredients.description'),
      image: "/features/list-add.png",
    },
    {
      title: t('features.generateRecipes.title'),
      description: t('features.generateRecipes.description'),
      image: "/features/generate.png",
    },
    {
      title: t('features.mealPrepTracker.title'),
      description: t('features.mealPrepTracker.description'),
      image: "/features/kpi.png",
      soon: t('features.mealPrepTracker.soon'),
    },
    {
      title: t('features.challengeFriends.title'),
      description: t('features.challengeFriends.description'),
      image: "/features/target-arrow.png",
      soon: t('features.challengeFriends.soon'),
    },
    {
      title: t('features.scanReceipts.title'),
      description: t('features.scanReceipts.description'),
      image: "/features/qrcode-scan.png",
    },
    {
      title: t('features.voiceToText.title'),
      description: t('features.voiceToText.description'),
      image: "/features/keyboard-voice.png",
      soon: t('features.voiceToText.soon'),
    },
  ];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-12 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          {t('features.sectionTitle')}
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
          {t('features.sectionSubtitle')}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            soon={feature.soon}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
