import React from "react";
import { motion } from 'framer-motion'

const Myheader = () => {
    return (
        <div>
            <motion.header
                className="p-8 flex justify-between items-center bg-gray-700"
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1.0 }}>
                <h1 className="text-3xl text-white font-black tracking-wide">CS-13 System Measurement Labolatory</h1>
                <nav className="space-x-8 text-xl">
                    <a href="#features" className="hover:text-indigo-400 transition">Features</a>
                    <a href="#about" className="hover:text-indigo-400 transition">About</a>
                    <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
                </nav>
            </motion.header>.
        </div>
    )
};

export default Myheader;