import { useEffect, useRef } from 'react';
import analytics from '../utils/analytics';

export const useScrollTracking = (pageName = 'unknown') => {
  const scrollDepthRef = useRef(0);
  const timeStartRef = useRef(Date.now());
  const trackingIntervalsRef = useRef({
    25: false,
    50: false,
    75: false,
    100: false,
  });

  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Update max scroll depth
      if (scrollPercent > scrollDepthRef.current) {
        scrollDepthRef.current = scrollPercent;
      }

      // Track milestone scroll depths
      [25, 50, 75, 100].forEach(milestone => {
        if (scrollPercent >= milestone && !trackingIntervalsRef.current[milestone]) {
          trackingIntervalsRef.current[milestone] = true;
          analytics.trackScrollDepth(milestone);
        }
      });
    };

    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - timeStartRef.current) / 1000);
      if (timeSpent > 0 && timeSpent % 30 === 0) { // Track every 30 seconds
        analytics.trackTimeOnPage(timeSpent, pageName);
      }
    };

    // Set up event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    const timeInterval = setInterval(trackTimeOnPage, 30000); // Every 30 seconds

    // Track when user leaves the page
    const handleBeforeUnload = () => {
      const finalTimeSpent = Math.round((Date.now() - timeStartRef.current) / 1000);
      analytics.trackTimeOnPage(finalTimeSpent, pageName);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(timeInterval);

      // Track final time on page
      const finalTimeSpent = Math.round((Date.now() - timeStartRef.current) / 1000);
      if (finalTimeSpent > 5) { // Only track if user spent more than 5 seconds
        analytics.trackTimeOnPage(finalTimeSpent, pageName);
      }
    };
  }, [pageName]);

  return {
    maxScrollDepth: scrollDepthRef.current,
    timeOnPage: Math.round((Date.now() - timeStartRef.current) / 1000),
  };
};

export const usePageTracking = (pageName, pageTitle) => {
  useEffect(() => {
    // Track page view
    analytics.trackPageView(window.location.pathname, pageTitle || document.title);
  }, [pageName, pageTitle]);

  // Use scroll tracking for this page
  const scrollData = useScrollTracking(pageName);

  return scrollData;
};