import ReactGA from 'react-ga4';

// Google Analytics configuration
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

class Analytics {
  constructor() {
    this.isInitialized = false;
  }

  // Initialize Google Analytics
  initialize() {
    if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        debug: import.meta.env.DEV, // Enable debug mode in development
      });
      this.isInitialized = true;
      console.log('Google Analytics initialized with ID:', GA_MEASUREMENT_ID);
    } else {
      console.warn('Google Analytics not initialized - missing measurement ID');
    }
  }

  // Track page views
  trackPageView(path, title) {
    if (this.isInitialized) {
      ReactGA.send({
        hitType: 'pageview',
        page: path,
        title: title,
      });
    }
  }

  // Track custom events
  trackEvent(action, category = 'User Interaction', label = '', value = 0) {
    if (this.isInitialized) {
      ReactGA.event({
        action,
        category,
        label,
        value,
      });
    }
  }

  // Track user engagement events
  trackEngagement(eventName, parameters = {}) {
    if (this.isInitialized) {
      ReactGA.event(eventName, parameters);
    }
  }

  // Track conversions (e.g., newsletter signup, app download)
  trackConversion(conversionType, value = 1) {
    if (this.isInitialized) {
      ReactGA.event('conversion', {
        event_category: 'Conversion',
        event_label: conversionType,
        value: value,
      });
    }
  }

  // Track language changes
  trackLanguageChange(newLanguage, previousLanguage = '') {
    this.trackEvent(
      'language_change',
      'Localization',
      `${previousLanguage || 'unknown'}_to_${newLanguage}`
    );
  }

  // Track newsletter signups
  trackNewsletterSignup(email = '') {
    this.trackConversion('newsletter_signup');
    this.trackEvent('newsletter_signup', 'Engagement', 'email_subscription');
  }

  // Track app store clicks
  trackAppStoreClick(store) {
    this.trackEvent('app_store_click', 'Conversion', store);
    this.trackConversion(`app_download_${store}`);
  }

  // Track external link clicks
  trackExternalLink(url, linkText = '') {
    this.trackEvent('external_link_click', 'Navigation', `${linkText}: ${url}`);
  }

  // Track user demographics (with consent)
  trackUserProperties(properties) {
    if (this.isInitialized) {
      ReactGA.set(properties);
    }
  }

  // Track scroll depth
  trackScrollDepth(percentage) {
    this.trackEvent('scroll_depth', 'Engagement', `${percentage}%`, percentage);
  }

  // Track time on page
  trackTimeOnPage(timeInSeconds, pageName) {
    this.trackEvent('time_on_page', 'Engagement', pageName, timeInSeconds);
  }
}

// Create a singleton instance
const analytics = new Analytics();

// Export both the class and the instance
export default analytics;
export { Analytics };