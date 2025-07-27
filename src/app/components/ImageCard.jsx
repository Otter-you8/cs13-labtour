import React from "react";
import { motion } from "framer-motion";

const ImageCard = ({ image, title, description, onClick }) => {
  return (
    <div
      onClick={() => onClick({ image, title, description })}
      className="cursor-pointer bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default ImageCard;
