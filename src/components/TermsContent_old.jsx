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

    <h5 className="font-semibold text-lg mt-6 mb-2">1. Introduction</h5>
    <p className="mb-4">
      These Terms govern your use of the EatEasy app, its features, and services, including but not limited to recipe generation, inventory management, ticket scanning, and community features. By downloading, accessing, or using the Service, you acknowledge that you have read, understood, and agreed to comply with these Terms. EatEasy reserves the right to modify these Terms at any time, and such changes will be effective upon posting. Your continued use of the Service after changes constitutes acceptance of the updated Terms.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">2. Eligibility</h5>
    <p className="mb-4">
      The Service is intended for users who are at least 13 years of age. If you are under 18, you may only use the Service with the consent and supervision of a parent or legal guardian. By using the Service, you confirm that you meet these eligibility requirements and that any information you provide (e.g., age, location) is accurate.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">3. Account Registration and Security</h5>
    <p className="mb-4">
      To access certain features of the Service (e.g., saving recipes, generating shopping lists, or participating in community challenges), you may need to create an account. You agree to provide accurate and complete information during registration and to keep your account credentials secure. You are responsible for all activities that occur under your account. If you suspect unauthorized access, you must notify us immediately at <a href="mailto:eateasyhub@gmail.com" className="text-blue-500 underline">eateasyhub@gmail.com</a>.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">4. Use of the Service</h5>
    <p className="mb-4">
      You agree to use the Service for personal, non-commercial purposes only, unless otherwise agreed in writing by EatEasy. Prohibited activities include, but are not limited to:
      <ul className="list-disc pl-6">
        <li>Using the Service for illegal or unauthorized purposes.</li>
        <li>Attempting to access restricted areas, reverse-engineer, or hack the Service.</li>
        <li>Disrupting the Service’s functionality or harming other users (e.g., uploading malicious content).</li>
        <li>Scraping or harvesting data from the Service without permission.</li>
      </ul>
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">5. Content Ownership and Intellectual Property</h5>
    <p className="mb-4">
      All content provided through the Service, including but not limited to text, images, logos, recipes, software, and design elements, is the exclusive property of EatEasy or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or create derivative works from this content without prior written consent from EatEasy. You are granted a limited, non-exclusive, non-transferable license to use the Service for personal purposes, subject to these Terms.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">6. User-Generated Content</h5>
    <p className="mb-4">
      You may submit or share content through the Service, such as recipes, reviews, feedback, or community posts ("User Content"). By submitting User Content, you grant EatEasy a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and sublicensable license to use, reproduce, modify, adapt, publish, distribute, and display such content in connection with the Service, including for promotional purposes. You represent and warrant that:
      <ul className="list-disc pl-6">
        <li>You own or have the necessary rights to share the User Content.</li>
        <li>Your User Content does not infringe on the rights of others (e.g., copyright, privacy).</li>
        <li>Your User Content complies with applicable laws and these Terms.</li>
      </ul>
      EatEasy reserves the right to remove or moderate User Content that violates these Terms or is deemed inappropriate.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">7. Community Features and Gamification</h5>
    <p className="mb-4">
      The Service includes community features such as recipe sharing, challenges, leaderboards, and voting. You agree to engage respectfully with other users and to refrain from posting offensive, defamatory, or harmful content. EatEasy is not responsible for the accuracy or quality of user interactions within these features but may intervene to ensure a safe and positive environment.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">8. Privacy and Data Collection</h5>
    <p className="mb-4">
      Your privacy is important to us. By using the Service, you agree to our Privacy Policy, which details how we collect, use, store, and protect your personal information, including data from ticket scans, ingredient lists, and user interactions. You can review the full Privacy Policy within the app or on our website. You also consent to the use of cookies and similar technologies to enhance your experience.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">9. Third-Party Integrations and Links</h5>
    <p className="mb-4">
      The Service may integrate with third-party services (e.g., payment processors, delivery apps) or contain links to external websites. EatEasy is not responsible for the content, privacy practices, or availability of these third-party services. Your use of such services is at your own risk and subject to their respective terms and policies.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">10. Subscription and Payment (If Applicable)</h5>
    <p className="mb-4">
      Certain features of the Service may require a subscription or payment (e.g., premium recipe access, advanced analytics). All fees are non-refundable unless otherwise stated. You agree to provide accurate payment information and authorize EatEasy to charge the applicable fees. Subscriptions may auto-renew unless canceled before the renewal date. EatEasy reserves the right to modify pricing with prior notice.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">11. Limitation of Liability</h5>
    <p className="mb-4">
      To the maximum extent permitted by law, EatEasy and its affiliates, officers, employees, or agents shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Service, including but not limited to:
      <ul className="list-disc pl-6">
        <li>Loss of data, revenue, or goodwill.</li>
        <li>Inaccuracies in recipes or nutritional information.</li>
        <li>Service interruptions or technical issues.</li>
        <li>Actions or content of other users.</li>
      </ul>
      The Service is provided on an "as-is" and "as-available" basis, and EatEasy does not guarantee that it will be error-free or uninterrupted.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">12. Indemnification</h5>
    <p className="mb-4">
      You agree to indemnify and hold harmless EatEasy and its affiliates, officers, employees, and agents from any claims, liabilities, damages, or expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">13. Updates and Modifications</h5>
    <p className="mb-4">
      EatEasy may update, modify, or discontinue the Service or its features at any time without prior notice. We may also update these Terms periodically, and the updated Terms will be posted within the app or on our website. Your continued use of the Service after such updates constitutes acceptance of the revised Terms.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">14. Termination</h5>
    <p className="mb-4">
      EatEasy reserves the right to suspend or terminate your access to the Service at its sole discretion, with or without notice, if you violate these Terms, engage in prohibited activities, or for any other reason deemed necessary to protect the Service or its users. Upon termination, your right to use the Service will cease, and any data associated with your account may be deleted, subject to applicable laws.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">15. Governing Law and Dispute Resolution</h5>
    <p className="mb-4">
      These Terms are governed by the laws of France, given EatEasy’s operations in France and Bénin. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Paris, France. For users in Bénin, disputes may also be resolved through mediation or arbitration in Cotonou, as per local regulations, if applicable.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">16. Force Majeure</h5>
    <p className="mb-4">
      EatEasy shall not be liable for any failure to perform its obligations under these Terms due to events beyond its reasonable control, including but not limited to natural disasters, pandemics, government actions, or internet outages.
    </p>

    <h5 className="font-semibold text-lg mt-6 mb-2">17. Contact Us</h5>
    <p className="mb-4">
      If you have any questions, concerns, or feedback regarding these Terms, please contact us at:
    </p>
    <p className="mt-2">
      <a href="mailto:eateasyhub@gmail.com" className="text-blue-500 underline">
        eateasyhub@gmail.com
      </a>
    </p>
    <p className="mt-2">
      Last updated: March 20, 2025
    </p>
  </div>
);

export default TermsContent;