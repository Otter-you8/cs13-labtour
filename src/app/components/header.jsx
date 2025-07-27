import React from "react";

const Myheader = () => {
  return (
    <header className="p-7 flex justify-between items-center bg-black z-20">
      <h1 className="text-2xl text-white font-black tracking-wide">
        CS-13 System Measurement Labolatory
      </h1>
      <nav className="space-x-8 text-xl">
        <a href="#Research" className="hover:text-indigo-400 transition">
          Reaseach
        </a>
        <a href="#about" className="hover:text-indigo-400 transition">
          About
        </a>
        <a href="#contact" className="hover:text-indigo-400 transition">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Myheader;
