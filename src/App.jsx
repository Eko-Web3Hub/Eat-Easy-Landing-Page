import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "react-cookie-consent";
import { Navbar, Footer } from "./components";
import AppRouter from "./routes/AppRouter";
import { LanguageProvider } from "./context/LanguageContext";
import analytics from "./utils/analytics";

// Component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    analytics.trackPageView(location.pathname, document.title);
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    // Initialize analytics on app start
    analytics.initialize();
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <PageTracker />
        <div className="bg-body w-screen max-w-full overflow-hidden">
          {/* Navbar section */}
          <div className="bg-navbar px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-6">
            <Navbar />
          </div>

          {/* Main content managed by AppRouter */}
          <AppRouter />

          {/* Footer section */}
          <div className="bg-darkest w-full">
            <Footer />
          </div>

          {/* Cookie Consent Banner */}
          <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            cookieName="eat-easy-cookie-consent"
            style={{
              background: "#2B373B",
              fontSize: "14px",
              fontFamily: "inherit",
            }}
            buttonStyle={{
              color: "#ffffff",
              background: "#10B981",
              fontSize: "14px",
              borderRadius: "8px",
              padding: "8px 16px",
            }}
            declineButtonStyle={{
              color: "#ffffff",
              background: "#6B7280",
              fontSize: "14px",
              borderRadius: "8px",
              padding: "8px 16px",
              marginLeft: "10px",
            }}
            expires={365}
            onAccept={() => {
              analytics.trackEvent('cookie_consent_accepted', 'Privacy');
            }}
            onDecline={() => {
              analytics.trackEvent('cookie_consent_declined', 'Privacy');
            }}
          >
            We use cookies to improve your experience and analyze site traffic. 
            By continuing to use our site, you consent to our use of cookies.{" "}
            <span style={{ fontSize: "12px" }}>
              <a href="/privacy-policy" style={{ color: "#60A5FA" }}>
                Learn more
              </a>
            </span>
          </CookieConsent>
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </Router>
    </LanguageProvider>
  );
};

export default App;
