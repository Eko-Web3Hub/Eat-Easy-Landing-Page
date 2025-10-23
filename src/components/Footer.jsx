import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row p-10 md:p-20 space-y-10 md:space-y-0">
        <div className="md:w-1/3">
          <h2 className="text-2xl text-white md:text-3xl font-bold mb-10">
            {t('footer.shareRecipe.title')}
          </h2>
          <button className="bg-secondary text-black px-6 py-2 rounded-lg hover:bg-secondary/90">
            {t('footer.shareRecipe.button')}
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 gap-12">
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg mb-4 ml-4">{t('footer.product.title')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigate("#features")}
                  className="text-white hover:text-secondary"
                >
                  {t('footer.product.features')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("#")}
                  className="text-white hover:text-secondary"
                >
                  {t('footer.product.howItWorks')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("#")}
                  className="text-white hover:text-secondary"
                >
                  {t('footer.product.faq')}
                </button>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="font-bold text-lg mb-4">{t('footer.legal.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                to={"/terms-and-conditions"} 
                className="text-white hover:text-secondary">
                {t('footer.legal.terms')}
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacy-policy"} 
                  className="text-white hover:text-secondary"
                >
                  {t('footer.legal.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-10 pb-5 text-center">
        <div className="mb-4">
          <a href="https://x.com/EatEasyApp" className="text-white mx-2 hover:text-secondary">
            {t('footer.social.twitter')}
          </a>
        </div>
        <p className="text-sm mb-2">
          {t('footer.contact.email')}{" "}
          <a href="mailto:eateasyhub@gmail.com" className="text-white hover:text-secondary">
            eateasyhub@gmail.com
          </a>
        </p>
        <p className="text-sm">
          {t('footer.contact.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
