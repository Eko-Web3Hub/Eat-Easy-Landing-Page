import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const NewsletterBox = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const iframeRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(null);
    setLoading(true);

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setStatus({ type: "error", message: t('newsletter.errorMessage') });
      setLoading(false);
      return;
    }

    // Create a hidden form inside an iframe and submit it
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;

      // Create a form inside the iframe
      const form = iframeDoc.createElement("form");
      form.method = "POST";
      form.action =
        "https://sibforms.com/serve/MUIFANWIeXOAnenG1GeSbQPAX0-Yv4sa0MvieynTLD-4zoVIUz2mwqNhsav17EA4Bpk_sHi4KORQK7UHnSq3Hc8IkWKEtSLi0cV_Z8Ej9ze5FUgwJlH4l4Dfo5AJd0MrR90pSLYYmaBmSXTSzDUf3sGCty7rZsaYh-lwCfnbc3dqDktlB_vt4WZU4FxizaUciOBHEC-I1KLeH4EG";

      // Create the email input field inside the iframe
      const emailInput = iframeDoc.createElement("input");
      emailInput.type = "hidden";
      emailInput.name = "EMAIL";
      emailInput.value = email;
      form.appendChild(emailInput);

      // Append and submit the form inside the iframe
      iframeDoc.body.appendChild(form);
      form.submit();

      // Assume success if form submission is initiated
      setTimeout(() => {
        setStatus({ type: "success", message: t('newsletter.successMessage') });
        setEmail("");
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row relative bg-secondary/10 p-8 md:p-10 overflow-hidden rounded-xl md:rounded-[80px] space-y-8 md:space-y-0 md:space-x-[85px]">
      {/* Image Section */}
      <div className="flex-shrink-0 mx-auto md:mx-0 w-full md:w-auto">
        <img
          src="/newsletterBox/Shrimp.png"
          alt="shrimp recipe"
          className="w-full max-w-xs md:max-w-none object-contain"
        />
      </div>

      {/* Text and Form Section */}
      <div className="flex flex-col space-y-6 md:space-y-10 flex-grow text-center md:items-center md:justify-center md:text-left">
        <h2 className="text-lg md:text-3xl md:text-center font-bold">
          {t('newsletter.title')}
        </h2>

        {/* Subscription Form */}
        <form onSubmit={handleSubmit} className="relative bg-white border border-secondary/50 rounded-xl flex items-center w-full">
          <input
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="bg-white p-3 pl-10 rounded-xl focus:outline-none w-full text-sm md:text-base"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`absolute right-1 px-4 md:px-10 py-2 text-white bg-primary rounded-xl transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? t('newsletter.submitting') : t('newsletter.submit')}
          </button>
        </form>

        {/* Success & Error Messages */}
        {status && (
          <div
            className={`text-sm p-3 mt-2 rounded-lg ${
              status.type === "success" ? "bg-green-100 text-green-700 border border-green-500" : "bg-red-100 text-red-700 border border-red-500"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>

      {/* Hidden Iframe for Background Submission */}
      <iframe ref={iframeRef} style={{ display: "none" }} title="hidden-submission"></iframe>

      {/* "DELICIOUS" Text Background */}
      <div className="absolute -bottom-6 md:-bottom-20 md:right-0 font-extrabold text-6xl md:text-[200px] text-stroke text-center"
        style={{ userSelect: "none" }} // Prevent text selection
      >
        {t('newsletter.backgroundText')}
      </div>
    </div>
  );
};

export default NewsletterBox;
