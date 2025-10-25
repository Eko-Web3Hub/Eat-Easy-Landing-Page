import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// SEO configuration for different pages
const seoConfig = {
  '/': {
    title: "Eat'Easy - AI Recipe Generator | Transform Your Ingredients into Delicious Meals",
    description: "Discover Eat'Easy, the smart cooking app that generates personalized recipes from your available ingredients. Reduce food waste, save time, and enjoy healthy meals tailored to your preferences.",
    keywords: "recipe generator, cooking app, meal planning, ingredient scanner, food waste reduction, AI recipes, personalized cooking, healthy meals",
    image: "/banner.png",
    url: "https://eateasy.vercel.app/"
  },
  '/privacy-policy': {
    title: "Privacy Policy - Eat'Easy | Your Data Protection",
    description: "Learn how Eat'Easy protects your privacy and handles your personal data. Our comprehensive privacy policy explains our data collection and usage practices.",
    keywords: "privacy policy, data protection, GDPR, personal data, Eat'Easy privacy",
    image: "/eateasy-logo.png",
    url: "https://eateasy.vercel.app/privacy-policy"
  },
  '/terms-and-conditions': {
    title: "Terms & Conditions - Eat'Easy | User Agreement",
    description: "Read Eat'Easy's terms and conditions. Understand your rights and responsibilities when using our recipe generation app and services.",
    keywords: "terms of service, user agreement, terms and conditions, Eat'Easy legal",
    image: "/eateasy-logo.png",
    url: "https://eateasy.vercel.app/terms-and-conditions"
  },
  '/analytics': {
    title: "Analytics Dashboard - Eat'Easy | Website Performance",
    description: "View Eat'Easy website analytics and performance metrics. Monitor traffic, user engagement, and conversion rates.",
    keywords: "analytics, website performance, traffic metrics, user engagement",
    image: "/eateasy-logo.png",
    url: "https://eateasy.vercel.app/analytics",
    robots: "noindex, nofollow" // Don't index analytics page
  }
};

// Default SEO values
const defaultSEO = {
  title: "Eat'Easy - Smart Recipe Generator App",
  description: "Generate personalized recipes from your ingredients with Eat'Easy. Save time, reduce waste, and enjoy delicious meals.",
  keywords: "recipe app, cooking, meal planning, ingredients",
  image: "/eateasy-logo.png",
  url: "https://eateasy.vercel.app/",
  robots: "index, follow"
};

// Utility function to update meta tags
const updateMetaTag = (name, content, property = false) => {
  if (!content) return;
  
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let meta = document.querySelector(selector);
  
  if (!meta) {
    meta = document.createElement('meta');
    if (property) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
  }
  
  meta.setAttribute('content', content);
};

// Update canonical URL
const updateCanonical = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

// Update page title
const updateTitle = (title) => {
  document.title = title;
  updateMetaTag('title', title);
  updateMetaTag('og:title', title, true);
  updateMetaTag('twitter:title', title, true);
};

// Update structured data
const updateStructuredData = (pathname) => {
  const baseUrl = 'https://eateasy.vercel.app';
  
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seoConfig[pathname]?.title || defaultSEO.title,
    "description": seoConfig[pathname]?.description || defaultSEO.description,
    "url": `${baseUrl}${pathname}`,
    "mainEntity": {
      "@type": "WebApplication",
      "name": "Eat'Easy",
      "description": "AI-powered recipe generator",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "iOS, Android, Web",
      "url": baseUrl
    }
  };

  // Add specific structured data for homepage
  if (pathname === '/') {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Eat'Easy",
      "description": "AI-powered recipe generator that creates personalized recipes from your available ingredients",
      "url": baseUrl,
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "iOS, Android, Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Eat'Easy Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Eat'Easy",
        "logo": {
          "@type": "ImageObject",
          "url": `${baseUrl}/eateasy-logo.png`
        }
      },
      "downloadUrl": [
        "https://apps.apple.com/fr/app/eateasy/id6739941450",
        "https://play.google.com/store/apps/details?id=com.receipeapi.app"
      ],
      "featureList": [
        "AI Recipe Generation",
        "Ingredient Scanning",
        "Meal Planning",
        "Nutrition Tracking",
        "Personalized Recommendations"
      ]
    };
  }

  // Update or create structured data script
  let scriptTag = document.querySelector('script[type="application/ld+json"]');
  if (!scriptTag) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    document.head.appendChild(scriptTag);
  }
  scriptTag.textContent = JSON.stringify(structuredData);
};

// Main SEO hook
export const useSEO = (customSEO = {}) => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const seoData = { 
      ...defaultSEO, 
      ...seoConfig[pathname],
      ...customSEO 
    };

    // Update title
    updateTitle(seoData.title);

    // Update meta description
    updateMetaTag('description', seoData.description);
    updateMetaTag('og:description', seoData.description, true);
    updateMetaTag('twitter:description', seoData.description, true);

    // Update keywords
    updateMetaTag('keywords', seoData.keywords);

    // Update image meta tags
    const fullImageUrl = seoData.image.startsWith('http') 
      ? seoData.image 
      : `https://eateasy.vercel.app${seoData.image}`;
    
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('twitter:image', fullImageUrl, true);

    // Update URL meta tags
    updateMetaTag('og:url', seoData.url, true);
    updateMetaTag('twitter:url', seoData.url, true);
    updateCanonical(seoData.url);

    // Update robots meta tag
    updateMetaTag('robots', seoData.robots || 'index, follow');

    // Update structured data
    updateStructuredData(pathname);

    // Update language meta tag based on current page language
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', 'en'); // You can make this dynamic based on user's language preference

  }, [pathname, customSEO]);
};

// Utility function for manual SEO updates
export const updateSEO = (seoData) => {
  if (seoData.title) updateTitle(seoData.title);
  if (seoData.description) {
    updateMetaTag('description', seoData.description);
    updateMetaTag('og:description', seoData.description, true);
    updateMetaTag('twitter:description', seoData.description, true);
  }
  if (seoData.keywords) updateMetaTag('keywords', seoData.keywords);
  if (seoData.image) {
    const fullImageUrl = seoData.image.startsWith('http') 
      ? seoData.image 
      : `https://eateasy.vercel.app${seoData.image}`;
    updateMetaTag('og:image', fullImageUrl, true);
    updateMetaTag('twitter:image', fullImageUrl, true);
  }
  if (seoData.url) {
    updateMetaTag('og:url', seoData.url, true);
    updateMetaTag('twitter:url', seoData.url, true);
    updateCanonical(seoData.url);
  }
};

// Keywords for different sections
export const keywords = {
  recipeGeneration: [
    'AI recipe generator',
    'personalized recipes',
    'ingredient-based recipes',
    'smart cooking app',
    'recipe suggestions'
  ],
  mealPlanning: [
    'meal planning app',
    'weekly meal prep',
    'nutrition tracking',
    'healthy meal ideas',
    'diet planning'
  ],
  foodWaste: [
    'reduce food waste',
    'use leftover ingredients',
    'sustainable cooking',
    'eco-friendly recipes',
    'zero waste kitchen'
  ],
  healthyEating: [
    'healthy recipes',
    'nutritious meals',
    'balanced diet',
    'calorie tracking',
    'wellness cooking'
  ]
};

export default useSEO;