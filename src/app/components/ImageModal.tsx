import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdOutlineHighlightOff } from "react-icons/md";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: {
    image?: string;
    title?: string;
    summary?: string;
    description?: string;
  }
}

const ImageModal = ({ isOpen, onClose, data }: ImageModalProps) => {
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
            className="bg-white text-black rounded-xl overflow-hidden max-w-3xl w-4/5 relative"
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
              <h3 className="text-base md:text-2xl font-bold mb-2">{data.summary}</h3>
              <p className="text-gray-700 text-sm md:text-xl">{data.description}</p>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded"
              >
                <MdOutlineHighlightOff className="object-cover hover:scale-95" size={50} color="white" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
