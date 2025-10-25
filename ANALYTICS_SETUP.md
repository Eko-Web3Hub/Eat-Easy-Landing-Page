# Website Traffic Tracking Setup Guide

This guide explains how to set up comprehensive website traffic tracking for your Eat'Easy landing page.

## 📊 Analytics Solutions Implemented

### 1. Google Analytics 4 (GA4)
- **Purpose**: Comprehensive website analytics, user behavior tracking, and conversion tracking
- **Features**: Page views, sessions, demographics, real-time data, custom events

### 2. Vercel Analytics
- **Purpose**: Real-time performance metrics and page views
- **Features**: Automatic integration with Vercel deployment, zero configuration

### 3. Custom Event Tracking
- **Purpose**: Track specific user interactions
- **Features**: Language switches, newsletter signups, app store clicks, scroll depth

## 🚀 Setup Instructions

### Step 1: Google Analytics Setup

1. **Create a Google Analytics 4 Property**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property for your website
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Add Your Measurement ID**:
   ```bash
   # Create .env file in your project root
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

3. **Verify Installation**:
   - Open your website
   - Check browser console for "Google Analytics initialized"
   - Verify data appears in GA4 Real-time reports

### Step 2: Vercel Analytics Setup

1. **For Vercel Pro Plans**:
   - Analytics are automatically enabled
   - No additional configuration needed

2. **For Free Plans**:
   - Upgrade to Pro plan or use GA4 only
   - Analytics component is included but requires Pro features

### Step 3: Environment Variables

Create a `.env` file in your project root:
```env
# Google Analytics Configuration
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Vercel Analytics
VITE_VERCEL_ANALYTICS_ENABLED=true

# Environment
VITE_NODE_ENV=production
```

## 📈 What's Being Tracked

### Automatic Tracking
- **Page Views**: Every page visit
- **User Sessions**: Session duration and engagement
- **Geographic Data**: Country and region (anonymized)
- **Device Information**: Browser, OS, device type
- **Traffic Sources**: Referrers, search engines, direct traffic

### Custom Events
- **Language Changes**: Track when users switch languages
- **Newsletter Signups**: Monitor email subscription conversions
- **App Store Clicks**: Track downloads from Apple Store and Play Store
- **External Links**: Monitor clicks to social media and external sites
- **Scroll Depth**: Track user engagement (25%, 50%, 75%, 100%)
- **Time on Page**: Monitor how long users stay on each page

### Conversion Tracking
- Newsletter subscriptions
- App store redirects
- External link engagement
- Form submissions

## 🔍 Analytics Dashboard

Access your analytics dashboard at: `/analytics`

**Features**:
- Key metrics overview
- Top pages performance
- Geographic distribution
- Real-time visitor count
- Conversion rates

## 🛡️ Privacy Compliance

### Cookie Consent
- GDPR/CCPA compliant cookie banner
- User can accept or decline tracking
- Proper consent management

### Data Protection
- Anonymized IP addresses
- No personally identifiable information stored
- Respects user privacy preferences

## 📊 Key Metrics to Monitor

### Traffic Metrics
- **Page Views**: Total number of page visits
- **Unique Visitors**: Number of individual users
- **Session Duration**: Average time spent on site
- **Bounce Rate**: Percentage of single-page sessions

### Engagement Metrics
- **Scroll Depth**: How far users scroll down pages
- **Time on Page**: Average time spent on each page
- **Click-through Rates**: Percentage of users clicking CTAs

### Conversion Metrics
- **Newsletter Signup Rate**: Email subscription conversions
- **App Download Rate**: Clicks to app stores
- **Geographic Performance**: Which countries perform best

## 🔧 Advanced Configuration

### Custom Event Tracking
```javascript
import analytics from './utils/analytics';

// Track custom events
analytics.trackEvent('button_click', 'Engagement', 'header_cta');
analytics.trackConversion('newsletter_signup');
analytics.trackExternalLink('https://example.com', 'External Link');
```

### User Properties
```javascript
// Track user characteristics
analytics.trackUserProperties({
  preferred_language: 'fr',
  user_type: 'new_visitor'
});
```

## 📱 Mobile Tracking

- Responsive tracking for all device types
- Touch event tracking
- Mobile-specific user interactions
- App store click tracking optimized for mobile

## 🔄 Data Export and Integration

### Google Analytics Integration
- Connect to Google Data Studio for advanced reporting
- Export data to Google Sheets
- Set up automated reports

### Vercel Analytics
- Built-in dashboard in Vercel deployment
- Real-time performance metrics
- Automatic error tracking

## 🚨 Troubleshooting

### Common Issues

1. **GA4 Not Tracking**:
   - Check if VITE_GA_MEASUREMENT_ID is set correctly
   - Verify measurement ID format (G-XXXXXXXXXX)
   - Check browser console for initialization messages

2. **Events Not Firing**:
   - Ensure analytics.initialize() is called
   - Check network tab for GA4 requests
   - Verify event names and parameters

3. **Cookie Consent Issues**:
   - Check if consent banner appears
   - Verify consent state is properly stored
   - Test tracking with and without consent

### Debug Mode
Enable debug mode in development:
```javascript
// In analytics.js
ReactGA.initialize(GA_MEASUREMENT_ID, {
  debug: true, // Enable debug mode
});
```

## 📈 Performance Impact

- **Bundle Size**: ~15KB additional JavaScript
- **Load Time**: Minimal impact (<50ms)
- **Performance**: Analytics load asynchronously
- **Privacy**: GDPR/CCPA compliant implementation

## 🎯 Success Metrics

Track these KPIs to measure website success:
- Monthly unique visitors growth
- Newsletter signup conversion rate
- App store click-through rate
- Average session duration improvement
- Geographic expansion of user base

## 🔗 Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Vercel Analytics Guide](https://vercel.com/docs/analytics)
- [GDPR Compliance Guide](https://gdpr.eu/compliance/)
- [React GA4 Documentation](https://github.com/PROxZIMA/react-ga4)

## 📞 Support

For technical support or questions about analytics implementation:
- Check browser console for error messages
- Review network requests in browser dev tools
- Test in incognito mode to verify tracking
- Contact your development team for advanced configuration