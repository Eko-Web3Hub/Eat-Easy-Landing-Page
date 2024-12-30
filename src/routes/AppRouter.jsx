import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
    </Routes>
  );
};

export default AppRouter;
