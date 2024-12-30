import React from 'react';
import {
  Header,
  MonthlyFeaturedCard,
  RecipesCard,
  NewsletterBox,
  Features,
} from '../components';

const LandingPage = () => {
  return (
    <div>
      {/* Main content section */}
      <div className="space-y-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-16">
        <Header />
        <RecipesCard />
        <Features />
        <NewsletterBox />
        <MonthlyFeaturedCard />
      </div>
    </div>
  );
};

export default LandingPage;
