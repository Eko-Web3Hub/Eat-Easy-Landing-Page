import React from 'react';
import { usePageTracking } from '../hooks/useAnalytics';
import { useSEO } from '../utils/seo';
import {
  Header,
  MonthlyFeaturedCard,
  RecipesCard,
  NewsletterBox,
  Features,
} from '../components';

const LandingPage = () => {
  // Track page analytics
  usePageTracking('landing_page', 'Eat\'Easy - AI Recipe Generator | Transform Your Ingredients into Delicious Meals');
  
  // SEO optimization for landing page
  useSEO();

  return (
    <main>
      {/* Main content section with semantic HTML */}
      <div className="space-y-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-16">
        <Header />
        <RecipesCard />
        <Features />
        <NewsletterBox />
        <MonthlyFeaturedCard />
      </div>
    </main>
  );
};

export default LandingPage;
