import React, { useState } from "react";
import TermsContent from "./TermsContent";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import Modal from "./Modal"; // Assuming Modal is in the same folder

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalTitle("");
    setModalContent("");
  };

  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row p-10 md:p-20 space-y-10 md:space-y-0">
        <div className="md:w-1/3">
          <h2 className="text-2xl text-white md:text-3xl font-bold mb-10">
            Have a Great Recipe to Share?
          </h2>
          <button className="bg-secondary text-black px-6 py-2 rounded-lg hover:bg-secondary/90">
            Send Recipe
          </button>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white hover:text-secondary">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-secondary">
                  How does it work?
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-secondary">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-secondary"
                  onClick={() => handleOpenModal("Terms & Conditions", <TermsContent />)}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-secondary"
                  onClick={() => handleOpenModal("Privacy Policy", <PrivacyPolicyContent />)}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 pt-10 pb-5 text-center">
        <div className="mb-4">
          <a href="https://x.com/EatEasyApp" className="text-white mx-2 hover:text-secondary">
            Twitter
          </a>
        </div>
        <p className="text-sm mb-2">
          Email us at:{" "}
          <a href="mailto:eateasyhub@gmail.com" className="text-white hover:text-secondary">
            eateasyhub@gmail.com
          </a>
        </p>
        <p className="text-sm">
          &copy; 2024 Eat'Easy. All rights reserved.
        </p>
      </div>

      {/* Modal for Terms and Privacy */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalTitle}
        content={modalContent}
      />
    </footer>
  );
};

export default Footer;
