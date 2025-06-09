import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import DeleteAccount from "../pages/DeleteAccount";
import RecipePage from "../pages/RecipePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/home/recipe-details/:lang/:uid/:recipe_name" element={<RecipePage />} />
    </Routes>
  );
};

export default AppRouter;