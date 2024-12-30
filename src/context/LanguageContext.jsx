import React, { createContext, useContext, useState } from "react";

// Create Language Context
const LanguageContext = createContext();

// Provide Language Context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
