import React from "react";
import { useTranslation } from "react-i18next";

const TermsContent = () => {
  const { t } = useTranslation();
  
  return (
    <div className="px-4 py-6 lg:px-10 lg:py-12 text-gray-800">
      <h4 className="text-3xl font-bold mb-6 text-center">{t('terms.title')}</h4>
      <p className="mb-6">
        {t('terms.intro')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section1.title')}</h5>
      <p className="mb-4">
        {t('terms.section1.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section2.title')}</h5>
      <p className="mb-4">
        {t('terms.section2.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section3.title')}</h5>
      <p className="mb-4">
        {t('terms.section3.content')} <a href="mailto:eateasyhub@gmail.com" className="text-blue-500 underline">eateasyhub@gmail.com</a>.
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section4.title')}</h5>
      <p className="mb-4">
        {t('terms.section4.content')}
        <ul className="list-disc pl-6">
          <li>{t('terms.section4.illegal')}</li>
          <li>{t('terms.section4.hacking')}</li>
          <li>{t('terms.section4.disrupting')}</li>
          <li>{t('terms.section4.scraping')}</li>
        </ul>
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section5.title')}</h5>
      <p className="mb-4">
        {t('terms.section5.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section6.title')}</h5>
      <p className="mb-4">
        {t('terms.section6.content')}
        <ul className="list-disc pl-6">
          <li>{t('terms.section6.ownership')}</li>
          <li>{t('terms.section6.noInfringement')}</li>
          <li>{t('terms.section6.compliance')}</li>
        </ul>
        {t('terms.section6.moderation')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section7.title')}</h5>
      <p className="mb-4">
        {t('terms.section7.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section8.title')}</h5>
      <p className="mb-4">
        {t('terms.section8.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section9.title')}</h5>
      <p className="mb-4">
        {t('terms.section9.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section10.title')}</h5>
      <p className="mb-4">
        {t('terms.section10.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section11.title')}</h5>
      <p className="mb-4">
        {t('terms.section11.content')}
        <ul className="list-disc pl-6">
          <li>{t('terms.section11.lossOfData')}</li>
          <li>{t('terms.section11.inaccuracies')}</li>
          <li>{t('terms.section11.interruptions')}</li>
          <li>{t('terms.section11.userActions')}</li>
        </ul>
        {t('terms.section11.asIs')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section12.title')}</h5>
      <p className="mb-4">
        {t('terms.section12.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section13.title')}</h5>
      <p className="mb-4">
        {t('terms.section13.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section14.title')}</h5>
      <p className="mb-4">
        {t('terms.section14.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section15.title')}</h5>
      <p className="mb-4">
        {t('terms.section15.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section16.title')}</h5>
      <p className="mb-4">
        {t('terms.section16.content')}
      </p>

      <h5 className="font-semibold text-lg mt-6 mb-2">{t('terms.section17.title')}</h5>
      <p className="mb-4">
        {t('terms.section17.content')}
      </p>
      <p className="mt-2">
        <a href="mailto:eateasyhub@gmail.com" className="text-blue-500 underline">
          eateasyhub@gmail.com
        </a>
      </p>
      <p className="mt-2">
        {t('terms.section17.lastUpdated')}
      </p>
    </div>
  );
};

export default TermsContent;