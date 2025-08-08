"use client";
import React, { use } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[url('/opticsmain.jpg')] bg-cover h-100 flex items-center justify-center">
      <motion.div
        className=" border-white bg-black/70 border-4 text-center px-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold my-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          Welcome to our virtual lab tour!
        </motion.h2>
        <motion.p
          className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.0 }}
        >
          CS13 システム計測研究室 バーチャルラボツアーへようこそ！
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
