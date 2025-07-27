import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ImageModal = ({ isOpen, onClose, data }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-900 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black rounded-xl overflow-hidden max-w-3xl w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-4xl font-bold mb-2">{data.title}</h3>
              <p className="text-gray-700 text-xl">{data.description}</p>
              <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 hover:scale-95"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
