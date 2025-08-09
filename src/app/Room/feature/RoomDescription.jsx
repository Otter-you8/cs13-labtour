"use client";
import React from "react";
import { motion } from "framer-motion";

const RoomDescription = ({ title, description, image, reverse }) => {
  return (
    <motion.div
      className="w-full pb-20 px-6 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.0 }}
    >
      {reverse ? (
        <div className="flex flex-col md:flex-row md:gap-x-15 md:items-center">
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center space-y-5 my-5">
            <h2 className="text-white font-bold text-4xl">{title}</h2>
            <p className="text-white text-xl text-start whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row-reverse md:gap-x-15 md:items-center ">
          <div className="md:w-1/2">
            <img
              src={image}
              alt={title}
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center space-y-5 my-5">
            <h2 className="text-white font-bold text-4xl">{title}</h2>
            <p className="text-white text-xl text-start whitespace-pre-line">
              {description}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default RoomDescription;
