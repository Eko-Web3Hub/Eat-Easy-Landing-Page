import React from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-11/12 md:w-1/2 max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {/* Modal Content Wrapper */}
        <div className="overflow-y-auto max-h-[60vh]">
          {content}
        </div>
        <button
          className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
