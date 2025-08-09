import Link from "next/link";
import React from "react";

const Myheader = () => {
  return (
    <header className="p-7 fixed flex w-full h-auto justify-between items-center text-white bg-black border-b-4 border-violet-700">
      <Link
        href="/"
        className="flex text-2xl text-white font-black tracking-wide"
      >
        <span className="hidden md:inline">
          CS-13 System Measurement Labolatory
        </span>
        <span className="md:hidden text-xl">CS-13 Lab</span>
      </Link>
      <nav className="flex space-x-3 text-sm md:space-x-8 md:text-xl">
        <Link href="/" className="hover:text-indigo-400 transition">
          Home
        </Link>
        <Link href="/Room" className="hover:text-indigo-400 transition">
          Room
        </Link>
        <Link href="/#about" className="hover:text-indigo-400 transition">
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
