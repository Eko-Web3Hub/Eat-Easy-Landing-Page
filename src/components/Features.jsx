import React from "react";
import Card from "./features/Card";

const Features = () => {
  const features = [
    {
      title: "Add Ingredients",
      description:
        "Easily add ingredients from your kitchen to your inventory and keep track of what you have.",
      image: "/features/list-add.png",
    },
    {
      title: "Generate Recipes",
      description:
        "Get personalized recipe suggestions based on the ingredients you've added.",
      image: "/features/generate.png",
    },
    {
      title: "Organize Your Meal Prep and Track Calories",
      description:
        "Effortlessly plan your meals and track the calories you consume to stay on top of your health goals.",
      image: "/features/kpi.png",
      soon: "(Soon)",
    },
    {
      title: "Challenge Friends",
      description:
        "Compete with your friends to complete challenges and earn badges as you progress.",
      image: "/features/target-arrow.png",
      soon: "(Soon)",
    },
    {
      title: "Scan Shopping Receipts",
      description:
        "Upload your shopping receipts to automatically add items to your inventory.",
      image: "/features/qrcode-scan.png",
    },
    {
      title: "Voice to Text",
      description:
        "Use voice commands to add ingredients or find recipes with ease.",
      image: "/features/keyboard-voice.png",
      soon: "(Soon)",
    },
  ];

  return (
    <section id="features" className="px-4 sm:px-6 lg:px-12 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Discover What Our App Can Do
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
          Eat'Easy is your ultimate kitchen companion, packed with features that make meal planning effortless and cooking a joy. Discover how it can revolutionize your culinary journey!
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
