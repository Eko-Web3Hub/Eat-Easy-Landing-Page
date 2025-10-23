import React, { createContext, useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Create Language Context
const LanguageContext = createContext();

// Provide Language Context
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("fr");

  // Update i18n language when language state changes
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  // Update language state when i18n language changes
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook to use Language Context
export const useLanguage = () => useContext(LanguageContext);
