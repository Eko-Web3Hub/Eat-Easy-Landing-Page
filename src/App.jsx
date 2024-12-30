import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Footer } from "./components";
import AppRouter from "./routes/AppRouter";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="w-screen max-w-full overflow-hidden">
          {/* Navbar section */}
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-6">
            <Navbar />
          </div>

          {/* Main content managed by AppRouter */}
          <AppRouter />

          {/* Footer section */}
          <div className="bg-darkest w-full">
            <Footer />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
