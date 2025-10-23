import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicyContent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h4 className="text-2xl font-bold mb-4">{t('privacy.title')}</h4>
      <p className="mb-4">
        {t('privacy.intro')}
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section1.title')}</h5>
      <p className="mb-4">
        {t('privacy.section1.content')}
        <ul className="list-inside list-disc">
          <li>{t('privacy.section1.personalInfo')}</li>
          <li>{t('privacy.section1.usageData')}</li>
          <li>{t('privacy.section1.deviceInfo')}</li>
        </ul>
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section2.title')}</h5>
      <p className="mb-4">
        {t('privacy.section2.content')}
        <ul className="list-inside list-disc">
          <li>{t('privacy.section2.personalizedRecipes')}</li>
          <li>{t('privacy.section2.improveApp')}</li>
          <li>{t('privacy.section2.communicate')}</li>
        </ul>
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section3.title')}</h5>
      <p className="mb-4">
        {t('privacy.section3.content')}
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section4.title')}</h5>
      <p className="mb-4">
        {t('privacy.section4.content')}
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section5.title')}</h5>
      <p className="mb-4">
        {t('privacy.section5.content')} <a href="mailto:eateasyhub@gmail.com" className="text-blue-500">eateasyhub@gmail.com</a>.
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section6.title')}</h5>
      <p className="mb-4">
        {t('privacy.section6.content')}
      </p>

      <h5 className="font-semibold text-black mt-4">{t('privacy.section7.title')}</h5>
      <p>
        {t('privacy.section7.content')} <a href="mailto:eateasyhub@gmail.com" className="text-blue-500">eateasyhub@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicyContent;
