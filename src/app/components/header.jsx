import Link from "next/link";
import React from "react";

const Myheader = () => {
  return (
    <header className="p-7 fixed flex w-full h-auto justify-between items-center text-white bg-black border-b-4 border-violet-700">
      <Link href="/" className="text-2xl text-white font-black tracking-wide">
        CS-13 System Measurement Labolatory
      </Link>
      <nav className="hidden md:flex space-x-8 text-xl">
        <Link href="#Room" className="hover:text-indigo-400 transition">
          Room
        </Link>
        <Link href="#Research" className="hover:text-indigo-400 transition">
          Reaseach
        </Link>
        <Link href="#about" className="hover:text-indigo-400 transition">
          About
        </Link>
        <Link href="#contact" className="hover:text-indigo-400 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Myheader;
